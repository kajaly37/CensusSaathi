import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { KNOWLEDGE_BASE_MULTILINGUAL, queryAiAssistant } from '../src/data/aiKnowledgeEngine.ts';
import type { SupportedLangCode } from '../src/data/aiKnowledgeEngine.ts';
import { STATES_SCHEDULE_DATA } from '../src/data/states.ts';
import { OFFICIAL_SOURCES } from '../src/data/sources.ts';

// Load environment variables exclusively on the server side
dotenv.config();

export interface GenAiRequest {
  message: string;
  language: string; // e.g. 'en', 'hi', 'mr', 'EN', 'HI', etc.
  context?: Array<{
    sender?: 'user' | 'assistant';
    role?: 'user' | 'assistant';
    text?: string;
    content?: string;
  }>;
  conversationHistory?: Array<{
    sender: 'user' | 'assistant';
    text: string;
  }>;
}

export interface GenAiResponse {
  answer: string;
  confidence: 'verified' | 'partially_verified' | 'unable_to_verify';
  sourceId: string;
  sources: Array<{
    id: string;
    name: string;
    shortName: string;
    url?: string;
  }>;
  isSubjectToNotification: boolean;
  category: string;
  isGenAiGrounded: boolean;
  serverEnvConfigured: boolean;
}

const SENSITIVE_KEYWORDS = [
  'password', 'passwords', 'otp', 'otps', 'pin', 'pins', 'cvv', 'credit card', 
  'debit card', 'bank account', 'netbanking', 'passcode', 'atm pin', 'upi pin',
  'पासवर्ड', 'ओटीपी', 'पिन', 'पासकोड', 'खाता संख्या', 'सीवीवी'
];

/**
 * Checks if query asks for or contains sensitive security credentials
 */
export function containsSensitiveRequest(text: string): boolean {
  const lower = text.toLowerCase();
  return SENSITIVE_KEYWORDS.some(kw => lower.includes(kw));
}

/**
 * Normalize language code to supported uppercase code
 */
export function normalizeLanguageCode(lang: string): SupportedLangCode {
  if (!lang) return 'EN';
  const clean = lang.trim().toUpperCase();
  const validCodes: SupportedLangCode[] = ['EN', 'HI', 'MR', 'BN', 'TA', 'TE', 'GU', 'KN', 'ML', 'PA', 'OR'];
  
  if (validCodes.includes(clean as SupportedLangCode)) {
    return clean as SupportedLangCode;
  }

  const nameMap: Record<string, SupportedLangCode> = {
    'ENGLISH': 'EN',
    'HINDI': 'HI',
    'MARATHI': 'MR',
    'BENGALI': 'BN',
    'TAMIL': 'TA',
    'TELUGU': 'TE',
    'GUJARATI': 'GU',
    'KANNADA': 'KN',
    'MALAYALAM': 'ML',
    'PUNJABI': 'PA',
    'ODIA': 'OR'
  };

  return nameMap[clean] || 'EN';
}

/**
 * Build concise verified grounding context for the model based on question topics
 */
