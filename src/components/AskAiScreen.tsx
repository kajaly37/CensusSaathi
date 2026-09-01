import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  ChevronDown, 
  ChevronRight, 
  Mic, 
  Send, 
  Info, 
  User, 
  Bot,
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import type { NavTab } from './Navbar';
import { sendAssistantMessage } from '../services/aiApiClient';
import type { AiClientResponse, ConversationTurn } from '../services/aiApiClient';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

interface AskAiScreenProps {
  onNavigate: (tab: NavTab) => void;
  currentLanguage: string;
  currentLanguageCode?: string;
  onOpenLanguageModal: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  sourceId?: string;
  isSubjectToNotification?: boolean;
  category?: string;
  confidence?: string;
  isGenAiGrounded?: boolean;
}

interface TopicItem {
  id: string;
  label: string;
  query: string;
}

// Sidebar topics localized for all 11 languages
const MULTILINGUAL_TOPICS: Record<string, TopicItem[]> = {
  EN: [
    { id: 'overview', label: 'Census 2027 Overview', query: 'What is Census 2027?' },
    { id: 'phases', label: 'Two Phases Breakdown', query: 'What are the two phases of the Census?' },
    { id: 'self-enum', label: 'Self-Enumeration Guide', query: 'What is Self-Enumeration?' },
    { id: 'schedule', label: 'State & UT Schedule', query: 'When is Census activity scheduled in my state?' },
    { id: 'privacy', label: 'Privacy & Section 15', query: 'Is my information confidential?' },
    { id: 'faq', label: 'Aadhaar & Biometrics', query: 'Are Aadhaar numbers or biometrics required for Census?' },
  ],
  HI: [
    { id: 'overview', label: 'जनगणना 2027 अवलोकन', query: 'जनगणना 2027 क्या है?' },
    { id: 'phases', label: 'दो प्रमुख चरण', query: 'जनगणना के दो चरण कौन से हैं?' },
    { id: 'self-enum', label: 'डिजिटल स्व-गणना गाइड', query: 'स्व-गणना (Self-Enumeration) क्या है?' },
    { id: 'schedule', label: 'राज्यवार समय-सारणी', query: 'मेरे राज्य में जनगणना कब होगी?' },
    { id: 'privacy', label: 'गोपनीयता एवं धारा 15', query: 'क्या मेरी जानकारी कानूनी रूप से गोपनीय है?' },
    { id: 'faq', label: 'आधार एवं बायोमेट्रिक्स', query: 'क्या आधार संख्या या बायोमेट्रिक्स आवश्यक हैं?' },
  ],
  MR: [
    { id: 'overview', label: 'जनगणना 2027 माहिती', query: 'जनगणना 2027 काय आहे?' },
    { id: 'phases', label: 'जनगणनेचे दोन टप्पे', query: 'जनगणनेचे दोन टप्पे कोणते आहेत?' },
    { id: 'self-enum', label: 'डिजिटल सेल्फ-एन्युमरेशन', query: 'सेल्फ-एन्युमरेशन म्हणजे काय?' },
    { id: 'schedule', label: 'राज्यनिहाय वेळापत्रक', query: 'माझ्या राज्यात जनगणना कधी होणार?' },
    { id: 'privacy', label: 'गोपनीयता व कलम 15', query: 'माझी माहिती गोपनीय आहे का?' },
    { id: 'faq', label: 'आधार व बायोमेट्रिक्स', query: 'आधार क्रमांक किंवा बायोमेट्रिक्स आवश्यक आहेत का?' },
  ],
  BN: [
    { id: 'overview', label: 'জনগণনা ২০২৭ সামগ্রিক বিবরণ', query: 'জনগণনা ২০২৭ কী?' },
    { id: 'phases', label: 'দুটি প্রধান পর্যায়', query: 'জনগণনার দুটি পর্যায় কী কী?' },
    { id: 'self-enum', label: 'ডিজিটাল সেলফ-এনিউমারেশন', query: 'সেলফ-এনিউমারেশন কী?' },
    { id: 'schedule', label: 'রাজ্যভিত্তিক সময়সূচী', query: 'আমার রাজ্যে জনগণনা কখন হবে?' },
    { id: 'privacy', label: 'আইনগত গোপনীয়তা', query: 'আমার তথ্য কি গোপনীয় থাকবে?' },
    { id: 'faq', label: 'আধার ও বায়োমেট্রিক্স', query: 'আধার কার্ড কি বাধ্যতামূলক?' },
  ],
  TA: [
    { id: 'overview', label: 'கணக்கெடுப்பு 2027 கண்ணோட்டம்', query: 'மக்கள்தொகை கணக்கெடுப்பு 2027 என்றால் என்ன?' },
    { id: 'phases', label: 'இரண்டு முக்கிய கட்டங்கள்', query: 'கணக்கெடுப்பின் இரண்டு கட்டங்கள் யாவை?' },
    { id: 'self-enum', label: 'சுய கணக்கெடுப்பு வழிகாட்டி', query: 'சுய கணக்கெடுப்பு என்றால் என்ன?' },
    { id: 'schedule', label: 'மாநில அட்டவணை', query: 'எனது மாநிலத்தில் கணக்கெடுப்பு எப்போது?' },
    { id: 'privacy', label: 'சட்டப்பூர்வ ரகசியம் (பிரிவு 15)', query: 'எனது தகவல்கள் ரகசியமாக வைக்கப்படுமா?' },
    { id: 'faq', label: 'ஆதார் மற்றும் பயோமெட்ரிக்ஸ்', query: 'ஆதார் எண் அவசியமா?' },
  ],
  TE: [
    { id: 'overview', label: 'జనాభా గణన 2027 అవలోకనం', query: 'జనాభా గణన 2027 ఏమిటి?' },
    { id: 'phases', label: 'రెండు ప్రధాన దశలు', query: 'జనాభా గణన రెండు దశలు ఏమిటి?' },
    { id: 'self-enum', label: 'సెల్ఫ్-ఎన్యూమరేషన్ గైడ్', query: 'సెల్ఫ్-ఎన్యూమరేషన్ అంటే ఏమిటి?' },
    { id: 'schedule', label: 'రాష్ట్రాల వారీ షెడ్యూల్', query: 'మా రాష్ట్రంలో జనాభా గణన ఎప్పుడు?' },
    { id: 'privacy', label: 'చట్టపరమైన గోప్యత', query: 'నా సమాచారం గోప్యంగా ఉంటుందా?' },
    { id: 'faq', label: 'ఆధార్ మరియు బయోమెట్రిక్స్', query: 'ఆధార్ తప్పనిసరిగా ఇవ్వాలా?' },
  ],
  GU: [
    { id: 'overview', label: 'વસ્તી ગણતરી 2027 માહિતી', query: 'વસ્તી ગણતરી 2027 શું છે?' },
    { id: 'phases', label: 'બે મુખ્ય તબક્કા', query: 'વસ્તી ગણતરીના બે તબક્કા કયા છે?' },
    { id: 'self-enum', label: 'સેલ્ફ-એન્યુમરેશન માર્ગદર્શિકા', query: 'સેલ્ફ-એન્યુમરેશન શું છે?' },
    { id: 'schedule', label: 'રાજ્યવાર સમયપત્રક', query: 'મારા રાજ્યમાં વસ્તી ગણતરી ક્યારે થશે?' },
    { id: 'privacy', label: 'કાનૂની ગુપ્તતા (કલમ 15)', query: 'શું મારી માહિતી ગુપ્ત રહેશે?' },
    { id: 'faq', label: 'આધાર અને બાયોમેટ્રિક્સ', query: 'આધાર નંબર આપવો જરૂરી છે?' },
  ],
  KN: [
    { id: 'overview', label: 'ಜನಗಣತಿ 2027 ಅವಲೋಕನ', query: 'ಜನಗಣತಿ 2027 ಎಂದರೇನು?' },
    { id: 'phases', label: 'ಎರಡು ಪ್ರಮುಖ ಹಂತಗಳು', query: 'ಜನಗಣತಿಯ ಎರಡು ಹಂತಗಳು ಯಾವುವು?' },
    { id: 'self-enum', label: 'ಸ್ವಯಂ-ಗಣತಿ ಮಾರ್ಗದರ್ಶಿ', query: 'ಸ್ವಯಂ-ಗಣತಿ ಎಂದರೇನು?' },
    { id: 'schedule', label: 'ರಾಜ್ಯವಾರು ವೇಳಾಪಟ್ಟಿ', query: 'ನನ್ನ ರಾಜ್ಯದಲ್ಲಿ ಜನಗಣತಿ ಯಾವಾಗ?' },
    { id: 'privacy', label: 'ಕಾನೂನುಬದ್ಧ ಗೌಪ್ಯತೆ', query: 'ನನ್ನ ಮಾಹಿತಿ ಗೌಪ್ಯವಾಗಿರುತ್ತದೆಯೇ?' },
    { id: 'faq', label: 'ಆಧಾರ್ ಮತ್ತು ಬಯೋಮೆಟ್ರಿಕ್ಸ್', query: 'ಆಧಾರ್ ಕಡ್ಡಾಯವೇ?' },
  ],
  ML: [
    { id: 'overview', label: 'സെൻസസ് 2027 വിവരണം', query: 'സെൻസസ് 2027 എന്താണ്?' },
    { id: 'phases', label: 'രണ്ട് പ്രധാന ഘട്ടങ്ങൾ', query: 'സെൻസസിന്റെ രണ്ട് ഘട്ടങ്ങൾ ഏവ?' },
    { id: 'self-enum', label: 'സെൽഫ്-എന്യൂമറേഷൻ ഗൈഡ്', query: 'സെൽഫ്-എന്യൂമറേഷൻ എന്താണ്?' },
    { id: 'schedule', label: 'സംസ്ഥാന ഷെഡ്യൂൾ', query: 'എന്റെ സംസ്ഥാനത്ത് സെൻസസ് എപ്പോഴാണ്?' },
    { id: 'privacy', label: 'നിയമപരമായ രഹസ്യസ്വഭാവം', query: 'വിവരങ്ങൾ രഹസ്യമായിരിക്കുമോ?' },
    { id: 'faq', label: 'ആധാർ വിവരങ്ങൾ', query: 'ആധാർ നിർബന്ധമാണോ?' },
  ],
  PA: [
    { id: 'overview', label: 'ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਵੇਰਵਾ', query: 'ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਕੀ ਹੈ?' },
    { id: 'phases', label: 'ਦੋ ਮੁੱਖ ਪੜਾਅ', query: 'ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੇ ਦੋ ਪੜਾਅ ਕਿਹੜੇ ਹਨ?' },
    { id: 'self-enum', label: 'ਸਵੈ-ਗਣਨਾ ਗਾਈਡ', query: 'ਸਵੈ-ਗਣਨਾ ਕੀ ਹੈ?' },
    { id: 'schedule', label: 'ਰਾਜ-ਵਾਰ ਸ਼ਡਿਊਲ', query: 'ਮੇਰੇ ਰਾਜ ਵਿੱਚ ਮਰਦਮਸ਼ੁਮਾਰੀ ਕਦੋਂ ਹੋਵੇਗੀ?' },
    { id: 'privacy', label: 'ਕਾਨੂੰਨੀ ਗੁਪਤਤਾ', query: 'ਕੀ ਮੇਰੀ ਜਾਣਕਾਰੀ ਗੁਪਤ ਰਹੇਗੀ?' },
    { id: 'faq', label: 'ਆਧਾਰ ਤੇ ਬਾਇਓਮੈਟ੍ਰਿਕਸ', query: 'ਕੀ ਆਧਾਰ ਲਾਜ਼ਮੀ ਹੈ?' },
  ],
  OR: [
    { id: 'overview', label: 'ଜନଗଣନା ୨୦୨୭ ସୂଚନା', query: "ଜନଗଣନା ୨୦୨୭ କ'ଣ?" },
    { id: 'phases', label: 'ଦୁଇଟି ପ୍ରମୁଖ ପର୍ଯ୍ୟାୟ', query: 'ଜନଗଣନାର ଦୁଇଟି ପର୍ଯ୍ୟାୟ କଣ?' },
    { id: 'self-enum', label: 'ସ୍ୱୟଂ-ଗଣନା ନିର୍ଦ୍ଦେଶିକା', query: 'ସ୍ୱୟଂ-ଗଣନା କଣ?' },
    { id: 'schedule', label: 'ରାଜ୍ୟଭିତ୍ତିକ ସୂଚୀ', query: 'ମୋ ରାଜ୍ୟରେ ଜନଗଣନା କେବେ ହେବ?' },
    { id: 'privacy', label: 'ଆଇନଗତ ଗୋପନୀୟତା', query: 'ମୋ ତଥ୍ୟ ଗୋପନୀୟ ରହିବ କି?' },
    { id: 'faq', label: 'ଆଧାର ଓ ବାୟୋମେଟ୍ରିକ୍ସ', query: 'ଆଧାର ବାଧ୍ୟତାମୂଳକ କି?' },
  ],
};

