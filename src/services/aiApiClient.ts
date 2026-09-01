import { queryAiAssistant } from '../data/aiKnowledgeEngine.ts';
import { OFFICIAL_SOURCES } from '../data/sources.ts';

export interface AiClientResponse {
  answer: string;
  confidence: 'verified' | 'partially_verified' | 'unable_to_verify';
  sourceId: string;
  sources?: Array<{
    id: string;
    name: string;
    shortName: string;
    url?: string;
  }>;
  isSubjectToNotification?: boolean;
  category?: string;
  isGenAiGrounded?: boolean;
  serverEnvConfigured?: boolean;
}

export interface ConversationTurn {
  sender: 'user' | 'assistant';
  text: string;
}

/**
 * Sends question to the secure server-side /api/ask endpoint,
 * with graceful client-side fallback if server is unreachable.
 */
export async function sendAssistantMessage(
  message: string,
  language: string,
  context: ConversationTurn[] = []
): Promise<AiClientResponse> {
  const cleanMessage = message.trim();
  if (!cleanMessage) {
    return {
      answer: 'Please enter a question about India\'s Census 2027.',
      confidence: 'verified',
      sourceId: 'ORGI',
      isSubjectToNotification: false,
      isGenAiGrounded: false
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 18000);

    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: cleanMessage,
        language,
        context: context.slice(-4)
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    const data: AiClientResponse = await response.json();
    return data;
  } catch (error) {
    console.warn('Backend endpoint unavailable or offline. Using grounded local knowledge engine fallback:', error);
    
    // Client-side grounded fallback using verified data layer
    const fallback = queryAiAssistant(cleanMessage, language);
    const sourceObj = OFFICIAL_SOURCES[fallback.sourceId] || OFFICIAL_SOURCES.ORGI;

    return {
      answer: fallback.answer,
      confidence: 'verified',
      sourceId: fallback.sourceId,
      sources: [
        {
          id: sourceObj.id,
          name: sourceObj.name,
          shortName: sourceObj.shortName,
          url: sourceObj.url
        }
      ],
      isSubjectToNotification: Boolean(fallback.isSubjectToNotification),
      category: fallback.category,
      isGenAiGrounded: false
    };
  }
}