export function buildGroundingContext(query: string, langCode: SupportedLangCode): { contextText: string; detectedSourceId: string } {
  const langKnowledge = KNOWLEDGE_BASE_MULTILINGUAL[langCode] || KNOWLEDGE_BASE_MULTILINGUAL.EN;
  const enKnowledge = KNOWLEDGE_BASE_MULTILINGUAL.EN;

  const chunks: string[] = [];
  let sourceId = 'ORGI';

  // Include core factual knowledge
  chunks.push(`[OVERVIEW OF CENSUS 2027]:\n${enKnowledge.overview}\n(Native Reference: ${langKnowledge.overview})`);
  chunks.push(`[TWO PHASES]:\n${enKnowledge.phases}\n(Native Reference: ${langKnowledge.phases})`);
  chunks.push(`[DIGITAL SELF-ENUMERATION]:\n${enKnowledge.self_enumeration}\n(Native Reference: ${langKnowledge.self_enumeration})`);
  chunks.push(`[STATUTORY PRIVACY & SECTION 15 CONFIDENTIALITY]:\n${enKnowledge.confidentiality}\n(Native Reference: ${langKnowledge.confidentiality})`);
  chunks.push(`[AADHAAR & BIOMETRICS CLARIFICATION]:\n${enKnowledge.aadhaar_clarification}\n(Native Reference: ${langKnowledge.aadhaar_clarification})`);
  chunks.push(`[WHY CENSUS IS CONDUCTED]:\n${enKnowledge.why_census}\n(Native Reference: ${langKnowledge.why_census})`);
  chunks.push(`[SECURITY ADVISORY]:\n${enKnowledge.security_advisory}\n(Native Reference: ${langKnowledge.security_advisory})`);

  // Check for state-specific schedule inquiries
  const lowerQuery = query.toLowerCase();
  for (const [stateName, data] of Object.entries(STATES_SCHEDULE_DATA)) {
    if (lowerQuery.includes(stateName.toLowerCase()) || lowerQuery.includes(data.code.toLowerCase())) {
      chunks.push(`[STATE SCHEDULE FOR ${stateName.toUpperCase()}]:\n- Status: ${data.officialNotificationStatus}\n- Houselisting: ${data.houselistingStatus} (Expected: ${data.expectedHouselistingWindow})\n- Population Enumeration: ${data.populationEnumerationStatus} (Expected: ${data.expectedPopEnumWindow})\n- Self-Enumeration: ${data.selfEnumerationStatus} (Expected: ${data.expectedSelfEnumWindow})\n- Directorate: ${data.regionalDirectorate}\n- Regional Notes: ${data.regionalNotes}`);
      sourceId = data.sourceId || 'ORGI';
      break;
    }
  }

  // Check for statutory legal queries
  if (lowerQuery.includes('section 15') || lowerQuery.includes('act') || lowerQuery.includes('court') || lowerQuery.includes('confidential')) {
    sourceId = 'CENSUS_ACT_1948';
  }

  // Check for progress / completion queries
  if (lowerQuery.includes('progress') || lowerQuery.includes('completed') || lowerQuery.includes('done') || lowerQuery.includes('work') || lowerQuery.includes('status') || lowerQuery.includes('pune') || lowerQuery.includes('district')) {
    chunks.push(`[CENSUS FIELDWORK PROGRESS STATUS]:
Official live progress data (such as percentage completion, households enumerated, and active enumerators) is NOT currently published by ORGI for any State, Union Territory, or District. CensusSaathi strictly reports that official live progress data is currently unavailable and does not invent or simulate progress figures.`);
  }

  return {
    contextText: chunks.join('\n\n---\n\n'),
    detectedSourceId: sourceId
  };
}

/**
 * Server-Side Environment Reader
 * Securely reads OPENAI_API_KEY exclusively on the server.
 */
export function getServerOpenAiConfig(): { apiKeyConfigured: boolean; model: string; apiKey?: string } {
  const apiKey = process.env.OPENAI_API_KEY;
  const isConfigured = Boolean(apiKey && apiKey.trim().length > 10 && !apiKey.includes('your_openai_api_key'));
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  return { apiKeyConfigured: isConfigured, model, apiKey };
}

/**
 * Primary Grounded GenAI Assistant Handler
 * Uses OpenAI with verified knowledge context when API key is configured.
 */