// Suggested quick question pills for all 11 languages
const SUGGESTED_QUESTIONS: Record<string, string[]> = {
  EN: [
    'What is Census 2027?',
    'What are the two phases?',
    'What is Self-Enumeration?',
    'Is my information confidential?',
    'When is Census activity scheduled in my state?'
  ],
  HI: [
    'जनगणना 2027 क्या है?',
    'जनगणना के दो चरण कौन से हैं?',
    'स्व-गणना (Self-Enumeration) क्या है?',
    'क्या मेरी जानकारी गोपनीय है?',
    'मेरे राज्य में जनगणना कब होगी?'
  ],
  MR: [
    'जनगणना 2027 काय आहे?',
    'जनगणनेचे दोन टप्पे कोणते आहेत?',
    'सेल्फ-एन्युमरेशन म्हणजे काय?',
    'माझी माहिती गोपनीय आहे का?',
    'माझ्या राज्यात जनगणना कधी होणार?'
  ],
  BN: [
    'জনগণনা ২০২৭ কী?',
    'জনগণনার দুটি পর্যায় কী কী?',
    'সেলফ-এনিউমারেশন কী?',
    'আমার তথ্য কি গোপনীয়?',
    'আমার রাজ্যে জনগণনা কখন হবে?'
  ],
  TA: [
    'மக்கள்தொகை கணக்கெடுப்பு 2027 என்றால் என்ன?',
    'கணக்கெடுப்பின் இரண்டு கட்டங்கள் யாவை?',
    'சுய கணக்கெடுப்பு என்றால் என்ன?',
    'எனது தகவல்கள் ரகசியமாக வைக்கப்படுமா?',
    'எனது மாநிலத்தில் கணக்கெடுப்பு எப்போது?'
  ],
  TE: [
    'జనాభా గణన 2027 ఏమిటి?',
    'జనాభా గణన రెండు దశలు ఏమిటి?',
    'సెల్ఫ్-ఎన్యూమరేషన్ అంటే ఏమిటి?',
    'నా సమాచారం గోప్యంగా ఉంటుందా?',
    'మా రాష్ట్రంలో జనాభా గణన ఎప్పుడు?'
  ],
  GU: [
    'વસ્તી ગણતરી 2027 શું છે?',
    'વસ્તી ગણતરીના બે તબક્કા કયા છે?',
    'સેલ્ફ-એન્યુમરેશન શું છે?',
    'શું મારી માહિતી ગુપ્ત રહેશે?',
    'મારા રાજ્યમાં વસ્તી ગણતરી ક્યારે થશે?'
  ],
  KN: [
    'ಜನಗಣತಿ 2027 ಎಂದರೇನು?',
    'ಜನಗಣತಿಯ ಎರಡು ಹಂತಗಳು ಯಾವುವು?',
    'ಸ್ವಯಂ-ಗಣತಿ ಎಂದರೇನು?',
    'ನನ್ನ ಮಾಹಿತಿ ಗೌಪ್ಯವಾಗಿರುತ್ತದೆಯೇ?',
    'ನನ್ನ ರಾಜ್ಯದಲ್ಲಿ ಜನಗಣತಿ ಯಾವಾಗ?'
  ],
  ML: [
    'സെൻസസ് 2027 എന്താണ്?',
    'സെൻസസിന്റെ രണ്ട് ഘട്ടങ്ങൾ ഏവ?',
    'സെൽഫ്-എന്യൂമറേഷൻ എന്താണ്?',
    'വിവരങ്ങൾ രഹസ്യമായിരിക്കുമോ?',
    'എന്റെ സംസ്ഥാനത്ത് സെൻസസ് എപ്പോഴാണ്?'
  ],
  PA: [
    'ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਕੀ ਹੈ?',
    'ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੇ ਦੋ ਪੜਾਅ ਕਿਹੜੇ ਹਨ?',
    'ਸਵੈ-ਗਣਨਾ ਕੀ ਹੈ?',
    'ਕੀ ਮੇਰੀ ਜਾਣਕਾਰੀ ਗੁਪਤ ਰਹੇਗੀ?',
    'ਮੇਰੇ ਰਾਜ ਵਿੱਚ ਮਰਦਮਸ਼ੁਮਾਰੀ ਕਦੋਂ ਹੋਵੇਗੀ?'
  ],
  OR: [
    "ଜନଗଣନା ୨୦୨୭ କ'ଣ?",
    'ଜନଗଣନାର ଦୁଇଟି ପର୍ଯ୍ୟାୟ କଣ?',
    'ସ୍ୱୟଂ-ଗଣନା କଣ?',
    'ମୋ ତଥ୍ୟ ଗୋପନୀୟ ରହିବ କି?',
    'ମୋ ରାଜ୍ୟରେ ଜନଗଣନା କେବେ ହେବ?'
  ]
};

