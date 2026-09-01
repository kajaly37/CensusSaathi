import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  User, 
  ShieldCheck, 
  RefreshCcw,
  Copy,
  Check
} from 'lucide-react';
import { QUICK_SAATHI_FAQS } from '../data/censusData';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sourceNote?: string;
}

interface AiCensusAssistantProps {
  currentLang: LanguageCode;
}

export const AiCensusAssistant: React.FC<AiCensusAssistantProps> = ({ currentLang }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: "Namaste! I am Saathi AI, your intelligent companion for Census 2027. You can ask me anything about the Census phases, self-enumeration, documents, rental rules, or privacy safeguards.",
      timestamp: 'Just now',
      sourceNote: "Grounded in Census Act 1948 & ORGI Directives"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[currentLang];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Comprehensive Smart Rule Engine for Saathi AI
  const generateAiResponse = (query: string): { reply: string; source: string } => {
    const q = query.toLowerCase();

    if (q.includes('document') || q.includes('certificate') || q.includes('paper') || q.includes('proof') || q.includes('दस्तावेज') || q.includes('कागदपत्र')) {
      return {
        reply: "You do NOT need to show or submit any physical proof documents (such as birth certificates, passport, or property deeds) during Census 2027. Census enumeration is based entirely on verbal declaration and canvassing. Simply keep basic family details (dates of birth, educational qualifications) handy.",
        source: "Census Rules 1990 & ORGI Field Manual"
      };
    }

    if (q.includes('bank') || q.includes('otp') || q.includes('money') || q.includes('upi') || q.includes('account') || q.includes('पैसा') || q.includes('खाता')) {
      return {
        reply: "CRITICAL SAFETY RULE: Official Census enumerators will NEVER ask for bank account details, credit card numbers, UPI PINs, or SMS OTPs. Anyone asking for financial information or passwords in the name of Census is committing a cyber fraud. Please report such incidents to cybercrime.gov.in or helpline 1930 immediately.",
        source: "ORGI Security Circular & Ministry of Home Affairs"
      };
    }

    if (q.includes('rent') || q.includes('tenant') || q.includes('landlord') || q.includes('किराया') || q.includes('भाडे')) {
      return {
        reply: "If you live in a rented accommodation, you will be counted at the location where you currently reside as an independent household. In Phase 1, under house ownership, simply select 'Rented'. Enumeration has ZERO legal effect on landlord-tenant agreements, tenancy rights, or property ownership.",
        source: "ORGI Household Enumeration Guidelines"
      };
    }

    if (q.includes('privacy') || q.includes('safe') || q.includes('confidential') || q.includes('secret') || q.includes('tax') || q.includes('police') || q.includes('court') || q.includes('गोपनीयता')) {
      return {
        reply: "Your data is 100% confidential by law under Section 15 of the Census Act 1948. Individual Census records are legally protected: they CANNOT be accessed by the Income Tax Department, Police, Courts, or any intelligence agency, and cannot be produced as evidence against you in any legal proceeding.",
        source: "Section 15, The Census Act 1948"
      };
    }

    if (q.includes('self-enumeration') || q.includes('online') || q.includes('app') || q.includes('portal') || q.includes('phone') || q.includes('mobile') || q.includes('स्व-गणना')) {
      return {
        reply: "Digital Self-Enumeration allows you to fill out your household schedule online using the official Census App or Web Portal during your State's designated window. Once completed, you receive an encrypted Reference Token on SMS. When the field enumerator visits, just show the token to complete verification in under 1 minute.",
        source: "ORGI Digital Census 2027 Portal Architecture"
      };
    }

    if (q.includes('phase') || q.includes('stages') || q.includes('चरण') || q.includes('टप्पा')) {
      return {
        reply: "Census 2027 is conducted in 2 structured phases:\n1. Phase 1 (Houselisting & Housing Census): Focuses on building structures, drinking water, sanitation, kitchen fuel, and electronic assets (31 questions).\n2. Phase 2 (Population Enumeration): Counts every individual resident and records age, gender, education, languages known, occupation, and migration (29 questions).",
        source: "Census Operations Framework 2027"
      };
    }

    if (q.includes('nrc') || q.includes('citizenship') || q.includes('caa') || q.includes('नागरिकता')) {
      return {
        reply: "The decennial Census is a statutory count of all residents living in India conducted under the Census Act 1948. It is solely designed for socio-economic planning, infrastructure funding, and demographic analysis.",
        source: "Census of India Statutory Mandate"
      };
    }

    if (q.includes('baby') || q.includes('born') || q.includes('death') || q.includes('elderly') || q.includes('बच्चा') || q.includes('जन्म')) {
      return {
        reply: "All individuals alive in the household at 00:00 hours on the Census Reference Date are counted. A special 5-day revision round takes place at the end of Phase 2 to account for any new births or deaths occurring in the household during the enumeration period.",
        source: "ORGI Population Reference Protocol"
      };
    }

    if (q.includes('language') || q.includes('mother tongue') || q.includes('भाषा')) {
      return {
        reply: "In Phase 2, you can declare your primary Mother Tongue (the language spoken in childhood in the household) and up to TWO other languages that you speak or understand fluently. This helps preserve linguistic heritage and formulate education policies.",
        source: "Language Division, ORGI"
      };
    }

    // Default intelligent guidance
    return {
      reply: `Regarding "${query}": Census 2027 is India's first digital decennial count. Participation is a vital civic duty that directly determines funding for your local hospitals, drinking water schemes, electricity grids, and schools. All answers are confidential under Section 15 of the Census Act 1948.`,
      source: "CensusSaathi AI Verified Civic Knowledge Base"
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate AI thinking and reply
    setTimeout(() => {
      const { reply, source } = generateAiResponse(text);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sourceNote: source
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 400);
  };

  // Speech Recognition (Web Speech API)
  const toggleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please type your query.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'mr' ? 'mr-IN' : 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      handleSendMessage(transcript);
    };

    recognition.start();
  };

  // Speech Synthesis (Text-to-Speech)
  const handleSpeakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'mr' ? 'mr-IN' : 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="saathi-ai" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>{t.assistant.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.assistant.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.assistant.subtitle}
          </p>
        </div>

        {/* Chat Widget Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-gov overflow-hidden flex flex-col h-[600px]">
          
          {/* Chat Header Bar */}
          <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ashoka-600/30 border border-ashoka-400/50 flex items-center justify-center text-saffron-400">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base">Saathi AI Citizen Companion</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Multilingual Civic Intelligence • Powered by Census Act 1948 Knowledge
                </p>
              </div>
            </div>

            <button
              onClick={() => setMessages([messages[0]])}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
              title="Reset Conversation"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Chat Messages Feed */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-2xl ${isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs ${
                    isAi ? 'bg-ashoka-700 text-white shadow-xs' : 'bg-saffron-600 text-white'
                  }`}>
                    {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  <div className="space-y-1.5">
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                      isAi 
                        ? 'bg-white text-slate-800 border border-slate-200 rounded-tl-none' 
                        : 'bg-ashoka-700 text-white rounded-tr-none'
                    }`}>
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {msg.sourceNote && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                          <span className="flex items-center gap-1 font-medium text-ashoka-700">
                            <ShieldCheck className="w-3 h-3" />
                            <span>{msg.sourceNote}</span>
                          </span>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleSpeakText(msg.text)}
                              className="text-slate-400 hover:text-ashoka-700 flex items-center gap-1"
                              title="Read Aloud"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </button>
                            <button
                              onClick={() => handleCopy(msg.id, msg.text)}
                              className="text-slate-400 hover:text-ashoka-700 flex items-center gap-1"
                              title="Copy Answer"
                            >
                              {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`text-[10px] text-slate-400 px-1 ${isAi ? 'text-left' : 'text-right'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-4 py-2.5 bg-white border-t border-slate-200 overflow-x-auto flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
              Quick:
            </span>
            {QUICK_SAATHI_FAQS.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(faq.q)}
                className="px-3 py-1 rounded-full bg-slate-100 hover:bg-ashoka-50 hover:text-ashoka-800 border border-slate-200 text-xs font-medium text-slate-700 whitespace-nowrap transition-colors"
              >
                {faq.q}
              </button>
            ))}
          </div>

          {/* Input Box Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2">
            
            {/* Voice Input Button */}
            <button
              onClick={toggleVoiceInput}
              className={`p-2.5 rounded-xl border transition-all ${
                isListening 
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
              title={isListening ? 'Listening...' : 'Speak your question (Voice Input)'}
              aria-label="Voice input"
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={isListening ? t.assistant.listening : t.assistant.inputPlaceholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ashoka-600 focus:border-transparent"
            />

            {/* Send Button */}
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              className="p-2.5 px-4 rounded-xl bg-gradient-to-r from-ashoka-700 to-ashoka-900 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center gap-1.5"
            >
              <span>{t.assistant.askBtn}</span>
              <Send className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* Disclaimer Note */}
        <p className="text-[11px] text-center text-slate-500 mt-3">
          {t.assistant.disclaimer}
        </p>

      </div>
    </section>
  );
};