export async function processGenAiAssistantQuery(req: GenAiRequest): Promise<GenAiResponse> {
  const userQuery = (req.message || '').trim();
  const langCode = normalizeLanguageCode(req.language);
  const { apiKeyConfigured, model, apiKey } = getServerOpenAiConfig();

  // 1. Security Guardrail Check (Passwords, OTPs, PINs, Banking Details)
  if (containsSensitiveRequest(userQuery)) {
    const secResponse = KNOWLEDGE_BASE_MULTILINGUAL[langCode]?.security_advisory || KNOWLEDGE_BASE_MULTILINGUAL.EN.security_advisory;
    return {
      answer: secResponse,
      confidence: 'verified',
      sourceId: 'ORGI',
      sources: [
        {
          id: 'ORGI',
          name: OFFICIAL_SOURCES.ORGI.name,
          shortName: OFFICIAL_SOURCES.ORGI.shortName,
          url: OFFICIAL_SOURCES.ORGI.url
        }
      ],
      isSubjectToNotification: false,
      category: 'security',
      isGenAiGrounded: false,
      serverEnvConfigured: apiKeyConfigured
    };
  }

  // 2. Real OpenAI GenAI Call if API key is present
  if (apiKeyConfigured && apiKey) {
    try {
      const openai = new OpenAI({ apiKey });
      const { contextText, detectedSourceId } = buildGroundingContext(userQuery, langCode);

      const systemPrompt = `You are CensusSaathi AI, a grounded, trustworthy citizen information and guidance assistant for India's upcoming Census 2027.
You are NOT an official Government of India service, and you must never claim to be official.
Your goal is to answer citizen questions clearly and accurately using the verified CensusSaathi knowledge context below.

CRITICAL GROUNDING RULES:
1. Prefer the provided verified knowledge context.
2. Never invent Census dates, statistics, procedures, eligibility requirements, or official notifications.
3. If an operational date is not explicitly finalized, clearly state that it is "Subject to Official Gazette Notification".
4. Clarify that CensusSaathi is an independent citizen information platform and does not collect or submit official Census responses.
5. Clarify that Aadhaar numbers and biometrics are NOT collected or mandated for the Census.
6. If the user's question cannot be answered from the provided knowledge, state clearly: "Unable to verify this information from available CensusSaathi sources. Please check the official Census portal at censusindia.gov.in." (in the target language).
7. Target Language: "${langCode}". Provide the full response in the language corresponding to code "${langCode}".
8. Keep official names and the official URL (https://censusindia.gov.in/) identifiable.
9. LOCATION & PROGRESS RULES: If asked about live Census progress, completion percentages, or enumerator numbers for any city, district, or state (e.g. Pune):
State clearly: "Official progress data for [Location] is currently unavailable through CensusSaathi. Live fieldwork progress has not been publicly released by the Office of the Registrar General & Census Commissioner, India (ORGI). Census operations and notification dates remain subject to official gazette notification at censusindia.gov.in."
NEVER fabricate or guess percentage progress (such as 82%) or enumerator numbers. If mentioning 2011 figures, label them strictly as "HISTORICAL CENSUS DATA (2011 Census)".

You MUST respond strictly in valid JSON with this format:
{
  "answer": "Grounded answer in the requested language",
  "confidence": "verified" | "partially_verified" | "unable_to_verify",
  "sourceId": "ORGI" | "CENSUS_ACT_1948" | "CENSUS_RULES_1990" | "MHA_ANNUAL_REPORT" | "HISTORICAL_CENSUS_ARCHIVES",
  "isSubjectToNotification": boolean
}`;

      const history = req.context || req.conversationHistory || [];
      const messages: Array<OpenAI.Chat.Completions.ChatCompletionMessageParam> = [
        { role: 'system', content: systemPrompt },
        { role: 'system', content: `=== VERIFIED CENSUS KNOWLEDGE CONTEXT ===\n\n${contextText}` }
      ];

      // Add recent history turns
      if (Array.isArray(history) && history.length > 0) {
        const recent = history.slice(-4);
        for (const item of recent) {
          const h = item as { sender?: string; role?: string; text?: string; content?: string };
          const role = (h.sender === 'user' || h.role === 'user') ? 'user' : 'assistant';
          const text = h.text || h.content || '';
          if (text) {
            messages.push({ role, content: text });
          }
        }
      }

      messages.push({ role: 'user', content: userQuery });

      const completion = await openai.chat.completions.create({
        model: model,
        messages,
        response_format: { type: 'json_object' },
        temperature: 0.2,
        max_tokens: 800
      });

      const responseText = completion.choices[0]?.message?.content;
      if (responseText) {
        const parsed = JSON.parse(responseText);
        const activeSourceId = parsed.sourceId && OFFICIAL_SOURCES[parsed.sourceId] ? parsed.sourceId : detectedSourceId;
        const sourceObj = OFFICIAL_SOURCES[activeSourceId] || OFFICIAL_SOURCES.ORGI;

        return {
          answer: parsed.answer || 'Information is subject to official gazette notification at censusindia.gov.in.',
          confidence: parsed.confidence || 'verified',
          sourceId: activeSourceId,
          sources: [
            {
              id: sourceObj.id,
              name: sourceObj.name,
              shortName: sourceObj.shortName,
              url: sourceObj.url
            }
          ],
          isSubjectToNotification: Boolean(parsed.isSubjectToNotification),
          category: 'genai_grounded',
          isGenAiGrounded: true,
          serverEnvConfigured: true
        };
      }
    } catch (err) {
      console.warn('OpenAI API call failed or timed out. Falling back to verified knowledge engine:', err);
    }
  }

  // 3. Verified Knowledge Fallback (Clean & Grounded)
  const groundedResult = queryAiAssistant(userQuery, langCode);
  const sourceObj = OFFICIAL_SOURCES[groundedResult.sourceId] || OFFICIAL_SOURCES.ORGI;

  return {
    answer: groundedResult.answer,
    confidence: 'verified',
    sourceId: groundedResult.sourceId,
    sources: [
      {
        id: sourceObj.id,
        name: sourceObj.name,
        shortName: sourceObj.shortName,
        url: sourceObj.url
      }
    ],
    isSubjectToNotification: Boolean(groundedResult.isSubjectToNotification),
    category: groundedResult.category,
    isGenAiGrounded: false,
    serverEnvConfigured: apiKeyConfigured
  };
}