export const AskAiScreen: React.FC<AskAiScreenProps> = ({
  currentLanguage,
  currentLanguageCode = 'EN',
  onOpenLanguageModal,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { t, languageOption } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const langKey = (currentLanguageCode || languageOption.upperCode || 'EN').toUpperCase();
  const questions = SUGGESTED_QUESTIONS[langKey] || SUGGESTED_QUESTIONS.EN;
  const topics = MULTILINGUAL_TOPICS[langKey] || MULTILINGUAL_TOPICS.EN;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) {
      setErrorMessage('Please type a question or select a topic.');
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }

    setErrorMessage(null);

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim()
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    const conversationHistory: ConversationTurn[] = updatedMessages.map((m) => ({
      sender: m.sender,
      text: m.text
    }));

    try {
      const response: AiClientResponse = await sendAssistantMessage(
        text.trim(),
        langKey,
        conversationHistory
      );

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response.answer,
        sourceId: response.sourceId || 'ORGI',
        isSubjectToNotification: response.isSubjectToNotification,
        category: response.category,
        confidence: response.confidence,
        isGenAiGrounded: response.isGenAiGrounded
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'Information guidance is available on the official portal. Please visit censusindia.gov.in for direct gazette notifications.',
        sourceId: 'ORGI'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearConversation = () => {
    setMessages([]);
    setErrorMessage(null);
  };

  const handleSpeechInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      try {
        // @ts-expect-error - Web Speech API
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = languageOption.speechLocale || 'en-IN';
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => {
          setIsListening(false);
          setErrorMessage('Speech input could not be detected. Please type your query.');
          setTimeout(() => setErrorMessage(null), 4000);
        };
        recognition.onresult = (event: { results: { transcript: string }[][] }) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          handleSend(transcript);
        };
        recognition.start();
      } catch {
        setIsListening(false);
        setErrorMessage('Speech recognition error. Please enter question using keyboard.');
        setTimeout(() => setErrorMessage(null), 3000);
      }
    } else {
      setErrorMessage('Speech recognition is not supported in this browser. Please type.');
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Chat Window (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl shadow-sm flex flex-col h-[640px] sm:h-[700px] overflow-hidden">
            
            {/* Chat Header Bar inside Card */}
            <div className="px-6 py-4 border-b border-slate-100 bg-[#f8fafc] flex items-center justify-between">
              <div>
                <h2 className="font-bold text-base sm:text-lg text-slate-900">
                  {t.askAi.title}
                </h2>
                <p className="text-xs text-slate-500">
                  {t.askAi.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={handleClearConversation}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                    title={t.askAi.clearConversation}
                    aria-label={t.askAi.clearConversation}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onOpenLanguageModal}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>{currentLanguage}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Error Notification Banner */}
            {errorMessage && (
              <div className="bg-red-50 border-b border-red-200 px-4 py-2 flex items-center gap-2 text-xs text-red-800 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              
              {/* Empty / Welcome State */}
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto py-8">
                  
                  {/* Central Logo */}
                  <img 
                    src="/logo.png" 
                    alt="CensusSaathi AI Logo" 
                    className="w-12 h-12 object-contain rounded-xl" 
                  />

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {t.askAi.welcomeHeading}
                  </h3>

                  {/* Quick Suggestion Pills */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {questions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(question)}
                        className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 font-medium transition-colors text-left shadow-sm cursor-pointer"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Message List */
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-black text-amber-300 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`max-w-md sm:max-w-lg rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed space-y-2.5 shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-black text-white rounded-tr-none'
                          : 'bg-slate-100 text-slate-800 rounded-tl-none whitespace-pre-line'
                      }`}
                    >
                      <div>{msg.text}</div>

                      {/* Source attribution and notice tags */}
                      {msg.sender === 'assistant' && (
                        <div className="pt-2 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-1.5">
                          {msg.isSubjectToNotification ? (
                            <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                              {t.common.subjectToNotification}
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-medium">
                              {t.common.verifiedGuidance}
                            </span>
                          )}

                          {msg.sourceId && (
                            <SourceBadge sourceId={msg.sourceId} size="sm" />
                          )}
                        </div>
                      )}
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))
              )}

              {/* Typing / Loading indicator */}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-black text-amber-300 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 text-xs text-slate-500 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    <span className="ml-1 text-[11px]">{t.askAi.consultingKnowledge}</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Field */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-3"
              >
                <button
                  type="button"
                  onClick={handleSpeechInput}
                  className={`p-2.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer ${
                    isListening ? 'text-red-500 bg-red-50 animate-pulse ring-2 ring-red-400' : 'text-slate-600'
                  }`}
                  title={isListening ? t.askAi.voiceListening : t.askAi.voiceInputTitle}
                >
                  <Mic className="w-4 h-4" />
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={t.askAi.placeholder.replace('{language}', currentLanguage)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>{t.askAi.askBtn}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

          {/* Right Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Explore Topics Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-900">
                  {t.askAi.exploreTopicsTitle}
                </h3>
                <SourceBadge sourceId="ORGI" size="sm" />
              </div>

              <div className="space-y-1.5">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleSend(topic.query)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors text-left text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                  >
                    <span>{topic.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Advisory Callout Card */}
            <div className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                <Info className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.askAi.advisoryBox}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
