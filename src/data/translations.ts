export type LanguageCode = 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'gu' | 'kn';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
];

export interface TranslationSchema {
  disclaimer: {
    badge: string;
    text: string;
    officialPortalLink: string;
  };
  nav: {
    phases: string;
    schedule: string;
    selfEnum: string;
    aiAssistant: string;
    privacy: string;
    mythBuster: string;
    dataExplorer: string;
    practiceBtn: string;
  };
  hero: {
    tagline: string;
    mainHeading: string;
    subHeading: string;
    findStateBtn: string;
    practiceBtn: string;
    askAiBtn: string;
    verifyRumorBtn: string;
    stats: {
      citizens: string;
      languages: string;
      phases: string;
      digitalFirst: string;
    };
  };
  phasesSection: {
    badge: string;
    title: string;
    subtitle: string;
    phase1Title: string;
    phase2Title: string;
    exploreQuestions: string;
    questionsCount: string;
  };
  stateFinder: {
    badge: string;
    title: string;
    subtitle: string;
    selectState: string;
    phase1Timeline: string;
    phase2Timeline: string;
    languagesSupported: string;
    helpline: string;
    historicalPop: string;
    projectedPop: string;
  };
  selfEnum: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    trySandboxBtn: string;
    generateChecklistBtn: string;
    sandboxNotice: string;
  };
  assistant: {
    badge: string;
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    askBtn: string;
    quickQuestions: string;
    listening: string;
    speakResponse: string;
    disclaimer: string;
  };
  privacy: {
    badge: string;
    title: string;
    subtitle: string;
    section15Title: string;
    section15Desc: string;
    willAskTitle: string;
    willNeverAskTitle: string;
  };
  myths: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    officialVerdict: string;
    tip: string;
  };
  dataExplorer: {
    badge: string;
    title: string;
    subtitle: string;
    literacyTab: string;
    amenitiesTab: string;
    sexRatioTab: string;
    urbanizationTab: string;
    dataSourceCitation: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  en: {
    disclaimer: {
      badge: "NON-OFFICIAL CIVIC EDUCATIONAL PLATFORM",
      text: "CensusSaathi AI is an independent, non-partisan citizen guide. It is NOT affiliated with or endorsed by the Government of India or the Registrar General of India (ORGI).",
      officialPortalLink: "Visit Official ORGI Website (censusindia.gov.in)"
    },
    nav: {
      phases: "The 2 Phases",
      schedule: "State Schedule",
      selfEnum: "Self-Enumeration",
      aiAssistant: "Saathi AI",
      privacy: "Privacy & Rights",
      mythBuster: "Fact Check / Myths",
      dataExplorer: "Data Explorer",
      practiceBtn: "Practice Simulator"
    },
    hero: {
      tagline: "India's intelligent companion for Census 2027",
      mainHeading: "Demystifying Census 2027 for Every Indian Citizen",
      subHeading: "Understand how India's first fully digital Census works, practice self-enumeration in a risk-free sandbox, verify viral rumors, and ask Saathi AI any question in your language.",
      findStateBtn: "Check My State Schedule",
      practiceBtn: "Practice Self-Enumeration (Demo)",
      askAiBtn: "Chat with Saathi AI",
      verifyRumorBtn: "Verify a Rumor",
      stats: {
        citizens: "1.4 Billion+ Citizens",
        languages: "16+ Scheduled Languages",
        phases: "2 Structured Phases",
        digitalFirst: "100% Digital & Mobile"
      }
    },
    phasesSection: {
      badge: "UNDERSTANDING THE PROCESS",
      title: "The Two Phases of Census 2027",
      subtitle: "The Census of India is conducted in two distinct, legally structured stages to ensure complete national coverage.",
      phase1Title: "Phase 1: Houselisting & Housing Census",
      phase2Title: "Phase 2: Population Enumeration",
      exploreQuestions: "View Detailed Questions",
      questionsCount: "Questions"
    },
    stateFinder: {
      badge: "REGIONAL TIMELINE FINDER",
      title: "Census 2027 Schedule for Your State / UT",
      subtitle: "Select your State or Union Territory to view estimated operational windows, local languages, and regional support guidelines.",
      selectState: "Select your State / Union Territory...",
      phase1Timeline: "Phase 1 Window (Houselisting)",
      phase2Timeline: "Phase 2 Window (Population)",
      languagesSupported: "Official Regional Languages",
      helpline: "Regional Citizen Helpdesk",
      historicalPop: "2011 Census Population",
      projectedPop: "2027 Projected Population"
    },
    selfEnum: {
      badge: "DIGITAL CITIZEN EMPOWERMENT",
      title: "Digital Self-Enumeration Guide & Practice Sandbox",
      subtitle: "Skip long in-person interviews by filling your household details online at your own pace. Try our zero-data practice simulator.",
      step1Title: "1. Mobile Authentication",
      step2Title: "2. Household Amenities Form",
      step3Title: "3. Individual Demographics",
      step4Title: "4. Receive Reference Token",
      trySandboxBtn: "Launch Interactive Practice Sandbox",
      generateChecklistBtn: "Generate Household Readiness Checklist",
      sandboxNotice: "Practice Sandbox: No actual personal data is stored or transmitted. This is an educational interactive preview."
    },
    assistant: {
      badge: "CITIZEN AI ASSISTANT",
      title: "Ask Saathi AI Anything About Census 2027",
      subtitle: "Instant, verified answers on procedures, eligibility, documents, rental rules, and privacy rights in simple citizen terms.",
      inputPlaceholder: "Type your question (e.g. Do I need to show birth certificates? Or what if I live on rent?)",
      askBtn: "Ask Saathi",
      quickQuestions: "Suggested Quick Questions:",
      listening: "Listening to your voice...",
      speakResponse: "Read Aloud",
      disclaimer: "Saathi AI provides verified civic information based on the Census Act 1948 and ORGI guidelines. Not an official legal advisory."
    },
    privacy: {
      badge: "LEGAL SAFEGUARDS & CITIZEN RIGHTS",
      title: "Your Data is 100% Confidential by Law",
      subtitle: "Understand the ironclad legal protection under the Census Act 1948 and know exactly what enumerators can and CANNOT ask.",
      section15Title: "Section 15 Guarantee of Confidentiality",
      section15Desc: "Under Section 15 of the Census Act 1948, your individual answers are completely confidential and cannot be accessed by the Police, Courts, Tax Department, or any third party.",
      willAskTitle: "What Enumerators WILL Ask",
      willNeverAskTitle: "What Enumerators Will NEVER Ask"
    },
    myths: {
      badge: "MISINFORMATION AWARENESS & FACT CHECKING",
      title: "Census 2027 MythBuster & Claim Verifier",
      subtitle: "Don't fall for fake WhatsApp forwards. Search any viral claim to see the verified official position.",
      searchPlaceholder: "Search claims or rumors (e.g. OTP, Bank, Aadhaar, NRC, Fine, Rent)...",
      filterAll: "All Categories",
      officialVerdict: "Official Fact & Verification",
      tip: "Actionable Citizen Tip"
    },
    dataExplorer: {
      badge: "CIVIC INSIGHTS EXPLORER",
      title: "Visualizing India Through Historical Census Data",
      subtitle: "Explore official trends from 1951 to 2011 and projected 2027 benchmarks across literacy, gender ratio, and household living standards.",
      literacyTab: "Literacy Rate (%)",
      amenitiesTab: "Housing & Electricity (%)",
      sexRatioTab: "Sex Ratio (Females/1000 Males)",
      urbanizationTab: "Urbanization Rate (%)",
      dataSourceCitation: "Data Source: Office of the Registrar General & Census Commissioner, India (ORGI Historical Reports). 2027 projections are statistical estimates for educational demonstration."
    }
  },
  hi: {
    disclaimer: {
      badge: "गैर-सरकारी नागरिक शैक्षिक मंच",
      text: "जनगणना साथी AI (CensusSaathi AI) एक स्वतंत्र नागरिक मार्गदर्शन मंच है। यह भारत सरकार या भारत के महारजिस्ट्रार (ORGI) से संबद्ध नहीं है।",
      officialPortalLink: "आधिकारिक सरकारी वेबसाइट देखें (censusindia.gov.in)"
    },
    nav: {
      phases: "दोनों चरण",
      schedule: "राज्यवार समय",
      selfEnum: "स्व-गणना गाइड",
      aiAssistant: "साथी AI",
      privacy: "गोपनीयता व अधिकार",
      mythBuster: "अफवाह निवारण",
      dataExplorer: "डेटा अन्वेषक",
      practiceBtn: "प्रैक्टिस सिम्युलेटर"
    },
    hero: {
      tagline: "जनगणना 2027 के लिए भारत का मार्गदर्शक",
      mainHeading: "प्रत्येक भारतीय नागरिक के लिए जनगणना 2027 को आसान बनाना",
      subHeading: "भारत की पहली पूरी तरह से डिजिटल जनगणना को समझें, सुरक्षित सैंडबॉक्स में अभ्यास करें, अफवाहों की पुष्टि करें और साथी AI से अपनी भाषा में सवाल पूछें।",
      findStateBtn: "मेरे राज्य की तारीखें देखें",
      practiceBtn: "स्व-गणना अभ्यास करें (डेमो)",
      askAiBtn: "साथी AI से पूछें",
      verifyRumorBtn: "अफवाह की जाँच करें",
      stats: {
        citizens: "1.4 अरब+ नागरिक",
        languages: "16+ प्रमुख भाषाएं",
        phases: "2 व्यवस्थित चरण",
        digitalFirst: "100% डिजिटल व मोबाइल"
      }
    },
    phasesSection: {
      badge: "प्रक्रिया को समझें",
      title: "जनगणना 2027 के दो प्रमुख चरण",
      subtitle: "भारत की जनगणना दो अलग-अलग व्यवस्थित चरणों में पूरी की जाती है ताकि कोई भी नागरिक छूट न जाए।",
      phase1Title: "चरण 1: मकान सूचीकरण एवं आवास जनगणना",
      phase2Title: "चरण 2: जनसंख्या गणना",
      exploreQuestions: "विस्तृत प्रश्न देखें",
      questionsCount: "प्रश्न"
    },
    stateFinder: {
      badge: "राज्यवार समय सारिणी",
      title: "आपके राज्य / केंद्र शासित प्रदेश के लिए जनगणना समय",
      subtitle: "अपने राज्य का चयन करें और चरणबद्ध समय सीमा, क्षेत्रीय भाषाएं और सहायता जानकारी प्राप्त करें।",
      selectState: "अपना राज्य चुनें...",
      phase1Timeline: "चरण 1 समय (मकान सूचीकरण)",
      phase2Timeline: "चरण 2 समय (जनसंख्या गणना)",
      languagesSupported: "क्षेत्रीय भाषाएं",
      helpline: "नागरिक सहायता डेस्क",
      historicalPop: "2011 जनगणना जनसंख्या",
      projectedPop: "2027 अनुमानित जनसंख्या"
    },
    selfEnum: {
      badge: "डिजिटल नागरिक सशक्तीकरण",
      title: "डिजिटल स्व-गणना गाइड एवं अभ्यास सैंडबॉक्स",
      subtitle: "घर बैठे अपनी सुविधा से ऑनलाइन विवरण भरें। हमारे सुरक्षित सैंडबॉक्स में बिना कोई निजी जानकारी दिए अभ्यास करें।",
      step1Title: "1. मोबाइल प्रमाणीकरण",
      step2Title: "2. मकान एवं सुविधा विवरण",
      step3Title: "3. व्यक्तिगत जानकारी",
      step4Title: "4. संदर्भ टोकन प्राप्त करें",
      trySandboxBtn: "अभ्यास सैंडबॉक्स शुरू करें",
      generateChecklistBtn: "तैयारी चेकलिस्ट बनाएं",
      sandboxNotice: "डेमो सैंडबॉक्स: इसमें कोई वास्तविक डेटा सहेजा नहीं जाता है। यह केवल शैक्षिक पूर्वावलोकन है।"
    },
    assistant: {
      badge: "नागरिक AI साथी",
      title: "जनगणना 2027 से जुड़ा कोई भी सवाल पूछें",
      subtitle: "प्रक्रिया, पात्रता, किराएदार नियम, आवश्यक दस्तावेज और कानूनी अधिकारों पर त्वरित एवं प्रमाणित उत्तर।",
      inputPlaceholder: "अपना सवाल यहाँ लिखें (उदा. क्या जन्म प्रमाण पत्र दिखाना जरूरी है? या किराएदार कैसे गिने जाएंगे?)",
      askBtn: "पूछें",
      quickQuestions: "सुझाए गए मुख्य प्रश्न:",
      listening: "आपकी आवाज़ सुन रहे हैं...",
      speakResponse: "सुनें",
      disclaimer: "साथी AI जनगणना अधिनियम 1948 और ORGI दिशानिर्देशों पर आधारित उत्तर प्रदान करता है।"
    },
    privacy: {
      badge: "कानूनी सुरक्षा व अधिकार",
      title: "कानूनन आपकी जानकारी 100% गोपनीय है",
      subtitle: "जनगणना अधिनियम 1948 की धारा 15 के तहत पूरी सुरक्षा। जानें प्रगणक क्या पूछेंगे और क्या कभी नहीं पूछेंगे।",
      section15Title: "धारा 15: पूर्ण गोपनीयता की गारंटी",
      section15Desc: "जनगणना में दी गई आपकी व्यक्तिगत जानकारी पुलिस, अदालत, या आयकर विभाग को भी नहीं दी जा सकती। इसका उपयोग केवल सामूहिक सांख्यिकी के लिए होता है।",
      willAskTitle: "प्रगणक क्या पूछेंगे",
      willNeverAskTitle: "प्रगणक क्या कभी नहीं पूछेंगे"
    },
    myths: {
      badge: "अफवाह निवारण एवं तथ्य जाँच",
      title: "जनगणना 2027 भ्रम निवारण (MythBuster)",
      subtitle: "सोशल मीडिया के फर्जी संदेशों से बचें। किसी भी दावे की सच्चाई यहाँ सत्यापित करें।",
      searchPlaceholder: "दावा या अफवाह खोजें (उदा. OTP, बैंक, आधार, NRC, जुर्माना, किराया)...",
      filterAll: "सभी श्रेणियां",
      officialVerdict: "आधिकारिक तथ्य व सत्यापन",
      tip: "नागरिकों के लिए सुझाव"
    },
    dataExplorer: {
      badge: "ऐतिहासिक डेटा अन्वेषक",
      title: "जनगणना डेटा के माध्यम से भारत की प्रगति",
      subtitle: "1951 से 2011 तक के आधिकारिक आंकड़े और 2027 के अनुमानित संकेतकों का अध्ययन करें।",
      literacyTab: "साक्षरता दर (%)",
      amenitiesTab: "आवास एवं बिजली (%)",
      sexRatioTab: "लिंगानुपात (प्रति 1000 पुरुष)",
      urbanizationTab: "शहरीकरण दर (%)",
      dataSourceCitation: "डेटा स्रोत: भारत के महारजिस्ट्रार एवं जनगणना आयुक्त (ORGI) के ऐतिहासिक रिकॉर्ड।"
    }
  },
  mr: {
    disclaimer: {
      badge: "अशासकीय नागरिक शैक्षणिक व्यासपीठ",
      text: "जनगणना साथी AI (CensusSaathi AI) हे एक स्वतंत्र नागरिक मार्गदर्शक व्यासपीठ आहे. हे भारत सरकारशी संलग्न नाही.",
      officialPortalLink: "अधिकृत सरकारी पोर्टल पहा (censusindia.gov.in)"
    },
    nav: {
      phases: "दोन्ही टप्पे",
      schedule: "राज्य वेळापत्रक",
      selfEnum: "स्वयं-नोंदणी",
      aiAssistant: "साथी AI",
      privacy: "गोपनीयता व हक्क",
      mythBuster: "अफवा निवारण",
      dataExplorer: "माहिती विश्लेषक",
      practiceBtn: "सराव सिम्युलेटर"
    },
    hero: {
      tagline: "जनगणना 2027 साठी भारताचा विश्वासू सोबती",
      mainHeading: "प्रत्येक भारतीय नागरिकासाठी जनगणना 2027 सुलभ करणे",
      subHeading: "भारताच्या पहिल्या संपूर्ण डिजिटल जनगणनेची माहिती मिळवा, सराव करा, अफवांपासून सावध राहा आणि आपल्या भाषेत प्रश्न विचारा.",
      findStateBtn: "माझ्या राज्याचे वेळापत्रक",
      practiceBtn: "स्वयं-नोंदणी सराव (डेमो)",
      askAiBtn: "साथी AI शी संवाद साधा",
      verifyRumorBtn: "अफवा तपासा",
      stats: {
        citizens: "1.4 अब्ज+ नागरिक",
        languages: "16+ प्रमुख भाषा",
        phases: "2 सुनियोजित टप्पे",
        digitalFirst: "100% डिजिटल व मोबाईल"
      }
    },
    phasesSection: {
      badge: "प्रक्रिया समजून घ्या",
      title: "जनगणना 2027 चे दोन टप्पे",
      subtitle: "भारताची जनगणना दोन स्वतंत्र आणि पद्धतशीर टप्प्यांमध्ये पूर्ण केली जाते.",
      phase1Title: "टप्पा 1: घरे यादी व गृहनिर्माण जनगणना",
      phase2Title: "टप्पा 2: लोकसंख्या मोजणी",
      exploreQuestions: "सविस्तर प्रश्न पहा",
      questionsCount: "प्रश्न"
    },
    stateFinder: {
      badge: "राज्यनिहाय वेळापत्रक",
      title: "आपल्या राज्य/केंद्रशासित प्रदेशाचे वेळापत्रक",
      subtitle: "आपले राज्य निवडा आणि टप्प्यांचे वेळापत्रक, प्रादेशिक भाषा आणि मदत केंद्र माहिती जाणून घ्या.",
      selectState: "राज्य निवडा...",
      phase1Timeline: "टप्पा 1 कालावधी (घरे यादी)",
      phase2Timeline: "टप्पा 2 कालावधी (लोकसंख्या)",
      languagesSupported: "प्रादेशिक भाषा",
      helpline: "नागरिक मदत कक्ष",
      historicalPop: "2011 जनगणना लोकसंख्या",
      projectedPop: "2027 अंदाजित लोकसंख्या"
    },
    selfEnum: {
      badge: "डिजिटल नागरिक सक्षमीकरण",
      title: "डिजिटल स्वयं-नोंदणी मार्गदर्शक व सराव सँडबॉक्स",
      subtitle: "घरी बसून स्वतःची माहिती सुरक्षितपणे भरा. सराव सँडबॉक्समध्ये प्रत्यक्ष अनुभव घ्या.",
      step1Title: "1. मोबाईल पडताळणी",
      step2Title: "2. घर व सुविधांची माहिती",
      step3Title: "3. वैयक्तिक माहिती",
      step4Title: "4. संदर्भ टोकन मिळवा",
      trySandboxBtn: "सराव सँडबॉक्स सुरू करा",
      generateChecklistBtn: "तयारी चेकलिस्ट बनवा",
      sandboxNotice: "सराव सँडबॉक्स: येथे कोणतीही खरी वैयक्तिक माहिती साठवली जात नाही."
    },
    assistant: {
      badge: "नागरिक AI सोबती",
      title: "जनगणना 2027 बाबत काहीही विचारा",
      subtitle: "नियम, कागदपत्रे, भाडेकरू मार्गदर्शक तत्त्वे आणि गोपनीयतेबाबत त्वरित मार्गदर्शन.",
      inputPlaceholder: "आपला प्रश्न येथे टाईप करा (उदा. कागदपत्रे दाखवावी लागतात का?)",
      askBtn: "विचारा",
      quickQuestions: "महत्त्वाचे प्रश्न:",
      listening: "ऐकत आहे...",
      speakResponse: "ऐका",
      disclaimer: "साथी AI जनगणना कायदा 1948 च्या अधिकृत तरतुदींवर आधारित उत्तर देतो."
    },
    privacy: {
      badge: "कायदेशीर संरक्षण व हक्क",
      title: "आपली माहिती कायद्यानुसार 100% गोपनीय",
      subtitle: "जनगणना कायदा 1948 चे कलम 15 अन्वये संपूर्ण संरक्षण. प्रगणक काय विचारू शकतात ते जाणून घ्या.",
      section15Title: "कलम 15: संपूर्ण गोपनीयतेची हमी",
      section15Desc: "आपली वैयक्तिक माहिती पोलीस किंवा आयकर खात्यालाही दिली जाऊ शकत नाही.",
      willAskTitle: "प्रगणक काय विचारतील",
      willNeverAskTitle: "प्रगणक काय कधीही विचारणार नाहीत"
    },
    myths: {
      badge: "अफवा निवारण",
      title: "जनगणना 2027 भ्रम निवारण (MythBuster)",
      subtitle: "व्हॉट्सॲपवरील खोट्या मेसेजवर विश्वास ठेवू नका. अधिकृत सत्य येथे तपासा.",
      searchPlaceholder: "दावे शोधा (उदा. OTP, बँक खाते, आधार, भाडे)...",
      filterAll: "सर्व श्रेणी",
      officialVerdict: "अधिकृत सत्य व वस्तुस्थिती",
      tip: "नागरिकांसाठी महत्त्वाची सूचना"
    },
    dataExplorer: {
      badge: "माहिती अन्वेषक",
      title: "ऐतिहासिक जनगणनेद्वारे भारताची प्रगती",
      subtitle: "1951 ते 2011 ची आकडेवारी आणि 2027 चे अंदाजित निर्देशक पहा.",
      literacyTab: "साक्षरता प्रमाण (%)",
      amenitiesTab: "घरे व वीज सुविधा (%)",
      sexRatioTab: "स्त्री-पुरुष प्रमाण",
      urbanizationTab: "शहरीकरण प्रमाण (%)",
      dataSourceCitation: "माहिती स्रोत: महारजिस्ट्रार व जनगणना आयुक्त, भारत (ORGI)."
    }
  },
  bn: {
    disclaimer: {
      badge: "বেসরকারি নাগরিক শিক্ষামূলক প্ল্যাটফর্ম",
      text: "সেনসাসসাথী AI (CensusSaathi AI) একটি স্বাধীন নাগরিক নির্দেশিকা। এটি ভারত সরকারের কোনো অফিশিয়াল প্ল্যাটফর্ম নয়।",
      officialPortalLink: "সরকারি ওয়েবসাইট দেখুন (censusindia.gov.in)"
    },
    nav: {
      phases: "দুটি পর্যায়",
      schedule: "রাজ্য সময়সূচি",
      selfEnum: "স্ব-গণনা গাইড",
      aiAssistant: "সাথী AI",
      privacy: "গোপনীয়তা ও অধিকার",
      mythBuster: "গুজব যাচাই",
      dataExplorer: "তথ্য অন্বেষণ",
      practiceBtn: "প্র্যাকটিস সিমুলেটর"
    },
    hero: {
      tagline: "আদমশুমারি ২০২৭-এর জন্য ভারতের বিশ্বস্ত সঙ্গী",
      mainHeading: "প্রতিটি ভারতীয় নাগরিকের জন্য আদমশুমারি ২০২৭ সহজতর করা",
      subHeading: "ভারতের প্রথম সম্পূর্ণ ডিজিটাল আদমশুমারি বুঝুন, অনলাইন অনুশীলনী করুন, গুজব যাচাই করুন এবং সাথী AI-কে আপনার ভাষায় প্রশ্ন করুন।",
      findStateBtn: "রাজ্যের সময়সূচি দেখুন",
      practiceBtn: "অনুশীলন করুন (ডেমো)",
      askAiBtn: "সাথী AI-কে জিজ্ঞাসা করুন",
      verifyRumorBtn: "গুজব যাচাই করুন",
      stats: {
        citizens: "১৪০ কোটি+ নাগরিক",
        languages: "১৬+ প্রধান ভাষা",
        phases: "২টি সুনির্দিষ্ট পর্যায়",
        digitalFirst: "১০০% ডিজিটাল ও মোবাইল"
      }
    },
    phasesSection: {
      badge: "পদ্ধতি বুঝুন",
      title: "আদমশুমারি ২০২৭-এর দুটি প্রধান পর্যায়",
      subtitle: "ভারতের আদমশুমারি দুটি ধাপে পরিচালিত হয় যাতে কোনো নাগরিক বাদ না পড়েন।",
      phase1Title: "পর্যায় ১: গৃহতালিকা ও আবাসন গণনা",
      phase2Title: "পর্যায় ২: জনসংখ্যা গণনা",
      exploreQuestions: "প্রশ্নাবলী দেখুন",
      questionsCount: "প্রশ্ন"
    },
    stateFinder: {
      badge: "রাজ্যভিত্তিক সময়সূচি",
      title: "আপনার রাজ্য / কেন্দ্রশাসিত অঞ্চলের সময়সূচি",
      subtitle: "আপনার রাজ্য নির্বাচন করুন এবং নির্ধারিত সময়, ভাষা ও হেল্পলাইন জানুন।",
      selectState: "রাজ্য নির্বাচন করুন...",
      phase1Timeline: "পর্যায় ১ সময় (গৃহতালিকা)",
      phase2Timeline: "পর্যায় ২ সময় (জনসংখ্যা)",
      languagesSupported: "আঞ্চলিক ভাষাসমূহ",
      helpline: "নাগরিক হেল্পডেস্ক",
      historicalPop: "২০১১ আদমশুমারি জনসংখ্যা",
      projectedPop: "২০২৭ আনুমানিক জনসংখ্যা"
    },
    selfEnum: {
      badge: "ডিজিটাল নাগরিক ক্ষমতায়ন",
      title: "ডিজিটাল স্ব-গণনা নির্দেশিকা ও স্যান্ডবক্স",
      subtitle: "নিজের সুবিধামতো অনলাইনে তথ্য পূরণ করুন। ডেমো স্যান্ডবক্সে সম্পূর্ণ নিরাপদ অভিজ্ঞতা নিন।",
      step1Title: "১. মোবাইল যাচাইকরণ",
      step2Title: "২. গৃহ ও সুবিধা বিবরণ",
      step3Title: "৩. ব্যক্তিগত তথ্য",
      step4Title: "৪. রেফারেন্স টোকেন সংগ্রহ",
      trySandboxBtn: "অনুশীলন শুরু করুন",
      generateChecklistBtn: "প্রস্তুতি চেকলিস্ট তৈরি করুন",
      sandboxNotice: "ডেমো স্যান্ডবক্স: এখানে কোনো আসল ব্যক্তিগত তথ্য সংরক্ষণ করা হয় না।"
    },
    assistant: {
      badge: "নাগরিক AI সহায়ক",
      title: "আদমশুমারি ২০২৭ সম্পর্কে যেকোনো প্রশ্ন করুন",
      subtitle: "নিয়মাবলী, প্রয়োজনীয় তথ্য ও গোপনীয়তা অধিকার সম্পর্কে তাৎক্ষণিক ও নির্ভুল উত্তর।",
      inputPlaceholder: "আপনার প্রশ্ন লিখুন (যেমন: নথি দেখাতে হবে কি না?)...",
      askBtn: "জিজ্ঞাসা করুন",
      quickQuestions: "প্রয়োজনীয় প্রশ্ন:",
      listening: "আপনার কথা শোনা হচ্ছে...",
      speakResponse: "শুনুন",
      disclaimer: "সাথী AI আদমশুমারি আইন ১৯৪৮ এবং সরকারি নির্দেশিকার ভিত্তিতে তথ্য সরবরাহ করে।"
    },
    privacy: {
      badge: "আইনি সুরক্ষা ও অধিকার",
      title: "আইনত আপনার সমস্ত তথ্য ১০০% গোপনীয়",
      subtitle: "আদমশুমারি আইন ১৯৪৮-এর ধারা ১৫ অনুযায়ী সম্পূর্ণ আইনি সুরক্ষা।",
      section15Title: "ধারা ১৫: সম্পূর্ণ গোপনীয়তার নিশ্চয়তা",
      section15Desc: "আপনার ব্যক্তিগত তথ্য পুলিশ বা কর বিভাগকেও দেওয়া যাবে না।",
      willAskTitle: "গণনাকারী কী জিজ্ঞাসা করবেন",
      willNeverAskTitle: "গণনাকারী কী কখনও জিজ্ঞাসা করবেন না"
    },
    myths: {
      badge: "গুজব যাচাই ও সচেতনতা",
      title: "আদমশুমারি ২০২৭ বিভ্রান্তি নিরসন",
      subtitle: "ভুয়ো খবরের শিকার হবেন না। যেকোনো দাবির সত্যতা এখানে যাচাই করুন।",
      searchPlaceholder: "দাবি অনুসন্ধান করুন (যেমন: OTP, ব্যাংক, আধার, ভাড়া)...",
      filterAll: "সমস্ত বিভাগ",
      officialVerdict: "অফিশিয়াল সত্য ও তথ্য",
      tip: "নাগরিকদের জন্য পরামর্শ"
    },
    dataExplorer: {
      badge: "তথ্য অন্বেষণ",
      title: "ঐতিহাসিক আদমশুমারির মাধ্যমে ভারতের অগ্রগতি",
      subtitle: "১৯৫১ থেকে ২০১১ সালের পরিসংখ্যান ও ২০২৭-এর আনুমানিক রূপরেখা।",
      literacyTab: "সাক্ষরতার হার (%)",
      amenitiesTab: "গৃহ ও বিদ্যুৎ সুবিধা (%)",
      sexRatioTab: "লিঙ্গানুপাত (প্রতি ১০০০ পুরুষে)",
      urbanizationTab: "নগরায়ণের হার (%)",
      dataSourceCitation: "উৎস: রেজিস্ট্রার জেনারেল ও সেনসাস কমিশনার অব ইন্ডিয়া (ORGI)।"
    }
  },
  ta: {
    disclaimer: {
      badge: "அரசு சாரா குடிமக்கள் கல்வி தளம்",
      text: "சென்சஸ் சாதி AI (CensusSaathi AI) என்பது ஒரு சுதந்திரமான வழிகாட்டி தளம். இது இந்திய அரசாங்கத்தின் அதிகாரப்பூர்வ தளம் அல்ல.",
      officialPortalLink: "அதிகாரப்பூர்வ தளத்தைப் பார்வையிடவும் (censusindia.gov.in)"
    },
    nav: {
      phases: "இரு கட்டங்கள்",
      schedule: "மாநில அட்டவணை",
      selfEnum: "சுய கணக்கெடுப்பு",
      aiAssistant: "சாதி AI",
      privacy: "தனியுரிமை & உரிமைகள்",
      mythBuster: "வதந்தி சரிபார்ப்பு",
      dataExplorer: "தரவு எக்ஸ்ப்ளோரர்",
      practiceBtn: "பயிற்சி சிமுலேட்டர்"
    },
    hero: {
      tagline: "மக்கள் தொகை கணக்கெடுப்பு 2027-ன் வழிகாட்டி",
      mainHeading: "இந்தியக் குடிமக்கள் அனைவருக்கும் மக்கள் தொகை கணக்கெடுப்பு 2027 எளிமையாக்கப்படுகிறது",
      subHeading: "முழுமையான டிஜிட்டல் கணக்கெடுப்பை புரிந்து கொள்ளுங்கள், பயிற்சி செய்யுங்கள், வதந்திகளை சரிபார்த்து உங்கள் மொழியில் AI-யிடம் கேளுங்கள்.",
      findStateBtn: "மாநில அட்டவணையை காண்க",
      practiceBtn: "சுய கணக்கெடுப்பு பயிற்சி",
      askAiBtn: "சாதி AI உடன் பேசுங்கள்",
      verifyRumorBtn: "வதந்தியை சரிபார்க்கவும்",
      stats: {
        citizens: "140 கோடி+ குடிமக்கள்",
        languages: "16+ முக்கிய மொழிகள்",
        phases: "2 கட்டமைக்கப்பட்ட கட்டங்கள்",
        digitalFirst: "100% டிஜிட்டல் & மொபைல்"
      }
    },
    phasesSection: {
      badge: "செயல்முறையை அறிக",
      title: "மக்கள் தொகை கணக்கெடுப்பு 2027-ன் இரு கட்டங்கள்",
      subtitle: "அனைவரையும் துல்லியமாக கணக்கிட இரு கட்டங்களாக நடத்தப்படுகிறது.",
      phase1Title: "கட்டம் 1: வீடுகள் பட்டியல் & வீட்டு வசதி கணக்கெடுப்பு",
      phase2Title: "கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு",
      exploreQuestions: "கேள்விகளை காண்க",
      questionsCount: "கேள்விகள்"
    },
    stateFinder: {
      badge: "மாநில அட்டவணை",
      title: "உங்கள் மாநிலத்திற்கான கால அட்டவணை",
      subtitle: "உங்கள் மாநிலத்தைத் தேர்ந்தெடுத்து கணக்கெடுப்பு தேதிகள் மற்றும் தகவல்களை அறியவும்.",
      selectState: "மாநிலத்தை தேர்வு செய்க...",
      phase1Timeline: "கட்டம் 1 காலம் (வீடுகள் பட்டியல்)",
      phase2Timeline: "கட்டம் 2 காலம் (மக்கள் தொகை)",
      languagesSupported: "பிராந்திய மொழிகள்",
      helpline: "குடிமக்கள் உதவி மையம்",
      historicalPop: "2011 கணக்கெடுப்பு மக்கள் தொகை",
      projectedPop: "2027 கணிக்கப்பட்ட மக்கள் தொகை"
    },
    selfEnum: {
      badge: "டிஜிட்டல் குடிமக்கள் மேம்பாடு",
      title: "டிஜிட்டல் சுய கணக்கெடுப்பு வழிகாட்டி & பயிற்சி கூடம்",
      subtitle: "நீங்களே ஆன்லைனில் விவரங்களை பதிவு செய்யுங்கள். பாதுகாப்பான பயிற்சி கூடத்தில் முயற்சிக்கவும்.",
      step1Title: "1. மொபைல் சரிபார்ப்பு",
      step2Title: "2. வீட்டு வசதிகள் படிவம்",
      step3Title: "3. தனிநபர் விவரங்கள்",
      step4Title: "4. குறிப்பு டோக்கன் பெறுதல்",
      trySandboxBtn: "பயிற்சி தொடங்கவும்",
      generateChecklistBtn: "தயாரிப்பு சரிபார்ப்புப் பட்டியல்",
      sandboxNotice: "பயிற்சி கூடம்: இங்கு எந்த தனிப்பட்ட தகவலும் சேமிக்கப்படாது."
    },
    assistant: {
      badge: "குடிமக்கள் AI உதவியாளர்",
      title: "கணக்கெடுப்பு 2027 குறித்து எதையும் கேளுங்கள்",
      subtitle: "செயல்முறைகள், ஆவணங்கள், வாடகைதாரர் விதிகள் மற்றும் தனியுரிமை பற்றிய உடனடி பதில்கள்.",
      inputPlaceholder: "உங்கள் கேள்வியை தட்டச்சு செய்யவும்...",
      askBtn: "கேளுங்கள்",
      quickQuestions: "பரிந்துரைக்கப்பட்ட கேள்விகள்:",
      listening: "கேட்கிறது...",
      speakResponse: "வாசிக்கவும்",
      disclaimer: "சாதி AI மக்கள் தொகை கணக்கெடுப்பு சட்டம் 1948 அடிப்படையில் தகவல்களை வழங்குகிறது."
    },
    privacy: {
      badge: "சட்ட பாதுகாப்பு & உரிமைகள்",
      title: "உங்கள் தகவல் 100% ரகசியமாக வைக்கப்படும்",
      subtitle: "மக்கள் தொகை கணக்கெடுப்பு சட்டம் 1948 பிரிவு 15-ன் கீழ் முழு சட்டப் பாதுகாப்பு.",
      section15Title: "பிரிவு 15: முழு ரகசியத்தன்மை உத்தரவாதம்",
      section15Desc: "உங்கள் தனிநபர் விவரங்கள் நீதிமன்றம் அல்லது வருமான வரித்துறைக்குக் கூட வழங்கப்படாது.",
      willAskTitle: "கணக்கெடுப்பாளர் என்ன கேட்பார்",
      willNeverAskTitle: "கணக்கெடுப்பாளர் ஒருபோதும் கேட்காதவை"
    },
    myths: {
      badge: "வதந்தி சரிபார்ப்பு",
      title: "கணக்கெடுப்பு 2027 கட்டுக்கதைகள் vs உண்மை",
      subtitle: "வதந்திகளை நம்பாதீர்கள். அதிகாரப்பூர்வ உண்மைகளை இங்கு சரிபார்க்கவும்.",
      searchPlaceholder: "வதந்திகளை தேடுக (OTP, வங்கி, ஆதார், வாடகை)...",
      filterAll: "அனைத்து பிரிவுகள்",
      officialVerdict: "அதிகாரப்பூர்வ உண்மை",
      tip: "குடிமக்கள் குறிப்பு"
    },
    dataExplorer: {
      badge: "தரவு எக்ஸ்ப்ளோரர்",
      title: "வரலாற்று கணக்கெடுப்பு மூலம் இந்தியாவின் வளர்ச்சி",
      subtitle: "1951 முதல் 2011 வரையிலான அதிகாரப்பூர்வ புள்ளிவிவரங்கள் மற்றும் 2027 கணிப்புகள்.",
      literacyTab: "கல்வியறிவு விகிதம் (%)",
      amenitiesTab: "வீடு & மின்சார வசதி (%)",
      sexRatioTab: "பாலின விகிதம்",
      urbanizationTab: "நகரமயமாக்கல் விகிதம் (%)",
      dataSourceCitation: "தரவு மூலம்: இந்திய பதிவாளர் ஜெனரல் மற்றும் கணக்கெடுப்பு ஆணையர் (ORGI)."
    }
  },
  te: {
    disclaimer: {
      badge: "ప్రభుత్వేతర పౌర విద్యా వేదిక",
      text: "సెన్సస్‌సాథీ AI (CensusSaathi AI) ఒక స్వతంత్ర పౌర మార్గదర్శక వేదిక. ఇది భారత ప్రభుత్వ అధికారిక వేదిక కాదు.",
      officialPortalLink: "అధికారిక వెబ్‌సైట్ చూడండి (censusindia.gov.in)"
    },
    nav: {
      phases: "రెండు దశలు",
      schedule: "రాష్ట్ర షెడ్యూల్",
      selfEnum: "స్వీయ గణన",
      aiAssistant: "సాథీ AI",
      privacy: "గోప్యత & హక్కులు",
      mythBuster: "పుకార్ల నిజనిర్ధారణ",
      dataExplorer: "డేటా ఎక్స్‌ప్లోరర్",
      practiceBtn: "ప్రాక్టీస్ సిమ్యులేటర్"
    },
    hero: {
      tagline: "జనగణన 2027 కోసం భారతదేశపు మార్గదర్శి",
      mainHeading: "ప్రతి భారతీయ పౌరునికి జనగణన 2027 సులభతరం",
      subHeading: "భారతదేశపు మొట్టమొదటి డిజిటల్ జనగణనను అర్థం చేసుకోండి, ప్రాక్టీస్ చేయండి, పుకార్లను నివారించండి మరియు మీ భాషలో AI ని అడగండి.",
      findStateBtn: "రాష్ట్ర షెడ్యూల్ చూడండి",
      practiceBtn: "స్వీయ గణన ప్రాక్టీస్ (డెమో)",
      askAiBtn: "సాథీ AI తో మాట్లాడండి",
      verifyRumorBtn: "పుకారును పరిశీలించండి",
      stats: {
        citizens: "140 కోట్లకు పైగా పౌరులు",
        languages: "16+ ప్రముఖ భాషలు",
        phases: "2 వ్యవస్థీకృత దశలు",
        digitalFirst: "100% డిజిటల్ & మొబైల్"
      }
    },
    phasesSection: {
      badge: "ప్రక్రియను అర్థం చేసుకోండి",
      title: "జనగణన 2027 యొక్క రెండు దశలు",
      subtitle: "ఖచ్చితమైన గణన కోసం దేశవ్యాప్తంగా రెండు దశల్లో నిర్వహించబడుతుంది.",
      phase1Title: "దశ 1: గృహాల జాబితా & గృహనిర్మాణ గణన",
      phase2Title: "దశ 2: జనాభా గణన",
      exploreQuestions: "ప్రశ్నల వివరాలు చూడండి",
      questionsCount: "ప్రశ్నలు"
    },
    stateFinder: {
      badge: "రాష్ట్రాల షెడ్యూల్",
      title: "మీ రాష్ట్రం / కేంద్రపాలిత ప్రాంతం షెడ్యూల్",
      subtitle: "మీ రాష్ట్రాన్ని ఎంచుకుని షెడ్యూల్, ప్రాంతీయ భాషలు మరియు హెల్ప్‌లైన్ సమాచారాన్ని తెలుసుకోండి.",
      selectState: "రాష్ట్రాన్ని ఎంచుకోండి...",
      phase1Timeline: "దశ 1 సమయం (గృహాల జాబితా)",
      phase2Timeline: "దశ 2 సమయం (జనాభా)",
      languagesSupported: "ప్రాంతీయ భాషలు",
      helpline: "పౌర సహాయ కేంద్రం",
      historicalPop: "2011 జనాభా",
      projectedPop: "2027 అంచనా జనాభా"
    },
    selfEnum: {
      badge: "డిజిటల్ పౌర సాధికారత",
      title: "డిజిటల్ స్వీయ గణన మార్గదర్శి & ప్రాక్టీస్ శాండ్‌బాక్స్",
      subtitle: "మీ వివరాలను ఆన్‌లైన్‌లో సులభంగా నమోదు చేయండి. డెమో శాండ్‌బాక్స్‌లో ప్రాక్టీస్ చేయండి.",
      step1Title: "1. మొబైల్ ధృవీకరణ",
      step2Title: "2. గృహ వసతుల ఫారమ్",
      step3Title: "3. వ్యక్తిగత వివరాలు",
      step4Title: "4. రిఫరెన్స్ టోకెన్ పొందండి",
      trySandboxBtn: "ప్రాక్టీస్ శాండ్‌బాక్స్ ప్రారంభించండి",
      generateChecklistBtn: "సిద్ధత చెక్‌లిస్ట్ పొందండి",
      sandboxNotice: "డెమో శాండ్‌బాక్స్: ఇక్కడ ఎటువంటి నిజమైన వ్యక్తిగత డేటా నిల్వ చేయబడదు."
    },
    assistant: {
      badge: "పౌర AI సహాయకుడు",
      title: "జనగణన 2027 గురించి ఏదైనా అడగండి",
      subtitle: "నియమాలు, అవసరమైన పత్రాలు, అద్దెదారుల నిబంధనలు మరియు చట్టపరమైన గోప్యతపై తక్షణ సమాధానాలు.",
      inputPlaceholder: "మీ ప్రశ్నను టైప్ చేయండి...",
      askBtn: "అడగండి",
      quickQuestions: "ముఖ్యమైన ప్రశ్నలు:",
      listening: "వింటోంది...",
      speakResponse: "వినండి",
      disclaimer: "సాథీ AI సెన్సస్ చట్టం 1948 ఆధారంగా సమాచారం అందిస్తుంది."
    },
    privacy: {
      badge: "చట్టపరమైన రక్షణ & హక్కులు",
      title: "మీ సమాచారం చట్టప్రకారం 100% అత్యంత గోప్యం",
      subtitle: "సెన్సస్ చట్టం 1948 సెక్షన్ 15 ప్రకారం పూర్తి గోప్యతా హామీ.",
      section15Title: "సెక్షన్ 15: సంపూర్ణ గోప్యత",
      section15Desc: "మీ వ్యక్తిగత వివరాలను కోర్టు లేదా ఆదాయపు పన్ను శాఖ కూడా తీసుకోలేదు.",
      willAskTitle: "ఎన్యూమరేటర్లు ఏమి అడుగుతారు",
      willNeverAskTitle: "ఎన్యూమరేటర్లు ఎప్పటికీ అడగనివి"
    },
    myths: {
      badge: "పుకార్ల నివారణ",
      title: "జనగణన 2027 అపోహలు vs నిజాలు",
      subtitle: "నకిలీ సమాచారాన్ని నమ్మవద్దు. సరైన అధికారిక వాస్తవాలను ఇక్కడ సరిచూసుకోండి.",
      searchPlaceholder: "దావాలను వెతకండి (OTP, బ్యాంక్, ఆధార్, అద్దె)...",
      filterAll: "అన్ని వర్గాలు",
      officialVerdict: "అధికారిక వాస్తవం",
      tip: "పౌరులకు సలహా"
    },
    dataExplorer: {
      badge: "డేటా ఎక్స్‌ప్లోరర్",
      title: "చారిత్రక జనగణన ద్వారా భారతదేశ పురోగతి",
      subtitle: "1951 నుండి 2011 గణాంకాలు మరియు 2027 అంచనాలను విశ్లేషించండి.",
      literacyTab: "అక్షరాస్యత రేటు (%)",
      amenitiesTab: "గృహ & విద్యుత్ వసతులు (%)",
      sexRatioTab: "లింగ నిష్పత్తి",
      urbanizationTab: "పట్టణీకరణ రేటు (%)",
      dataSourceCitation: "మూలం: రిజిస్ట్రార్ జనరల్ & సెన్సస్ కమిషనర్ ఆఫ్ ఇండియా (ORGI)."
    }
  },
  gu: {
    disclaimer: {
      badge: "બિન-સરકારી નાગરિક શૈક્ષણિક પ્લેટફોર્મ",
      text: "સેન્સસસાથી AI (CensusSaathi AI) એ એક સ્વતંત્ર નાગરિક માર્ગદર્શક પ્લેટફોર્મ છે. તે ભારત સરકારનું સત્તાવાર પ્લેટફોર્મ નથી.",
      officialPortalLink: "સત્તાવાર સરકારી વેબસાઇટ જુઓ (censusindia.gov.in)"
    },
    nav: {
      phases: "બંને તબક્કા",
      schedule: "રાજ્ય સમયપત્રક",
      selfEnum: "સ્વ-ગણતરી",
      aiAssistant: "સાથી AI",
      privacy: "ગોપનીયતા અને હક્કો",
      mythBuster: "અફવા નિવારણ",
      dataExplorer: "ડેટા એક્સપ્લોરર",
      practiceBtn: "પ્રેક્ટિસ સિમ્યુલેટર"
    },
    hero: {
      tagline: "વસ્તી ગણતરી 2027 માટે ભારતનો માર્ગદર્શક",
      mainHeading: "દરેક ભારતીય નાગરિક માટે વસ્તી ગણતરી 2027 સરળ બનાવવી",
      subHeading: "ભારતની પ્રથમ સંપૂર્ણ ડિજિટલ વસ્તી ગણતરીને સમજો, પ્રેક્ટિસ કરો, અફવાઓથી બચો અને તમારી ભાષામાં AI ને પ્રશ્નો પૂછો.",
      findStateBtn: "રાજ્યનું સમયપત્રક જુઓ",
      practiceBtn: "સ્વ-ગણતરી પ્રેક્ટિસ (ડેમો)",
      askAiBtn: "સાથી AI સાથે વાત કરો",
      verifyRumorBtn: "અફવાની ચકાસણી કરો",
      stats: {
        citizens: "1.4 અબજ+ નાગરિકો",
        languages: "16+ મુખ્ય ભાષાઓ",
        phases: "2 સુવ્યવસ્થિત તબક્કા",
        digitalFirst: "100% ડિજિટલ અને મોબાઇલ"
      }
    },
    phasesSection: {
      badge: "પ્રક્રિયા સમજો",
      title: "વસ્તી ગણતરી 2027 ના બે મુખ્ય તબક્કા",
      subtitle: "ભારતની વસ્તી ગણતરી બે સુવ્યવસ્થિત તબક્કામાં હાથ ધરવામાં આવે છે.",
      phase1Title: "તબક્કો 1: મકાન યાદી અને આવાસ ગણતરી",
      phase2Title: "તબક્કો 2: વસ્તી ગણતરી",
      exploreQuestions: "પ્રશ્નો જુઓ",
      questionsCount: "પ્રશ્નો"
    },
    stateFinder: {
      badge: "રાજ્યવાર સમયપત્રક",
      title: "તમારા રાજ્ય / કેન્દ્રશાસિત પ્રદેશ માટે સમયપત્રક",
      subtitle: "તમારું રાજ્ય પસંદ કરો અને સમયમર્યાદા, પ્રાદેશિક ભાષાઓ અને સહાયતા કેન્દ્રની વિગતો મેળવો.",
      selectState: "રાજ્ય પસંદ કરો...",
      phase1Timeline: "તબક્કો 1 સમયગાળો (મકાન યાદી)",
      phase2Timeline: "તબક્કો 2 સમયગાળો (વસ્તી)",
      languagesSupported: "પ્રાદેશિક ભાષાઓ",
      helpline: "નાગરિક હેલ્પડેસ્ક",
      historicalPop: "2011 વસ્તી ગણતરી",
      projectedPop: "2027 અંદાજિત વસ્તી"
    },
    selfEnum: {
      badge: "ડિજિટલ નાગરિક સશક્તિકરણ",
      title: "ડિજિટલ સ્વ-ગણતરી માર્ગદર્શિકા અને પ્રેક્ટિસ સેન્ડબોક્સ",
      subtitle: "તમારી વિગતો ઓનલાઇન સરળતાથી ભરો. ડેમો સેન્ડબોક્સમાં પ્રેક્ટિસ કરો.",
      step1Title: "1. મોબાઇલ પ્રમાણીકરણ",
      step2Title: "2. ઘર અને સુવિધાઓની વિગતો",
      step3Title: "3. વ્યક્તિગત વિગતો",
      step4Title: "4. રેફરન્સ ટોકન મેળવો",
      trySandboxBtn: "પ્રેક્ટિસ સેન્ડબોક્સ શરૂ કરો",
      generateChecklistBtn: "તૈયારી ચેકલિસ્ટ બનાવો",
      sandboxNotice: "ડેમો સેન્ડબોક્સ: અહીં કોઈ વાસ્તવિક વ્યક્તિગત ડેટા સાચવવામાં આવતો નથી."
    },
    assistant: {
      badge: "નાગરિક AI સાથી",
      title: "વસ્તી ગણતરી 2027 વિશે કંઈપણ પૂછો",
      subtitle: "નિયમો, દસ્તાવેજો, ભાડુઆત માર્ગદર્શિકા અને ગોપનીયતા પર ઝડપી અને વિશ્વસનીય જવાબો.",
      inputPlaceholder: "તમારો પ્રશ્ન લખો...",
      askBtn: "પૂછો",
      quickQuestions: "મહત્વપૂર્ણ પ્રશ્નો:",
      listening: "સાંભળી રહ્યા છીએ...",
      speakResponse: "સાંભળો",
      disclaimer: "સાથી AI સેન્સસ એક્ટ 1948 ના આધારે માહિતી પૂરી પાડે છે."
    },
    privacy: {
      badge: "કાનૂની સુરક્ષા અને હક્કો",
      title: "તમારી માહિતી કાયદા મુજબ 100% ગોપનીય છે",
      subtitle: "સેન્સસ એક્ટ 1948 ની કલમ 15 હેઠળ સંપૂર્ણ સુરક્ષા.",
      section15Title: "કલમ 15: સંપૂર્ણ ગોપનીયતાની ખાતરી",
      section15Desc: "તમારી વિગતો કોર્ટ કે આવકવેરા વિભાગને પણ આપી શકાતી નથી.",
      willAskTitle: "ગણતરીકાર શું પૂછશે",
      willNeverAskTitle: "ગણતરીકાર શું ક્યારેય નહીં પૂછે"
    },
    myths: {
      badge: "અફવા નિવારણ",
      title: "વસ્તી ગણતરી 2027 ભ્રમ નિવારણ (MythBuster)",
      subtitle: "ખોટા મેસેજથી બચો. સાચી સત્તાવાર માહિતી અહીં ચકાસો.",
      searchPlaceholder: "અફવાઓ શોધો (OTP, બેંક, આધાર, ભાડું)...",
      filterAll: "બધી શ્રેણીઓ",
      officialVerdict: "સત્તાવાર સત્ય",
      tip: "નાગરિકો માટે સૂચના"
    },
    dataExplorer: {
      badge: "ડેટા એક્સપ્લોરર",
      title: "ઐતિહાસિક વસ્તી ગણતરી દ્વારા ભારતની પ્રગતિ",
      subtitle: "1951 થી 2011 સુધીના આંકડા અને 2027 ના અંદાજો જુઓ.",
      literacyTab: "સાક્ષરતા દર (%)",
      amenitiesTab: "આવાસ અને વીજળી સુવિધા (%)",
      sexRatioTab: "જાતિ ગુણોત્તર",
      urbanizationTab: "શહેરીકરણ દર (%)",
      dataSourceCitation: "ડેટા સ્ત્રોત: રજિસ્ટ્રાર જનરલ અને સેન્સસ કમિશનર, ભારત (ORGI)."
    }
  },
  kn: {
    disclaimer: {
      badge: "ಸರ್ಕಾರೇತರ ನಾಗರಿಕ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆ",
      text: "ಸೆನ್ಸಸ್ ಸಾಥಿ AI (CensusSaathi AI) ಒಂದು ಸ್ವತಂತ್ರ ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶಿ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ವೇದಿಕೆಯಲ್ಲ.",
      officialPortalLink: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ವೀಕ್ಷಿಸಿ (censusindia.gov.in)"
    },
    nav: {
      phases: "ಎರಡು ಹಂತಗಳು",
      schedule: "ರಾಜ್ಯ ವೇಳಾಪಟ್ಟಿ",
      selfEnum: "ಸ್ವಯಂ ಗಣತಿ",
      aiAssistant: "ಸಾಥಿ AI",
      privacy: "ಗೌಪ್ಯತೆ & ಹಕ್ಕುಗಳು",
      mythBuster: "ವದಂತಿ ಪರಿಶೀಲನೆ",
      dataExplorer: "ಮಾಹಿತಿ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      practiceBtn: "ಪ್ರಾಕ್ಟೀಸ್ ಸಿಮ್ಯುಲೇಟರ್"
    },
    hero: {
      tagline: "ಜನಗಣತಿ 2027 ಕ್ಕಾಗಿ ಭಾರತದ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗದರ್ಶಿ",
      mainHeading: "ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯ ನಾಗರಿಕನಿಗಾಗಿ ಜನಗಣತಿ 2027 ಸುಲಭೀಕರಣ",
      subHeading: "ಭಾರತದ ಮೊದಲ ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಜನಗಣತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಅಭ್ಯಾಸ ಮಾಡಿ, ವದಂತಿಗಳಿಂದ ದೂರವಿರಿ ಮತ್ತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ AI ಯೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಿ.",
      findStateBtn: "ರಾಜ್ಯದ ವೇಳಾಪಟ್ಟಿ ನೋಡಿ",
      practiceBtn: "ಸ್ವಯಂ ಗಣತಿ ಅಭ್ಯಾಸ (ಡೆಮೊ)",
      askAiBtn: "ಸಾಥಿ AI ಗೆ ಕೇಳಿ",
      verifyRumorBtn: "ವದಂತಿ ಪರಿಶೀಲಿಸಿ",
      stats: {
        citizens: "140 ಕೋಟಿ+ ನಾಗರಿಕರು",
        languages: "16+ ಪ್ರಮುಖ ಭಾಷೆಗಳು",
        phases: "2 ಸಂಘಟಿತ ಹಂತಗಳು",
        digitalFirst: "100% ಡಿಜಿಟಲ್ & ಮೊಬೈಲ್"
      }
    },
    phasesSection: {
      badge: "ಪ್ರಕ್ರಿಯೆ ತಿಳಿಯಿರಿ",
      title: "ಜನಗಣತಿ 2027 ರ ಎರಡು ಪ್ರಮುಖ ಹಂತಗಳು",
      subtitle: "ನಿಖರವಾದ ಗಣತಿಗಾಗಿ ದೇಶಾದ್ಯಂತ ಎರಡು ಹಂತಗಳಲ್ಲಿ ಜನಗಣತಿ ನಡೆಸಲಾಗುತ್ತದೆ.",
      phase1Title: "ಹಂತ 1: ಮನೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ವಸತಿ ಗಣತಿ",
      phase2Title: "ಹಂತ 2: ಜನಸಂಖ್ಯಾ ಗಣತಿ",
      exploreQuestions: "ಪ್ರಶ್ನೆಗಳ ವಿವರ ನೋಡಿ",
      questionsCount: "ಪ್ರಶ್ನೆಗಳು"
    },
    stateFinder: {
      badge: "ರಾಜ್ಯ ವೇಳಾಪಟ್ಟಿ",
      title: "ನಿಮ್ಮ ರಾಜ್ಯ / ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶದ ವೇಳಾಪಟ್ಟಿ",
      subtitle: "ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ದಿನಾಂಕಗಳು, ಭಾಷೆಗಳು ಮತ್ತು ಸಹಾಯವಾಣಿ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.",
      selectState: "ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ...",
      phase1Timeline: "ಹಂತ 1 ಅವಧಿ (ಮನೆಗಳ ಪಟ್ಟಿ)",
      phase2Timeline: "ಹಂತ 2 ಅವಧಿ (ಜನಸಂಖ್ಯೆ)",
      languagesSupported: "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು",
      helpline: "ನಾಗರಿಕ ಸಹಾಯವಾಣಿ",
      historicalPop: "2011 ಜನಗಣತಿ ಜನಸಂಖ್ಯೆ",
      projectedPop: "2027 ಅಂದಾಜು ಜನಸಂಖ್ಯೆ"
    },
    selfEnum: {
      badge: "ಡಿಜಿಟಲ್ ನಾಗರಿಕ ಸಬಲೀಕರಣ",
      title: "ಡಿಜಿಟಲ್ ಸ್ವಯಂ ಗಣತಿ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್",
      subtitle: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸುಲಭವಾಗಿ ಭರ್ತಿ ಮಾಡಿ. ಡೆಮೊ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಅಭ್ಯಾಸ ಮಾಡಿ.",
      step1Title: "1. ಮೊಬೈಲ್ ದೃಢೀಕರಣ",
      step2Title: "2. ಮನೆ ಮತ್ತು ಸೌಲಭ್ಯಗಳ ವಿವರ",
      step3Title: "3. ವೈಯಕ್ತಿಕ ವಿವರಗಳು",
      step4Title: "4. ರೆಫರೆನ್ಸ್ ಟೋಕನ್ ಪಡೆಯಿರಿ",
      trySandboxBtn: "ಅಭ್ಯಾಸ ಪ್ರಾರಂಭಿಸಿ",
      generateChecklistBtn: "ಸಿದ್ಧತಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
      sandboxNotice: "ಡೆಮೊ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್: ಇಲ್ಲಿ ಯಾವುದೇ ನೈಜ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಉಳಿಸಲಾಗುವುದಿಲ್ಲ."
    },
    assistant: {
      badge: "ನಾಗರಿಕ AI ಸಹಾಯಕ",
      title: "ಜನಗಣತಿ 2027 ರ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಿ",
      subtitle: "ನಿಯಮಗಳು, ದಾಖಲೆಗಳು, ಬಾಡಿಗೆದಾರರ ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ಗೌಪ್ಯತೆಯ ಬಗ್ಗೆ ತ್ವರಿತ ಉತ್ತರಗಳು.",
      inputPlaceholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ...",
      askBtn: "ಕೇಳಿ",
      quickQuestions: "ಪ್ರಮುಖ ಪ್ರಶ್ನೆಗಳು:",
      listening: "ಆಲಿಸಲಾಗುತ್ತಿದೆ...",
      speakResponse: "ಓದಿ ಕೇಳಿ",
      disclaimer: "ಸಾಥಿ AI ಜನಗಣತಿ ಕಾಯ್ದೆ 1948 ರ ಆಧಾರದ ಮೇಲೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ."
    },
    privacy: {
      badge: "ಕಾನೂನು ರಕ್ಷಣೆ & ಹಕ್ಕುಗಳು",
      title: "ನಿಮ್ಮ ಮಾಹಿತಿ ಕಾನೂನಿನ ಪ್ರಕಾರ 100% ಗೌಪ್ಯ",
      subtitle: "ಜನಗಣತಿ ಕಾಯ್ದೆ 1948 ರ ಸೆಕ್ಷನ್ 15 ರ ಅಡಿಯಲ್ಲಿ ಸಂಪೂರ್ಣ ರಕ್ಷಣೆ.",
      section15Title: "ಸೆಕ್ಷನ್ 15: ಸಂಪೂರ್ಣ ಗೌಪ್ಯತೆ ಭರವಸೆ",
      section15Desc: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ನ್ಯಾಯಾಲಯ ಅಥವಾ ಆದಾಯ ತೆರಿಗೆ ಇಲಾಖೆಯೂ ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ.",
      willAskTitle: "ಎನ್ಯೂಮರೇಟರ್‌ಗಳು ಏನು ಕೇಳುತ್ತಾರೆ",
      willNeverAskTitle: "ಎನ್ಯೂಮರೇಟರ್‌ಗಳು ಎಂದಿಗೂ ಕೇಳದ ವಿಷಯಗಳು"
    },
    myths: {
      badge: "ವದಂತಿ ಪರಿಶೀಲನೆ",
      title: "ಜನಗಣತಿ 2027 ತಪ್ಪು ಕಲ್ಪನೆಗಳು vs ನೈಜ ಸತ್ಯ",
      subtitle: "ಸುಳ್ಳು ಸುದ್ದಿಗಳನ್ನು ನಂಬಬೇಡಿ. ಅಧಿಕೃತ ಸತ್ಯವನ್ನು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
      searchPlaceholder: "ವದಂತಿಗಳನ್ನು ಹುಡುಕಿ (OTP, ಬ್ಯಾಂಕ್, ಆಧಾರ್, ಬಾಡಿಗೆ)...",
      filterAll: "ಎಲ್ಲಾ ವಿಭಾಗಗಳು",
      officialVerdict: "ಅಧಿಕೃತ ಸತ್ಯಾಂಶ",
      tip: "ನಾಗರಿಕರಿಗೆ ಸಲಹೆ"
    },
    dataExplorer: {
      badge: "ಮಾಹಿತಿ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      title: "ಐತಿಹಾಸಿಕ ಜನಗಣತಿಯ ಮೂಲಕ ಭಾರತದ ಪ್ರಗತಿ",
      subtitle: "1951 ರಿಂದ 2011 ರವರೆಗಿನ ಅಂಕಿಅಂಶಗಳು ಮತ್ತು 2027 ರ ಮುನ್ನೋಟಗಳು.",
      literacyTab: "ಸಾಕ್ಷರತಾ ಪ್ರಮಾಣ (%)",
      amenitiesTab: "ವಸತಿ & ವಿದ್ಯುತ್ ಸೌಲಭ್ಯ (%)",
      sexRatioTab: "ಲಿಂಗ ಅನುಪಾತ",
      urbanizationTab: "ನಗರೀಕರಣ ಪ್ರಮಾಣ (%)",
      dataSourceCitation: "ಮೂಲ: ರಿಜಿಸ್ಟ್ರಾರ್ ಜನರಲ್ ಮತ್ತು ಜನಗಣತಿ ಆಯುಕ್ತರು, ಭಾರತ (ORGI)."
    }
  }
};
