import type { LanguageCode } from './languageConfig';

export interface TranslationSchema {
  common: {
    appName: string;
    guideBadge: string;
    disclaimer: string;
    officialPortalBtn: string;
    officialOrgName: string;
    sourcePrefix: string;
    statutoryConfidentiality: string;
    subjectToNotification: string;
    verifiedGuidance: string;
    close: string;
    gotIt: string;
    loading: string;
    back: string;
    next: string;
    previous: string;
  };
  nav: {
    home: string;
    howItWorks: string;
    schedule: string;
    selfEnumeration: string;
    dataExplorer: string;
    askAi: string;
  };
  home: {
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    exploreGuideBtn: string;
    viewTimelineBtn: string;
    stats: {
      phasesCount: string;
      phasesLabel: string;
      languagesCount: string;
      languagesLabel: string;
      modeCount: string;
      modeLabel: string;
      sourceNote: string;
    };
    essentialServicesTitle: string;
    cards: {
      understandTitle: string;
      understandDesc: string;
      scheduleTitle: string;
      scheduleDesc: string;
      selfEnumTitle: string;
      selfEnumDesc: string;
      askAiTitle: string;
      askAiDesc: string;
      askAiBtn: string;
      verifyTitle: string;
      verifyDesc: string;
      dataTitle: string;
      dataDesc: string;
    };
    empowerTitle: string;
    empowerDesc: string;
    pillarZeroData: string;
    pillarMultilingual: string;
    dashboardTitle: string;
    dashboardBadge: string;
  };
  schedule: {
    badge: string;
    title: string;
    subtitle: string;
    selectLabel: string;
    selectPlaceholder: string;
    allIndiaOption: string;
    statusTitle: string;
    directorateTitle: string;
    phase1Title: string;
    phase2Title: string;
    selfEnumTitle: string;
    notesTitle: string;
    viewOfficialPortal: string;
    errorNotFound: string;
    searchLocationPlaceholder?: string;
    useMyLocation?: string;
    locating?: string;
    locationAccessDenied?: string;
    locationUnavailable?: string;
    locationNotSupported?: string;
    interactiveMapTitle?: string;
    interactiveMapSubtitle?: string;
    districtsInState?: string;
    currentPhaseLabel?: string;
    progressMetricsLabel?: string;
    progressUnavailableTitle?: string;
    progressUnavailableDesc?: string;
    historicalCensusTitle?: string;
    historicalCensusDisclaimer?: string;
    trustBoundary?: string;
  };
  howItWorks?: {
    badge: string;
    title: string;
    subtitle: string;
    stepsTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    step6Title: string;
    step6Desc: string;
    step7Title: string;
    step7Desc: string;
    trustTitle: string;
  };
  selfEnumeration: {
    badge: string;
    title: string;
    subtitle: string;
    stepProgress: string;
    guidedProgress: string;
    prevBtn: string;
    nextBtn: string;
    restartBtn: string;
    checkScheduleBtn: string;
    officialPortalBtn: string;
    steps: {
      step1Title: string;
      step1Desc: string;
      step1Badge: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step3Check1: string;
      step3Check2: string;
      step4Title: string;
      step4Desc: string;
      step5Title: string;
      step5Desc: string;
      step5Badge: string;
      step6Title: string;
      step6Desc: string;
      step6Badge: string;
    };
    readyCardTitle: string;
    readyCardDesc: string;
    securityAdvisory: string;
  };
  privacy: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      statutoryTitle: string;
      statutoryDesc: string;
      securityTitle: string;
      securityDesc: string;
      verifiedTitle: string;
      verifiedDesc: string;
      zeroDataTitle: string;
      zeroDataDesc: string;
      guaranteeBadge: string;
    };
    securityReminderTitle: string;
    securityReminderDesc: string;
    understandingCensusTitle: string;
    whyGovtTitle: string;
    whyGovtDesc: string;
    legalConfTitle: string;
    legalConfDesc: string;
    dataPolicyTitle: string;
    whatWeCollectTitle: string;
    whatWeCollectList: string[];
    whatWeNeverTitle: string;
    whatWeNeverList: string[];
    comparisonTitle: string;
    comparisonSubtitle: string;
    officialRoleTitle: string;
    officialRoleDesc: string;
    saathiRoleTitle: string;
    saathiRoleDesc: string;
    saathiRoleBadge: string;
    visitOfficialSiteBtn: string;
  };
  dataExplorer: {
    badge: string;
    title: string;
    subtitle: string;
    filterRegion: string;
    filterIndicator: string;
    filterTimePeriod: string;
    applyFiltersBtn: string;
    card1Title: string;
    card1Subtitle: string;
    card2Title: string;
    card2Subtitle: string;
    card3Title: string;
    card3Subtitle: string;
    card3Rural: string;
    card3Urban: string;
    card4Title: string;
    card4Subtitle: string;
    aiInsightsTitle: string;
    aiInsightsDesc: string;
    explainDataBtn: string;
    modalTitle: string;
    modalPoints: string[];
  };
  askAi: {
    title: string;
    subtitle: string;
    welcomeHeading: string;
    placeholder: string;
    askBtn: string;
    clearConversation: string;
    voiceInputTitle: string;
    voiceListening: string;
    exploreTopicsTitle: string;
    consultingKnowledge: string;
    advisoryBox: string;
  };
  modal: {
    chooseLanguageTitle: string;
    chooseLanguageSubtitle: string;
    continueBtn: string;
    changeLaterNote: string;
  };
  footer: {
    privacyLawTitle: string;
    officialPortalLink: string;
    independenceDisclaimer: string;
    officialPortalNotice: string;
    noCollectionNotice: string;
    copyright: string;
    links: {
      home: string;
      schedule: string;
      selfEnum: string;
      privacy: string;
      data: string;
    };
  };
  auth?: {
    loginBtn: string;
    createAccountBtn: string;
    emailLabel: string;
    passwordLabel: string;
    nameLabel: string;
    welcomeBack: string;
    createAccountTitle: string;
    loginSubtitle: string;
    createAccountSubtitle: string;
    continueAsGuest: string;
    logout: string;
    invalidCredentials: string;
    accountCreated: string;
    alreadyHaveAccount: string;
    dontHaveAccount: string;
    loginLink: string;
    createAccountLink: string;
    adminDashboard: string;
    nameRequired: string;
    validEmailRequired: string;
    passwordMinLength: string;
    authPrivacyNotice: string;
    unauthorizedTitle: string;
    unauthorizedDesc: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  en: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "Census 2027 • Citizen Information Guide",
      disclaimer: "CensusSaathi is an independent citizen information and guidance platform. It does not replace the official Census system.",
      officialPortalBtn: "Visit Official Government Portal",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "Source",
      statutoryConfidentiality: "Section 15, The Census Act, 1948",
      subjectToNotification: "Subject to Official Gazette Notification",
      verifiedGuidance: "Verified Educational Guidance",
      close: "Close",
      gotIt: "Got it",
      loading: "Loading...",
      back: "Back",
      next: "Next",
      previous: "Previous"
    },
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      schedule: "My Schedule",
      selfEnumeration: "Self-Enumeration",
      dataExplorer: "Data Explorer",
      askAi: "Ask AI"
    },
    home: {
      heroTitle: "India's Census.",
      heroTitleHighlight: "Made Simple.",
      heroSubtitle: "Understand the Census process, explore proposed schedules, learn about digital Self-Enumeration guidance, and get answers in your preferred language.",
      exploreGuideBtn: "Explore Census Guide",
      viewTimelineBtn: "View Timeline",
      stats: {
        phasesCount: "2",
        phasesLabel: "Phases Planned",
        languagesCount: "22",
        languagesLabel: "Scheduled Languages",
        modeCount: "Hybrid",
        modeLabel: "Digital & In-Person",
        sourceNote: "Framework: Census Rules & ORGI Guidelines"
      },
      essentialServicesTitle: "Essential Services",
      cards: {
        understandTitle: "Understand Census",
        understandDesc: "Learn about the two critical phases: Houselisting and Population Enumeration, and what they mean for you.",
        scheduleTitle: "My Schedule",
        scheduleDesc: "Find proposed dates, expected windows, and requirements for your State or Union Territory.",
        selfEnumTitle: "Self-Enumeration Guide",
        selfEnumDesc: "Step-by-step guidance on how digital self-enumeration works securely when enabled by authorities.",
        askAiTitle: "Ask CensusSaathi AI",
        askAiDesc: "Have questions? Chat with our intelligent assistant for instant, verified educational guidance in your language.",
        askAiBtn: "Start Chat",
        verifyTitle: "Verify Information",
        verifyDesc: "Cross-check facts and identify misleading claims. Ensure you are acting on official government notifications.",
        dataTitle: "Explore Historical Data",
        dataDesc: "Access published historical census data, interactive charts, and insights to understand India's demographic journey."
      },
      empowerTitle: "Empowering Citizens with Data",
      empowerDesc: "The decennial Census is the largest administrative and statistical exercise in the world. CensusSaathi provides clear, accessible guidance to help citizens understand procedures, timeline updates, and participation rights.",
      pillarZeroData: "Zero Personal Data Collection Policy",
      pillarMultilingual: "Multilingual Support for All Regions",
      dashboardTitle: "Demographics at a Glance (1951-2011)",
      dashboardBadge: "Citizen Information & Guidance Portal"
    },
    schedule: {
      badge: "Timeline & Operational Status",
      title: "Census 2027 Schedule & Guidance",
      subtitle: "Explore operational status, regional directorates, and anticipated notification windows for every Indian State and Union Territory.",
      selectLabel: "Select State or Union Territory",
      selectPlaceholder: "-- Choose a State / UT --",
      allIndiaOption: "All India (National Timeline Overview)",
      statusTitle: "Official Notification Status",
      directorateTitle: "Operational Directorate",
      phase1Title: "Phase 1: Houselisting & Housing",
      phase2Title: "Phase 2: Population Enumeration",
      selfEnumTitle: "Digital Self-Enumeration Window",
      notesTitle: "Regional Context & Logistics",
      viewOfficialPortal: "Check Official Gazette Announcements",
      errorNotFound: "Selected region not found. Please select a valid State or UT.",
      searchLocationPlaceholder: "Search State, UT, District or City (e.g. Pune, Maharashtra)...",
      useMyLocation: "Use my location",
      locating: "Locating...",
      locationAccessDenied: "Location access was not provided. You can search for your location manually.",
      locationUnavailable: "Unable to retrieve location. Please search manually.",
      locationNotSupported: "Geolocation is not supported by your browser.",
      interactiveMapTitle: "Interactive India Census Map",
      interactiveMapSubtitle: "Click any State or Union Territory to inspect regional schedule & district progress",
      districtsInState: "Districts in",
      currentPhaseLabel: "Statutory Census Phase",
      progressMetricsLabel: "Live Census Fieldwork Progress",
      progressUnavailableTitle: "Official progress data is not currently available through CensusSaathi.",
      progressUnavailableDesc: "Live enumeration metrics (households enumerated, active enumerator counts, and completion percentages) have not been published by the Office of the Registrar General & Census Commissioner, India (ORGI). CensusSaathi does not generate simulated progress numbers.",
      historicalCensusTitle: "HISTORICAL CENSUS DATA",
      historicalCensusDisclaimer: "Historical Census data — not a live population count.",
      trustBoundary: "CensusSaathi provides citizen information and guidance. It is not an official Government of India Census system."
    },
    howItWorks: {
      badge: "Platform Workflow Guide",
      title: "How CensusSaathi Works",
      subtitle: "A simple, verified citizen guidance journey to help you understand and navigate the upcoming Census with clarity and confidence.",
      stepsTitle: "The 7-Step CensusSaathi Experience",
      step1Title: "Discover Census Information",
      step1Desc: "Understand the purpose, decennial significance, and statutory background of the upcoming Census 2027.",
      step2Title: "Select Your Location",
      step2Desc: "Use our interactive map or location search (e.g. Pune, Maharashtra) to check regional schedules, directorates, and notification windows.",
      step3Title: "Understand Census Phases",
      step3Desc: "Learn the procedural difference between Phase 1 (Houselisting & Housing Census) and Phase 2 (Population Enumeration), including digital self-enumeration.",
      step4Title: "Ask CensusSaathi GenAI",
      step4Desc: "Ask questions in your preferred Indian language. Our AI is strictly grounded on official notifications and never fabricates live Census statistics.",
      step5Title: "Verify Census Claims & Myths",
      step5Desc: "Cross-check rumors regarding Aadhaar mandates, biometrics, or fees. Review legal confidentiality guarantees under Section 15 of The Census Act, 1948.",
      step6Title: "Explore Historical Census Data",
      step6Desc: "Inspect verified historical Census data from 1951 to 2011 across population growth, literacy progression, and gender ratios without simulated figures.",
      step7Title: "Access Official Census Services",
      step7Desc: "When official gazette notifications are published, follow direct links to the official government portal (censusindia.gov.in) to participate safely.",
      trustTitle: "Our Core Principles & Guardrails"
    },
    selfEnumeration: {
      badge: "Informational Guide",
      title: "Self-Enumeration: A Simple Step-by-Step Guide",
      subtitle: "Understand how online self-enumeration operates when officially opened. We've outlined general procedural steps to help you prepare accurately.",
      stepProgress: "Step {current} of {total}: {title}",
      guidedProgress: "{percent}% Guided",
      prevBtn: "Previous Step",
      nextBtn: "Next Step",
      restartBtn: "Restart Guide",
      checkScheduleBtn: "Check My Schedule",
      officialPortalBtn: "Official Portal",
      steps: {
        step1Title: "What is Self-Enumeration?",
        step1Desc: "A voluntary online process allowing households to enter their demographic details directly on the official portal before the enumerator's physical visit.",
        step1Badge: "Voluntary Digital Mode",
        step2Title: "Check your applicable schedule",
        step2Desc: "Self-enumeration is activated for specific pre-notified windows. Always check official notifications for your State or Union Territory.",
        step3Title: "Prepare the required information",
        step3Desc: "Keep standard demographic information (age, relationship, literacy, occupation) and household amenity details ready before beginning.",
        step3Check1: "Basic Demographics",
        step3Check2: "Household Amenities",
        step4Title: "Visit the official portal",
        step4Desc: "Access the official government portal using your verified mobile number and secure OTP. Ensure the domain ends in official government extensions (.gov.in).",
        step5Title: "Complete the official process",
        step5Desc: "Fill in the digital forms carefully on the government portal. Review all entries for accuracy before submitting.",
        step5Badge: "Draft & Review Support",
        step6Title: "Keep your reference info",
        step6Desc: "Save the acknowledgement code generated by the portal. You can present this code to the enumerator during verification to complete the process smoothly.",
        step6Badge: "Acknowledgement Code"
      },
      readyCardTitle: "Ready to learn more?",
      readyCardDesc: "Review official documentation and announcements directly on the official Registrar General of India portal.",
      securityAdvisory: "Important Notice: CensusSaathi is an independent citizen information and guidance platform. It does not replace the official Census system. We never collect or store individual census responses or identity credentials on this website."
    },
    privacy: {
      badge: "Privacy & Trust Information",
      title: "Your information.\nYour trust.",
      subtitle: "We are committed to transparency and helping you understand Census privacy protections. Learn how statutory confidentiality works and why our guidance tool never collects personal data.",
      cards: {
        statutoryTitle: "Statutory Confidentiality",
        statutoryDesc: "Official Census data is protected by Section 15 of the Census Act, 1948, and is used exclusively for aggregated statistical purposes.",
        securityTitle: "Security Guidance",
        securityDesc: "We provide verified safety tips to protect citizens against phishing, fake census websites, and fraud attempts.",
        verifiedTitle: "Verified Sources",
        verifiedDesc: "All our informational summaries are derived directly from published Ministry of Home Affairs and ORGI public documentation.",
        zeroDataTitle: "Zero Personal Data",
        zeroDataDesc: "CensusSaathi never requests, collects, or stores your personal census records, IDs, or financial information.",
        guaranteeBadge: "Independent Tool Guarantee"
      },
      securityReminderTitle: "Critical Security Reminder",
      securityReminderDesc: "Neither the official Census authority nor CensusSaathi will ever ask for your banking passwords, OTPs, PIN numbers, or payment for census enumeration. Report fraudulent requests immediately.",
      understandingCensusTitle: "Understanding Census Data",
      whyGovtTitle: "Why census data is collected by the Government",
      whyGovtDesc: "Census data is gathered to plan national public infrastructure, healthcare, schools, and social welfare programs. It provides statistical benchmarks for governance.",
      legalConfTitle: "Legal confidentiality under the Census Act",
      legalConfDesc: "Under Section 15 of the Census Act, 1948, individual census records are confidential and non-admissible as evidence in courts. Data is released strictly in aggregated format.",
      dataPolicyTitle: "Data Policy at CensusSaathi",
      whatWeCollectTitle: "Client-Side Preferences (Voluntary)",
      whatWeCollectList: [
        "Selected interface language preference",
        "Temporary filter selections for historical charts",
        "Session chat queries to render responses"
      ],
      whatWeNeverTitle: "What We Never Collect or Store",
      whatWeNeverList: [
        "Official personal census returns",
        "National identity numbers (Aadhaar, PAN, Voter ID)",
        "Bank accounts, cards, or financial details",
        "Biometric data of any individual"
      ],
      comparisonTitle: "Official Census System vs. CensusSaathi",
      comparisonSubtitle: "Understanding the distinct roles in the Census ecosystem.",
      officialRoleTitle: "Official Census System (ORGI)",
      officialRoleDesc: "The only authorized government entity (Office of the Registrar General & Census Commissioner, India) that legally conducts the official Census, issues notifications, and collects statutory census data.",
      saathiRoleTitle: "CensusSaathi (Independent Tool)",
      saathiRoleDesc: "An independent citizen information and guidance platform created to help citizens understand public procedures and explore historical civic data. It does not replace the official Census system.",
      saathiRoleBadge: "Independent Public Guide",
      visitOfficialSiteBtn: "Visit Official Registrar General Website"
    },
    dataExplorer: {
      badge: "Historical Census Data (1951 - 2011)",
      title: "Explore India's Census Story",
      subtitle: "Discover how India's population and key indicators changed across published historical decadal Censuses (1951–2011).",
      filterRegion: "Region",
      filterIndicator: "Indicator Focus",
      filterTimePeriod: "Time Period: 1951 - {year}",
      applyFiltersBtn: "Apply Filters",
      card1Title: "Population Growth Trend",
      card1Subtitle: "Total population in millions (1951-2011)",
      card2Title: "Literacy & Education",
      card2Subtitle: "Overall literacy rate percentage (Census 2011: 74.04%)",
      card3Title: "Rural vs Urban Split",
      card3Subtitle: "Distribution in Census 2011",
      card3Rural: "Rural (68.8%)",
      card3Urban: "Urban (31.2%)",
      card4Title: "State Comparison",
      card4Subtitle: "Top states by population in 2011 (millions)",
      aiInsightsTitle: "AI Data Insights",
      aiInsightsDesc: "Get a plain-English summary of the current historical data view. Understand the demographic journey behind the numbers without the jargon.",
      explainDataBtn: "Explain this data",
      modalTitle: "Historical Data Summary: {region}",
      modalPoints: [
        "India's decadal population growth transitioned steadily between 1951 and 2011, reaching 1.21 Billion citizens in the 2011 Census.",
        "The overall national literacy rate marked significant progress, rising to 74.04% with substantial rural improvements.",
        "The demographic distribution reflects 68.8% rural and 31.2% urban residence, while Uttar Pradesh, Maharashtra, and Bihar remain the top populated regions."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "Ask educational questions about Census 2027 in your preferred language.",
      welcomeHeading: "How can I help you understand Census 2027?",
      placeholder: "Ask a question in {language} (e.g. Phase 1, Privacy, Schedule)...",
      askBtn: "Ask",
      clearConversation: "Clear Conversation",
      voiceInputTitle: "Click for Voice Input",
      voiceListening: "Listening...",
      exploreTopicsTitle: "Explore Topics",
      consultingKnowledge: "Consulting knowledge base...",
      advisoryBox: "CensusSaathi is an independent citizen information platform and does not replace the official Census system. Always cross-reference with official government portals (censusindia.gov.in) for notifications and deadlines."
    },
    modal: {
      chooseLanguageTitle: "Choose your language",
      chooseLanguageSubtitle: "Understand Census information in a language you're comfortable with.",
      continueBtn: "Continue",
      changeLaterNote: "You can change this later in settings."
    },
    footer: {
      privacyLawTitle: "Privacy & Law",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi is an independent citizen information and guidance platform. It is not affiliated with, authorized by, endorsed by, or an official service of the Government of India or the Office of the Registrar General and Census Commissioner, India (ORGI).",
      officialPortalNotice: "For official Census information, notifications, and Census-related services, please refer to the official Census of India portal at censusindia.gov.in.",
      noCollectionNotice: "CensusSaathi does not collect or submit official Census responses on behalf of citizens.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "Home",
        schedule: "Schedule",
        selfEnum: "Self-Enumeration",
        privacy: "Privacy & Law",
        data: "Historical Data"
      }
    },
    auth: {
      loginBtn: "Login",
      createAccountBtn: "Create Account",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      nameLabel: "Full Name",
      welcomeBack: "Welcome back",
      createAccountTitle: "Create your account",
      loginSubtitle: "Enter your credentials to access your CensusSaathi account.",
      createAccountSubtitle: "Sign up to personalize your Census guidance and schedules.",
      continueAsGuest: "Continue as Guest",
      logout: "Logout",
      invalidCredentials: "Invalid email or password",
      accountCreated: "Account successfully created! Redirecting...",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      loginLink: "Login here",
      createAccountLink: "Create Account",
      adminDashboard: "Admin Dashboard",
      nameRequired: "Name is required",
      validEmailRequired: "A valid email is required",
      passwordMinLength: "Password must be at least 6 characters",
      authPrivacyNotice: "CensusSaathi accounts are independent citizen accounts. Logging in is optional and does not submit official responses to the Government of India.",
      unauthorizedTitle: "Administrator Access Required",
      unauthorizedDesc: "This portal is restricted to authorized CensusSaathi administrators. Please log in with admin credentials."
    }
  },

  hi: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "जनगणना 2027 • नागरिक सूचना मार्गदर्शिका",
      disclaimer: "CensusSaathi एक स्वतंत्र नागरिक सूचना एवं मार्गदर्शन मंच है। यह आधिकारिक जनगणना प्रणाली का स्थान नहीं लेता है।",
      officialPortalBtn: "आधिकारिक सरकारी पोर्टल पर जाएं",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "स्रोत",
      statutoryConfidentiality: "धारा 15, जनगणना अधिनियम, 1948",
      subjectToNotification: "आधिकारिक राजपत्र अधिसूचना के अधीन",
      verifiedGuidance: "सत्यापित शैक्षणिक मार्गदर्शन",
      close: "बंद करें",
      gotIt: "समझ गया",
      loading: "लोड हो रहा है...",
      back: "पीछे",
      next: "आगे",
      previous: "पिछला"
    },
    nav: {
      home: "होम",
      howItWorks: "यह कैसे काम करता है",
      schedule: "मेरी समय-सारणी",
      selfEnumeration: "स्व-गणना",
      dataExplorer: "डेटा एक्सप्लोरर",
      askAi: "AI से पूछें"
    },
    home: {
      heroTitle: "भारत की जनगणना.",
      heroTitleHighlight: "हुई आसान।",
      heroSubtitle: "जनगणना प्रक्रिया को समझें, प्रस्तावित समय-सारणी देखें, डिजिटल स्व-गणना मार्गदर्शन प्राप्त करें और अपनी पसंदीदा भाषा में उत्तर पाएं।",
      exploreGuideBtn: "जनगणना गाइड देखें",
      viewTimelineBtn: "समय-सारणी देखें",
      stats: {
        phasesCount: "2",
        phasesLabel: "प्रस्तावित चरण",
        languagesCount: "22",
        languagesLabel: "अनुसूचित भाषाएं",
        modeCount: "हाइब्रिड",
        modeLabel: "डिजिटल एवं व्यक्तिगत",
        sourceNote: "ढांचा: जनगणना नियम एवं ORGI दिशानिर्देश"
      },
      essentialServicesTitle: "आवश्यक सेवाएं",
      cards: {
        understandTitle: "जनगणना को समझें",
        understandDesc: "दो महत्वपूर्ण चरणों: मकान सूचीकरण और जनसंख्या गणना के बारे में विस्तार से जानें।",
        scheduleTitle: "मेरी समय-सारणी",
        scheduleDesc: "अपने राज्य या केंद्र शासित प्रदेश के लिए प्रस्तावित तिथियां और आवश्यकताएं खोजें।",
        selfEnumTitle: "स्व-गणना गाइड",
        selfEnumDesc: "अधिकारियों द्वारा सक्षम होने पर डिजिटल स्व-गणना कैसे सुरक्षित रूप से काम करती है, इसका चरणबद्ध मार्गदर्शन।",
        askAiTitle: "CensusSaathi AI से पूछें",
        askAiDesc: "कोई सवाल है? अपनी भाषा में त्वरित, सत्यापित शैक्षणिक मार्गदर्शन के लिए हमारे सहायक से चैट करें।",
        askAiBtn: "चैट शुरू करें",
        verifyTitle: "जानकारी सत्यापित करें",
        verifyDesc: "तथ्यों की दोबारा जांच करें और भ्रामक दावों की पहचान करें। सुनिश्चित करें कि आप आधिकारिक अधिसूचनाओं पर भरोसा कर रहे हैं।",
        dataTitle: "ऐतिहासिक डेटा देखें",
        dataDesc: "भारत की जनसांख्यिकीय यात्रा को समझने के लिए प्रकाशित ऐतिहासिक जनगणना डेटा और चार्ट देखें।"
      },
      empowerTitle: "डेटा के साथ नागरिकों का सशक्तिकरण",
      empowerDesc: "दशकीय जनगणना दुनिया का सबसे बड़ा प्रशासनिक और सांख्यिकीय अभ्यास है। CensusSaathi नागरिकों को प्रक्रियाओं, समयसीमा और अधिकारों को समझने में स्पष्ट मार्गदर्शन प्रदान करता है।",
      pillarZeroData: "शून्य व्यक्तिगत डेटा संग्रह नीति",
      pillarMultilingual: "सभी क्षेत्रों के लिए बहुभाषी सहायता",
      dashboardTitle: "जनसांख्यिकी एक नज़र में (1951-2011)",
      dashboardBadge: "नागरिक सूचना एवं मार्गदर्शन पोर्टल"
    },
    schedule: {
      badge: "समयसीमा एवं परिचालन स्थिति",
      title: "जनगणना 2027 समय-सारणी एवं मार्गदर्शन",
      subtitle: "प्रत्येक भारतीय राज्य और केंद्र शासित प्रदेश के लिए परिचालन स्थिति, क्षेत्रीय निदेशालय और अपेक्षित अधिसूचना तिथियां देखें।",
      selectLabel: "राज्य या केंद्र शासित प्रदेश चुनें",
      selectPlaceholder: "-- राज्य / UT चुनें --",
      allIndiaOption: "अखिल भारतीय (राष्ट्रीय समय-सारणी अवलोकन)",
      statusTitle: "आधिकारिक अधिसूचना स्थिति",
      directorateTitle: "परिचालन निदेशालय",
      phase1Title: "चरण 1: मकान सूचीकरण एवं आवास",
      phase2Title: "चरण 2: जनसंख्या गणना",
      selfEnumTitle: "डिजिटल स्व-गणना विंडो",
      notesTitle: "क्षेत्रीय संदर्भ एवं रसद",
      viewOfficialPortal: "आधिकारिक राजपत्र घोषणाएं देखें",
      errorNotFound: "चयनित क्षेत्र नहीं मिला। कृपया वैध राज्य या केंद्र शासित प्रदेश चुनें।",
      searchLocationPlaceholder: "राज्य, केंद्र शासित प्रदेश, जिला या शहर खोजें (उदा. पुणे, महाराष्ट्र)...",
      useMyLocation: "मेरे स्थान का उपयोग करें",
      locating: "स्थान खोजा जा रहा है...",
      locationAccessDenied: "Location access was not provided. You can search for your location manually.",
      locationUnavailable: "स्थान प्राप्त करने में असमर्थ। कृपया मैन्युअल रूप से खोजें।",
      locationNotSupported: "आपके ब्राउज़र द्वारा जियोलोकेशन समर्थित नहीं है।",
      interactiveMapTitle: "इंटरएक्टिव भारत जनगणना मानचित्र",
      interactiveMapSubtitle: "क्षेत्रीय समय-सारणी और जिले की प्रगति देखने के लिए किसी भी राज्य या केंद्र शासित प्रदेश पर क्लिक करें",
      districtsInState: "जिले:",
      currentPhaseLabel: "वैधानिक जनगणना चरण",
      progressMetricsLabel: "जनगणना फील्डवर्क प्रगति",
      progressUnavailableTitle: "आधिकारिक प्रगति डेटा वर्तमान में CensusSaathi के माध्यम से उपलब्ध नहीं है।",
      progressUnavailableDesc: "मकानों की गणना, सक्रिय प्रगणकों और पूर्णता प्रतिशत का लाइव डेटा भारत के महारजिस्ट्रार एवं जनगणना आयुक्त कार्यालय (ORGI) द्वारा सार्वजनिक नहीं किया गया है। CensusSaathi कोई भी काल्पनिक प्रगति आंकड़े नहीं दिखाता है।",
      historicalCensusTitle: "ऐतिहासिक जनगणना डेटा",
      historicalCensusDisclaimer: "ऐतिहासिक जनगणना डेटा — यह वर्तमान लाइव जनसंख्या नहीं है।",
      trustBoundary: "CensusSaathi नागरिक सूचना और मार्गदर्शन प्रदान करता है। यह भारत सरकार की आधिकारिक जनगणना प्रणाली नहीं है।"
    },
    howItWorks: {
      badge: "प्लेटफ़ॉर्म कार्यप्रणाली गाइड",
      title: "CensusSaathi कैसे काम करता है",
      subtitle: "आगामी जनगणना को स्पष्टता और विश्वास के साथ समझने और नेविगेट करने में मदद करने के लिए एक सरल, सत्यापित नागरिक मार्गदर्शन यात्रा।",
      stepsTitle: "7-चरणीय CensusSaathi अनुभव",
      step1Title: "जनगणना जानकारी खोजें",
      step1Desc: "आगामी जनगणना 2027 के उद्देश्य, दशकीय महत्व और वैधानिक पृष्ठभूमि को समझें।",
      step2Title: "अपना स्थान चुनें",
      step2Desc: "क्षेत्रीय समय-सारणी, निदेशालय और अधिसूचना तिथियों की जाँच करने के लिए हमारे इंटरएक्टिव मानचित्र या खोज बार (उदा. पुणे, महाराष्ट्र) का उपयोग करें।",
      step3Title: "जनगणना के चरणों को समझें",
      step3Desc: "चरण 1 (मकान सूचीकरण एवं आवास जनगणना) और चरण 2 (जनसंख्या गणना) के बीच प्रक्रियात्मक अंतर को जानें, जिसमें डिजिटल स्व-गणना भी शामिल है।",
      step4Title: "CensusSaathi GenAI से पूछें",
      step4Desc: "अपनी पसंदीदा भारतीय भाषा में प्रश्न पूछें। हमारा AI आधिकारिक अधिसूचनाओं पर सख्ती से आधारित है और कभी भी झूठे आंकड़े नहीं गढ़ता।",
      step5Title: "जनगणना के दावों और अफवाहों को सत्यापित करें",
      step5Desc: "आधार अनिवार्यता, बायोमेट्रिक्स या शुल्क के संबंध में अफवाहों की जांच करें। जनगणना अधिनियम, 1948 की धारा 15 के तहत कानूनी गोपनीयता गारंटी की समीक्षा करें।",
      step6Title: "ऐतिहासिक जनगणना डेटा देखें",
      step6Desc: "जनसंख्या वृद्धि, साक्षरता और लिंगानुपात में 1951 से 2011 तक के सत्यापित ऐतिहासिक डेटा का अन्वेषण करें।",
      step7Title: "आधिकारिक जनगणना सेवाओं तक पहुँचें",
      step7Desc: "जब आधिकारिक राजपत्र अधिसूचनाएं प्रकाशित हों, सुरक्षित रूप से भाग लेने के लिए आधिकारिक सरकारी पोर्टल (censusindia.gov.in) के सीधे लिंक का पालन करें।",
      trustTitle: "हमारे मुख्य सिद्धांत और सुरक्षा दिशानिर्देश"
    },
    selfEnumeration: {
      badge: "सूचनात्मक गाइड",
      title: "स्व-गणना: सरल चरणबद्ध मार्गदर्शिका",
      subtitle: "आधिकारिक रूप से खोले जाने पर ऑनलाइन स्व-गणना कैसे कार्य करती है, इसे समझें। सही तैयारी के लिए सामान्य प्रक्रिया नीचे दी गई है।",
      stepProgress: "चरण {current} का {total}: {title}",
      guidedProgress: "{percent}% मार्गदर्शन",
      prevBtn: "पिछला चरण",
      nextBtn: "अगला चरण",
      restartBtn: "गाइड पुनः प्रारंभ करें",
      checkScheduleBtn: "मेरी समय-सारणी देखें",
      officialPortalBtn: "आधिकारिक पोर्टल",
      steps: {
        step1Title: "स्व-गणना क्या है?",
        step1Desc: "एक स्वैच्छिक ऑनलाइन प्रक्रिया जो परिवारों को प्रगणक के दौरे से पहले आधिकारिक पोर्टल पर अपना विवरण दर्ज करने की अनुमति देती है।",
        step1Badge: "स्वैच्छिक डिजिटल मोड",
        step2Title: "अपनी समय-सारणी जांचें",
        step2Desc: "स्व-गणना पूर्व-अधिसूचित समयावधि के लिए सक्रिय होती है। अपने राज्य या केंद्र शासित प्रदेश की आधिकारिक अधिसूचना जांचें।",
        step3Title: "आवश्यक जानकारी तैयार रखें",
        step3Desc: "शुरू करने से पहले जनसांख्यिकीय विवरण (आयु, संबंध, साक्षरता, व्यवसाय) और घरेलू सुविधाओं की जानकारी तैयार रखें।",
        step3Check1: "मूल जनसांख्यिकी",
        step3Check2: "घरेलू सुविधाएं",
        step4Title: "आधिकारिक पोर्टल पर जाएं",
        step4Desc: "अपने सत्यापित मोबाइल नंबर और सुरक्षित OTP से आधिकारिक पोर्टल पर लॉगिन करें। सुनिश्चित करें कि डोमेन .gov.in हो।",
        step5Title: "आधिकारिक प्रक्रिया पूर्ण करें",
        step5Desc: "पोर्टल पर डिजिटल फॉर्म ध्यान से भरें। सबमिट करने से पहले सभी प्रविष्टियों की समीक्षा करें।",
        step5Badge: "ड्राफ्ट एवं समीक्षा सहायता",
        step6Title: "संदर्भ कोड सुरक्षित रखें",
        step6Desc: "पोर्टल द्वारा जनरेट किए गए एक्नॉलेजमेंट कोड को सुरक्षित रखें। सत्यापन के दौरान प्रगणक को यह कोड दिखाएं।",
        step6Badge: "एक्नॉलेजमेंट कोड"
      },
      readyCardTitle: "अधिक जानने के लिए तैयार हैं?",
      readyCardDesc: "भारत के महापंजीयक कार्यालय के आधिकारिक पोर्टल पर सीधे आधिकारिक दस्तावेज और घोषणाएं देखें।",
      securityAdvisory: "महत्वपूर्ण सूचना: CensusSaathi एक स्वतंत्र नागरिक सूचना एवं मार्गदर्शन मंच है। यह आधिकारिक जनगणना प्रणाली का स्थान नहीं लेता है। हम इस वेबसाइट पर कभी भी व्यक्तिगत जनगणना विवरण या पहचान प्रमाण पत्र एकत्र या संग्रहीत नहीं करते हैं।"
    },
    privacy: {
      badge: "गोपनीयता एवं विश्वास",
      title: "आपकी जानकारी।\nआपका विश्वास।",
      subtitle: "हम पारदर्शिता के प्रति प्रतिबद्ध हैं। जानें कि वैधानिक गोपनीयता कैसे कार्य करती है और हमारा मार्गदर्शन उपकरण कभी भी व्यक्तिगत डेटा एकत्र क्यों नहीं करता है।",
      cards: {
        statutoryTitle: "वैधानिक गोपनीयता",
        statutoryDesc: "आधिकारिक जनगणना डेटा जनगणना अधिनियम, 1948 की धारा 15 द्वारा संरक्षित है और केवल समेकित सांख्यिकीय उद्देश्यों के लिए उपयोग किया जाता है।",
        securityTitle: "सुरक्षा मार्गदर्शन",
        securityDesc: "हम नागरिकों को फ़िशिंग, फर्जी जनगणना वेबसाइटों और धोखाधड़ी से बचाने के लिए सत्यापित सुरक्षा सुझाव प्रदान करते हैं।",
        verifiedTitle: "सत्यापित स्रोत",
        verifiedDesc: "हमारे सभी सूचनात्मक सारांश सीधे गृह मंत्रालय और ORGI के सार्वजनिक दस्तावेजों से प्राप्त किए गए हैं।",
        zeroDataTitle: "शून्य व्यक्तिगत डेटा",
        zeroDataDesc: "CensusSaathi कभी भी आपके व्यक्तिगत जनगणना रिकॉर्ड, पहचान पत्र या वित्तीय जानकारी का अनुरोध या संग्रह नहीं करता है।",
        guaranteeBadge: "स्वतंत्र उपकरण गारंटी"
      },
      securityReminderTitle: "महत्वपूर्ण सुरक्षा चेतावनी",
      securityReminderDesc: "न तो आधिकारिक जनगणना प्राधिकरण और न ही CensusSaathi कभी आपके बैंकिंग पासवर्ड, OTP, पिन या भुगतान मांगेंगे। धोखाधड़ी वाले अनुरोधों की तुरंत रिपोर्ट करें।",
      understandingCensusTitle: "जनगणना डेटा को समझना",
      whyGovtTitle: "सरकार द्वारा जनगणना डेटा क्यों एकत्र किया जाता है",
      whyGovtDesc: "सार्वजनिक बुनियादी ढांचे, स्वास्थ्य सेवा, स्कूलों और सामाजिक कल्याण कार्यक्रमों की योजना बनाने के लिए जनगणना डेटा एकत्र किया जाता है।",
      legalConfTitle: "जनगणना अधिनियम के तहत कानूनी गोपनीयता",
      legalConfDesc: "जनगणना अधिनियम, 1948 की धारा 15 के तहत, व्यक्तिगत रिकॉर्ड गोपनीय हैं और अदालतों में साक्ष्य के रूप में स्वीकार्य नहीं हैं।",
      dataPolicyTitle: "CensusSaathi पर डेटा नीति",
      whatWeCollectTitle: "क्लाइंट-साइड प्राथमिकताएं (स्वैच्छिक)",
      whatWeCollectList: [
        "चयनित इंटरफ़ेस भाषा प्राथमिकता",
        "ऐतिहासिक चार्ट के लिए अस्थायी फ़िल्टर",
        "उत्तर देने के लिए सत्र चैट प्रश्न"
      ],
      whatWeNeverTitle: "हम क्या कभी एकत्र या संग्रहीत नहीं करते हैं",
      whatWeNeverList: [
        "आधिकारिक व्यक्तिगत जनगणना विवरण",
        "राष्ट्रीय पहचान संख्या (आधार, पैन, वोटर आईडी)",
        "बैंक खाते, कार्ड या वित्तीय विवरण",
        "किसी भी व्यक्ति का बायोमेट्रिक डेटा"
      ],
      comparisonTitle: "आधिकारिक जनगणना प्रणाली बनाम CensusSaathi",
      comparisonSubtitle: "जनगणना व्यवस्था में अलग-अलग भूमिकाओं को समझना।",
      officialRoleTitle: "आधिकारिक जनगणना प्रणाली (ORGI)",
      officialRoleDesc: "एकमात्र अधिकृत सरकारी निकाय जो कानूनी रूप से आधिकारिक जनगणना आयोजित करता है, अधिसूचनाएं जारी करता है और वैधानिक डेटा एकत्र करता है।",
      saathiRoleTitle: "CensusSaathi (स्वतंत्र उपकरण)",
      saathiRoleDesc: "एक स्वतंत्र नागरिक सूचना मंच जो नागरिकों को सार्वजनिक प्रक्रियाओं को समझने में मदद करता है। यह आधिकारिक प्रणाली का स्थान नहीं लेता है।",
      saathiRoleBadge: "स्वतंत्र सार्वजनिक गाइड",
      visitOfficialSiteBtn: "आधिकारिक महापंजीयक वेबसाइट देखें"
    },
    dataExplorer: {
      badge: "ऐतिहासिक जनगणना डेटा (1951 - 2011)",
      title: "भारत की जनगणना यात्रा देखें",
      subtitle: "जानें कि प्रकाशित ऐतिहासिक जनगणनाओं (1951-2011) में भारत की जनसंख्या और प्रमुख संकेतक कैसे बदले।",
      filterRegion: "क्षेत्र",
      filterIndicator: "संकेतक फोकस",
      filterTimePeriod: "समय अवधि: 1951 - {year}",
      applyFiltersBtn: "फ़िल्टर लागू करें",
      card1Title: "जनसंख्या वृद्धि की प्रवृत्ति",
      card1Subtitle: "कुल जनसंख्या मिलियन में (1951-2011)",
      card2Title: "साक्षरता एवं शिक्षा",
      card2Subtitle: "कुल साक्षरता दर प्रतिशत (2011: 74.04%)",
      card3Title: "ग्रामीण बनाम शहरी विभाजन",
      card3Subtitle: "2011 की जनगणना में वितरण",
      card3Rural: "ग्रामीण (68.8%)",
      card3Urban: "शहरी (31.2%)",
      card4Title: "राज्यवार तुलना",
      card4Subtitle: "2011 में शीर्ष राज्य (मिलियन में)",
      aiInsightsTitle: "AI डेटा अंतर्दृष्टि",
      aiInsightsDesc: "वर्तमान ऐतिहासिक डेटा का सरल हिंदी में सारांश प्राप्त करें। बिना तकनीकी शब्दों के आंकड़ों की यात्रा को समझें।",
      explainDataBtn: "इस डेटा को समझाएं",
      modalTitle: "ऐतिहासिक डेटा सारांश: {region}",
      modalPoints: [
        "1951 और 2011 के बीच भारत की जनसंख्या में लगातार वृद्धि हुई, जो 2011 में 1.21 अरब नागरिकों तक पहुंच गई।",
        "कुल राष्ट्रीय साक्षरता दर में उल्लेखनीय प्रगति हुई, जो ग्रामीण सुधारों के साथ 74.04% तक पहुंच गई।",
        "जनसांख्यिकीय वितरण 68.8% ग्रामीण और 31.2% शहरी निवास को दर्शाता है, जबकि उत्तर प्रदेश, महाराष्ट्र और बिहार शीर्ष आबादी वाले राज्य हैं।"
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "अपनी पसंदीदा भाषा में जनगणना 2027 के बारे में शैक्षणिक प्रश्न पूछें।",
      welcomeHeading: "जनगणना 2027 को समझने में मैं आपकी क्या मदद कर सकता हूँ?",
      placeholder: "{language} में प्रश्न पूछें (उदा. चरण 1, गोपनीयता, समय-सारणी)...",
      askBtn: "पूछें",
      clearConversation: "बातचीत साफ़ करें",
      voiceInputTitle: "आवाज द्वारा पूछने के लिए क्लिक करें",
      voiceListening: "सुन रहा हूँ...",
      exploreTopicsTitle: "विषय देखें",
      consultingKnowledge: "ज्ञानकोश से परामर्श कर रहा हूँ...",
      advisoryBox: "CensusSaathi एक स्वतंत्र नागरिक सूचना मंच है और आधिकारिक जनगणना प्रणाली का स्थान नहीं लेता है। अधिसूचनाओं के लिए हमेशा official censusindia.gov.in देखें।"
    },
    modal: {
      chooseLanguageTitle: "अपनी भाषा चुनें",
      chooseLanguageSubtitle: "अपनी सुविधानुसार भाषा में जनगणना की जानकारी समझें।",
      continueBtn: "जारी रखें",
      changeLaterNote: "आप इसे बाद में सेटिंग्स में बदल सकते हैं।"
    },
    footer: {
      privacyLawTitle: "गोपनीयता एवं कानून (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi एक स्वतंत्र नागरिक सूचना एवं मार्गदर्शन मंच है। यह भारत सरकार या Office of the Registrar General and Census Commissioner, India (ORGI) से संबद्ध, अधिकृत, समर्थित या आधिकारिक सेवा नहीं है।",
      officialPortalNotice: "आधिकारिक जनगणना जानकारी, अधिसूचनाओं और जनगणना-संबंधी सेवाओं के लिए, कृपया censusindia.gov.in पर आधिकारिक Census of India पोर्टल देखें।",
      noCollectionNotice: "CensusSaathi नागरिकों की ओर से आधिकारिक जनगणना उत्तर एकत्र या जमा नहीं करता है।",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "होम",
        schedule: "समय-सारणी",
        selfEnum: "स्व-गणना",
        privacy: "गोपनीयता व कानून",
        data: "ऐतिहासिक डेटा"
      }
    },
    auth: {
      loginBtn: "लॉगिन करें",
      createAccountBtn: "खाता बनाएं",
      emailLabel: "ईमेल पता",
      passwordLabel: "पासवर्ड",
      nameLabel: "पूरा नाम",
      welcomeBack: "वापसी पर स्वागत है",
      createAccountTitle: "अपना खाता बनाएं",
      loginSubtitle: "अपने CensusSaathi खाते में प्रवेश करने के लिए क्रेडेंशियल दर्ज करें।",
      createAccountSubtitle: "व्यक्तिगत मार्गदर्शन और समय-सारणी प्राप्त करने के लिए साइन अप करें।",
      continueAsGuest: "अतिथि के रूप में जारी रखें",
      logout: "लॉगआउट",
      invalidCredentials: "अमान्य ईमेल या पासवर्ड",
      accountCreated: "खाता सफलतापूर्वक बनाया गया! रीडायरेक्ट हो रहा है...",
      alreadyHaveAccount: "क्या आपके पास पहले से एक खाता है?",
      dontHaveAccount: "खाता नहीं है?",
      loginLink: "यहाँ लॉगिन करें",
      createAccountLink: "खाता बनाएं",
      adminDashboard: "व्यवस्थापक डैशबोर्ड",
      nameRequired: "नाम आवश्यक है",
      validEmailRequired: "वैध ईमेल पता आवश्यक है",
      passwordMinLength: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
      authPrivacyNotice: "CensusSaathi खाते स्वतंत्र नागरिक खाते हैं। लॉगिन करना वैकल्पिक है और यह भारत सरकार को आधिकारिक उत्तर जमा नहीं करता है।",
      unauthorizedTitle: "व्यवस्थापक पहुँच आवश्यक",
      unauthorizedDesc: "यह पोर्टल अधिकृत CensusSaathi व्यवस्थापकों के लिए प्रतिबंधित है। कृपया एडमिन क्रेडेंशियल के साथ लॉगिन करें।"
    }
  },

  mr: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "जनगणना 2027 • नागरिक माहिती मार्गदर्शक",
      disclaimer: "CensusSaathi हे एक स्वतंत्र नागरिक माहिती व मार्गदर्शन मंच आहे. हे अधिकृत जनगणना यंत्रणेची जागा घेत नाही.",
      officialPortalBtn: "अधिकृत शासकीय पोर्टलला भेट द्या",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "स्रोत",
      statutoryConfidentiality: "कलम 15, जनगणना कायदा, 1948",
      subjectToNotification: "शासकीय राजपत्रातील अधिसूचनेच्या अधीन",
      verifiedGuidance: "सत्यापित शैक्षणिक मार्गदर्शन",
      close: "बंद करा",
      gotIt: "समजले",
      loading: "लोड होत आहे...",
      back: "मागे",
      next: "पुढे",
      previous: "मागील"
    },
    nav: {
      home: "मुख्यपृष्ठ",
      howItWorks: "कार्यपद्धती",
      schedule: "माझे वेळापत्रक",
      selfEnumeration: "सेल्फ-एन्युमरेशन",
      dataExplorer: "डेटा एक्सप्लोरर",
      askAi: "AI ला विचारा"
    },
    home: {
      heroTitle: "भारताची जनगणना.",
      heroTitleHighlight: "झाली सोपी.",
      heroSubtitle: "जनगणना प्रक्रिया समजून घ्या, प्रस्तावित वेळापत्रक पहा, डिजिटल सेल्फ-एन्युमरेशन मार्गदर्शन मिळवा आणि आपल्या भाषेत उत्तरे मिळवा.",
      exploreGuideBtn: "जनगणना मार्गदर्शक पहा",
      viewTimelineBtn: "वेळापत्रक पहा",
      stats: {
        phasesCount: "2",
        phasesLabel: "प्रस्तावित टप्पे",
        languagesCount: "22",
        languagesLabel: "अनुसूचित भाषा",
        modeCount: "हायब्रिड",
        modeLabel: "डिजिटल व प्रत्यक्ष भेट",
        sourceNote: "चौकट: जनगणना नियम व ORGI मार्गदर्शक तत्त्वे"
      },
      essentialServicesTitle: "महत्त्वाच्या सेवा",
      cards: {
        understandTitle: "जनगणना समजून घ्या",
        understandDesc: "घर नोंदणी आणि प्रत्यक्ष लोकसंख्या गणना या दोन महत्त्वाच्या टप्प्यांबद्दल जाणून घ्या.",
        scheduleTitle: "माझे वेळापत्रक",
        scheduleDesc: "आपल्या राज्यासाठी किंवा केंद्रशासित प्रदेशासाठी प्रस्तावित तारखा आणि आवश्यकता शोधा.",
        selfEnumTitle: "सेल्फ-एन्युमरेशन गाइड",
        selfEnumDesc: "अधिकृतपणे सुरू झाल्यावर डिजिटल सेल्फ-एन्युमरेशन कसे कार्य करते याचे टप्प्याटप्प्याने मार्गदर्शन.",
        askAiTitle: "CensusSaathi AI ला विचारा",
        askAiDesc: "काही प्रश्न आहेत? आपल्या भाषेत त्वरित आणि विश्वसनीय मार्गदर्शनासाठी चॅट करा.",
        askAiBtn: "चॅट सुरू करा",
        verifyTitle: "माहिती पडताळा",
        verifyDesc: "अफवांपासून सावध राहा आणि अचूक माहिती मिळवा. केवळ अधिकृत शासकीय अधिसूचनेवर विश्वास ठेवा.",
        dataTitle: "ऐतिहासिक डेटा पहा",
        dataDesc: "भारताचा लोकसंख्या प्रवास समजून घेण्यासाठी प्रकाशित ऐतिहासिक जनगणना डेटा आणि तक्ते पहा."
      },
      empowerTitle: "डेटासह नागरिकांचे सक्षमीकरण",
      empowerDesc: "दशवार्षिक जनगणना हा जगातील सर्वात मोठा प्रशासकीय आणि सांख्यिकीय उपक्रम आहे. CensusSaathi नागरिकांना प्रक्रिया आणि अधिकार समजून घेण्यासाठी स्पष्ट मार्गदर्शन प्रदान करते.",
      pillarZeroData: "शून्य वैयक्तिक डेटा संकलन धोरण",
      pillarMultilingual: "सर्व क्षेत्रांसाठी बहुभाषिक सुविधा",
      dashboardTitle: "लोकसंख्या एका दृष्टीक्षेपात (1951-2011)",
      dashboardBadge: "नागरिक माहिती व मार्गदर्शन पोर्टल"
    },
    schedule: {
      badge: "वेळापत्रक व सद्यस्थिती",
      title: "जनगणना 2027 वेळापत्रक व मार्गदर्शन",
      subtitle: "भारतातील प्रत्येक राज्य आणि केंद्रशासित प्रदेशासाठी प्रशासकीय स्थिती आणि अपेक्षित अधिसूचना पहा.",
      selectLabel: "राज्य किंवा केंद्रशासित प्रदेश निवडा",
      selectPlaceholder: "-- राज्य / UT निवडा --",
      allIndiaOption: "अखिल भारतीय (राष्ट्रीय वेळापत्रक आढावा)",
      statusTitle: "अधिकृत अधिसूचना स्थिती",
      directorateTitle: "विभागीय संचालनालय",
      phase1Title: "पहिला टप्पा: घर नोंदणी व गृहनिर्माण",
      phase2Title: "दुसरा टप्पा: प्रत्यक्ष लोकसंख्या गणना",
      selfEnumTitle: "डिजिटल सेल्फ-एन्युमरेशन विंडो",
      notesTitle: "स्थानिक माहिती व संदर्भ",
      viewOfficialPortal: "अधिकृत राजपत्र घोषणा पहा",
      errorNotFound: "निवडलेले राज्य सापडले नाही. कृपया योग्य राज्य निवडा.",
      searchLocationPlaceholder: "राज्य, केंद्रशासित प्रदेश, जिल्हा किंवा शहर शोधा (उदा. पुणे, महाराष्ट्र)...",
      useMyLocation: "माझे स्थान वापरा",
      locating: "स्थान शोधत आहे...",
      locationAccessDenied: "Location access was not provided. You can search for your location manually.",
      locationUnavailable: "स्थान मिळवणे शक्य झाले नाही. कृपया स्वतः शोधा.",
      locationNotSupported: "आपल्या ब्राउझरमध्ये जिओलोकेशन उपलब्ध नाही.",
      interactiveMapTitle: "परस्परसंवादी भारत जनगणना नकाशा",
      interactiveMapSubtitle: "स्थानिक वेळापत्रक आणि जिल्ह्याची प्रगती पाहण्यासाठी कोणत्याही राज्यावर क्लिक करा",
      districtsInState: "जिल्हे:",
      currentPhaseLabel: "वैधानिक जनगणना टप्पा",
      progressMetricsLabel: "जनगणना प्रत्यक्ष कामाची प्रगती",
      progressUnavailableTitle: "अधिकृत प्रगती डेटा सध्या CensusSaathi वर उपलब्ध नाही.",
      progressUnavailableDesc: "घरांची मोजणी, कार्यरत प्रगणक आणि पूर्णतेची टक्केवारी याबद्दलचा थेट डेटा भारताचे महारजिस्ट्रार आणि जनगणना आयुक्त कार्यालय (ORGI) द्वारे प्रसिद्ध झालेला नाही. CensusSaathi कोणतेही काल्पनिक आकडे दाखवत नाही.",
      historicalCensusTitle: "ऐतिहासिक जनगणना डेटा",
      historicalCensusDisclaimer: "ऐतिहासिक जनगणना डेटा — ही सध्याची थेट लोकसंख्या नाही.",
      trustBoundary: "CensusSaathi नागरिकांना माहिती आणि मार्गदर्शन प्रदान करते. ही भारत सरकारची अधिकृत जनगणना प्रणाली नाही."
    },
    howItWorks: {
      badge: "प्लॅटफॉर्म कार्यपद्धती मार्गदर्शक",
      title: "CensusSaathi कसे कार्य करते",
      subtitle: "आगामी जनगणना स्पष्टतेने आणि आत्मविश्वासाने समजून घेण्यासाठी आणि नेव्हिगेट करण्यासाठी एक सोपा, सत्यापित नागरिक मार्गदर्शन प्रवास.",
      stepsTitle: "७ टप्प्यांचा CensusSaathi अनुभव",
      step1Title: "जनगणना माहिती जाणून घ्या",
      step1Desc: "आगामी जनगणना २०२७ चा उद्देश, दशवार्षिक महत्त्व आणि वैधानिक पार्श्वभूमी समजून घ्या.",
      step2Title: "आपले स्थान निवडा",
      step2Desc: "स्थानिक वेळापत्रक, संचालनालय आणि अधिसूचना तारखा तपासण्यासाठी आमचा परस्परसंवादी नकाशा किंवा शोध बार (उदा. पुणे, महाराष्ट्र) वापरा.",
      step3Title: "जनगणनेचे टप्पे समजून घ्या",
      step3Desc: "टप्पा १ (घर नोंदणी व गृहनिर्माण जनगणना) आणि टप्पा २ (प्रत्यक्ष लोकसंख्या गणना) मधील प्रक्रियात्मक फरक जाणून घ्या, ज्यामध्ये डिजिटल सेल्फ-एन्युमरेशन समाविष्ट आहे.",
      step4Title: "CensusSaathi GenAI ला विचारा",
      step4Desc: "आपल्या पसंतीच्या भारतीय भाषेत प्रश्न विचारा. आमचा AI अधिकृत शासकीय अधिसूचनेवर आधारलेला असून कोणतेही खोटे आकडे दाखवत नाही.",
      step5Title: "दावे आणि अफवांची पडताळणी करा",
      step5Desc: "आधार कार्ड सक्ती, बायोमेट्रिक्स किंवा शुल्काबाबतच्या अफवा तपासा. जनगणना कायदा, १९४८ च्या कलम १५ अंतर्गत कायदेशीर गोपनीयतेची हमी जाणून घ्या.",
      step6Title: "ऐतिहासिक जनगणना डेटा पहा",
      step6Desc: "लोकसंख्या वाढ, साक्षरता आणि लिंग गुणोत्तर यामधील १९५१ ते २०११ पर्यंतच्या सत्यापित ऐतिहासिक डेटाचा अभ्यास करा.",
      step7Title: "अधिकृत जनगणना सेवा मिळवा",
      step7Desc: "जेव्हा अधिकृत शासकीय राजपत्र अधिसूचना प्रसिद्ध होईल, तेव्हा सुरक्षितपणे सहभागी होण्यासाठी अधिकृत सरकारी पोर्टलच्या (censusindia.gov.in) थेट लिंकचा वापर करा.",
      trustTitle: "आमची मुख्य तत्त्वे आणि सुरक्षा मार्गदर्शक तत्त्वे"
    },
    selfEnumeration: {
      badge: "माहिती मार्गदर्शक",
      title: "सेल्फ-एन्युमरेशन: सोपी टप्प्याटप्प्याची मार्गदर्शिका",
      subtitle: "ऑनलाइन सेल्फ-एन्युमरेशन कसे कार्य करते हे समजून घ्या. पूर्वतयारीसाठी आवश्यक कार्यपद्धती खाली दिली आहे.",
      stepProgress: "टप्पा {current}/{total}: {title}",
      guidedProgress: "{percent}% मार्गदर्शन",
      prevBtn: "मागील टप्पा",
      nextBtn: "पुढील टप्पा",
      restartBtn: "पुन्हा सुरू करा",
      checkScheduleBtn: "माझे वेळापत्रक पहा",
      officialPortalBtn: "अधिकृत पोर्टल",
      steps: {
        step1Title: "सेल्फ-एन्युमरेशन काय आहे?",
        step1Desc: "एक ऐच्छिक ऑनलाइन प्रक्रिया ज्याद्वारे नागरिक प्रगणक येण्यापूर्वी अधिकृत पोर्टलवर कुटुंबाची माहिती भरू शकतात.",
        step1Badge: "ऐच्छिक डिजिटल पर्याय",
        step2Title: "आपले वेळापत्रक तपासा",
        step2Desc: "सेल्फ-एन्युमरेशन अधिसूचित कालावधीत सुरू होते. आपल्या राज्याची अधिकृत सूचना तपासा.",
        step3Title: "आवश्यक माहिती तयार ठेवा",
        step3Desc: "सुरू करण्यापूर्वी जनसांख्यिकी तपशील (वय, साक्षरता, व्यवसाय) आणि घराच्या सुविधांची माहिती तयार ठेवा.",
        step3Check1: "मूलभूत माहिती",
        step3Check2: "घरगुती सुविधा",
        step4Title: "अधिकृत पोर्टलला भेट द्या",
        step4Desc: "मोबाईल OTP द्वारे अधिकृत पोर्टलवर लॉगिन करा. वेबसाईटचे डोमेन .gov.in असल्याची खात्री करा.",
        step5Title: "अधिकृत प्रक्रिया पूर्ण करा",
        step5Desc: "डिजिटल फॉर्म काळजीपूर्वक भरा. सबमिट करण्यापूर्वी सर्व नोंदी तपासा.",
        step5Badge: "पुनरावलोकन सुविधा",
        step6Title: "रेफरन्स कोड जपून ठेवा",
        step6Desc: "फॉर्म सबमिट केल्यावर मिळालेला पावती क्रमांक जपून ठेवा आणि प्रगणक आल्यावर दाखवा.",
        step6Badge: "पावती क्रमांक"
      },
      readyCardTitle: "अधिक जाणून घ्यायचे आहे का?",
      readyCardDesc: "भारताच्या महापंजीयक कार्यालयाच्या अधिकृत पोर्टलवर अधिकृत कागदपत्रे थेट पहा.",
      securityAdvisory: "महत्त्वाची सूचना: CensusSaathi हे एक स्वतंत्र नागरिक माहिती मंच आहे. हे अधिकृत जनगणना यंत्रणेची जागा घेत नाही. आम्ही या संकेतस्थळावर कधीही वैयक्तिक माहिती किंवा ओळखपत्रे संकलित करत नाही."
    },
    privacy: {
      badge: "गोपनीयता व विश्वास",
      title: "तुमची माहिती.\nतुमचा विश्वास.",
      subtitle: "आम्ही पारदर्शकतेसाठी कटिबद्ध आहोत. कायदेशीर गोपनीयता कशी कार्य करते आणि आमचे साधन कधीही वैयक्तिक डेटा का संकलित करत नाही हे जाणून घ्या.",
      cards: {
        statutoryTitle: "कायदेशीर गोपनीयता",
        statutoryDesc: "अधिकृत जनगणना डेटा जनगणना कायदा, 1948 च्या कलम 15 अन्वये संरक्षित असून केवळ सांख्यिकीय कारणांसाठी वापरला जातो.",
        securityTitle: "सुरक्षा मार्गदर्शन",
        securityDesc: "नागरिकांना फसवणूक आणि बनावट संकेतस्थळांपासून वाचवण्यासाठी आम्ही सुरक्षा मार्गदर्शक तत्त्वे देतो.",
        verifiedTitle: "सत्यापित स्रोत",
        verifiedDesc: "आमचे सर्व माहितीचे सारांश थेट गृह मंत्रालय आणि ORGI च्या अधिकृत दस्तऐवजांवरून घेतलेले आहेत.",
        zeroDataTitle: "शून्य वैयक्तिक डेटा",
        zeroDataDesc: "CensusSaathi कधीही आपले वैयक्तिक जनगणना रेकॉर्ड किंवा बँक तपशील मागत नाही.",
        guaranteeBadge: "स्वतंत्र साधन हमी"
      },
      securityReminderTitle: "महत्त्वाची सुरक्षा सूचना",
      securityReminderDesc: "जनगणना अधिकारी किंवा CensusSaathi कधीही बँक पासवर्ड, OTP किंवा पैसे मागत नाहीत. अशा फसव्या प्रयत्नांची तक्रार करा.",
      understandingCensusTitle: "जनगणना डेटा समजून घेणे",
      whyGovtTitle: "शासनाकडून जनगणना डेटा का संकलित केला जातो",
      whyGovtDesc: "सार्वजनिक पायाभूत सुविधा, शाळा, रुग्णालये आणि कल्याणकारी योजनांच्या नियोजनासाठी हा डेटा आवश्यक असतो.",
      legalConfTitle: "जनगणना कायद्यांतर्गत गोपनीयता",
      legalConfDesc: "कलम 15 अन्वये वैयक्तिक माहिती पूर्णपणे गोपनीय असून न्यायालयात पुरावा म्हणून वापरता येत नाही.",
      dataPolicyTitle: "CensusSaathi डेटा धोरण",
      whatWeCollectTitle: "केवळ तात्पुरती माहिती (ऐच्छिक)",
      whatWeCollectList: [
        "निवडलेली भाषा प्राधान्यता",
        "ऐतिहासिक चार्टसाठी तात्पुरते फिल्टर्स",
        "चॅट सत्रातील प्रश्न"
      ],
      whatWeNeverTitle: "आम्ही कधीही गोळा न करणारी माहिती",
      whatWeNeverList: [
        "अधिकृत जनगणना फॉर्म माहिती",
        "ओळख क्रमांक (आधार, पॅन, मतदार ओळखपत्र)",
        "बँक खाती किंवा कार्ड तपशील",
        "कोणताही बायोमेट्रिक डेटा"
      ],
      comparisonTitle: "अधिकृत जनगणना यंत्रणा विरुद्ध CensusSaathi",
      comparisonSubtitle: "जनगणना व्यवस्थेतील विविध भूमिका समजून घेणे.",
      officialRoleTitle: "अधिकृत जनगणना यंत्रणा (ORGI)",
      officialRoleDesc: "जनगणना आयोजित करणारी आणि अधिकृत सूचना जारी करणारी एकमेव अधिकृत शासकीय संस्था.",
      saathiRoleTitle: "CensusSaathi (स्वतंत्र साधन)",
      saathiRoleDesc: "नागरिकांना शासकीय प्रक्रिया समजून घेण्यासाठी मदत करणारे एक स्वतंत्र मार्गदर्शक साधन.",
      saathiRoleBadge: "स्वतंत्र मार्गदर्शक",
      visitOfficialSiteBtn: "अधिकृत महापंजीयक संकेतस्थळ पहा"
    },
    dataExplorer: {
      badge: "ऐतिहासिक जनगणना डेटा (1951 - 2011)",
      title: "भारताचा जनगणना इतिहास पहा",
      subtitle: "1951 ते 2011 या काळातील भारताची लोकसंख्या आणि साक्षरता कशी बदलली ते तपासा.",
      filterRegion: "प्रदेश",
      filterIndicator: "संकेतक निवडा",
      filterTimePeriod: "कालावधी: 1951 - {year}",
      applyFiltersBtn: "फिल्टर लागू करा",
      card1Title: "लोकसंख्या वाढीचा कल",
      card1Subtitle: "एकूण लोकसंख्या दशलक्षांमध्ये (1951-2011)",
      card2Title: "साक्षरता व शिक्षण",
      card2Subtitle: "एकूण साक्षरता दर टक्केवारी (2011: 74.04%)",
      card3Title: "ग्रामीण व शहरी प्रमाण",
      card3Subtitle: "2011 जनगणनेनुसार वितरण",
      card3Rural: "ग्रामीण (68.8%)",
      card3Urban: "शहरी (31.2%)",
      card4Title: "राज्यांची तुलना",
      card4Subtitle: "2011 मधील सर्वाधिक लोकसंख्येची राज्ये",
      aiInsightsTitle: "AI डेटा विश्लेषण",
      aiInsightsDesc: "सध्याच्या ऐतिहासिक माहितीचा सोप्या भाषेत सारांश मिळवा.",
      explainDataBtn: "डेटा समजावून सांगा",
      modalTitle: "ऐतिहासिक डेटा सारांश: {region}",
      modalPoints: [
        "1951 ते 2011 दरम्यान भारताची लोकसंख्या सातत्याने वाढून 2011 मध्ये 1.21 अब्ज झाली.",
        "देशाच्या साक्षरता दरात लक्षणीय वाढ होऊन तो 74.04% वर पोहोचला.",
        "68.8% लोकसंख्या ग्रामीण भागात तर 31.2% शहरी भागात राहते, ज्यामध्ये उत्तर प्रदेश आणि महाराष्ट्र आघाडीवर आहेत."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "आपल्या भाषेत जनगणना 2027 बद्दल शैक्षणिक प्रश्न विचारा.",
      welcomeHeading: "जनगणना 2027 समजून घेण्यासाठी मी कशी मदत करू शकतो?",
      placeholder: "{language} मध्ये प्रश्न विचारा (उदा. टप्पा 1, गोपनीयता, वेळापत्रक)...",
      askBtn: "विचारा",
      clearConversation: "संभाषण साफ करा",
      voiceInputTitle: "आवाज वापरण्यासाठी क्लिक करा",
      voiceListening: "ऐकत आहे...",
      exploreTopicsTitle: "विषय पहा",
      consultingKnowledge: "माहिती तपासत आहे...",
      advisoryBox: "CensusSaathi हे एक स्वतंत्र माहिती पोर्टल आहे. अधिकृत माहितीसाठी censusindia.gov.in पहा."
    },
    modal: {
      chooseLanguageTitle: "आपली भाषा निवडा",
      chooseLanguageSubtitle: "आपल्या पसंतीच्या भाषेत जनगणना माहिती समजून घ्या.",
      continueBtn: "पुढे जा",
      changeLaterNote: "तुम्ही हे नंतर कधीही बदलू शकता."
    },
    footer: {
      privacyLawTitle: "गोपनीयता आणि कायदा (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi हे एक स्वतंत्र नागरिक माहिती व मार्गदर्शन व्यासपीठ आहे. हे भारत सरकार किंवा Office of the Registrar General and Census Commissioner, India (ORGI) शी संलग्न, अधिकृत किंवा समर्थित नाही.",
      officialPortalNotice: "अधिकृत जनगणनेची माहिती, अधिसूचना आणि संबंधित सेवांसाठी कृपया censusindia.gov.in या अधिकृत Census of India पोर्टलला भेट द्या.",
      noCollectionNotice: "CensusSaathi नागरिकांच्या वतीने कोणतीही अधिकृत जनगणनेची माहिती गोळा किंवा सबमिट करत नाही.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "मुख्यपृष्ठ",
        schedule: "वेळापत्रक",
        selfEnum: "सेल्फ-एन्युमरेशन",
        privacy: "गोपनीयता व कायदे",
        data: "ऐतिहासिक डेटा"
      }
    },
    auth: {
      loginBtn: "लॉगिन करा",
      createAccountBtn: "खाते तयार करा",
      emailLabel: "ईमेल पत्ता",
      passwordLabel: "पासवर्ड",
      nameLabel: "पूर्ण नाव",
      welcomeBack: "पुन्हा स्वागत आहे",
      createAccountTitle: "आपले खाते तयार करा",
      loginSubtitle: "आपल्या CensusSaathi खात्यात प्रवेश करण्यासाठी तपशील भरा.",
      createAccountSubtitle: "वैयक्तिक मार्गदर्शन व वेळापत्रक मिळवण्यासाठी साइन अप करा.",
      continueAsGuest: "अतिथी म्हणून सुरू ठेवा",
      logout: "लॉगआउट",
      invalidCredentials: "चुकीचा ईमेल किंवा पासवर्ड",
      accountCreated: "खाते यशस्वीरित्या तयार झाले! पुनर्निर्देशित करत आहे...",
      alreadyHaveAccount: "आधीच खाते आहे का?",
      dontHaveAccount: "खाते नाही का?",
      loginLink: "येथे लॉगिन करा",
      createAccountLink: "खाते तयार करा",
      adminDashboard: "प्रशासक डॅशबोर्ड",
      nameRequired: "नाव आवश्यक आहे",
      validEmailRequired: "वैध ईमेल पत्ता आवश्यक आहे",
      passwordMinLength: "पासवर्ड किमान ६ अक्षरांचा असावा",
      authPrivacyNotice: "CensusSaathi खाती स्वतंत्र नागरिक खाती आहेत. लॉगिन करणे ऐच्छिक असून याद्वारे भारत सरकारकडे कोणतीही अधिकृत माहिती सबमिट होत नाही.",
      unauthorizedTitle: "प्रशासक प्रवेश आवश्यक",
      unauthorizedDesc: "हे पोर्टल केवळ अधिकृत CensusSaathi प्रशासकांसाठी मर्यादित आहे. कृपया प्रशासक क्रेडेंशियलसह लॉगिन करा."
    }
  },

  bn: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "জনগণনা ২০২৭ • নাগরিক তথ্য নির্দেশিকা",
      disclaimer: "CensusSaathi একটি স্বাধীন নাগরিক তথ্য ও নির্দেশিকা প্ল্যাটফর্ম। এটি সরকারি জনগণনা ব্যবস্থার বিকল্প নয়।",
      officialPortalBtn: "অফিসিয়াল সরকারী পোর্টালে যান",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "উৎস",
      statutoryConfidentiality: "ধারা ১৫, জনগণনা আইন, ১৯৪৮",
      subjectToNotification: "সরকারি গেজেট বিজ্ঞপ্তির সাপেক্ষে",
      verifiedGuidance: "যাচাইকৃত শিক্ষামূলক নির্দেশিকা",
      close: "বন্ধ করুন",
      gotIt: "বুঝেছি",
      loading: "লোড হচ্ছে...",
      back: "পেছনে",
      next: "পরবর্তী",
      previous: "পূর্ববর্তী"
    },
    nav: {
      home: "হোম",
      howItWorks: "কীভাবে কাজ করে",
      schedule: "সময়সূচী",
      selfEnumeration: "সেলফ-এনিউমারেশন",
      dataExplorer: "ডেটা এক্সপ্লোরার",
      askAi: "AI-কে জিজ্ঞাসা করুন"
    },
    home: {
      heroTitle: "ভারতের জনগণনা।",
      heroTitleHighlight: "সহজ ভাষায়।",
      heroSubtitle: "জনগণনা প্রক্রিয়া বুঝুন, প্রস্তাবিত সময়সূচী দেখুন, ডিজিটাল সেলফ-এনিউমারেশন সম্পর্কে জানুন এবং নিজের ভাষায় উত্তর পান।",
      exploreGuideBtn: "জনগণনা গাইড দেখুন",
      viewTimelineBtn: "সময়সূচী দেখুন",
      stats: {
        phasesCount: "২",
        phasesLabel: "পরিকল্পিত পর্যায়",
        languagesCount: "২২",
        languagesLabel: "তফসিলি ভাষা",
        modeCount: "হাইব্রিড",
        modeLabel: "ডিজিটাল ও ব্যক্তিগত সমীক্ষা",
        sourceNote: "কাঠামো: জনগণনা বিধি ও ORGI নির্দেশিকা"
      },
      essentialServicesTitle: "প্রয়োজনীয় সেবাসমূহ",
      cards: {
        understandTitle: "জনগণনা বুঝুন",
        understandDesc: "গৃহতালিকা এবং জনসংখ্যা গণনা - এই দুটি গুরুত্বপূর্ণ পর্যায় সম্পর্কে জানুন।",
        scheduleTitle: "সময়সূচী",
        scheduleDesc: "আপনার রাজ্য বা কেন্দ্রশাসিত অঞ্চলের জন্য প্রস্তাবিত তারিখ ও সময় জানুন।",
        selfEnumTitle: "সেলফ-এনিউমারেশন গাইড",
        selfEnumDesc: "অনলাইন পোর্টাল চালু হলে কীভাবে নিরাপদে ডিজিটাল সেলফ-এনিউমারেশন করবেন তার নির্দেশিকা।",
        askAiTitle: "CensusSaathi AI-কে জিজ্ঞাসা করুন",
        askAiDesc: "কোনো প্রশ্ন আছে? তাৎক্ষণিক নির্দেশিকার জন্য আমাদের বুদ্ধিমান সহকারীর সাথে চ্যাট করুন।",
        askAiBtn: "চ্যাট শুরু করুন",
        verifyTitle: "তথ্য যাচাই করুন",
        verifyDesc: "গুজব থেকে সাবধান থাকুন এবং সঠিক তথ্য জানুন। কেবলমাত্র অফিসিয়াল বিজ্ঞপ্তিতে বিশ্বাস রাখুন।",
        dataTitle: "ঐতিহাসিক ডেটা এক্সপ্লোর করুন",
        dataDesc: "ভারতের জনতাত্ত্বিক পরিবর্তন বুঝতে প্রকাশিত ঐতিহাসিক জনগণনা ডেটা ও চার্ট দেখুন।"
      },
      empowerTitle: "তথ্যের মাধ্যমে নাগরিকদের ক্ষমতায়ন",
      empowerDesc: "দশবার্ষিক জনগণনা বিশ্বের বৃহত্তম প্রশাসনিক অনুশীলন। CensusSaathi নাগরিকদের নিয়মাবলী বুঝতে সাহায্য করে।",
      pillarZeroData: "শূন্য ব্যক্তিগত ডেটা সংগ্রহ নীতি",
      pillarMultilingual: "সকল অঞ্চলের জন্য বহুভাষিক সহায়তা",
      dashboardTitle: "এক নজরে জনমিতি (১৯৫১-২০১১)",
      dashboardBadge: "নাগরিক তথ্য ও নির্দেশিকা পোর্টাল"
    },
    schedule: {
      badge: "সময়সূচী ও সরকারি স্থিতি",
      title: "জনগণনা ২০২৭ সময়সূচী ও নির্দেশিকা",
      subtitle: "ভারতের প্রতিটি রাজ্য ও কেন্দ্রশাসিত অঞ্চলের জন্য সরকারি স্থিতি ও প্রত্যাশিত বিজ্ঞপ্তি দেখুন।",
      selectLabel: "রাজ্য বা কেন্দ্রশাসিত অঞ্চল নির্বাচন করুন",
      selectPlaceholder: "-- রাজ্য / কেন্দ্রশাসিত অঞ্চল বেছে নিন --",
      allIndiaOption: "সর্বভারতীয় (জাতীয় সময়সূচী বিবরণ)",
      statusTitle: "অফিসিয়াল বিজ্ঞপ্তির স্থিতি",
      directorateTitle: "পরিচালনা দপ্তর",
      phase1Title: "পর্যায় ১: গৃহতালিকা ও আবাসন",
      phase2Title: "পর্যায় ২: জনসংখ্যা গণনা",
      selfEnumTitle: "ডিজিটাল সেলফ-এনিউমারেশন উইন্ডো",
      notesTitle: "আঞ্চলিক বিবরণ ও লজিস্টিকস",
      viewOfficialPortal: "অফিসিয়াল গেজেট ঘোষণা দেখুন",
      errorNotFound: "নির্বাচিত রাজ্য পাওয়া যায়নি। অনুগ্রহ করে সঠিক রাজ্য নির্বাচন করুন।"
    },
    selfEnumeration: {
      badge: "তথ্যমূলক গাইড",
      title: "সেলফ-এনিউমারেশন: সহজ পর্যায়ক্রমিক নির্দেশিকা",
      subtitle: "অনলাইন সেলফ-এনিউমারেশন কীভাবে পরিচালিত হয় তা জানুন। প্রস্তুতির জন্য মূল পদক্ষেপগুলি নিচে দেওয়া হল।",
      stepProgress: "পর্যায় {current}/{total}: {title}",
      guidedProgress: "{percent}% নির্দেশিত",
      prevBtn: "পূর্ববর্তী পদক্ষেপ",
      nextBtn: "পরবর্তী পদক্ষেপ",
      restartBtn: "পুনরায় শুরু করুন",
      checkScheduleBtn: "সময়সূচী দেখুন",
      officialPortalBtn: "অফিসিয়াল পোর্টাল",
      steps: {
        step1Title: "সেলফ-এনিউমারেশন কী?",
        step1Desc: "একটি ঐচ্ছিক অনলাইন পদ্ধতি যার মাধ্যমে নাগরিকরা প্রগণক আসার আগেই নিজেদের তথ্য নথিভুক্ত করতে পারেন।",
        step1Badge: "ঐচ্ছিক ডিজিটাল পদ্ধতি",
        step2Title: "সময়সূচী পরীক্ষা করুন",
        step2Desc: "সেলফ-এনিউমারেশন নির্দিষ্ট বিজ্ঞাপিত সময়ের জন্য সক্রিয় থাকে। আপনার রাজ্যের বিজ্ঞপ্তি দেখুন।",
        step3Title: "প্রয়োজনীয় তথ্য প্রস্তুত রাখুন",
        step3Desc: "বয়স, সাক্ষরতা, জীবিকা এবং গৃহস্থালি সুযোগ-সুবিধার বিবরণ প্রস্তুত রাখুন।",
        step3Check1: "প্রাথমিক তথ্য",
        step3Check2: "গৃহস্থালি সুযোগ-সুবিধা",
        step4Title: "অফিসিয়াল পোর্টালে যান",
        step4Desc: "মোবাইল ওটিপি দিয়ে অফিসিয়াল পোর্টালে প্রবেশ করুন। ওয়েবসাইটটির ডোমেন .gov.in নিশ্চিত করুন।",
        step5Title: "প্রক্রিয়া সম্পন্ন করুন",
        step5Desc: "ডিজিটাল ফর্মটি যত্নসহকারে পূরণ করুন এবং জমা দেওয়ার আগে পুনরায় পরীক্ষা করুন।",
        step5Badge: "পর্যালোচনা সহায়তা",
        step6Title: "রেফারেন্স নম্বর সংরক্ষণ করুন",
        step6Desc: "ফর্ম জমা দেওয়ার পর প্রাপ্ত অ্যাকনলেজমেন্ট নম্বরটি সংরক্ষণ করুন এবং প্রগণককে দেখান।",
        step6Badge: "অ্যাকনলেজমেন্ট কোড"
      },
      readyCardTitle: "আরও জানতে চান?",
      readyCardDesc: "ভারতের রেজিস্ট্রার জেনারেলের অফিসিয়াল পোর্টাল থেকে সরাসরি তথ্য দেখুন।",
      securityAdvisory: "গুরুত্বপূর্ণ বিজ্ঞপ্তি: CensusSaathi একটি স্বাধীন নাগরিক প্ল্যাটফর্ম। আমরা কখনই এই ওয়েবসাইটে ব্যক্তিগত তথ্য সংগ্রহ করি না।"
    },
    privacy: {
      badge: "গোপনীয়তা ও আস্থা",
      title: "আপনার তথ্য।\nআপনার আস্থা।",
      subtitle: "আমরা স্বচ্ছতার প্রতি প্রতিশ্রুতিবদ্ধ। কীভাবে আইনগত গোপনীয়তা কাজ করে তা জানুন।",
      cards: {
        statutoryTitle: "আইনগত গোপনীয়তা",
        statutoryDesc: "জনগণনা ডেটা ধারা ১৫ অনুযায়ী সুরক্ষিত এবং কেবল পরিসংখ্যানগত উদ্দেশ্যে ব্যবহৃত হয়।",
        securityTitle: "নিরাপত্তা নির্দেশিকা",
        securityDesc: "নাগরিকদের জাল ওয়েবসাইট থেকে রক্ষা করতে আমরা নিরাপত্তা পরামর্শ দিই।",
        verifiedTitle: "যাচাইকৃত উৎস",
        verifiedDesc: "আমাদের সকল তথ্য স্বরাষ্ট্র মন্ত্রক ও ORGI-এর নথিপত্র থেকে গৃহীত।",
        zeroDataTitle: "শূন্য ব্যক্তিগত ডেটা",
        zeroDataDesc: "CensusSaathi কখনই আপনার ব্যক্তিগত তথ্য বা ব্যাঙ্ক বিবরণ সংগ্রহ করে না।",
        guaranteeBadge: "স্বাধীন টুল গ্যারান্টি"
      },
      securityReminderTitle: "নিরাপত্তা সতর্কতা",
      securityReminderDesc: "জনগণনা কর্তৃপক্ষ কখনোই পাসওয়ার্ড, ওটিপি বা টাকা চায় না। জালিয়াতি থেকে সতর্ক থাকুন।",
      understandingCensusTitle: "জনগণনা তথ্য বোঝা",
      whyGovtTitle: "সরকার কেন জনগণনা তথ্য সংগ্রহ করে",
      whyGovtDesc: "বিদ্যালয়, হাসপাতাল, বাসস্থান ও সমাজকল্যাণমূলক পরিকল্পনা রূপায়ণে এটি প্রয়োজন।",
      legalConfTitle: "জনগণনা আইনের আওতায় গোপনীয়তা",
      legalConfDesc: "ধারা ১৫ অনুসারে সকল তথ্য গোপনীয় এবং আদালতে সাক্ষ্য হিসেবে গ্রহণযোগ্য নয়।",
      dataPolicyTitle: "CensusSaathi ডেটা নীতি",
      whatWeCollectTitle: "কেবলমাত্র অস্থায়ী পছন্দ (ঐচ্ছিক)",
      whatWeCollectList: [
        "নির্বাচিত ভাষার পছন্দ",
        "চার্টের জন্য সাময়িক ফিল্টার",
        "চ্যাট সেশনের প্রশ্ন"
      ],
      whatWeNeverTitle: "আমরা যা কখনই সংগ্রহ করি না",
      whatWeNeverList: [
        "অফিসিয়াল জনগণনা ফর্ম ডেটা",
        "জাতীয় পরিচয়পত্র (আধার, প্যান, ভোটার)",
        "ব্যাঙ্ক অ্যাকাউন্ট বা কার্ড বিবরণ",
        "বায়োমেট্রিক তথ্য"
      ],
      comparisonTitle: "অফিসিয়াল জনগণনা ব্যবস্থা বনাম CensusSaathi",
      comparisonSubtitle: "জনগণনা ব্যবস্থার স্বতন্ত্র ভূমিকা।",
      officialRoleTitle: "অফিসিয়াল জনগণনা ব্যবস্থা (ORGI)",
      officialRoleDesc: "আইনগতভাবে জনগণনা পরিচালনাকারী একমাত্র সরকারি কর্তৃপক্ষ।",
      saathiRoleTitle: "CensusSaathi (স্বাধীন টুল)",
      saathiRoleDesc: "নাগরিকদের সহায়তার জন্য একটি স্বাধীন নির্দেশিকা প্ল্যাটফর্ম।",
      saathiRoleBadge: "স্বাধীন নির্দেশিকা",
      visitOfficialSiteBtn: "অফিসিয়াল ওয়েবসাইট দেখুন"
    },
    dataExplorer: {
      badge: "ঐতিহাসিক জনগণনা ডেটা (১৯৫১ - ২০১১)",
      title: "ভারতের জনগণনার ইতিহাস",
      subtitle: "১৯৫১ থেকে ২০১১ সাল পর্যন্ত ভারতের জনমিতির পরিবর্তন অন্বেষণ করুন।",
      filterRegion: "অঞ্চল",
      filterIndicator: "সূচক নির্বাচন",
      filterTimePeriod: "সময়কাল: ১৯৫১ - {year}",
      applyFiltersBtn: "ফিল্টার প্রয়োগ করুন",
      card1Title: "জনসংখ্যা বৃদ্ধির ধারা",
      card1Subtitle: "মোট জনসংখ্যা মিলিয়নে (১৯৫১-২০১১)",
      card2Title: "সাক্ষরতা ও শিক্ষা",
      card2Subtitle: "জাতীয় সাক্ষরতার হার (২০১১: ৭৪.০৪%)",
      card3Title: "গ্রামীণ ও শহুরে অনুপাত",
      card3Subtitle: "২০১১ জনগণনা অনুযায়ী বণ্টন",
      card3Rural: "গ্রামীণ (৬৮.৮%)",
      card3Urban: "শহুরে (৩১.২%)",
      card4Title: "রাজ্যভিত্তিক তুলনা",
      card4Subtitle: "২০১১ সালে সর্বাধিক জনসংখ্যার রাজ্য",
      aiInsightsTitle: "AI ডেটা ইনসাইটস",
      aiInsightsDesc: "ঐতিহাসিক তথ্যের সহজ বাংলা সারাংশ পান।",
      explainDataBtn: "ডেটা ব্যাখ্যা করুন",
      modalTitle: "ঐতিহাসিক ডেটা সারাংশ: {region}",
      modalPoints: [
        "১৯৫১ থেকে ২০১১ সালের মধ্যে ভারতের জনসংখ্যা বৃদ্ধি পেয়ে ১.২১ বিলিয়নে পৌঁছায়।",
        "জাতীয় সাক্ষরতার হার উল্লেখযোগ্যভাবে বৃদ্ধি পেয়ে ৭৪.০৪% হয়।",
        "৬৮.৮% মানুষ গ্রামে এবং ৩১.২% শহরে বসবাস করেন, যার মধ্যে উত্তর প্রদেশ শীর্ষে।"
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "আপনার ভাষায় জনগণনা ২০২৭ সম্পর্কে প্রশ্ন জিজ্ঞাসা করুন।",
      welcomeHeading: "জনগণনা ২০২৭ বুঝতে আমি কীভাবে আপনাকে সাহায্য করতে পারি?",
      placeholder: "{language}-তে প্রশ্ন করুন (যেমন: পর্যায় ১, গোপনীয়তা, সময়সূচী)...",
      askBtn: "জিজ্ঞাসা করুন",
      clearConversation: "কথোপকথন মুছে ফেলুন",
      voiceInputTitle: "ভয়েস ইনপুটের জন্য ক্লিক করুন",
      voiceListening: "শুনছি...",
      exploreTopicsTitle: "বিষয়সমূহ",
      consultingKnowledge: "তথ্য সন্ধান করা হচ্ছে...",
      advisoryBox: "CensusSaathi একটি স্বাধীন তথ্য প্ল্যাটফর্ম। অফিসিয়াল তথ্যের জন্য censusindia.gov.in দেখুন।"
    },
    modal: {
      chooseLanguageTitle: "আপনার ভাষা নির্বাচন করুন",
      chooseLanguageSubtitle: "আপনার পছন্দসই ভাষায় জনগণনা সংক্রান্ত তথ্য বুঝুন।",
      continueBtn: "চালিয়ে যান",
      changeLaterNote: "আপনি এটি পরে সেটিংসে পরিবর্তন করতে পারবেন।"
    },
    footer: {
      privacyLawTitle: "গোপনীয়তা ও আইন (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi একটি স্বাধীন নাগরিক তথ্য ও নির্দেশিকা প্ল্যাটফর্ম। এটি ভারত সরকার বা Office of the Registrar General and Census Commissioner, India (ORGI)-এর সাথে অনুমোদিত, সমর্থিত বা সরকারি পরিষেবা নয়।",
      officialPortalNotice: "সরকারি জনগণনা সংক্রান্ত তথ্য, বিজ্ঞপ্তি ও পরিষেবার জন্য অনুগ্রহ করে censusindia.gov.in-এ অফিসিয়াল Census of India পোর্টাল দেখুন।",
      noCollectionNotice: "CensusSaathi নাগরিকদের পক্ষ থেকে কোনো সরকারি জনগণনা প্রতিক্রিয়া সংগ্রহ বা জমা দেয় না।",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "হোম",
        schedule: "সময়সূচী",
        selfEnum: "সেলফ-এনিউমারেশন",
        privacy: "গোপনীয়তা ও আইন",
        data: "ঐতিহাসিক ডেটা"
      }
    }
  },

  ta: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "மக்கள்தொகை கணக்கெடுப்பு 2027 • குடிமக்கள் தகவல் வழிகாட்டி",
      disclaimer: "CensusSaathi ஒரு சுதந்திரமான குடிமக்கள் வழிகாட்டி தளம். இது அதிகாரப்பூர்வ அரசு கணக்கெடுப்பு முறைக்கு மாற்றாக அமையாது.",
      officialPortalBtn: "அதிகாரப்பூர்வ அரசு இணையதளத்திற்கு செல்லவும்",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "மூலம்",
      statutoryConfidentiality: "பிரிவு 15, கணக்கெடுப்புச் சட்டம், 1948",
      subjectToNotification: "அரசிதழ் அறிவிப்பிற்கு உட்பட்டது",
      verifiedGuidance: "சரிபார்க்கப்பட்ட கல்வி வழிகாட்டுதல்",
      close: "மூடு",
      gotIt: "புரிந்தது",
      loading: "ஏற்றப்படுகிறது...",
      back: "பின்னால்",
      next: "அடுத்து",
      previous: "முந்தைய"
    },
    nav: {
      home: "முகப்பு",
      howItWorks: "செயல்முறை",
      schedule: "எனது அட்டவணை",
      selfEnumeration: "சுய கணக்கெடுப்பு",
      dataExplorer: "தரவு எக்ஸ்ப்ளோரர்",
      askAi: "AI-யிடம் கேட்கவும்"
    },
    home: {
      heroTitle: "இந்தியாவின் கணக்கெடுப்பு.",
      heroTitleHighlight: "எளிமையாக்கப்பட்டது.",
      heroSubtitle: "கணக்கெடுப்பு செயல்முறையைப் புரிந்து கொள்ளுங்கள், அட்டவணையைப் பாருங்கள், சுய கணக்கெடுப்பு வழிகாட்டலைப் பெறுங்கள் மற்றும் உங்கள் மொழியிலேயே பதில்களைப் பெறுங்கள்.",
      exploreGuideBtn: "வழிகாட்டியை ஆராய்க",
      viewTimelineBtn: "அட்டவணையைப் பார்க்கவும்",
      stats: {
        phasesCount: "2",
        phasesLabel: "திட்டமிடப்பட்ட கட்டங்கள்",
        languagesCount: "22",
        languagesLabel: "அங்கீகரிக்கப்பட்ட மொழிகள்",
        modeCount: "ஹைப்ரிட்",
        modeLabel: "டிஜிட்டல் மற்றும் நேரடி முறை",
        sourceNote: "கட்டமைப்பு: கணக்கெடுப்பு விதிகள் மற்றும் ORGI வழிகாட்டுதல்கள்"
      },
      essentialServicesTitle: "அத்தியாவசிய சேவைகள்",
      cards: {
        understandTitle: "கணக்கெடுப்பைப் புரிந்து கொள்ளுங்கள்",
        understandDesc: "வீடுகள் பட்டியல் மற்றும் மக்கள் தொகை கணக்கெடுப்பு ஆகிய இரண்டு முக்கிய கட்டங்களைப் பற்றி அறிக.",
        scheduleTitle: "எனது அட்டவணை",
        scheduleDesc: "உங்கள் மாநிலத்திற்கான எதிர்பார்க்கப்படும் தேதிகள் மற்றும் நடைமுறைகளைக் கண்டறியவும்.",
        selfEnumTitle: "சுய கணக்கெடுப்பு வழிகாட்டி",
        selfEnumDesc: "டிஜிட்டல் சுய கணக்கெடுப்பு எவ்வாறு பாதுகாப்பாக செயல்படுகிறது என்பதற்கான வழிகாட்டுதல்.",
        askAiTitle: "CensusSaathi AI-யிடம் கேட்கவும்",
        askAiDesc: "கேள்விகள் உள்ளதா? உங்கள் மொழியிலேயே உடனடி வழிகாட்டுதலைப் பெற அரட்டையடிக்கவும்.",
        askAiBtn: "அரட்டையைத் தொடங்கு",
        verifyTitle: "தகவலைச் சரிபார்க்கவும்",
        verifyDesc: "வதந்திகளை நம்பாமல் அதிகாரப்பூர்வ அறிவிப்புகளில் மட்டும் கவனம் செலுத்துங்கள்.",
        dataTitle: "வரலாற்றுத் தரவுகளை ஆராய்க",
        dataDesc: "இந்தியாவின் வரலாற்று மக்கள்தொகை புள்ளிவிவரங்கள் மற்றும் வரைபடங்களைப் பார்க்கவும்."
      },
      empowerTitle: "தரவுகளுடன் குடிமக்கள் அதிகாரம்",
      empowerDesc: "மக்கள்தொகை கணக்கெடுப்பு உலகின் மிகப்பெரிய நிர்வாகப் பணியாகும். குடிமக்கள் தங்களது உரிமைகளைப் புரிந்து கொள்ள CensusSaathi உதவுகிறது.",
      pillarZeroData: "பூஜ்ஜிய தனிநபர் தரவு சேகரிப்பு கொள்கை",
      pillarMultilingual: "அனைத்து பகுதிகளுக்குமான பன்மொழி ஆதரவு",
      dashboardTitle: "மக்கள்தொகை ஒரு பார்வையில் (1951-2011)",
      dashboardBadge: "குடிமக்கள் தகவல் மற்றும் வழிகாட்டுதல் தளம்"
    },
    schedule: {
      badge: "அட்டவணை மற்றும் நிலை",
      title: "கணக்கெடுப்பு 2027 அட்டவணை மற்றும் வழிகாட்டல்",
      subtitle: "ஒவ்வொரு மாநிலம் மற்றும் யூனியன் பிரதேசத்தின் அறிவிப்பு விவரங்களை ஆராயுங்கள்.",
      selectLabel: "மாநிலம் அல்லது யூனியன் பிரதேசத்தைத் தேர்ந்தெடுக்கவும்",
      selectPlaceholder: "-- மாநிலத்தைத் தேர்வுசெய்க --",
      allIndiaOption: "அனைத்து இந்தியா (தேசிய அட்டவணை கண்ணோட்டம்)",
      statusTitle: "அதிகாரப்பூர்வ அறிவிப்பு நிலை",
      directorateTitle: "இயக்குநரகம்",
      phase1Title: "கட்டம் 1: வீடுகள் பட்டியல் மற்றும் வீட்டு வசதி",
      phase2Title: "கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு",
      selfEnumTitle: "டிஜிட்டல் சுய கணக்கெடுப்பு காலம்",
      notesTitle: "பிராந்திய குறிப்புகள்",
      viewOfficialPortal: "அரசிதழ் அறிவிப்புகளைப் பார்க்கவும்",
      errorNotFound: "தேர்ந்தெடுக்கப்பட்ட மாநிலம் காணப்படவில்லை."
    },
    selfEnumeration: {
      badge: "தகவல் வழிகாட்டி",
      title: "சுய கணக்கெடுப்பு: எளிய படிப்படியான வழிகாட்டி",
      subtitle: "ஆன்லைன் சுய கணக்கெடுப்பு எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்து கொள்ளுங்கள்.",
      stepProgress: "படி {current}/{total}: {title}",
      guidedProgress: "{percent}% வழிகாட்டப்பட்டது",
      prevBtn: "முந்தைய படி",
      nextBtn: "அடுத்த படி",
      restartBtn: "மீண்டும் தொடங்கு",
      checkScheduleBtn: "எனது அட்டவணையைப் பார்",
      officialPortalBtn: "அதிகாரப்பூர்வ தளம்",
      steps: {
        step1Title: "சுய கணக்கெடுப்பு என்றால் என்ன?",
        step1Desc: "அதிகாரி வரும் முன்பே குடும்ப விவரங்களை இணையதளத்தில் பதிவு செய்யும் விருப்ப முறை.",
        step1Badge: "விருப்ப டிஜிட்டல் முறை",
        step2Title: "உங்கள் அட்டவணையைச் சரிபார்க்கவும்",
        step2Desc: "உங்கள் மாநிலத்திற்கான குறிப்பிட்ட கால அட்டவணையைச் சரிபார்க்கவும்.",
        step3Title: "தேவையான தகவல்களைத் தயார் செய்யவும்",
        step3Desc: "வயது, கல்வி, தொழில் மற்றும் வீட்டு வசதி விவரங்களைத் தயார் நிலையில் வைக்கவும்.",
        step3Check1: "அடிப்படை விவரங்கள்",
        step3Check2: "வீட்டு வசதிகள்",
        step4Title: "அதிகாரப்பூர்வ தளத்திற்குச் செல்லவும்",
        step4Desc: "மொபைல் OTP மூலம் உள்நுழையவும். தளம் .gov.in என முடிவதை உறுதி செய்யவும்.",
        step5Title: "செயல்முறையை முடிக்கவும்",
        step5Desc: "படிவத்தை கவனமாக நிரப்பி சமர்ப்பிக்கவும்.",
        step5Badge: "மதிப்பாய்வு உதவி",
        step6Title: "ஒப்புகைக் குறியீட்டைச் சேமிக்கவும்",
        step6Desc: "பெறப்பட்ட ஒப்புகை எண்ணை சேமித்து அலுவலர் வரும்போது காட்டவும்.",
        step6Badge: "ஒப்புகைக் குறியீடு"
      },
      readyCardTitle: "மேலும் அறிய தயாரா?",
      readyCardDesc: "அதிகாரப்பூர்வ ஆவணங்களை நேரடியாக மத்திய அரசு இணையதளத்தில் பார்க்கவும்.",
      securityAdvisory: "முக்கிய அறிவிப்பு: CensusSaathi ஒரு சுதந்திரமான வழிகாட்டி தளம். நாங்கள் தனிநபர் தகவல்களைச் சேமிப்பதில்லை."
    },
    privacy: {
      badge: "ரகசியம் மற்றும் நம்பிக்கை",
      title: "உங்கள் தகவல்.\nஉங்கள் நம்பிக்கை.",
      subtitle: "சட்டப்பூர்வ ரகசியத்தன்மை எவ்வாறு செயல்படுகிறது என்பதை அறியுங்கள்.",
      cards: {
        statutoryTitle: "சட்டப்பூர்வ ரகசியம்",
        statutoryDesc: "கணக்கெடுப்புத் தரவுகள் பிரிவு 15 இன் கீழ் முழுமையாகப் பாதுகாக்கப்படுகின்றன.",
        securityTitle: "பாதுகாப்பு வழிகாட்டல்",
        securityDesc: "போலி இணையதளங்களிலிருந்து பாதுகாக்கும் வழிகாட்டுதல்கள்.",
        verifiedTitle: "சரிபார்க்கப்பட்ட ஆதாரங்கள்",
        verifiedDesc: "அனைத்து சுருக்கங்களும் அரசு ஆவணங்களை அடிப்படையாகக் கொண்டவை.",
        zeroDataTitle: "பூஜ்ஜிய தனிநபர் தரவு",
        zeroDataDesc: "CensusSaathi தனிநபர் அல்லது வங்கி விவரங்களை ஒருபோதும் சேகரிப்பதில்லை.",
        guaranteeBadge: "சுதந்திர தளம் உறுதி"
      },
      securityReminderTitle: "பாதுகாப்பு எச்சரிக்கை",
      securityReminderDesc: "கணக்கெடுப்பு துறை ஒருபோதும் கடவுச்சொல், OTP அல்லது பணம் கேட்காது.",
      understandingCensusTitle: "கணக்கெடுப்பு தரவுகளைப் புரிந்துகொள்ளுதல்",
      whyGovtTitle: "அரசு ஏன் தகவல்களைச் சேகரிக்கிறது",
      whyGovtDesc: "பள்ளிகள், மருத்துவமனைகள் மற்றும் நலத்திட்டங்களைத் திட்டமிட இது பயன்படுகிறது.",
      legalConfTitle: "கணக்கெடுப்புச் சட்டத்தின் கீழ் ரகசியம்",
      legalConfDesc: "பிரிவு 15 இன் கீழ் விவரங்கள் ரகசியமானவை மற்றும் நீதிமன்றத்தில் சான்றாகாது.",
      dataPolicyTitle: "CensusSaathi தரவுக் கொள்கை",
      whatWeCollectTitle: "தற்காலிக விருப்பங்கள் (விருப்பத்தேர்வு)",
      whatWeCollectList: [
        "தேர்ந்தெடுக்கப்பட்ட மொழி",
        "வரைபடங்களுக்கான தற்காலிக வடிகட்டிகள்",
        "அரட்டை அமர்வு கேள்விகள்"
      ],
      whatWeNeverTitle: "நாங்கள் ஒருபோதும் சேகரிக்காதவை",
      whatWeNeverList: [
        "அதிகாரப்பூர்வ கணக்கெடுப்பு படிவத் தரவு",
        "அடையாள எண்கள் (ஆதார், பான், வாக்காளர்)",
        "வங்கி கணக்கு அல்லது அட்டை விவரங்கள்",
        "பயோமெட்ரிக் தரவுகள்"
      ],
      comparisonTitle: "அதிகாரப்பூர்வ அமைப்பு vs CensusSaathi",
      comparisonSubtitle: "கணக்கெடுப்பு அமைப்பில் உள்ள தனித்துவமான பாத்திரங்கள்.",
      officialRoleTitle: "அதிகாரப்பூர்வ அமைப்பு (ORGI)",
      officialRoleDesc: "சட்டப்பூர்வமாக கணக்கெடுப்பு நடத்தும் ஒரே அரசு அமைப்பு.",
      saathiRoleTitle: "CensusSaathi (சுயாதீன தளம்)",
      saathiRoleDesc: "குடிமக்களுக்கு உதவும் சுயாதீன தகவல் தளம்.",
      saathiRoleBadge: "சுயாதீன வழிகாட்டி",
      visitOfficialSiteBtn: "அதிகாரப்பூர்வ இணையதளத்தைப் பார்வையிடவும்"
    },
    dataExplorer: {
      badge: "வரலாற்று கணக்கெடுப்புத் தரவு (1951 - 2011)",
      title: "இந்தியாவின் கணக்கெடுப்பு வரலாறு",
      subtitle: "1951 முதல் 2011 வரையிலான மாற்றங்களை ஆராயுங்கள்.",
      filterRegion: "பிராந்தியம்",
      filterIndicator: "குறியீடு தேர்வு",
      filterTimePeriod: "காலம்: 1951 - {year}",
      applyFiltersBtn: "வடிகட்டிகளைப் பயன்படுத்து",
      card1Title: "மக்கள்தொகை வளர்ச்சிப் போக்கு",
      card1Subtitle: "மொத்த மக்கள்தொகை மில்லியனில் (1951-2011)",
      card2Title: "கல்வியறிவு மற்றும் கல்வி",
      card2Subtitle: "கல்வியறிவு விகிதம் (2011: 74.04%)",
      card3Title: "கிராமப்புற மற்றும் நகர்ப்புற விகிதம்",
      card3Subtitle: "2011 கணக்கெடுப்பின்படி பகிர்வு",
      card3Rural: "கிராமப்புறம் (68.8%)",
      card3Urban: "நகர்ப்புறம் (31.2%)",
      card4Title: "மாநிலங்களின் ஒப்பீடு",
      card4Subtitle: "2011 இல் அதிக மக்கள்தொகை கொண்ட மாநிலங்கள்",
      aiInsightsTitle: "AI தரவு நுண்ணறிவு",
      aiInsightsDesc: "எளிய தமிழில் வரலாற்றுத் தரவுகளின் சுருக்கத்தைப் பெறுங்கள்.",
      explainDataBtn: "தரவை விளக்குங்கள்",
      modalTitle: "வரலாற்று தரவு சுருக்கம்: {region}",
      modalPoints: [
        "1951 முதல் 2011 வரை மக்கள்தொகை உயர்ந்து 1.21 பில்லியனை எட்டியது.",
        "கல்வியறிவு விகிதம் 74.04% ஆக அதிகரித்தது.",
        "68.8% கிராமப்புறங்களிலும் 31.2% நகர்ப்புறங்களிலும் வாழ்கின்றனர்."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "கணக்கெடுப்பு 2027 பற்றிய கேள்விகளை உங்கள் மொழியில் கேளுங்கள்.",
      welcomeHeading: "கணக்கெடுப்பு 2027-ஐப் புரிந்து கொள்ள நான் எவ்வாறு உதவ முடியும்?",
      placeholder: "{language}-இல் கேளுங்கள் (उदा. கட்டம் 1, ரகசியம், அட்டவணை)...",
      askBtn: "கேட்கவும்",
      clearConversation: "உரையாடலை அழிக்கவும்",
      voiceInputTitle: "குரல் மூலம் கேட்க கிளிக் செய்யவும்",
      voiceListening: "கேட்கிறது...",
      exploreTopicsTitle: "தலைப்புகளை ஆராய்க",
      consultingKnowledge: "தகவலைத் தேடுகிறது...",
      advisoryBox: "CensusSaathi ஒரு சுதந்திரமான வழிகாட்டி தளம். அதிகாரப்பூர்வ தகவல்களுக்கு censusindia.gov.in ஐப் பார்க்கவும்."
    },
    modal: {
      chooseLanguageTitle: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      chooseLanguageSubtitle: "உங்களுக்கு விருப்பமான மொழியில் தகவல்களைப் புரிந்து கொள்ளுங்கள்.",
      continueBtn: "தொடரவும்",
      changeLaterNote: "இதை பின்னர் மாற்றிக்கொள்ளலாம்."
    },
    footer: {
      privacyLawTitle: "தனியுரிமை மற்றும் சட்டம் (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi ஒரு சுயாதீன குடிமக்கள் தகவல் மற்றும் வழிகாட்டுதல் தளம். இது இந்திய அரசு அல்லது Office of the Registrar General and Census Commissioner, India (ORGI) உடன் இணைக்கப்பட்ட அல்லது அதிகாரப்பூர்வ சேவை அல்ல.",
      officialPortalNotice: "அதிகாரப்பூர்வ மக்கள் தொகை கணக்கெடுப்பு தகவல்கள், அறிவிப்புகள் மற்றும் சேவைகளுக்கு censusindia.gov.in என்ற அதிகாரப்பூர்வ Census of India தளத்தைப் பார்க்கவும்.",
      noCollectionNotice: "CensusSaathi குடிமக்கள் சார்பாக அதிகாரப்பூர்வ கணக்கெடுப்பு பதில்களை சேகரிப்பதோ அல்லது சமர்ப்பிப்பதோ இல்லை.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "முகப்பு",
        schedule: "அட்டவணை",
        selfEnum: "சுய கணக்கெடுப்பு",
        privacy: "ரகசியம் மற்றும் சட்டம்",
        data: "வரலாற்றுத் தரவு"
      }
    }
  },

  te: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "జనాభా గణన 2027 • పౌరుల సమాచార మార్గదర్శి",
      disclaimer: "CensusSaathi అనేది ఒక స్వతంత్ర సమాచార వేదిక. ఇది అధికారిక జనాభా లెక్కల వ్యవస్థకు ప్రత్యామ్నాయం కాదు.",
      officialPortalBtn: "అధికారిక ప్రభుత్వ పోర్టల్‌ను సందర్శించండి",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "మూలం",
      statutoryConfidentiality: "సెక్షన్ 15, జనాభా గణన చట్టం, 1948",
      subjectToNotification: "గెజిట్ నోటిఫికేషన్‌కు లోబడి ఉంటుంది",
      verifiedGuidance: "ధృవీకరించబడిన విద్యా మార్గదర్శకత్వం",
      close: "మూసివేయి",
      gotIt: "అర్థమైంది",
      loading: "లోడ్ అవుతోంది...",
      back: "వెనుకకు",
      next: "తరువాత",
      previous: "మునుపటి"
    },
    nav: {
      home: "హోమ్",
      howItWorks: "ఇది ఎలా పనిచేస్తుంది",
      schedule: "నా షెడ్యూల్",
      selfEnumeration: "సెల్ఫ్-ఎన్యూమరేషన్",
      dataExplorer: "డేటా ఎక్స్‌ప్లోరర్",
      askAi: "AI ని అడగండి"
    },
    home: {
      heroTitle: "భారతదేశ జనాభా గణన.",
      heroTitleHighlight: "సులభతరం చేయబడింది.",
      heroSubtitle: "జనాభా లెక్కల ప్రక్రియను అర్థం చేసుకోండి, షెడ్యూల్‌ను చూడండి, సెల్ఫ్-ఎన్యూమరేషన్ తెలుసుకోండి మరియు మీ భాషలోనే సమాధానాలు పొందండి.",
      exploreGuideBtn: "మార్గదర్శిని చూడండి",
      viewTimelineBtn: "షెడ్యూల్ చూడండి",
      stats: {
        phasesCount: "2",
        phasesLabel: "ప్రతిపాదిత దశలు",
        languagesCount: "22",
        languagesLabel: "గుర్తింపు పొందిన భాషలు",
        modeCount: "హైబ్రిడ్",
        modeLabel: "డిజిటల్ మరియు ప్రత్యక్ష సర్వే",
        sourceNote: "నియమావళి: సెన్సస్ నిబంధనలు మరియు ORGI మార్గదర్శకాలు"
      },
      essentialServicesTitle: "ముఖ్యమైన సేవలు",
      cards: {
        understandTitle: "జనాభా గణనను అర్థం చేసుకోండి",
        understandDesc: "ఇళ్ల జాబితా మరియు జనాభా గణన అనే రెండు దశల గురించి తెలుసుకోండి.",
        scheduleTitle: "నా షెడ్యూల్",
        scheduleDesc: "మీ రాష్ట్రం లేదా కేంద్రపాలిత ప్రాంతం కోసం ప్రతిపాదిత తేదీలను తెలుసుకోండి.",
        selfEnumTitle: "సెల్ఫ్-ఎన్యూమరేషన్ గైడ్",
        selfEnumDesc: "డిజిటల్ సెల్ఫ్-ఎన్యూమరేషన్ సురక్షితంగా ఎలా పనిచేస్తుందో దశలవారీ మార్గదర్శకత్వం.",
        askAiTitle: "CensusSaathi AI ని అడగండి",
        askAiDesc: "సందేహాలు ఉన్నాయా? మీ భాషలోనే తక్షణ సమాధానాల కోసం చాట్ చేయండి.",
        askAiBtn: "చాట్ ప్రారంభించండి",
        verifyTitle: "సమాచారాన్ని ధృవీకరించండి",
        verifyDesc: "వదంతులను నమ్మకండి, అధికారిక ప్రభుత్వ నోటిఫికేషన్‌లను మాత్రమే అనుసరించండి.",
        dataTitle: "చారిత్రక డేటాను అన్వేషించండి",
        dataDesc: "భారత జనాభా చరిత్రను అర్థం చేసుకోవడానికి చారిత్రక డేటా మరియు చార్ట్‌లను చూడండి."
      },
      empowerTitle: "డేటాతో పౌరుల సాధికారత",
      empowerDesc: "దశాబ్ద జనాభా లెక్కల ప్రక్రియ ప్రపంచంలోనే అతిపెద్ద పరిపాలనా కార్యక్రమం. హక్కులను అర్థం చేసుకోవడానికి CensusSaathi సహాయపడుతుంది.",
      pillarZeroData: "జీరో వ్యక్తిగత డేటా సేకరణ విధానం",
      pillarMultilingual: "అన్ని ప్రాంతాలకు బహుభాషా మద్దతు",
      dashboardTitle: "ఒక చూపులో జనాభా వివరాలు (1951-2011)",
      dashboardBadge: "పౌర సమాచార మరియు మార్గదర్శక పోర్టల్"
    },
    schedule: {
      badge: "షెడ్యూల్ మరియు స్థితి",
      title: "జనాభా గణన 2027 షెడ్యూల్ మరియు మార్గదర్శకాలు",
      subtitle: "ప్రతి రాష్ట్రం మరియు కేంద్రపాలిత ప్రాంతం యొక్క వివరాలను పరిశీలించండి.",
      selectLabel: "రాష్ట్రం లేదా కేంద్రపాలిత ప్రాంతాన్ని ఎంచుకోండి",
      selectPlaceholder: "-- రాష్ట్రాన్ని ఎంచుకోండి --",
      allIndiaOption: "అఖిల భారత (జాతీయ షెడ్యూల్ సమీక్ష)",
      statusTitle: "అధికారిక నోటిఫికేషన్ స్థితి",
      directorateTitle: "డైరెక్టరేట్",
      phase1Title: "దశ 1: ఇళ్ల జాబితా మరియు గృహ గణన",
      phase2Title: "దశ 2: జనాభా గణన",
      selfEnumTitle: "డిజిటల్ సెల్ఫ్-ఎన్యూమరేషన్ సమయం",
      notesTitle: "ప్రాంతీయ సమాచారం",
      viewOfficialPortal: "అధికారిక గెజిట్ నోటిఫికేషన్ చూడండి",
      errorNotFound: "ఎంచుకున్న రాష్ట్రం కనుగొనబడలేదు."
    },
    selfEnumeration: {
      badge: "సమాచార గైడ్",
      title: "సెల్ఫ్-ఎన్యూమరేషన్: దశలవారీ మార్గదర్శి",
      subtitle: "ఆన్‌లైన్ సెల్ఫ్-ఎన్యూమరేషన్ ఎలా పనిచేస్తుందో అర్థం చేసుకోండి.",
      stepProgress: "దశ {current}/{total}: {title}",
      guidedProgress: "{percent}% మార్గదర్శకత్వం",
      prevBtn: "మునుపటి దశ",
      nextBtn: "తరువాతి దశ",
      restartBtn: "మళ్లీ ప్రారంభించండి",
      checkScheduleBtn: "షెడ్యూల్ చూడండి",
      officialPortalBtn: "అధికారిక పోర్టల్",
      steps: {
        step1Title: "సెల్ఫ్-ఎన్యూమరేషన్ అంటే ఏమిటి?",
        step1Desc: "గణకుడు వచ్చే ముందే కుటుంబ వివరాలను ఆన్‌లైన్‌లో నమోదు చేసుకునే ఐచ్ఛిక విధానం.",
        step1Badge: "ఐచ్ఛిక డిజిటల్ విధానం",
        step2Title: "షెడ్యూల్‌ను తనిఖీ చేయండి",
        step2Desc: "మీ రాష్ట్రానికి కేటాయించిన సమయాన్ని గమనించండి.",
        step3Title: "సమాచారాన్ని సిద్ధం చేసుకోండి",
        step3Desc: "వయస్సు, విద్య, వృత్తి మరియు ఇంటి సౌకర్యాల వివరాలు సిద్ధంగా ఉంచుకోండి.",
        step3Check1: "ప్రాథమిక వివరాలు",
        step3Check2: "గృహ సౌకర్యాలు",
        step4Title: "అధికారిక పోర్టల్‌ను సందర్శించండి",
        step4Desc: "మొబైల్ OTP తో లాగిన్ అవ్వండి. డొమైన్ .gov.in అని నిర్ధారించుకోండి.",
        step5Title: "ప్రక్రియను పూర్తి చేయండి",
        step5Desc: "ఫారమ్‌ను జాగ్రత్తగా నింపి సమర్పించండి.",
        step5Badge: "సమీక్ష సహాయం",
        step6Title: "రిఫరెన్స్ కోడ్‌ను భద్రపరుచుకోండి",
        step6Desc: "వచ్చిన రసీదు సంఖ్యను గణకుడు వచ్చినప్పుడు చూపించడానికి భద్రపరుచుకోండి.",
        step6Badge: "రసీదు కోడ్"
      },
      readyCardTitle: "మరింత తెలుసుకోవడానికి సిద్ధంగా ఉన్నారా?",
      readyCardDesc: "అధికారిక పత్రాలను నేరుగా భారత ప్రభుత్వ పోర్టల్‌లో చూడండి.",
      securityAdvisory: "ముఖ్య గమనిక: CensusSaathi ఒక స్వతంత్ర సమాచార వేదిక. మేము వ్యక్తిగత సమాచారాన్ని సేకరించము."
    },
    privacy: {
      badge: "గోప్యత మరియు విశ్వసనీయత",
      title: "మీ సమాచారం.\nమీ నమ్మకం.",
      subtitle: "చట్టపరమైన గోప్యత ఎలా పనిచేస్తుందో తెలుసుకోండి.",
      cards: {
        statutoryTitle: "చట్టపరమైన గోప్యత",
        statutoryDesc: "జనాభా గణన చట్టం సెక్షన్ 15 ప్రకారం వివరాలు సురక్షితంగా ఉంటాయి.",
        securityTitle: "భద్రతా మార్గదర్శకాలు",
        securityDesc: "నకిలీ వెబ్‌సైట్ల నుండి రక్షణ కోసం భద్రతా సూచనలు.",
        verifiedTitle: "ధృవీకరించబడిన మూలాలు",
        verifiedDesc: "అన్ని వివరాలు అధికారిక పత్రాల ఆధారంగా ఇవ్వబడ్డాయి.",
        zeroDataTitle: "జీరో వ్యక్తిగత డేటా",
        zeroDataDesc: "CensusSaathi వ్యక్తిగత లేదా బ్యాంక్ వివరాలను ఎన్నడూ అడగదు.",
        guaranteeBadge: "స్వతంత్ర సాధనం హామీ"
      },
      securityReminderTitle: "భద్రతా హెచ్చరిక",
      securityReminderDesc: "సెన్సస్ విభాగం పాస్‌వర్డ్‌లు, OTPలు లేదా డబ్బును ఎన్నడూ అడగదు.",
      understandingCensusTitle: "జనాభా లెక్కల డేటాను అర్థం చేసుకోవడం",
      whyGovtTitle: "ప్రభుత్వం డేటాను ఎందుకు సేకరిస్తుంది",
      whyGovtDesc: "పాఠశాలలు, ఆసుపత్రులు మరియు సంక్షేమ పథకాల ప్రణాళిక కోసం.",
      legalConfTitle: "చట్ట ప్రకారం గోప్యత",
      legalConfDesc: "సెక్షన్ 15 ప్రకారం వివరాలు పూర్తిగా గోప్యమైనవి, కోర్టులో సాక్ష్యంగా ఉండవు.",
      dataPolicyTitle: "CensusSaathi డేటా విధానం",
      whatWeCollectTitle: "తాత్కాలిక ప్రాధాన్యతలు మాత్రమే (ఐచ్ఛికం)",
      whatWeCollectList: [
        "ఎంచుకున్న భాష",
        "చార్ట్‌ల కోసం తాత్కాలిక ఫిల్టర్‌లు",
        "చాట్ సెషన్ ప్రశ్నలు"
      ],
      whatWeNeverTitle: "మేము ఎన్నడూ సేకరించనివి",
      whatWeNeverList: [
        "అధికారిక సెన్సస్ ఫారమ్ డేటా",
        "గుర్తింపు సంఖ్యలు (ఆధార్, పాన్, ఓటర్)",
        "బ్యాంక్ ఖాతా లేదా కార్డు వివరాలు",
        "బయోమెట్రిక్ డేటా"
      ],
      comparisonTitle: "అధికారిక వ్యవస్థ vs CensusSaathi",
      comparisonSubtitle: "వివిధ పాత్రలను అర్థం చేసుకోవడం.",
      officialRoleTitle: "అధికారిక సెన్సస్ వ్యవస్థ (ORGI)",
      officialRoleDesc: "చట్టబద్ధంగా జనాభా గణన నిర్వహించే ఏకైక ప్రభుత్వ సంస్థ.",
      saathiRoleTitle: "CensusSaathi (స్వతంత్ర సాధనం)",
      saathiRoleDesc: "పౌరులకు సహాయపడే స్వతంత్ర సమాచార వేదిక.",
      saathiRoleBadge: "స్వతంత్ర గైడ్",
      visitOfficialSiteBtn: "అధికారిక వెబ్‌సైట్‌ను చూడండి"
    },
    dataExplorer: {
      badge: "చారిత్రక జనాభా గణన డేటా (1951 - 2011)",
      title: "భారత జనాభా చరిత్ర",
      subtitle: "1951 నుండి 2011 వరకు మార్పులను పరిశీలించండి.",
      filterRegion: "ప్రాంతం",
      filterIndicator: "సూచిక ఎంపిక",
      filterTimePeriod: "సమయం: 1951 - {year}",
      applyFiltersBtn: "ఫిల్టర్లను వర్తింపజేయి",
      card1Title: "జనాభా వృద్ధి ధోరణి",
      card1Subtitle: "మొత్తం జనాభా మిలియన్లలో (1951-2011)",
      card2Title: "అక్షరాస్యత మరియు విద్య",
      card2Subtitle: "అక్షరాస్యత శాతం (2011: 74.04%)",
      card3Title: "గ్రామీణ మరియు పట్టణ విభజన",
      card3Subtitle: "2011 లెక్కల ప్రకారం పంపిణీ",
      card3Rural: "గ్రామీణ (68.8%)",
      card3Urban: "పట్టణ (31.2%)",
      card4Title: "రాష్ట్రాల పోలిక",
      card4Subtitle: "2011 లో అత్యధిక జనాభా కలిగిన రాష్ట్రాలు",
      aiInsightsTitle: "AI డేటా అంతర్దృష్టులు",
      aiInsightsDesc: "చారిత్రక డేటా సారాంశాన్ని సరళమైన తెలుగులో పొందండి.",
      explainDataBtn: "డేటాను వివరించండి",
      modalTitle: "చారిత్రక డేటా సారాంశం: {region}",
      modalPoints: [
        "1951 నుండి 2011 వరకు జనాభా పెరిగి 1.21 బిలియన్లకు చేరింది.",
        "అక్షరాస్యత రేటు 74.04% కి గణనీయంగా పెరిగింది.",
        "68.8% గ్రామీణ ప్రాంతాల్లో, 31.2% పట్టణ ప్రాంతాల్లో నివసిస్తున్నారు."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "జనాభా గణన 2027 గురించి మీ భాషలోనే ప్రశ్నలు అడగండి.",
      welcomeHeading: "జనాభా గణన 2027 అర్థం చేసుకోవడంలో నేను ఎలా సహాయపడగలను?",
      placeholder: "{language} లో అడగండి (ఉదా: దశ 1, గోప్యత, షెడ్యూల్)...",
      askBtn: "అడగండి",
      clearConversation: "సంభాషణను తొలగించండి",
      voiceInputTitle: "వాయిస్ ఇన్‌పుట్ కోసం క్లిక్ చేయండి",
      voiceListening: "వింటోంది...",
      exploreTopicsTitle: "విషయాలను అన్వేషించండి",
      consultingKnowledge: "సమాచారం శోధిస్తోంది...",
      advisoryBox: "CensusSaathi ఒక స్వతంత్ర సమాచార వేదిక. అధికారిక వివరాలకు censusindia.gov.in చూడండి."
    },
    modal: {
      chooseLanguageTitle: "మీ భాషను ఎంచుకోండి",
      chooseLanguageSubtitle: "మీకు అనుకూలమైన భాషలో వివరాలను అర్థం చేసుకోండి.",
      continueBtn: "కొనసాగించండి",
      changeLaterNote: "మీరు దీనిని తరువాత మార్చుకోవచ్చు."
    },
    footer: {
      privacyLawTitle: "గోప్యత మరియు చట్టం (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi అనేది ఒక స్వతంత్ర పౌర సమాచార మరియు మార్గదర్శక వేదిక. ఇది భారత ప్రభుత్వం లేదా Office of the Registrar General and Census Commissioner, India (ORGI) అధికారిక సేవ కాదు లేదా దానితో అనుబంధించబడలేదు.",
      officialPortalNotice: "అధికారిక జనాభా గణన సమాచారం, నోటిఫికేషన్లు మరియు సేవల కోసం దయచేసి censusindia.gov.in లోని అధికారిక Census of India పోర్టల్‌ను చూడండి.",
      noCollectionNotice: "CensusSaathi పౌరుల తరపున అధికారిక జనాభా గణన సమాధానాలను సేకరించడం లేదా సమర్పించడం చేయదు.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "హోమ్",
        schedule: "షెడ్యూల్",
        selfEnum: "సెల్ఫ్-ఎన్యూమరేషన్",
        privacy: "గోప్యత మరియు చట్టం",
        data: "చారిత్రక డేటా"
      }
    }
  },

  gu: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "વસ્તી ગણતરી 2027 • નાગરિક માહિતી માર્ગદર્શિકા",
      disclaimer: "CensusSaathi એક સ્વતંત્ર નાગરિક માહિતી મંચ છે. તે સત્તાવાર વસ્તી ગણતરી વ્યવસ્થાનું સ્થાન લેતું નથી.",
      officialPortalBtn: "સત્તાવાર સરકારી પોર્ટલની મુલાકાત લો",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "સ્રોત",
      statutoryConfidentiality: "કલમ 15, સેન્સસ એક્ટ, 1948",
      subjectToNotification: "ગેઝેટ નોટિફિકેશનને આધીન",
      verifiedGuidance: "ચકાસાયેલ શૈક્ષણિક માર્ગદર્શન",
      close: "બંધ કરો",
      gotIt: "સમજાયું",
      loading: "લોડ થઈ રહ્યું છે...",
      back: "પાછળ",
      next: "આગળ",
      previous: "અગાઉનું"
    },
    nav: {
      home: "હોમ",
      howItWorks: "કેવી રીતે કાર્ય કરે છે",
      schedule: "મારું સમયપત્રક",
      selfEnumeration: "સેલ્ફ-એન્યુમરેશન",
      dataExplorer: "ડેટા એક્સપ્લોરર",
      askAi: "AI ને પૂછો"
    },
    home: {
      heroTitle: "ભારતની વસ્તી ગણતરી.",
      heroTitleHighlight: "બની સરળ.",
      heroSubtitle: "વસ્તી ગણતરી પ્રક્રિયા સમજો, સમયપત્રક જુઓ, સેલ્ફ-એન્યુમરેશન વિશે જાણો અને તમારી ભાષામાં જવાબો મેળવો.",
      exploreGuideBtn: "માર્ગદર્શિકા જુઓ",
      viewTimelineBtn: "સમયપત્રક જુઓ",
      stats: {
        phasesCount: "2",
        phasesLabel: "આયોજિત તબક્કા",
        languagesCount: "22",
        languagesLabel: "માન્ય ભાષાઓ",
        modeCount: "હાઇબ્રિડ",
        modeLabel: "ડિજિટલ અને રૂબરૂ",
        sourceNote: "માળખું: સેન્સસ નિયમો અને ORGI માર્ગદર્શિકા"
      },
      essentialServicesTitle: "આવશ્યક સેવાઓ",
      cards: {
        understandTitle: "વસ્તી ગણતરી સમજો",
        understandDesc: "મકાન સૂચિ અને વસ્તી ગણતરી એમ બંને મહત્વપૂર્ણ તબક્કાઓ વિશે જાણો.",
        scheduleTitle: "મારું સમયપત્રક",
        scheduleDesc: "તમારા રાજ્ય માટે પ્રસ્તાવિત તારીખો અને માહિતી શોધો.",
        selfEnumTitle: "સેલ્ફ-એન્યુમરેશન ગાઇડ",
        selfEnumDesc: "ડિજિટલ સેલ્ફ-એન્યુમરેશન કેવી રીતે સુરક્ષિત રીતે કાર્ય કરે છે તેનું માર્ગદર્શન.",
        askAiTitle: "CensusSaathi AI ને પૂછો",
        askAiDesc: "પ્રશ્નો છે? તમારી ભાષામાં ત્વરિત માર્ગદર્શન માટે ચેટ કરો.",
        askAiBtn: "ચેટ શરૂ કરો",
        verifyTitle: "માહિતી ચકાસો",
        verifyDesc: "અફવાઓથી બચો અને માત્ર સત્તાવાર સરકારી જાહેરાતો પર જ વિશ્વાસ કરો.",
        dataTitle: "ઐતિહાસિક ડેટા જુઓ",
        dataDesc: "ભારતની જનસંખ્યા યાત્રા સમજવા માટે ઐતિહાસિક ડેટા અને ચાર્ટ જુઓ."
      },
      empowerTitle: "ડેટા સાથે નાગરિક સશક્તિકરણ",
      empowerDesc: "દશાબ્દી વસ્તી ગણતરી એ વિશ્વની સૌથી મોટી વહીવટી પ્રક્રિયા છે. CensusSaathi નાગરિકોને નિયમો સમજવામાં મદદ કરે છે.",
      pillarZeroData: "શૂન્ય વ્યક્તિગત ડેટા સંગ્રહ નીતિ",
      pillarMultilingual: "તમામ પ્રદેશો માટે બહુભાષી સુવિધા",
      dashboardTitle: "જનસંખ્યા એક નજરે (1951-2011)",
      dashboardBadge: "નાગરિક માહિતી પોર્ટલ"
    },
    schedule: {
      badge: "સમયપત્રક અને સ્થિતિ",
      title: "વસ્તી ગણતરી 2027 સમયપત્રક અને માર્ગદર્શન",
      subtitle: "દરેક રાજ્ય અને કેન્દ્રશાસિત પ્રદેશની વિગતો અને અપેક્ષિત સૂચનાઓ જુઓ.",
      selectLabel: "રાજ્ય અથવા કેન્દ્રશાસિત પ્રદેશ પસંદ કરો",
      selectPlaceholder: "-- રાજ્ય પસંદ કરો --",
      allIndiaOption: "અખિલ ભારત (રાષ્ટ્રીય સમયપત્રક)",
      statusTitle: "સત્તાવાર સૂચના સ્થિતિ",
      directorateTitle: "સંચાલન કચેરી",
      phase1Title: "તબક્કો 1: મકાન સૂચિ અને આવાસ",
      phase2Title: "તબક્કો 2: વસ્તી ગણતરી",
      selfEnumTitle: "ડિજિટલ સેલ્ફ-એન્યુમરેશન વિન્ડો",
      notesTitle: "પ્રાદેશિક વિગતો",
      viewOfficialPortal: "સત્તાવાર ગેઝેટ સૂચનાઓ જુઓ",
      errorNotFound: "પસંદ કરેલ રાજ્ય મળ્યું નથી."
    },
    selfEnumeration: {
      badge: "માહિતી માર્ગદર્શિકા",
      title: "સેલ્ફ-એન્યુમરેશન: સરળ તબક્કાવાર માર્ગદર્શિકા",
      subtitle: "ઓનલાઇન સેલ્ફ-એન્યુમરેશન કેવી રીતે કાર્ય કરે છે તે સમજો.",
      stepProgress: "તબક્કો {current}/{total}: {title}",
      guidedProgress: "{percent}% માર્ગદર્શિત",
      prevBtn: "અગાઉનો તબક્કો",
      nextBtn: "આગળનો તબક્કો",
      restartBtn: "ફરી શરૂ કરો",
      checkScheduleBtn: "સમયપત્રક જુઓ",
      officialPortalBtn: "સત્તાવાર પોર્ટલ",
      steps: {
        step1Title: "સેલ્ફ-એન્યુમરેશન શું છે?",
        step1Desc: "ગણતરીકાર આવે તે પહેલાં પોર્ટલ પર પરિવારની વિગતો ઓનલાઇન ભરવાનો સ્વૈચ્છિક વિકલ્પ.",
        step1Badge: "સ્વૈચ્છિક ડિજિટલ વિકલ્પ",
        step2Title: "સમયપત્રક ચકાસો",
        step2Desc: "તમારા રાજ્ય માટે નિર્ધારિત સમય ચકાસો.",
        step3Title: "જરૂરી માહિતી તૈયાર રાખો",
        step3Desc: "ઉંમર, શિક્ષણ, વ્યવસાય અને મકાનની સુવિધાઓની માહિતી તૈયાર રાખો.",
        step3Check1: "મૂળભૂત માહિતી",
        step3Check2: "ઘરની સુવિધાઓ",
        step4Title: "સત્તાવાર પોર્ટલની મુલાકાત લો",
        step4Desc: "મોબાઇલ OTP થી લોગિન કરો. ડોમેન .gov.in હોવાની ખાતરી કરો.",
        step5Title: "પ્રક્રિયા પૂર્ણ કરો",
        step5Desc: "ફોર્મ ધ્યાનપૂર્વક ભરો અને સબમિટ કરો.",
        step5Badge: "સમીક્ષા સહાય",
        step6Title: "રેફરન્સ કોડ સાચવો",
        step6Desc: "સબમિટ કર્યા પછી મળેલ પહોંચ નંબર સાચવી રાખો.",
        step6Badge: "એકનોલેજમેન્ટ કોડ"
      },
      readyCardTitle: "વધુ જાણવા તૈયાર છો?",
      readyCardDesc: "સરકારી દસ્તાવેજો સીધા સત્તાવાર પોર્ટલ પર જુઓ.",
      securityAdvisory: "મહત્વપૂર્ણ સૂચના: CensusSaathi એક સ્વતંત્ર પોર્ટલ છે. અમે વ્યક્તિગત માહિતી એકત્રિત કરતા નથી."
    },
    privacy: {
      badge: "ગુપ્તતા અને વિશ્વાસ",
      title: "તમારી માહિતી.\nતમારો વિશ્વાસ.",
      subtitle: "કાનૂની ગુપ્તતા કેવી રીતે કાર્ય કરે છે તે જાણો.",
      cards: {
        statutoryTitle: "કાનૂની ગુપ્તતા",
        statutoryDesc: "કલમ 15 હેઠળ તમામ માહિતી સંપૂર્ણ ગુપ્ત રાખવામાં આવે છે.",
        securityTitle: "સુરક્ષા માર્ગદર્શન",
        securityDesc: "નકલી વેબસાઇટ્સથી બચવા માટે સુરક્ષા ટિપ્સ.",
        verifiedTitle: "ચકાસાયેલ સ્રોત",
        verifiedDesc: "તમામ સારાંશ સરકારી દસ્તાવેજો પર આધારિત છે.",
        zeroDataTitle: "શૂન્ય વ્યક્તિગત ડેટા",
        zeroDataDesc: "CensusSaathi ક્યારેય વ્યક્તિગત કે બેંક વિગતો માંગતું નથી.",
        guaranteeBadge: "સ્વતંત્ર સાધન ખાતરી"
      },
      securityReminderTitle: "સુરક્ષા ચેતવણી",
      securityReminderDesc: "વસ્તી ગણતરી વિભાગ ક્યારેય પાસવર્ડ, OTP કે પૈસા માંગતું નથી.",
      understandingCensusTitle: "ડેટાનું મહત્વ",
      whyGovtTitle: "સરકાર ડેટા કેમ એકત્રિત કરે છે",
      whyGovtDesc: "શાળાઓ, હોસ્પિટલો અને કલ્યાણકારી યોજનાઓના આયોજન માટે.",
      legalConfTitle: "સેન્સસ એક્ટ હેઠળ ગુપ્તતા",
      legalConfDesc: "કલમ 15 મુજબ માહિતી ગુપ્ત રહે છે અને કોર્ટમાં પુરાવો બનતી નથી.",
      dataPolicyTitle: "CensusSaathi નીતિ",
      whatWeCollectTitle: "માત્ર કામચલાઉ પસંદગીઓ (સ્વૈચ્છિક)",
      whatWeCollectList: [
        "પસંદ કરેલ ભાષા",
        "ચાર્ટ્સ માટે કામચલાઉ ફિલ્ટર્સ",
        "ચેટ પ્રશ્નો"
      ],
      whatWeNeverTitle: "અમે ક્યારેય એકત્રિત કરતા નથી",
      whatWeNeverList: [
        "સત્તાવાર વસ્તી ગણતરી ડેટા",
        "ઓળખ કાર્ડ નંબરો (આધાર, પાન, ચૂંટણી કાર્ડ)",
        "બેંક ખાતા કે કાર્ડ વિગતો",
        "બાયોમેટ્રિક ડેટા"
      ],
      comparisonTitle: "સત્તાવાર વ્યવસ્થા vs CensusSaathi",
      comparisonSubtitle: "વિવિધ ભૂમિકાઓની સમજ.",
      officialRoleTitle: "સત્તાવાર સેન્સસ વ્યવસ્થા (ORGI)",
      officialRoleDesc: "કાયદેસર રીતે વસ્તી ગણતરી કરતી એકમાત્ર સરકારી સંસ્થા.",
      saathiRoleTitle: "CensusSaathi (સ્વતંત્ર સાધન)",
      saathiRoleDesc: "નાગરિકોને મદદ કરતું એક સ્વતંત્ર માહિતી પોર્ટલ.",
      saathiRoleBadge: "સ્વતંત્ર માર્ગદર્શક",
      visitOfficialSiteBtn: "સત્તાવાર વેબસાઇટ જુઓ"
    },
    dataExplorer: {
      badge: "ઐતિહાસિક વસ્તી ગણતરી ડેટા (1951 - 2011)",
      title: "ભારતનો વસ્તી ગણતરી ઇતિહાસ",
      subtitle: "1951 થી 2011 સુધીના ફેરફારો તપાસો.",
      filterRegion: "પ્રદેશ",
      filterIndicator: "સૂચક પસંદગી",
      filterTimePeriod: "સમયગાળો: 1951 - {year}",
      applyFiltersBtn: "ફિલ્ટર્સ લાગુ કરો",
      card1Title: "વસ્તી વૃદ્ધિ દર",
      card1Subtitle: "કુલ વસ્તી મિલિયનમાં (1951-2011)",
      card2Title: "સાક્ષરતા અને શિક્ષણ",
      card2Subtitle: "સાક્ષરતા દર (2011: 74.04%)",
      card3Title: "ગ્રામીણ અને શહેરી ગુણોત્તર",
      card3Subtitle: "2011 મુજબ વિતરણ",
      card3Rural: "ગ્રામીણ (68.8%)",
      card3Urban: "શહેરી (31.2%)",
      card4Title: "રાજ્યોની સરખામણી",
      card4Subtitle: "2011 માં ટોચની વસ્તી ધરાવતા રાજ્યો",
      aiInsightsTitle: "AI ડેટા વિશ્લેષણ",
      aiInsightsDesc: "સરળ ગુજરાતીમાં ઐતિહાસિક ડેટાનો સારાંશ મેળવો.",
      explainDataBtn: "ડેટા સમજાવો",
      modalTitle: "ઐતિહાસિક ડેટા સારાંશ: {region}",
      modalPoints: [
        "1951 થી 2011 દરમિયાન વસ્તી વધીને 1.21 અબજ થઈ.",
        "સાક્ષરતા દરમાં વધારો થઈને 74.04% થયો.",
        "68.8% વસ્તી ગામડાઓમાં અને 31.2% શહેરોમાં રહે છે."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "તમારી ભાષામાં વસ્તી ગણતરી 2027 વિશે પ્રશ્નો પૂછો.",
      welcomeHeading: "વસ્તી ગણતરી 2027 સમજવામાં હું તમને કેવી રીતે મદદ કરી શકું?",
      placeholder: "{language} માં પૂછો (દા.ત. તબક્કો 1, ગુપ્તતા, સમયપત્રક)...",
      askBtn: "પૂછો",
      clearConversation: "વાતચીત સાફ કરો",
      voiceInputTitle: "અવાજ દ્વારા પૂછવા માટે ક્લિક કરો",
      voiceListening: "સાંભળી રહ્યું છે...",
      exploreTopicsTitle: "વિષયો જુઓ",
      consultingKnowledge: "માહિતી ચકાસી રહ્યું છે...",
      advisoryBox: "CensusSaathi એક સ્વતંત્ર માહિતી પોર્ટલ છે. સત્તાવાર માહિતી માટે censusindia.gov.in જુઓ."
    },
    modal: {
      chooseLanguageTitle: "તમારી ભાષા પસંદ કરો",
      chooseLanguageSubtitle: "તમારી અનુકૂળ ભાષામાં માહિતી સમજો.",
      continueBtn: "ચાલુ રાખો",
      changeLaterNote: "તમે આ પછીથી બદલી શકો છો."
    },
    footer: {
      privacyLawTitle: "ગોપનીયતા અને કાયદો (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi એ એક સ્વતંત્ર નાગરિક માહિતી અને માર્ગદર્શન પ્લેટફોર્મ છે. તે ભારત સરકાર અથવા Office of the Registrar General and Census Commissioner, India (ORGI) સાથે જોડાયેલ કે સત્તાવાર સેવા નથી.",
      officialPortalNotice: "સત્તાવાર વસ્તી ગણતરીની માહિતી, સૂચનાઓ અને સેવાઓ માટે કૃપા કરીને censusindia.gov.in પર સત્તાવાર Census of India પોર્ટલ જુઓ.",
      noCollectionNotice: "CensusSaathi નાગરિકો વતી કોઈ સત્તાવાર વસ્તી ગણતરી વિગતો એકત્રિત કે સબમિટ કરતું નથી.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "હોમ",
        schedule: "સમયપત્રક",
        selfEnum: "સેલ્ફ-એન્યુમરેશન",
        privacy: "ગુપ્તતા અને કાયદો",
        data: "ઐતિહાસિક ડેટા"
      }
    }
  },

  kn: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "ಜನಗಣತಿ 2027 • ನಾಗರಿಕ ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶಿ",
      disclaimer: "CensusSaathi ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ಅಧಿಕೃತ ಜನಗಣತಿ ವ್ಯವಸ್ಥೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
      officialPortalBtn: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "ಮೂಲ",
      statutoryConfidentiality: "ಸೆಕ್ಷನ್ 15, ಜನಗಣತಿ ಕಾಯ್ದೆ, 1948",
      subjectToNotification: "ಸರ್ಕಾರಿ ಅಧಿಸೂಚನೆಗೆ ಒಳಪಟ್ಟಿದೆ",
      verifiedGuidance: "ಪರಿಶೀಲಿಸಿದ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ",
      close: "ಮುಚ್ಚಿ",
      gotIt: "ತಿಳಿಯಿತು",
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      back: "ಹಿಂದಕ್ಕೆ",
      next: "ಮುಂದಕ್ಕೆ",
      previous: "ಹಿಂದಿನ"
    },
    nav: {
      home: "ಮುಖಪುಟ",
      howItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      schedule: "ನನ್ನ ವೇಳಾಪಟ್ಟಿ",
      selfEnumeration: "ಸ್ವಯಂ-ಗಣತಿ",
      dataExplorer: "ಡೇಟಾ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      askAi: "AI ಕೇಳಿ"
    },
    home: {
      heroTitle: "ಭಾರತದ ಜನಗಣತಿ.",
      heroTitleHighlight: "ಈಗ ಸರಳ.",
      heroSubtitle: "ಜನಗಣತಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ವೇಳಾಪಟ್ಟಿಯನ್ನು ನೋಡಿ, ಸ್ವಯಂ-ಗಣತಿ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ.",
      exploreGuideBtn: "ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ",
      viewTimelineBtn: "ವೇಳಾಪಟ್ಟಿ ನೋಡಿ",
      stats: {
        phasesCount: "2",
        phasesLabel: "ಯೋಜಿತ ಹಂತಗಳು",
        languagesCount: "22",
        languagesLabel: "ಅಧಿಕೃತ ಭಾಷೆಗಳು",
        modeCount: "ಹೈಬ್ರಿಡ್",
        modeLabel: "ಡಿಜಿಟಲ್ ಮತ್ತು ಮನೆ ಸಮೀಕ್ಷೆ",
        sourceNote: "ಚೌಕಟ್ಟು: ಜನಗಣತಿ ನಿಯಮಗಳು ಮತ್ತು ORGI ಮಾರ್ಗಸೂಚಿಗಳು"
      },
      essentialServicesTitle: "ಅಗತ್ಯ ಸೇವೆಗಳು",
      cards: {
        understandTitle: "ಜನಗಣತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
        understandDesc: "ಮನೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ಜನಸಂಖ್ಯಾ ಗಣತಿ ಎಂಬ ಎರಡು ಪ್ರಮುಖ ಹಂತಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
        scheduleTitle: "ನನ್ನ ವೇಳಾಪಟ್ಟಿ",
        scheduleDesc: "ನಿಮ್ಮ ರಾಜ್ಯ ಅಥವಾ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶದ ದಿನಾಂಕಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        selfEnumTitle: "ಸ್ವಯಂ-ಗಣತಿ ಮಾರ್ಗದರ್ಶಿ",
        selfEnumDesc: "ಡಿಜಿಟಲ್ ಸ್ವಯಂ-ಗಣತಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದರ ಹಂತ-ಹಂತದ ಮಾಹಿತಿ.",
        askAiTitle: "CensusSaathi AI ಕೇಳಿ",
        askAiDesc: "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ ತ್ವರಿತ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಲು ಚಾಟ್ ಮಾಡಿ.",
        askAiBtn: "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ",
        verifyTitle: "ಮಾಹಿತಿ ಪರಿಶೀಲಿಸಿ",
        verifyDesc: "ವದಂತಿಗಳನ್ನು ನಂಬಬೇಡಿ, ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಅಧಿಸೂಚನೆಗಳನ್ನು ಮಾತ್ರ ಪರಿಶೀಲಿಸಿ.",
        dataTitle: "ಐತಿಹಾಸಿಕ ಡೇಟಾ ನೋಡಿ",
        dataDesc: "ಭಾರತದ ಜನಸಂಖ್ಯಾ ಇತಿಹಾಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಡೇಟಾ ಮತ್ತು ಚಾರ್ಟ್‌ಗಳನ್ನು ನೋಡಿ."
      },
      empowerTitle: "ಡೇಟಾದೊಂದಿಗೆ ನಾಗರಿಕರ ಸಬಲೀಕರಣ",
      empowerDesc: "ಜನಗಣತಿಯು ವಿಶ್ವದ ಅತಿ ದೊಡ್ಡ ಆಡಳಿತಾತ್ಮಕ ಕಾರ್ಯವಾಗಿದೆ. CensusSaathi ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      pillarZeroData: "ಶೂನ್ಯ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂಗ್ರಹ ನೀತಿ",
      pillarMultilingual: "ಎಲ್ಲಾ ಪ್ರದೇಶಗಳಿಗೆ ಬಹುಭಾಷಾ ಬೆಂಬಲ",
      dashboardTitle: "ಜನಸಂಖ್ಯಾ ಚಿತ್ರಣ (1951-2011)",
      dashboardBadge: "ನಾಗರಿಕ ಮಾಹಿತಿ ಪೋರ್ಟಲ್"
    },
    schedule: {
      badge: "ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಸ್ಥಿತಿ",
      title: "ಜನಗಣತಿ 2027 ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ",
      subtitle: "ಪ್ರತಿಯೊಂದು ರಾಜ್ಯ ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶದ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
      selectLabel: "ರಾಜ್ಯ ಅಥವಾ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      selectPlaceholder: "-- ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ --",
      allIndiaOption: "ಅಖಿಲ ಭಾರತ (ರಾಷ್ಟ್ರೀಯ ವೇಳಾಪಟ್ಟಿ ವಿವರ)",
      statusTitle: "ಅಧಿಕೃತ ಅಧಿಸೂಚನೆ ಸ್ಥಿತಿ",
      directorateTitle: "ನಿರ್ದೇಶನಾಲಯ",
      phase1Title: "ಹಂತ 1: ಮನೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ವಸತಿ",
      phase2Title: "ಹಂತ 2: ಜನಸಂಖ್ಯಾ ಗಣತಿ",
      selfEnumTitle: "ಡಿಜಿಟಲ್ ಸ್ವಯಂ-ಗಣತಿ ಅವಧಿ",
      notesTitle: "ಪ್ರಾದೇಶಿಕ ವಿವರಗಳು",
      viewOfficialPortal: "ಅಧಿಕೃತ ಗೆಜೆಟ್ ಪ್ರಕಟಣೆಗಳನ್ನು ನೋಡಿ",
      errorNotFound: "ಆಯ್ಕೆಮಾಡಿದ ರಾಜ್ಯ ಕಂಡುಬಂದಿಲ್ಲ."
    },
    selfEnumeration: {
      badge: "ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶಿ",
      title: "ಸ್ವಯಂ-ಗಣತಿ: ಸರಳ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ",
      subtitle: "ಆನ್‌ಲೈನ್ ಸ್ವಯಂ-ಗಣತಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
      stepProgress: "ಹಂತ {current}/{total}: {title}",
      guidedProgress: "{percent}% ಮಾರ್ಗದರ್ಶನ",
      prevBtn: "ಹಿಂದಿನ ಹಂತ",
      nextBtn: "ಮುಂದಿನ ಹಂತ",
      restartBtn: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ",
      checkScheduleBtn: "ವೇಳಾಪಟ್ಟಿ ನೋಡಿ",
      officialPortalBtn: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್",
      steps: {
        step1Title: "ಸ್ವಯಂ-ಗಣತಿ ಎಂದರೇನು?",
        step1Desc: "ಗಣತಿದಾರರು ಬರುವ ಮುನ್ನ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕುಟುಂಬದ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡುವ ಐಚ್ಛಿಕ ವಿಧಾನ.",
        step1Badge: "ಐಚ್ಛಿಕ ಡಿಜಿಟಲ್ ವಿಧಾನ",
        step2Title: "ವೇಳಾಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ",
        step2Desc: "ನಿಮ್ಮ ರಾಜ್ಯಕ್ಕೆ ನಿಗದಿಪಡಿಸಿದ ದಿನಾಂಕಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
        step3Title: "ಅಗತ್ಯ ಮಾಹಿತಿ ಸಿದ್ಧಪಡಿಸಿ",
        step3Desc: "ವಯಸ್ಸು, ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ ಮತ್ತು ಮನೆ ಸೌಲಭ್ಯಗಳ ವಿವರಗಳನ್ನು ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ.",
        step3Check1: "ಮೂಲ ವಿವರಗಳು",
        step3Check2: "ಮನೆಯ ಸೌಲಭ್ಯಗಳು",
        step4Title: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",
        step4Desc: "ಮೊಬೈಲ್ OTP ಮೂಲಕ ಲಾಗಿನ್ ಆಗಿ. ಡೊಮೈನ್ .gov.in ಆಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
        step5Title: "ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ",
        step5Desc: "ಫಾರ್ಮ್ ಅನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ಸಲ್ಲಿಸಿ.",
        step5Badge: "ಪರಿಶೀಲನೆ ಬೆಂಬಲ",
        step6Title: "ರೆಫರೆನ್ಸ್ ಕೋಡ್ ಇಟ್ಟುಕೊಳ್ಳಿ",
        step6Desc: "ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿದ ನಂತರ ಸಿಗುವ ರಸೀದಿ ಸಂಖ್ಯೆಯನ್ನು ಗಣತಿದಾರರಿಗೆ ತೋರಿಸಲು ಇಟ್ಟುಕೊಳ್ಳಿ.",
        step6Badge: "ಸ್ವೀಕೃತಿ ಕೋಡ್"
      },
      readyCardTitle: "ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
      readyCardDesc: "ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ನೇರವಾಗಿ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಡಿ.",
      securityAdvisory: "ಮುಖ್ಯ ಸೂಚನೆ: CensusSaathi ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ವೇದಿಕೆಯಾಗಿದೆ. ನಾವು ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ."
    },
    privacy: {
      badge: "ಗೌಪ್ಯತೆ ಮತ್ತು ನಂಬಿಕೆ",
      title: "ನಿಮ್ಮ ಮಾಹಿತಿ.\nನಿಮ್ಮ ನಂಬಿಕೆ.",
      subtitle: "ಕಾನೂನುಬದ್ಧ ಗೌಪ್ಯತೆ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
      cards: {
        statutoryTitle: "ಕಾನೂನುಬದ್ಧ ಗೌಪ್ಯತೆ",
        statutoryDesc: "ಸೆಕ್ಷನ್ 15 ರ ಅಡಿಯಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಗೌಪ್ಯವಾಗಿಡಲಾಗುತ್ತದೆ.",
        securityTitle: "ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶನ",
        securityDesc: "ನಕಲಿ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಂದ ರಕ್ಷಿಸಲು ಭದ್ರತಾ ಸಲಹೆಗಳು.",
        verifiedTitle: "ಪರಿಶೀಲಿಸಿದ ಮೂಲಗಳು",
        verifiedDesc: "ಎಲ್ಲಾ ಸಾರಾಂಶಗಳು ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ಆಧರಿಸಿವೆ.",
        zeroDataTitle: "ಶೂನ್ಯ ವೈಯಕ್ತಿಕ ಡೇಟಾ",
        zeroDataDesc: "CensusSaathi ವೈಯಕ್ತಿಕ ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.",
        guaranteeBadge: "ಸ್ವತಂತ್ರ ಸಾಧನ ಖಾತರಿ"
      },
      securityReminderTitle: "ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆ",
      securityReminderDesc: "ಜನಗಣತಿ ಇಲಾಖೆಯು ಪಾಸ್‌ವರ್ಡ್, OTP ಅಥವಾ ಹಣವನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.",
      understandingCensusTitle: "ಡೇಟಾದ ಮಹತ್ವ",
      whyGovtTitle: "ಸರ್ಕಾರವು ಡೇಟಾವನ್ನು ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ",
      whyGovtDesc: "ಶಾಲೆಗಳು, ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಯೋಜನಾ ರೂಪರೇಖೆಗಾಗಿ.",
      legalConfTitle: "ಕಾಯ್ದೆಯಡಿ ಗೌಪ್ಯತೆ",
      legalConfDesc: "ಸೆಕ್ಷನ್ 15 ರ ಅಡಿಯಲ್ಲಿ ವಿವರಗಳು ಗೌಪ್ಯವಾಗಿದ್ದು, ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಸಾಕ್ಷ್ಯವಾಗುವುದಿಲ್ಲ.",
      dataPolicyTitle: "CensusSaathi ನೀತಿ",
      whatWeCollectTitle: "ಕೇವಲ ತಾತ್ಕಾಲಿಕ ಆದ್ಯತೆಗಳು (ಐಚ್ಛಿಕ)",
      whatWeCollectList: [
        "ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆ",
        "ಚಾರ್ಟ್‌ಗಳಿಗಾಗಿ ತಾತ್ಕಾಲಿಕ ಫಿಲ್ಟರ್‌ಗಳು",
        "ಚಾಟ್ ಪ್ರಶ್ನೆಗಳು"
      ],
      whatWeNeverTitle: "ನಾವು ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸದ ವಿವರಗಳು",
      whatWeNeverList: [
        "ಅಧಿಕೃತ ಜನಗಣತಿ ಫಾರ್ಮ್ ಡೇಟಾ",
        "ಗುರುತಿನ ಸಂಖ್ಯೆಗಳು (ಆಧಾರ್, ಪ್ಯಾನ್, ವೋಟರ್ ಐಡಿ)",
        "ಬ್ಯಾಂಕ್ ಖಾತೆ ಅಥವಾ ಕಾರ್ಡ್ ವಿವರಗಳು",
        "ಬಯೋಮೆಟ್ರಿಕ್ ವಿವರಗಳು"
      ],
      comparisonTitle: "ಅಧಿಕೃತ ವ್ಯವಸ್ಥೆ vs CensusSaathi",
      comparisonSubtitle: "ವಿವಿಧ ಪಾತ್ರಗಳ ತಿಳುವಳಿಕೆ.",
      officialRoleTitle: "ಅಧಿಕೃತ ಜನಗಣತಿ ವ್ಯವಸ್ಥೆ (ORGI)",
      officialRoleDesc: "ಜನಗಣತಿಯನ್ನು ಕಾನೂನುಬದ್ಧವಾಗಿ ನಡೆಸುವ ಏಕೈಕ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆ.",
      saathiRoleTitle: "CensusSaathi (ಸ್ವತಂತ್ರ ಸಾಧನ)",
      saathiRoleDesc: "ನಾಗರಿಕರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ವೇದಿಕೆ.",
      saathiRoleBadge: "ಸ್ವತಂತ್ರ ಮಾರ್ಗದರ್ಶಿ",
      visitOfficialSiteBtn: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ"
    },
    dataExplorer: {
      badge: "ಐತಿಹಾಸಿಕ ಜನಗಣತಿ ಡೇಟಾ (1951 - 2011)",
      title: "ಭಾರತದ ಜನಗಣತಿ ಇತಿಹಾಸ",
      subtitle: "1951 ರಿಂದ 2011 ರವರೆಗಿನ ಬದಲಾವಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
      filterRegion: "ಪ್ರದೇಶ",
      filterIndicator: "ಸೂಚಕ ಆಯ್ಕೆ",
      filterTimePeriod: "ಸಮಯ: 1951 - {year}",
      applyFiltersBtn: "ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ",
      card1Title: "ಜನಸಂಖ್ಯಾ ಬೆಳವಣಿಗೆ",
      card1Subtitle: "ಒಟ್ಟು ಜನಸಂಖ್ಯೆ ಮಿಲಿಯನ್‌ಗಳಲ್ಲಿ (1951-2011)",
      card2Title: "ಸಾಕ್ಷರತೆ ಮತ್ತು ಶಿಕ್ಷಣ",
      card2Subtitle: "ಸಾಕ್ಷರತಾ ಪ್ರಮಾಣ (2011: 74.04%)",
      card3Title: "ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಅನುಪಾತ",
      card3Subtitle: "2011 ರ ಜನಗಣತಿಯ ಪ್ರಕಾರ ಹಂಚಿಕೆ",
      card3Rural: "ಗ್ರಾಮೀಣ (68.8%)",
      card3Urban: "ನಗರ (31.2%)",
      card4Title: "ರಾಜ್ಯಗಳ ಹೋಲಿಕೆ",
      card4Subtitle: "2011 ರಲ್ಲಿ ಹೆಚ್ಚು ಜನಸಂಖ್ಯೆ ಹೊಂದಿದ ರಾಜ್ಯಗಳು",
      aiInsightsTitle: "AI ಡೇಟಾ ಒಳನೋಟಗಳು",
      aiInsightsDesc: "ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಐತಿಹಾಸಿಕ ಡೇಟಾದ ಸಾರಾಂಶವನ್ನು ಪಡೆಯಿರಿ.",
      explainDataBtn: "ಡೇಟಾವನ್ನು ವಿವರಿಸಿ",
      modalTitle: "ಐತಿಹಾಸಿಕ ಡೇಟಾ ಸಾರಾಂಶ: {region}",
      modalPoints: [
        "1951 ರಿಂದ 2011 ರ ಅವಧಿಯಲ್ಲಿ ಜನಸಂಖ್ಯೆಯು 1.21 ಶತಕೋಟಿಗೆ ಏರಿತು.",
        "ಸಾಕ್ಷರತಾ ಪ್ರಮಾಣವು 74.04% ಕ್ಕೆ ಗಮನಾರ್ಹವಾಗಿ ಹೆಚ್ಚಿತು.",
        "68.8% ಜನರು ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಮತ್ತು 31.2% ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದಾರೆ."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "ಜನಗಣತಿ 2027 ರ ಬಗ್ಗೆ ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",
      welcomeHeading: "ಜನಗಣತಿ 2027 ಅನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      placeholder: "{language} ನಲ್ಲಿ ಕೇಳಿ (ಉದಾ: ಹಂತ 1, ಗೌಪ್ಯತೆ, ವೇಳಾಪಟ್ಟಿ)...",
      askBtn: "ಕೇಳಿ",
      clearConversation: "ಸಂಭಾಷಣೆಯನ್ನು ಅಳಿಸಿ",
      voiceInputTitle: "ಧ್ವನಿ ಮೂಲಕ ಕೇಳಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
      voiceListening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದೆ...",
      exploreTopicsTitle: "ವಿಷಯಗಳನ್ನು ನೋಡಿ",
      consultingKnowledge: "ಮಾಹಿತಿ ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
      advisoryBox: "CensusSaathi ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ವೇದಿಕೆಯಾಗಿದೆ. ಅಧಿಕೃತ ವಿವರಗಳಿಗೆ censusindia.gov.in ನೋಡಿ."
    },
    modal: {
      chooseLanguageTitle: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      chooseLanguageSubtitle: "ನಿಮಗೆ ಅನುಕೂಲಕರವಾದ ಭಾಷೆಯಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಿರಿ.",
      continueBtn: "ಮುಂದುವರಿಸಿ",
      changeLaterNote: "ನೀವು ಇದನ್ನು ನಂತರ ಬದಲಾಯಿಸಬಹುದು."
    },
    footer: {
      privacyLawTitle: "ಗೌಪ್ಯತೆ ಮತ್ತು ಕಾನೂನು (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi ಸ್ವತಂತ್ರ ನಾಗರಿಕ ಮಾಹಿತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ಭಾರತ ಸರ್ಕಾರ ಅಥವಾ Office of the Registrar General and Census Commissioner, India (ORGI) ನೊಂದಿಗೆ ಸಂಯೋಜಿತವಾಗಿಲ್ಲ ಅಥವಾ ಅಧಿಕೃತ ಸೇವೆಯಲ್ಲ.",
      officialPortalNotice: "ಅಧಿಕೃತ ಜನಗಣತಿ ಮಾಹಿತಿ, ಅಧಿಸೂಚನೆಗಳು ಮತ್ತು ಸೇವೆಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು censusindia.gov.in ನಲ್ಲಿರುವ ಅಧಿಕೃತ Census of India ಪೋರ್ಟಲ್ ನೋಡಿ.",
      noCollectionNotice: "CensusSaathi ನಾಗರಿಕರ ಪರವಾಗಿ ಯಾವುದೇ ಅಧಿಕೃತ ಜನಗಣತಿ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ ಅಥವಾ ಸಲ್ಲಿಸುವುದಿಲ್ಲ.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "ಮುಖಪುಟ",
        schedule: "ವೇಳಾಪಟ್ಟಿ",
        selfEnum: "ಸ್ವಯಂ-ಗಣತಿ",
        privacy: "ಗೌಪ್ಯತೆ ಮತ್ತು ಕಾನೂನು",
        data: "ಐತಿಹಾಸಿಕ ಡೇಟಾ"
      }
    }
  },

  ml: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "സെൻസസ് 2027 • പൗര വിവര മാർഗ്ഗരേഖ",
      disclaimer: "CensusSaathi ഒരു സ്വതന്ത്ര വിവര പ്ലാറ്റ്‌ഫോമാണ്. ഇത് ഔദ്യോഗിക സെൻസസ് സംവിധാനത്തിന് പകരമല്ല.",
      officialPortalBtn: "ഔദ്യോഗിക സർക്കാർ പോർട്ടൽ സന്ദർശിക്കുക",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "ഉറവിടം",
      statutoryConfidentiality: "സെക്ഷൻ 15, സെൻസസ് ആക്ട്, 1948",
      subjectToNotification: "ഗസറ്റ് വിജ്ഞാപനത്തിന് വിധേയം",
      verifiedGuidance: "പരിശോധിച്ച മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
      close: "അടയ്ക്കുക",
      gotIt: "മനസ്സിലായി",
      loading: "ലോഡ് ചെയ്യുന്നു...",
      back: "പിന്നോട്ട്",
      next: "അടുത്തത്",
      previous: "മുമ്പത്തെ"
    },
    nav: {
      home: "ഹോം",
      howItWorks: "പ്രവർത്തനരീതി",
      schedule: "ഷെഡ്യൂൾ",
      selfEnumeration: "സെൽഫ്-എന്യൂമറേഷൻ",
      dataExplorer: "ഡാറ്റാ എക്സ്പ്ലോറർ",
      askAi: "AI-യോട് ചോദിക്കുക"
    },
    home: {
      heroTitle: "ഇന്ത്യയുടെ സെൻസസ്.",
      heroTitleHighlight: "ഇനി ലളിതം.",
      heroSubtitle: "സെൻസസ് നടപടികൾ മനസ്സിലാക്കൂ, ഷെഡ്യൂൾ കാണൂ, സെൽഫ്-എന്യൂമറേഷൻ അറിയൂ, നിങ്ങളുടെ മാതൃഭാഷയിൽ ഉത്തരങ്ങൾ നേടൂ.",
      exploreGuideBtn: "ഗൈഡ് പരിശോധിക്കുക",
      viewTimelineBtn: "ഷെഡ്യൂൾ കാണുക",
      stats: {
        phasesCount: "2",
        phasesLabel: "ഘട്ടങ്ങൾ",
        languagesCount: "22",
        languagesLabel: "അംഗീകൃത ഭാഷകൾ",
        modeCount: "ഹൈബ്രിഡ്",
        modeLabel: "ഡിജിറ്റൽ & നേരിട്ടുള്ള സർവേ",
        sourceNote: "ചട്ടക്കൂട്: സെൻസസ് ചട്ടങ്ങളും ORGI മാർഗ്ഗരേഖകളും"
      },
      essentialServicesTitle: "പ്രധാന സേവനങ്ങൾ",
      cards: {
        understandTitle: "സെൻസസ് മനസ്സിലാക്കൂ",
        understandDesc: "ഭവന ലിസ്റ്റിംഗും ജനസംഖ്യാ കണക്കെടുപ്പും അടങ്ങിയ രണ്ട് പ്രധാന ഘട്ടങ്ങളെക്കുറിച്ച് അറിയുക.",
        scheduleTitle: "എന്റെ ഷെഡ്യൂൾ",
        scheduleDesc: "നിങ്ങളുടെ സംസ്ഥാനത്തെ തീയതികളും വിവരങ്ങളും പരിശോധിക്കുക.",
        selfEnumTitle: "സെൽഫ്-എന്യൂമറേഷൻ ഗൈഡ്",
        selfEnumDesc: "ഓൺലൈൻ സെൽഫ്-എന്യൂമറേഷൻ എങ്ങനെ സുരക്ഷിതമായി പൂർത്തിയാക്കാമെന്ന് അറിയുക.",
        askAiTitle: "CensusSaathi AI-യോട് ചോദിക്കുക",
        askAiDesc: "സംശയങ്ങളുണ്ടോ? തൽക്ഷണ മാർഗ്ഗനിർദ്ദേശത്തിനായി മലയാളത്തിൽ ചാറ്റ് ചെയ്യുക.",
        askAiBtn: "ചാറ്റ് തുടങ്ങുക",
        verifyTitle: "വിവരങ്ങൾ പരിശോധിക്കുക",
        verifyDesc: "വ്യാജ പ്രചാരണങ്ങളിൽ വീഴാതെ ഔദ്യോഗിക അറിയിപ്പുകൾ മാത്രം വിശ്വസിക്കുക.",
        dataTitle: "ചരിത്ര ഡാറ്റ പരിശോധിക്കുക",
        dataDesc: "ഇന്ത്യയുടെ മുൻകാല സെൻസസ് ഡാറ്റയും ചാർട്ടുകളും പരിശോധിക്കുക."
      },
      empowerTitle: "വിവരങ്ങളിലൂടെ ജനശാക്തീകരണം",
      empowerDesc: "സെൻസസ് ലോകത്തെ ഏറ്റവും വലിയ ഭരണപരമായ പ്രവർത്തനമാണ്. പൗരന്മാർക്ക് നിയമങ്ങളും നടപടികളും മനസ്സിലാക്കാൻ CensusSaathi സഹായിക്കുന്നു.",
      pillarZeroData: "വ്യക്തിഗത വിവരങ്ങൾ ശേഖരിക്കില്ല",
      pillarMultilingual: "എല്ലാ ഭാഷകൾക്കും പിന്തുണ",
      dashboardTitle: "ജനസംഖ്യാ ചിത്രം ഒറ്റനോട്ടത്തിൽ (1951-2011)",
      dashboardBadge: "പൗര വിവര പോർട്ടൽ"
    },
    schedule: {
      badge: "ഷെഡ്യൂളും വിവരങ്ങളും",
      title: "സെൻസസ് 2027 ഷെഡ്യൂളും മാർഗ്ഗരേഖയും",
      subtitle: "ഓരോ സംസ്ഥാനത്തിന്റെയും വിവരങ്ങളും അറിയിപ്പുകളും പരിശോധിക്കുക.",
      selectLabel: "സംസ്ഥാനം അല്ലെങ്കിൽ കേന്ദ്രഭരണ പ്രദേശം തിരഞ്ഞെടുക്കുക",
      selectPlaceholder: "-- സംസ്ഥാനം തിരഞ്ഞെടുക്കുക --",
      allIndiaOption: "അഖിലേന്ത്യാ തലത്തിലുള്ള ഷെഡ്യൂൾ",
      statusTitle: "ഔദ്യോഗിക വിജ്ഞാപന നില",
      directorateTitle: "ഡയറക്ടറേറ്റ്",
      phase1Title: "ഘട്ടം 1: ഭവന ലിസ്റ്റിംഗും ഭവന സെൻസസും",
      phase2Title: "ഘട്ടം 2: ജനസംഖ്യാ കണക്കെടുപ്പ്",
      selfEnumTitle: "ഡിജിറ്റൽ സെൽഫ്-എന്യൂമറേഷൻ കാലയളവ്",
      notesTitle: "പ്രാദേശിക വിവരങ്ങൾ",
      viewOfficialPortal: "ഔദ്യോഗിക ഗസറ്റ് വിജ്ഞാപനം കാണുക",
      errorNotFound: "തിരഞ്ഞെടുത്ത സംസ്ഥാനം കണ്ടെത്താനായില്ല."
    },
    selfEnumeration: {
      badge: "വിവര മാർഗ്ഗരേഖ",
      title: "സെൽഫ്-എന്യൂമറേഷൻ: ലളിതമായ ഘട്ടങ്ങൾ",
      subtitle: "ഓൺലൈൻ സെൽഫ്-എന്യൂമറേഷൻ എങ്ങനെ പൂർത്തിയാക്കാമെന്ന് മനസ്സിലാക്കൂ.",
      stepProgress: "ഘട്ടം {current}/{total}: {title}",
      guidedProgress: "{percent}% പൂർത്തിയായി",
      prevBtn: "മുമ്പത്തെ ഘട്ടം",
      nextBtn: "അടുത്ത ഘട്ടം",
      restartBtn: "വീണ്ടും തുടങ്ങുക",
      checkScheduleBtn: "ഷെഡ്യൂൾ കാണുക",
      officialPortalBtn: "ഔദ്യോഗിക പോർട്ടൽ",
      steps: {
        step1Title: "സെൽഫ്-എന്യൂമറേഷൻ എന്താണ്?",
        step1Desc: "എന്യൂമറേറ്റർ വരുന്നതിന് മുമ്പ് വിവരങ്ങൾ ഓൺലൈനായി രേഖപ്പെടുത്തുന്ന സ്വമേധയാ ഉള്ള രീതി.",
        step1Badge: "ഡിജിറ്റൽ രീതി",
        step2Title: "ഷെഡ്യൂൾ പരിശോധിക്കുക",
        step2Desc: "നിങ്ങളുടെ സംസ്ഥാനത്തെ തീയതികൾ പരിശോധിക്കുക.",
        step3Title: "വിവരങ്ങൾ തയ്യാറാക്കുക",
        step3Desc: "പ്രായം, വിദ്യാഭ്യാസം, തൊഴിൽ, ഭവന സൗകര്യങ്ങൾ എന്നിവയുടെ വിവരങ്ങൾ തയ്യാറാക്കി വയ്ക്കുക.",
        step3Check1: "അടിസ്ഥാന വിവരങ്ങൾ",
        step3Check2: "ഭവന സൗകര്യങ്ങൾ",
        step4Title: "ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക",
        step4Desc: "മൊബൈൽ OTP ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക. വെബ്സൈറ്റ് .gov.in ആണെന്ന് ഉറപ്പാക്കുക.",
        step5Title: "പ്രക്രിയ പൂർത്തിയാക്കുക",
        step5Desc: "ഫോം ശ്രദ്ധാപൂർവ്വം പൂരിപ്പിച്ച് സമർപ്പിക്കുക.",
        step5Badge: "പരിശോധനാ സൗകര്യം",
        step6Title: "റഫറൻസ് നമ്പർ സൂക്ഷിക്കുക",
        step6Desc: "ലഭിക്കുന്ന റഫറൻസ് കോഡ് എന്യൂമറേറ്റർ വരുമ്പോൾ കാണിക്കാനായി സൂക്ഷിക്കുക.",
        step6Badge: "റഫറൻസ് കോഡ്"
      },
      readyCardTitle: "കൂടുതൽ അറിയാൻ താൽപ്പര്യമുണ്ടോ?",
      readyCardDesc: "ഔദ്യോഗിക രേഖകൾ നേരിട്ട് കേന്ദ്ര സർക്കാർ പോർട്ടലിൽ കാണുക.",
      securityAdvisory: "പ്രധാന അറിയിപ്പ്: CensusSaathi ഒരു സ്വതന്ത്ര വിവര പ്ലാറ്റ്‌ഫോമാണ്. വ്യക്തിഗത വിവരങ്ങൾ ശേഖരിക്കാറില്ല."
    },
    privacy: {
      badge: "രഹസ്യസ്വഭാവവും സുരക്ഷിതത്വവും",
      title: "നിങ്ങളുടെ വിവരങ്ങൾ.\nനിങ്ങളുടെ വിശ്വാസം.",
      subtitle: "നിയമപരമായ സുരക്ഷിതത്വം എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് മനസ്സിലാക്കൂ.",
      cards: {
        statutoryTitle: "നിയമപരമായ സുരക്ഷിതത്വം",
        statutoryDesc: "സെൻസസ് ആക്ട് സെക്ഷൻ 15 പ്രകാരം വിവരങ്ങൾ അതീവ രഹസ്യമായിരിക്കും.",
        securityTitle: "സുരക്ഷാ മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
        securityDesc: "വ്യാജ വെബ്സൈറ്റുകളിൽ നിന്ന് രക്ഷപ്പെടാനുള്ള നിർദ്ദേശങ്ങൾ.",
        verifiedTitle: "പരിശോധിച്ച ഉറവിടങ്ങൾ",
        verifiedDesc: "എല്ലാ വിവരങ്ങളും ഔദ്യോഗിക രേഖകളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.",
        zeroDataTitle: "വ്യക്തിഗത ഡാറ്റ ശേഖരിക്കില്ല",
        zeroDataDesc: "CensusSaathi ബാങ്ക് വിവരങ്ങളോ വ്യക്തിഗത വിവരങ്ങളോ ആവശ്യപ്പെടില്ല.",
        guaranteeBadge: "സ്വതന്ത്ര പ്ലാറ്റ്‌ഫോം ഉറപ്പ്"
      },
      securityReminderTitle: "സുരക്ഷാ മുന്നറിയിപ്പ്",
      securityReminderDesc: "സെൻസസ് വിഭാഗം ഒരിക്കലും പാസ്‌വേഡോ പണമോ ആവശ്യപ്പെടില്ല.",
      understandingCensusTitle: "സെൻസസ് വിവരങ്ങളുടെ പ്രാധാന്യം",
      whyGovtTitle: "സർക്കാർ എന്തിനാണ് വിവരങ്ങൾ ശേഖരിക്കുന്നത്",
      whyGovtDesc: "സ്കൂളുകൾ, ആശുപത്രികൾ, ക്ഷേമപദ്ധതികൾ എന്നിവയുടെ ആസൂത്രണത്തിന്.",
      legalConfTitle: "നിയമപ്രകാരമുള്ള രഹസ്യസ്വഭാവം",
      legalConfDesc: "സെക്ഷൻ 15 പ്രകാരം വിവരങ്ങൾ കോടതിയിൽ തെളിവായി ഉപയോഗിക്കില്ല.",
      dataPolicyTitle: "CensusSaathi നയം",
      whatWeCollectTitle: "താൽക്കാലിക വിവരങ്ങൾ മാത്രം (ഐച്ഛികം)",
      whatWeCollectList: [
        "തിരഞ്ഞെടുത്ത ഭാഷ",
        "ചാർട്ടുകൾക്കുള്ള താൽക്കാലിക ഫിൽട്ടറുകൾ",
        "ചാറ്റ് സെഷൻ ചോദ്യങ്ങൾ"
      ],
      whatWeNeverTitle: "ഞങ്ങൾ ശേഖരിക്കാത്ത കാര്യങ്ങൾ",
      whatWeNeverList: [
        "ഔദ്യോഗിക സെൻസസ് ഫോം ഡാറ്റ",
        "തിരിച്ചറിയൽ രേഖകൾ (ആധാർ, പാൻ, വോട്ടർ ഐഡി)",
        "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ",
        "ബയോമെട്രിക് വിവരങ്ങൾ"
      ],
      comparisonTitle: "ഔദ്യോഗിക സംവിധാനം vs CensusSaathi",
      comparisonSubtitle: "വ്യത്യസ്ത പങ്കുകൾ മനസ്സിലാക്കുക.",
      officialRoleTitle: "ഔദ്യോഗിക സെൻസസ് സംവിധാനം (ORGI)",
      officialRoleDesc: "സെൻസസ് നടത്താൻ അധികാരമുള്ള ഏക സർക്കാർ സംവിധാനം.",
      saathiRoleTitle: "CensusSaathi (സ്വതന്ത്ര പ്ലാറ്റ്‌ഫോം)",
      saathiRoleDesc: "പൗരന്മാരെ സഹായിക്കാനുള്ള സ്വതന്ത്ര വിവര പോർട്ടൽ.",
      saathiRoleBadge: "സ്വതന്ത്ര സഹായി",
      visitOfficialSiteBtn: "ഔദ്യോഗിക പോർട്ടൽ കാണുക"
    },
    dataExplorer: {
      badge: "ചരിത്ര സെൻസസ് ഡാറ്റ (1951 - 2011)",
      title: "ഇന്ത്യയുടെ സെൻസസ് ചരിത്രം",
      subtitle: "1951 മുതൽ 2011 വരെയുള്ള ജനസംഖ്യാ മാറ്റങ്ങൾ പരിശോധിക്കുക.",
      filterRegion: "പ്രദേശം",
      filterIndicator: "സൂചിക തിരഞ്ഞെടുക്കുക",
      filterTimePeriod: "കാലഘട്ടം: 1951 - {year}",
      applyFiltersBtn: "ഫിൽട്ടറുകൾ പ്രയോഗിക്കുക",
      card1Title: "ജനസംഖ്യാ വളർച്ചാ നിരക്ക്",
      card1Subtitle: "ആകെ ജനസംഖ്യ മില്യണിൽ (1951-2011)",
      card2Title: "സാക്ഷരതയും വിദ്യാഭ്യാസവും",
      card2Subtitle: "സാക്ഷരതാ നിരക്ക് (2011: 74.04%)",
      card3Title: "ഗ്രാമ-നഗര അനുപാതം",
      card3Subtitle: "2011 സെൻസസ് പ്രകാരമുള്ള വിതരണം",
      card3Rural: "ഗ്രാമം (68.8%)",
      card3Urban: "നഗരം (31.2%)",
      card4Title: "സംസ്ഥാനങ്ങളുടെ താരതമ്യം",
      card4Subtitle: "2011-ൽ കൂടുതൽ ജനസംഖ്യയുള്ള സംസ്ഥാനങ്ങൾ",
      aiInsightsTitle: "AI ഡാറ്റ വിശകലനം",
      aiInsightsDesc: "ലളിതമായ മലയാളത്തിൽ വിവരങ്ങളുടെ സംഗ്രഹം നേടുക.",
      explainDataBtn: "ഡാറ്റ വിശദീകരിക്കുക",
      modalTitle: "ഡാറ്റാ സംഗ്രഹം: {region}",
      modalPoints: [
        "1951 മുതൽ 2011 വരെ ജനസംഖ്യ ഉയർന്ന് 1.21 ബില്യണിലെത്തി.",
        "സാക്ഷരതാ നിരക്ക് 74.04% ആയി ഗണ്യമായി വർദ്ധിച്ചു.",
        "68.8% ആളുകൾ ഗ്രാമങ്ങളിലും 31.2% നഗരങ്ങളിലും ജീവിക്കുന്നു."
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "സെൻസസ് 2027 സംബന്ധിച്ച ചോദ്യങ്ങൾ മലയാളത്തിൽ ചോദിക്കൂ.",
      welcomeHeading: "സെൻസസ് 2027 മനസ്സിലാക്കാൻ ഞാൻ എങ്ങനെ സഹായിക്കണം?",
      placeholder: "{language}-ൽ ചോദിക്കൂ (ഉദാ: ഘട്ടം 1, സുരക്ഷ, ഷെഡ്യൂൾ)...",
      askBtn: "ചോദിക്കുക",
      clearConversation: "സംഭാഷണം മായ്ക്കുക",
      voiceInputTitle: "ശബ്ദം വഴി ചോദിക്കാൻ ക്ലിക്ക് ചെയ്യുക",
      voiceListening: "കേൾക്കുന്നു...",
      exploreTopicsTitle: "വിഷയങ്ങൾ കാണുക",
      consultingKnowledge: "വിവരങ്ങൾ പരിശോധിക്കുന്നു...",
      advisoryBox: "CensusSaathi ഒരു സ്വതന്ത്ര വിവര പ്ലാറ്റ്‌ഫോമാണ്. ഔദ്യോഗിക വിവരങ്ങൾക്ക് censusindia.gov.in കാണുക."
    },
    modal: {
      chooseLanguageTitle: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
      chooseLanguageSubtitle: "നിങ്ങൾക്ക് സൗകര്യപ്രദമായ ഭാഷയിൽ വിവരങ്ങൾ അറിയൂ.",
      continueBtn: "തുടരുക",
      changeLaterNote: "ഇത് പിന്നീട് മാറ്റാവുന്നതാണ്."
    },
    footer: {
      privacyLawTitle: "സ്വകാര്യതയും നിയമവും (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi ഒരു സ്വതന്ത്ര പൗര വിവര-മാർഗ്ഗനിർദ്ദേശ പ്ലാറ്റ്‌ഫോമാണ്. ഇത് ഭാരത സർക്കാരുമായോ Office of the Registrar General and Census Commissioner, India (ORGI)-മായോ അഫിലിയേറ്റ് ചെയ്ത ഔദ്യോഗിക സേവനമല്ല.",
      officialPortalNotice: "ഔദ്യോഗിക സെൻസസ് വിവരങ്ങൾ, അറിയിപ്പുകൾ, സേവനങ്ങൾ എന്നിവക്കായി censusindia.gov.in എന്ന ഔദ്യോഗിക Census of India പോർട്ടൽ കാണുക.",
      noCollectionNotice: "CensusSaathi പൗരന്മാർക്ക് വേണ്ടി ഔദ്യോഗിക സെൻസസ് വിവരങ്ങൾ ശേഖരിക്കുകയോ സമർപ്പിക്കുകയോ ചെയ്യുന്നില്ല.",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "ഹോം",
        schedule: "ഷെഡ്യൂൾ",
        selfEnum: "സെൽഫ്-എന്യൂമറേഷൻ",
        privacy: "നിയമവും സുരക്ഷയും",
        data: "ചരിത്ര ഡാറ്റ"
      }
    }
  },

  pa: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 • ਨਾਗਰਿਕ ਜਾਣਕਾਰੀ ਗਾਈਡ",
      disclaimer: "CensusSaathi ਇੱਕ ਸੁਤੰਤਰ ਨਾਗਰਿਕ ਜਾਣਕਾਰੀ ਪੋਰਟਲ ਹੈ। ਇਹ ਸਰਕਾਰੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਪ੍ਰਣਾਲੀ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ।",
      officialPortalBtn: "ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਪੋਰਟਲ 'ਤੇ ਜਾਓ",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "ਸਰੋਤ",
      statutoryConfidentiality: "ਧਾਰਾ 15, ਜਨਗਣਨਾ ਐਕਟ, 1948",
      subjectToNotification: "ਸਰਕਾਰੀ ਗਜ਼ਟ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦੇ ਅਧੀਨ",
      verifiedGuidance: "ਪ੍ਰਮਾਣਿਤ ਵਿਦਿਅਕ ਮਾਰਗਦਰਸ਼ਨ",
      close: "ਬੰਦ ਕਰੋ",
      gotIt: "ਸਮਝ ਗਿਆ",
      loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
      back: "ਪਿੱਛੇ",
      next: "ਅੱਗੇ",
      previous: "ਪਿਛਲਾ"
    },
    nav: {
      home: "ਮੁੱਖ ਪੰਨਾ",
      howItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      schedule: "ਮੇਰਾ ਸ਼ਡਿਊਲ",
      selfEnumeration: "ਸਵੈ-ਗਣਨਾ",
      dataExplorer: "ਡੇਟਾ ਐਕਸਪਲੋਰਰ",
      askAi: "AI ਨੂੰ ਪੁੱਛੋ"
    },
    home: {
      heroTitle: "ਭਾਰਤ ਦੀ ਮਰਦਮਸ਼ੁਮਾਰੀ।",
      heroTitleHighlight: "ਬਣੀ ਆਸਾਨ।",
      heroSubtitle: "ਜਨਗਣਨਾ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸਮਝੋ, ਸ਼ਡਿਊਲ ਦੇਖੋ, ਡਿਜੀਟਲ ਸਵੈ-ਗਣਨਾ ਬਾਰੇ ਜਾਣੋ ਅਤੇ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ।",
      exploreGuideBtn: "ਗਾਈਡ ਦੇਖੋ",
      viewTimelineBtn: "ਸ਼ਡਿਊਲ ਦੇਖੋ",
      stats: {
        phasesCount: "2",
        phasesLabel: "ਯੋਜਨਾਬੱਧ ਪੜਾਅ",
        languagesCount: "22",
        languagesLabel: "ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਭਾਸ਼ਾਵਾਂ",
        modeCount: "ਹਾਈਬ੍ਰਿਡ",
        modeLabel: "ਡਿਜੀਟਲ ਅਤੇ ਘਰ-ਘਰ ਸਰਵੇ",
        sourceNote: "ਨਿਯਮ: ਜਨਗਣਨਾ ਨਿਯਮ ਅਤੇ ORGI ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼"
      },
      essentialServicesTitle: "ਜ਼ਰੂਰੀ ਸੇਵਾਵਾਂ",
      cards: {
        understandTitle: "ਜਨਗਣਨਾ ਨੂੰ ਸਮਝੋ",
        understandDesc: "ਮਕਾਨ ਸੂਚੀਕਰਨ ਅਤੇ ਆਬਾਦੀ ਗਣਨਾ ਦੇ ਦੋ ਮੁੱਖ ਪੜਾਵਾਂ ਬਾਰੇ ਜਾਣੋ।",
        scheduleTitle: "ਮੇਰਾ ਸ਼ਡਿਊਲ",
        scheduleDesc: "ਆਪਣੇ ਰਾਜ ਲਈ ਨਿਰਧਾਰਤ ਤਾਰੀਖਾਂ ਅਤੇ ਜਾਣਕਾਰੀ ਲੱਭੋ।",
        selfEnumTitle: "ਸਵੈ-ਗਣਨਾ ਗਾਈਡ",
        selfEnumDesc: "ਡਿਜੀਟਲ ਸਵੈ-ਗਣਨਾ ਕਿਵੇਂ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਕੰਮ ਕਰਦੀ ਹੈ ਇਸਦੀ ਜਾਣਕਾਰੀ।",
        askAiTitle: "CensusSaathi AI ਨੂੰ ਪੁੱਛੋ",
        askAiDesc: "ਕੋਈ ਸਵਾਲ ਹੈ? ਤੁਰੰਤ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਪੰਜਾਬੀ ਵਿੱਚ ਗੱਲਬਾਤ ਕਰੋ।",
        askAiBtn: "ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ",
        verifyTitle: "ਜਾਣਕਾਰੀ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        verifyDesc: "ਅਫਵਾਹਾਂ ਤੋਂ ਬਚੋ ਅਤੇ ਸਿਰਫ਼ ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ 'ਤੇ ਭਰੋਸਾ ਕਰੋ।",
        dataTitle: "ਇਤਿਹਾਸਕ ਡੇਟਾ ਦੇਖੋ",
        dataDesc: "ਭਾਰਤ ਦੇ ਜਨਸੰਖਿਆ ਇਤਿਹਾਸ ਨੂੰ ਸਮਝਣ ਲਈ ਡੇਟਾ ਅਤੇ ਚਾਰਟ ਦੇਖੋ।"
      },
      empowerTitle: "ਡੇਟਾ ਨਾਲ ਨਾਗਰਿਕਾਂ ਦਾ ਸਸ਼ਕਤੀਕਰਨ",
      empowerDesc: "ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਪ੍ਰਬੰਧਕੀ ਅਭਿਆਸ ਹੈ। CensusSaathi ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
      pillarZeroData: "ਜ਼ੀਰੋ ਨਿੱਜੀ ਡੇਟਾ ਸੰਗ੍ਰਹਿ ਨੀਤੀ",
      pillarMultilingual: "ਸਾਰੇ ਖੇਤਰਾਂ ਲਈ ਬਹੁਭਾਸ਼ਾਈ ਸਹਾਇਤਾ",
      dashboardTitle: "ਜਨਸੰਖਿਆ ਇਕ ਨਜ਼ਰ ਵਿੱਚ (1951-2011)",
      dashboardBadge: "ਨਾਗਰਿਕ ਜਾਣਕਾਰੀ ਪੋਰਟਲ"
    },
    schedule: {
      badge: "ਸ਼ਡਿਊਲ ਅਤੇ ਸਥਿਤੀ",
      title: "ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਸ਼ਡਿਊਲ ਅਤੇ ਜਾਣਕਾਰੀ",
      subtitle: "ਹਰੇਕ ਰਾਜ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ਲਈ ਜਾਣਕਾਰੀ ਅਤੇ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦੇਖੋ।",
      selectLabel: "ਰਾਜ ਜਾਂ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ਚੁਣੋ",
      selectPlaceholder: "-- ਰਾਜ ਚੁਣੋ --",
      allIndiaOption: "ਆਲ ਇੰਡੀਆ (ਰਾਸ਼ਟਰੀ ਸ਼ਡਿਊਲ ਸੰਖੇਪ)",
      statusTitle: "ਅਧਿਕਾਰਤ ਨੋਟੀਫਿਕੇਸ਼ਨ ਸਥਿਤੀ",
      directorateTitle: "ਡਾਇਰੈਕਟੋਰੇਟ",
      phase1Title: "ਪੜਾਅ 1: ਮਕਾਨ ਸੂਚੀਕਰਨ ਅਤੇ ਰਿਹਾਇਸ਼",
      phase2Title: "ਪੜਾਅ 2: ਆਬਾਦੀ ਦੀ ਗਣਨਾ",
      selfEnumTitle: "ਡਿਜੀਟਲ ਸਵੈ-ਗਣਨਾ ਸਮਾਂ",
      notesTitle: "ਖੇਤਰੀ ਵੇਰਵੇ",
      viewOfficialPortal: "ਅਧਿਕਾਰਤ ਗਜ਼ਟ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦੇਖੋ",
      errorNotFound: "ਚੁਣਿਆ ਗਿਆ ਰਾਜ ਨਹੀਂ ਮਿਲਿਆ।"
    },
    selfEnumeration: {
      badge: "ਜਾਣਕਾਰੀ ਗਾਈਡ",
      title: "ਸਵੈ-ਗਣਨਾ: ਸਰਲ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ",
      subtitle: "ਆਨਲਾਈਨ ਸਵੈ-ਗਣਨਾ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ ਇਸ ਬਾਰੇ ਜਾਣੋ।",
      stepProgress: "ਕਦਮ {current}/{total}: {title}",
      guidedProgress: "{percent}% ਮਾਰਗਦਰਸ਼ਨ",
      prevBtn: "ਪਿਛਲਾ ਕਦਮ",
      nextBtn: "ਅਗਲਾ ਕਦਮ",
      restartBtn: "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
      checkScheduleBtn: "ਸ਼ਡਿਊਲ ਦੇਖੋ",
      officialPortalBtn: "ਅਧਿਕਾਰਤ ਪੋਰਟਲ",
      steps: {
        step1Title: "ਸਵੈ-ਗਣਨਾ ਕੀ ਹੈ?",
        step1Desc: "ਗਣਨਾਕਾਰ ਦੇ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪਰਿਵਾਰ ਦੇ ਵੇਰਵੇ ਆਨਲਾਈਨ ਦਰਜ ਕਰਨ ਦਾ ਵਿਕਲਪ।",
        step1Badge: "ਵਿਕਲਪਿਕ ਡਿਜੀਟਲ ਤਰੀਕਾ",
        step2Title: "ਆਪਣਾ ਸ਼ਡਿਊਲ ਚੈੱਕ ਕਰੋ",
        step2Desc: "ਆਪਣੇ ਰਾਜ ਲਈ ਨਿਰਧਾਰਤ ਸਮਾਂ ਚੈੱਕ ਕਰੋ।",
        step3Title: "ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ ਤਿਆਰ ਰੱਖੋ",
        step3Desc: "ਉਮਰ, ਪੜ੍ਹਾਈ, ਕੰਮ ਅਤੇ ਘਰ ਦੀਆਂ ਸਹੂਲਤਾਂ ਦੇ ਵੇਰਵੇ ਤਿਆਰ ਰੱਖੋ।",
        step3Check1: "ਮੁੱਢਲੇ ਵੇਰਵੇ",
        step3Check2: "ਘਰੇਲੂ ਸਹੂਲਤਾਂ",
        step4Title: "ਅਧਿਕਾਰਤ ਪੋਰਟਲ 'ਤੇ ਜਾਓ",
        step4Desc: "ਮੋਬਾਈਲ OTP ਨਾਲ ਲੌਗਇਨ ਕਰੋ। ਵੈੱਬਸਾਈਟ .gov.in ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
        step5Title: "ਪ੍ਰਕਿਰਿਆ ਪੂਰੀ ਕਰੋ",
        step5Desc: "ਫਾਰਮ ਨੂੰ ਧਿਆਨ ਨਾਲ ਭਰੋ ਅਤੇ ਜਮ੍ਹਾ ਕਰੋ।",
        step5Badge: "ਸਮੀਖਿਆ ਸਹਾਇਤਾ",
        step6Title: "ਰੈਫਰੈਂਸ ਕੋਡ ਸਾਂਭ ਕੇ ਰੱਖੋ",
        step6Desc: "ਫਾਰਮ ਜਮ੍ਹਾ ਕਰਨ 'ਤੇ ਮਿਲਿਆ ਨੰਬਰ ਗਣਨਾਕਾਰ ਨੂੰ ਦਿਖਾਉਣ ਲਈ ਰੱਖੋ।",
        step6Badge: "ਰਸੀਦ ਕੋਡ"
      },
      readyCardTitle: "ਹੋਰ ਜਾਣਨ ਲਈ ਤਿਆਰ ਹੋ?",
      readyCardDesc: "ਅਧਿਕਾਰਤ ਦਸਤਾਵੇਜ਼ ਸਿੱਧੇ ਸਰਕਾਰੀ ਪੋਰਟਲ 'ਤੇ ਦੇਖੋ।",
      securityAdvisory: "ਜ਼ਰੂਰੀ ਨੋਟਿਸ: CensusSaathi ਇੱਕ ਸੁਤੰਤਰ ਪੋਰਟਲ ਹੈ। ਅਸੀਂ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਨਹੀਂ ਕਰਦੇ।"
    },
    privacy: {
      badge: "ਗੁਪਤਤਾ ਅਤੇ ਭਰੋਸਾ",
      title: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ।\nਤੁਹਾਡਾ ਭਰੋਸਾ।",
      subtitle: "ਕਾਨੂੰਨੀ ਗੁਪਤਤਾ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ ਇਸ ਬਾਰੇ ਜਾਣੋ।",
      cards: {
        statutoryTitle: "ਕਾਨੂੰਨੀ ਗੁਪਤਤਾ",
        statutoryDesc: "ਧਾਰਾ 15 ਅਧੀਨ ਜਾਣਕਾਰੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਗੁਪਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ।",
        securityTitle: "ਸੁਰੱਖਿਆ ਸੁਝਾਅ",
        securityDesc: "ਜਾਅਲੀ ਵੈੱਬਸਾਈਟਾਂ ਤੋਂ ਬਚਣ ਲਈ ਸੁਰੱਖਿਆ ਨਿਰਦੇਸ਼।",
        verifiedTitle: "ਪ੍ਰਮਾਣਿਤ ਸਰੋਤ",
        verifiedDesc: "ਸਾਰੀ ਜਾਣਕਾਰੀ ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ਾਂ 'ਤੇ ਆਧਾਰਿਤ ਹੈ।",
        zeroDataTitle: "ਜ਼ੀਰੋ ਨਿੱਜੀ ਡੇਟਾ",
        zeroDataDesc: "CensusSaathi ਕਦੇ ਵੀ ਨਿੱਜੀ ਜਾਂ ਬੈਂਕ ਵੇਰਵੇ ਨਹੀਂ ਮੰਗਦਾ।",
        guaranteeBadge: "ਸੁਤੰਤਰ ਟੂਲ ਗਾਰੰਟੀ"
      },
      securityReminderTitle: "ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀ",
      securityReminderDesc: "ਜਨਗਣਨਾ ਵਿਭਾਗ ਕਦੇ ਵੀ ਪਾਸਵਰਡ, OTP ਜਾਂ ਪੈਸੇ ਨਹੀਂ ਮੰਗਦਾ।",
      understandingCensusTitle: "ਡੇਟਾ ਦਾ ਮਹੱਤਵ",
      whyGovtTitle: "ਸਰਕਾਰ ਡੇਟਾ ਕਿਉਂ ਇਕੱਠਾ ਕਰਦੀ ਹੈ",
      whyGovtDesc: "ਸਕੂਲ, ਹਸਪਤਾਲ ਅਤੇ ਭਲਾਈ ਯੋਜਨਾਵਾਂ ਦੀ ਯੋਜਨਾਬੰਦੀ ਲਈ।",
      legalConfTitle: "ਐਕਟ ਅਧੀਨ ਗੁਪਤਤਾ",
      legalConfDesc: "ਧਾਰਾ 15 ਅਧੀਨ ਵੇਰਵੇ ਗੁਪਤ ਹਨ ਅਤੇ ਅਦਾਲਤ ਵਿੱਚ ਸਬੂਤ ਨਹੀਂ ਬਣਦੇ।",
      dataPolicyTitle: "CensusSaathi ਨੀਤੀ",
      whatWeCollectTitle: "ਸਿਰਫ਼ ਆਰਜ਼ੀ ਪਸੰਦ (ਵਿਕਲਪਿਕ)",
      whatWeCollectList: [
        "ਚੁਣੀ ਹੋਈ ਭਾਸ਼ਾ",
        "ਚਾਰਟਾਂ ਲਈ ਆਰਜ਼ੀ ਫਿਲਟਰ",
        "ਚੈਟ ਸਵਾਲ"
      ],
      whatWeNeverTitle: "ਅਸੀਂ ਕਦੇ ਇਕੱਠਾ ਨਹੀਂ ਕਰਦੇ",
      whatWeNeverList: [
        "ਸਰਕਾਰੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਫਾਰਮ ਡੇਟਾ",
        "ਪਛਾਣ ਨੰਬਰ (ਆਧਾਰ, ਪੈਨ, ਵੋਟਰ ਕਾਰਡ)",
        "ਬੈਂਕ ਖਾਤਾ ਜਾਂ ਕਾਰਡ ਵੇਰਵੇ",
        "ਬਾਇਓਮੈਟ੍ਰਿਕ ਡੇਟਾ"
      ],
      comparisonTitle: "ਸਰਕਾਰੀ ਪ੍ਰਣਾਲੀ vs CensusSaathi",
      comparisonSubtitle: "ਵੱਖ-ਵੱਖ ਭੂਮਿਕਾਵਾਂ ਦੀ ਸਮਝ।",
      officialRoleTitle: "ਸਰਕਾਰੀ ਪ੍ਰਣਾਲੀ (ORGI)",
      officialRoleDesc: "ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਮਰਦਮਸ਼ੁਮਾਰੀ ਕਰਵਾਉਣ ਵਾਲੀ ਇਕੋ-ਇਕ ਸਰਕਾਰੀ ਸੰਸਥਾ।",
      saathiRoleTitle: "CensusSaathi (ਸੁਤੰਤਰ ਟੂਲ)",
      saathiRoleDesc: "ਨਾਗਰਿਕਾਂ ਦੀ ਮਦਦ ਲਈ ਇੱਕ ਸੁਤੰਤਰ ਜਾਣਕਾਰੀ ਪੋਰਟਲ।",
      saathiRoleBadge: "ਸੁਤੰਤਰ ਗਾਈਡ",
      visitOfficialSiteBtn: "ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ ਦੇਖੋ"
    },
    dataExplorer: {
      badge: "ਇਤਿਹਾਸਕ ਜਨਗਣਨਾ ਡੇਟਾ (1951 - 2011)",
      title: "ਭਾਰਤ ਦਾ ਮਰਦਮਸ਼ੁਮਾਰੀ ਇਤਿਹਾਸ",
      subtitle: "1951 ਤੋਂ 2011 ਤੱਕ ਦੀਆਂ ਤਬਦੀਲੀਆਂ ਦੇਖੋ।",
      filterRegion: "ਖੇਤਰ",
      filterIndicator: "ਸੂਚਕ ਚੋਣ",
      filterTimePeriod: "ਸਮਾਂ: 1951 - {year}",
      applyFiltersBtn: "ਫਿਲਟਰ ਲਾਗੂ ਕਰੋ",
      card1Title: "ਆਬਾਦੀ ਵਾਧਾ ਦਰ",
      card1Subtitle: "ਕੁੱਲ ਆਬਾਦੀ ਮਿਲੀਅਨ ਵਿੱਚ (1951-2011)",
      card2Title: "ਸਾਖਰਤਾ ਅਤੇ ਸਿੱਖਿਆ",
      card2Subtitle: "ਸਾਖਰਤਾ ਦਰ (2011: 74.04%)",
      card3Title: "ਪੇਂਡੂ ਅਤੇ ਸ਼ਹਿਰੀ ਅਨੁਪਾਤ",
      card3Subtitle: "2011 ਅਨੁਸਾਰ ਵੰਡ",
      card3Rural: "ਪੇਂਡੂ (68.8%)",
      card3Urban: "ਸ਼ਹਿਰੀ (31.2%)",
      card4Title: "ਰਾਜਾਂ ਦੀ ਤੁਲਨਾ",
      card4Subtitle: "2011 ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਆਬਾਦੀ ਵਾਲੇ ਰਾਜ",
      aiInsightsTitle: "AI ਡੇਟਾ ਵਿਸ਼ਲੇਸ਼ਣ",
      aiInsightsDesc: "ਸਰਲ ਪੰਜਾਬੀ ਵਿੱਚ ਇਤਿਹਾਸਕ ਡੇਟਾ ਦਾ ਸਾਰ ਪ੍ਰਾਪਤ ਕਰੋ।",
      explainDataBtn: "ਡੇਟਾ ਸਮਝਾਓ",
      modalTitle: "ਇਤਿਹਾਸਕ ਡੇਟਾ ਸਾਰ: {region}",
      modalPoints: [
        "1951 ਤੋਂ 2011 ਦਰਮਿਆਨ ਆਬਾਦੀ ਵਧ ਕੇ 1.21 ਅਰਬ ਹੋ ਗਈ।",
        "ਸਾਖਰਤਾ ਦਰ ਵਧ ਕੇ 74.04% ਹੋ ਗਈ।",
        "68.8% ਆਬਾਦੀ ਪਿੰਡਾਂ ਵਿੱਚ ਅਤੇ 31.2% ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਰਹਿੰਦੀ ਹੈ।"
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਬਾਰੇ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਵਾਲ ਪੁੱਛੋ।",
      welcomeHeading: "ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
      placeholder: "{language} ਵਿੱਚ ਪੁੱਛੋ (ਜਿਵੇਂ: ਪੜਾਅ 1, ਗੁਪਤਤਾ, ਸ਼ਡਿਊਲ)...",
      askBtn: "ਪੁੱਛੋ",
      clearConversation: "ਗੱਲਬਾਤ ਸਾਫ਼ ਕਰੋ",
      voiceInputTitle: "ਆਵਾਜ਼ ਰਾਹੀਂ ਪੁੱਛਣ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      voiceListening: "ਸੁਣ ਰਿਹਾ ਹੈ...",
      exploreTopicsTitle: "ਵਿਸ਼ੇ ਦੇਖੋ",
      consultingKnowledge: "ਜਾਣਕਾਰੀ ਲੱਭ ਰਿਹਾ ਹੈ...",
      advisoryBox: "CensusSaathi ਇੱਕ ਸੁਤੰਤਰ ਜਾਣਕਾਰੀ ਪੋਰਟਲ ਹੈ। ਅਧਿਕਾਰਤ ਜਾਣਕਾਰੀ ਲਈ censusindia.gov.in ਦੇਖੋ।"
    },
    modal: {
      chooseLanguageTitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
      chooseLanguageSubtitle: "ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਜਾਣਕਾਰੀ ਸਮਝੋ।",
      continueBtn: "ਜਾਰੀ ਰੱਖੋ",
      changeLaterNote: "ਤੁਸੀਂ ਇਸਨੂੰ ਬਾਅਦ ਵਿੱਚ ਬਦਲ ਸਕਦੇ ਹੋ।"
    },
    footer: {
      privacyLawTitle: "ਪ੍ਰਾਈਵੇਸੀ ਅਤੇ ਕਾਨੂੰਨ (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi ਇੱਕ ਸੁਤੰਤਰ ਨਾਗਰਿਕ ਜਾਣਕਾਰੀ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਪਲੇਟਫਾਰਮ ਹੈ। ਇਹ ਭਾਰਤ ਸਰਕਾਰ ਜਾਂ Office of the Registrar General and Census Commissioner, India (ORGI) ਨਾਲ ਸੰਬੰਧਿਤ ਜਾਂ ਅਧਿਕਾਰਤ ਸੇਵਾ ਨਹੀਂ ਹੈ।",
      officialPortalNotice: "ਅਧਿਕਾਰਤ ਮਰਦਮਸ਼ੁਮਾਰੀ ਜਾਣਕਾਰੀ, ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਲਈ ਕਿਰਪਾ ਕਰਕੇ censusindia.gov.in 'ਤੇ ਅਧਿਕਾਰਤ Census of India ਪੋਰਟਲ ਦੇਖੋ।",
      noCollectionNotice: "CensusSaathi ਨਾਗਰਿਕਾਂ ਵੱਲੋਂ ਕੋਈ ਅਧਿਕਾਰਤ ਮਰਦਮਸ਼ੁਮਾਰੀ ਜਵਾਬ ਇਕੱਠੇ ਜਾਂ ਜਮ੍ਹਾ ਨਹੀਂ ਕਰਦਾ ਹੈ।",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "ਮੁੱਖ ਪੰਨਾ",
        schedule: "ਸ਼ਡਿਊਲ",
        selfEnum: "ਸਵੈ-ਗਣਨਾ",
        privacy: "ਗੁਪਤਤਾ ਅਤੇ ਕਾਨੂੰਨ",
        data: "ਇਤਿਹਾਸਕ ਡੇਟਾ"
      }
    }
  },

  or: {
    common: {
      appName: "CensusSaathi AI",
      guideBadge: "ଜନଗଣନା ୨୦୨୭ • ନାଗରିକ ସୂଚନା ଗାଇଡ୍",
      disclaimer: "CensusSaathi ଏକ ସ୍ୱତନ୍ତ୍ର ନାଗରିକ ସୂଚନା ପୋର୍ଟାଲ୍। ଏହା ସରକାରୀ ଜନଗଣନା ବ୍ୟବସ୍ଥାର ବିକଳ୍ପ ନୁହେଁ।",
      officialPortalBtn: "ଅଫିସିଆଲ୍ ସରକାରୀ ପୋର୍ଟାଲ୍ ଦେଖନ୍ତୁ",
      officialOrgName: "Office of the Registrar General & Census Commissioner, India",
      sourcePrefix: "ଉତ୍ସ",
      statutoryConfidentiality: "ଧାରା ୧୫, ଜନଗଣନା ଆଇନ, ୧୯୪୮",
      subjectToNotification: "ସରକାରୀ ବିଜ୍ଞପ୍ତି ଅଧୀନ",
      verifiedGuidance: "ପ୍ରମାଣିତ ଶିକ୍ଷଣୀୟ ମାର୍ଗଦର୍ଶନ",
      close: "ବନ୍ଦ କରନ୍ତୁ",
      gotIt: "ବୁଝିଲି",
      loading: "ଲୋଡ୍ ହେଉଛି...",
      back: "ପଛକୁ",
      next: "ପରବର୍ତ୍ତୀ",
      previous: "ପୂର୍ବବର୍ତ୍ତୀ"
    },
    nav: {
      home: "ମୁଖ୍ୟପୃଷ୍ଠା",
      howItWorks: "କାର୍ଯ୍ୟପ୍ରଣାଳୀ",
      schedule: "ମୋର ସମୟସୂଚୀ",
      selfEnumeration: "ସ୍ୱୟଂ-ଗଣନା",
      dataExplorer: "ଡାଟା ଏକ୍ସପ୍ଲୋରର୍",
      askAi: "AI କୁ ପଚାରନ୍ତୁ"
    },
    home: {
      heroTitle: "ଭାରତର ଜନଗଣନା।",
      heroTitleHighlight: "ହେଲା ସହଜ।",
      heroSubtitle: "ଜନଗଣନା ପ୍ରକ୍ରିୟା ବୁଝନ୍ତୁ, ସମୟସୂଚୀ ଦେଖନ୍ତୁ, ଡିଜିଟାଲ୍ ସ୍ୱୟଂ-ଗଣନା ବିଷୟରେ ଜାଣନ୍ତୁ ଏବଂ ନିଜ ଭାଷାରେ ଉତ୍ତର ପାଆନ୍ତୁ।",
      exploreGuideBtn: "ଗାଇଡ୍ ଦେଖନ୍ତୁ",
      viewTimelineBtn: "ସମୟସୂଚୀ ଦେଖନ୍ତୁ",
      stats: {
        phasesCount: "୨",
        phasesLabel: "ପ୍ରସ୍ତାବିତ ପର୍ଯ୍ୟାୟ",
        languagesCount: "୨୨",
        languagesLabel: "ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ଭାଷା",
        modeCount: "ହାଇବ୍ରିଡ୍",
        modeLabel: "ଡିଜିଟାଲ୍ ଓ ପ୍ରତ୍ୟକ୍ଷ ସର୍ଭେ",
        sourceNote: "ନିୟମାବଳୀ: ଜନଗଣନା ନିୟମ ଓ ORGI ନିର୍ଦ୍ଦେଶାବଳୀ"
      },
      essentialServicesTitle: "ଜରୁରୀ ସେବାସମୂହ",
      cards: {
        understandTitle: "ଜନଗଣନାକୁ ବୁଝନ୍ତୁ",
        understandDesc: "ଘର ତାଲିକା ଏବଂ ଜନସଂଖ୍ୟା ଗଣନା - ଏହି ଦୁଇଟି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପର୍ଯ୍ୟାୟ ବିଷୟରେ ଜାଣନ୍ତୁ।",
        scheduleTitle: "ମୋର ସମୟସୂଚୀ",
        scheduleDesc: "ଆପଣଙ୍କ ରାଜ୍ୟ ପାଇଁ ପ୍ରସ୍ତାବିତ ତାରିଖ ଓ ସୂଚନା ଖୋଜନ୍ତୁ।",
        selfEnumTitle: "ସ୍ୱୟଂ-ଗଣନା ଗାଇଡ୍",
        selfEnumDesc: "ଡିଜିଟାଲ୍ ସ୍ୱୟଂ-ଗଣନା କିପରି ସୁରକ୍ଷିତ ଭାବରେ କାମ କରେ ତାର ମାର୍ଗଦର୍ଶିକା।",
        askAiTitle: "CensusSaathi AI କୁ ପଚାରନ୍ତୁ",
        askAiDesc: "କିଛି ପ୍ରଶ୍ନ ଅଛି କି? ନିଜ ଭାଷାରେ ତୁରନ୍ତ ଉତ୍ତର ପାଇବା ପାଇଁ ଚାଟ୍ କରନ୍ତୁ।",
        askAiBtn: "ଚାଟ୍ ଆରମ୍ଭ କରନ୍ତୁ",
        verifyTitle: "ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ",
        verifyDesc: "ଗୁଜବରୁ ଦୂରେଇ ରୁହନ୍ତୁ ଏବଂ କେବଳ ଅଫିସିଆଲ୍ ବିଜ୍ଞପ୍ତି ଉପରେ ବିଶ୍ୱାସ କରନ୍ତୁ।",
        dataTitle: "ପୁରୁଣା ତଥ୍ୟ ଅନୁସନ୍ଧାନ କରନ୍ତୁ",
        dataDesc: "ଭାରତର ଜନସଂଖ୍ୟା ଇତିହାସ ବୁଝିବା ପାଇଁ ତଥ୍ୟ ଓ ଚାର୍ଟ ଦେଖନ୍ତୁ।"
      },
      empowerTitle: "ତଥ୍ୟ ସହିତ ନାଗରିକ ସଶକ୍ତୀକରଣ",
      empowerDesc: "ଜନଗଣନା ହେଉଛି ବିଶ୍ୱର ସର୍ବବୃହତ ପ୍ରଶାସନିକ କାର୍ଯ୍ୟ। CensusSaathi ନିୟମାବଳୀ ବୁଝିବାରେ ସାହାଯ୍ୟ କରେ।",
      pillarZeroData: "ଶୂନ୍ୟ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସଂଗ୍ରହ ନୀତି",
      pillarMultilingual: "ସମସ୍ତ ଅଞ୍ଚଳ ପାଇଁ ବହୁଭାଷୀ ସୁବିଧା",
      dashboardTitle: "ଏକ ନଜରରେ ଜନସଂଖ୍ୟା (୧୯୫୧-୨୦୧୧)",
      dashboardBadge: "ନାଗରିକ ସୂଚନା ପୋର୍ଟାଲ୍"
    },
    schedule: {
      badge: "ସମୟସୂଚୀ ଓ ସ୍ଥିତି",
      title: "ଜନଗଣନା ୨୦୨୭ ସମୟସୂଚୀ ଓ ନିର୍ଦ୍ଦେଶାବଳୀ",
      subtitle: "ପ୍ରତ୍ୟେକ ରାଜ୍ୟ ଏବଂ କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳର ସୂଚନା ଦେଖନ୍ତୁ।",
      selectLabel: "ରାଜ୍ୟ କିମ୍ବା କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ ଚୟନ କରନ୍ତୁ",
      selectPlaceholder: "-- ରାଜ୍ୟ ଚୟନ କରନ୍ତୁ --",
      allIndiaOption: "ସର୍ବଭାରତୀୟ (ଜାତୀୟ ସମୟସୂଚୀ ବିବରଣୀ)",
      statusTitle: "ଅଫିସିଆଲ୍ ବିଜ୍ଞପ୍ତି ସ୍ଥିତି",
      directorateTitle: "ନିର୍ଦ୍ଦେଶାଳୟ",
      phase1Title: "ପର୍ଯ୍ୟାୟ ୧: ଘର ତାଲିକା ଓ ଆବାସ",
      phase2Title: "ପର୍ଯ୍ୟାୟ ୨: ଜନସଂଖ୍ୟା ଗଣନା",
      selfEnumTitle: "ଡିଜିଟାଲ୍ ସ୍ୱୟଂ-ଗଣନା ସମୟ",
      notesTitle: "ଆଞ୍ଚଳିକ ବିବରଣୀ",
      viewOfficialPortal: "ଅଫିସିଆଲ୍ ଗେଜେଟ୍ ବିଜ୍ଞପ୍ତି ଦେଖନ୍ତୁ",
      errorNotFound: "ଚୟନିତ ରାଜ୍ୟ ମିଳିଲା ନାହିଁ।"
    },
    selfEnumeration: {
      badge: "ସୂଚନା ଗାଇଡ୍",
      title: "ସ୍ୱୟଂ-ଗଣନା: ସରଳ ପର୍ଯ୍ୟାୟକ୍ରମିକ ନିର୍ଦ୍ଦେଶିକା",
      subtitle: "ଅନଲାଇନ୍ ସ୍ୱୟଂ-ଗଣନା କିପରି କାମ କରେ ତାହା ବୁଝନ୍ତୁ।",
      stepProgress: "ପର୍ଯ୍ୟାୟ {current}/{total}: {title}",
      guidedProgress: "{percent}% ମାର୍ଗଦର୍ଶିତ",
      prevBtn: "ପୂର୍ବବର୍ତ୍ତୀ ପର୍ଯ୍ୟାୟ",
      nextBtn: "ପରବର୍ତ୍ତୀ ପର୍ଯ୍ୟାୟ",
      restartBtn: "ପୁନଃ ଆରମ୍ଭ କରନ୍ତୁ",
      checkScheduleBtn: "ସମୟସୂଚୀ ଦେଖନ୍ତୁ",
      officialPortalBtn: "ଅଫିସିଆଲ୍ ପୋର୍ଟାଲ୍",
      steps: {
        step1Title: "ସ୍ୱୟଂ-ଗଣନା କ'ଣ?",
        step1Desc: "ଗଣନାକାରୀ ଆସିବା ପୂର୍ବରୁ ପୋର୍ଟାଲରେ ପରିବାରର ତଥ୍ୟ ଅନଲାଇନ୍ ଦାଖଲ କରିବାର ଐଚ୍ଛିକ ବିକଳ୍ପ।",
        step1Badge: "ଐଚ୍ଛିକ ଡିଜିଟାଲ୍ ପଦ୍ଧତି",
        step2Title: "ସମୟସୂଚୀ ଯାଞ୍ଚ କରନ୍ତୁ",
        step2Desc: "ଆପଣଙ୍କ ରାଜ୍ୟ ପାଇଁ ନିର୍ଦ୍ଧାରିତ ସମୟ ଯାଞ୍ଚ କରନ୍ତୁ।",
        step3Title: "ଆବଶ୍ୟକ ତଥ୍ୟ ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ",
        step3Desc: "ବୟସ, ଶିକ୍ଷା, ବୃତ୍ତି ଏବଂ ଘରର ସୁବିଧା ବିବରଣୀ ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ।",
        step3Check1: "ମୌଳିକ ତଥ୍ୟ",
        step3Check2: "ଗୃହ ସୁବିଧା",
        step4Title: "ଅଫିସିଆଲ୍ ପୋର୍ଟାଲ୍ ଦେଖନ୍ତୁ",
        step4Desc: "ମୋବାଇଲ୍ OTP ଦ୍ୱାରା ଲଗଇନ୍ କରନ୍ତୁ। ୱେବସାଇଟ୍ .gov.in ହୋଇଥିବା ନିଶ୍ଚିତ କରନ୍ତୁ।",
        step5Title: "ପ୍ରକ୍ରିୟା ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ",
        step5Desc: "ଫର୍ମଟି ଧ୍ୟାନପୂର୍ବକ ପୂରଣ କରି ଦାଖଲ କରନ୍ତୁ।",
        step5Badge: "ସମୀକ୍ଷା ସହାୟତା",
        step6Title: "ରେଫରେନ୍ସ କୋଡ୍ ସାଇତି ରଖନ୍ତୁ",
        step6Desc: "ଫର୍ମ ଦାଖଲ ପରେ ମିଳିଥିବା ରସିଦ ନମ୍ବର ଗଣନାକାରୀଙ୍କୁ ଦେଖାଇବା ପାଇଁ ରଖନ୍ତୁ।",
        step6Badge: "ରସିଦ କୋଡ୍"
      },
      readyCardTitle: "ଅଧିକ ଜାଣିବାକୁ ଚାହାଁନ୍ତି କି?",
      readyCardDesc: "ଅଫିସିଆଲ୍ ଦଲିଲ ସିଧାସଳଖ ସରକାରୀ ପୋର୍ଟାଲରେ ଦେଖନ୍ତୁ।",
      securityAdvisory: "ଜରୁରୀ ସୂଚନା: CensusSaathi ଏକ ସ୍ୱତନ୍ତ୍ର ପୋର୍ଟାଲ୍। ଆମେ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସଂଗ୍ରହ କରୁନାହୁଁ।"
    },
    privacy: {
      badge: "ଗୋପନୀୟତା ଓ ବିଶ୍ୱାସ",
      title: "ଆପଣଙ୍କ ତଥ୍ୟ।\nଆପଣଙ୍କ ବିଶ୍ୱାସ।",
      subtitle: "ଆଇନଗତ ଗୋପନୀୟତା କିପରି କାମ କରେ ଜାଣନ୍ତୁ।",
      cards: {
        statutoryTitle: "ଆଇନଗତ ଗୋପନୀୟତା",
        statutoryDesc: "ଧାରା ୧୫ ଅନୁଯାୟୀ ସମସ୍ତ ତଥ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ ଗୋପନୀୟ ରଖାଯାଏ।",
        securityTitle: "ସୁରକ୍ଷା ପରାମର୍ଶ",
        securityDesc: "ନକଲି ୱେବସାଇଟରୁ ବର୍ତ୍ତିବା ପାଇଁ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶ।",
        verifiedTitle: "ପ୍ରମାଣିତ ଉତ୍ସ",
        verifiedDesc: "ସମସ୍ତ ବିବରଣୀ ସରକାରୀ ଦସ୍ତାବିଜ ଉପରେ ଆଧାରିତ।",
        zeroDataTitle: "ଶୂନ୍ୟ ବ୍ୟକ୍ତିଗତ ଡାଟା",
        zeroDataDesc: "CensusSaathi କେବେ ବି ବ୍ୟକ୍ତିଗତ ବା ବ୍ୟାଙ୍କ ତଥ୍ୟ ମାଗେ ନାହିଁ।",
        guaranteeBadge: "ସ୍ୱତନ୍ତ୍ର ପୋର୍ଟାଲ୍ ଗ୍ୟାରେଣ୍ଟି"
      },
      securityReminderTitle: "ସୁରକ୍ଷା ସତର୍କତା",
      securityReminderDesc: "ଜନଗଣନା ବିଭାଗ କେବେ ବି ପାସୱାର୍ଡ, OTP ବା ଟଙ୍କା ମାଗେ ନାହିଁ।",
      understandingCensusTitle: "ତଥ୍ୟର ମହତ୍ତ୍ୱ",
      whyGovtTitle: "ସରକାର ତଥ୍ୟ କାହିଁକି ସଂଗ୍ରହ କରନ୍ତି",
      whyGovtDesc: "ସ୍କୁଲ, ଡାକ୍ତରଖାନା ଓ ଜନକଲ୍ୟାଣ ଯୋଜନା ପ୍ରସ୍ତୁତି ପାଇଁ।",
      legalConfTitle: "ଆଇନ ଅନୁଯାୟୀ ଗୋପନୀୟତା",
      legalConfDesc: "ଧାରା ୧୫ ଅନୁସାରେ ତଥ୍ୟ ଗୋପନୀୟ ଏବଂ କୋର୍ଟରେ ପ୍ରମାଣ ହୋଇପାରିବ ନାହିଁ।",
      dataPolicyTitle: "CensusSaathi ନୀତି",
      whatWeCollectTitle: "କେବଳ ଅସ୍ଥାୟୀ ପସନ୍ଦ (ଐଚ୍ଛିକ)",
      whatWeCollectList: [
        "ଚୟନିତ ଭାଷା",
        "ଚାର୍ଟ ପାଇଁ ଅସ୍ଥାୟୀ ଫିଲ୍ଟର୍",
        "ଚାଟ୍ ପ୍ରଶ୍ନ"
      ],
      whatWeNeverTitle: "ଆମେ କେବେ ବି ସଂଗ୍ରହ କରୁନାହୁଁ",
      whatWeNeverList: [
        "ଅଫିସିଆଲ୍ ଜନଗଣନା ଫର୍ମ ଡାଟା",
        "ପରିଚୟ ପତ୍ର ନମ୍ବର (ଆଧାର, ପାନ୍, ଭୋଟର)",
        "ବ୍ୟାଙ୍କ ଖାତା ବା କାର୍ଡ ବିବରଣୀ",
        "ବାୟୋମେଟ୍ରିକ୍ ତଥ୍ୟ"
      ],
      comparisonTitle: "ସରକାରୀ ବ୍ୟବସ୍ଥା vs CensusSaathi",
      comparisonSubtitle: "ଭିନ୍ନ ଭିନ୍ନ ଭୂମିକାକୁ ବୁଝିବା।",
      officialRoleTitle: "ସରକାରୀ ବ୍ୟବସ୍ଥା (ORGI)",
      officialRoleDesc: "ଆଇନଗତ ଭାବେ ଜନଗଣନା ପରିଚାଳନା କରୁଥିବା ଏକମାତ୍ର ସରକାରୀ ସଂସ୍ଥା।",
      saathiRoleTitle: "CensusSaathi (ସ୍ୱତନ୍ତ୍ର ଟୁଲ୍)",
      saathiRoleDesc: "ନାଗରିକଙ୍କ ସହାୟତା ପାଇଁ ଏକ ସ୍ୱତନ୍ତ୍ର ସୂଚନା ପୋର୍ଟାଲ୍।",
      saathiRoleBadge: "ସ୍ୱତନ୍ତ୍ର ଗାଇଡ୍",
      visitOfficialSiteBtn: "ଅଫିସିଆଲ୍ ୱେବସାଇଟ୍ ଦେଖନ୍ତୁ"
    },
    dataExplorer: {
      badge: "ପୁରୁଣା ଜନଗଣନା ତଥ୍ୟ (୧୯୫୧ - ୨୦୧୧)",
      title: "ଭାରତର ଜନଗଣନା ଇତିହାସ",
      subtitle: "୧୯୫୧ ରୁ ୨୦୧୧ ମଧ୍ୟରେ ପରିବର୍ତ୍ତନ ଦେଖନ୍ତୁ।",
      filterRegion: "ଅଞ୍ଚଳ",
      filterIndicator: "ସୂଚକ ଚୟନ",
      filterTimePeriod: "ସମୟ: ୧୯୫୧ - {year}",
      applyFiltersBtn: "ଫିଲ୍ଟର୍ ଲାଗୁ କରନ୍ତୁ",
      card1Title: "ଜନସଂଖ୍ୟା ବୃଦ୍ଧି ଧାରା",
      card1Subtitle: "ମୋଟ ଜନସଂଖ୍ୟା ମିଲିୟନରେ (୧୯୫୧-୨୦୧୧)",
      card2Title: "ସାକ୍ଷରତା ଓ ଶିକ୍ଷା",
      card2Subtitle: "ସାକ୍ଷରତା ହାର (୨୦୧୧: ୭୪.୦୪%)",
      card3Title: "ଗ୍ରାମୀଣ ଓ ସହରୀ ଅନୁପାତ",
      card3Subtitle: "୨୦୧୧ ଜନଗଣନା ଅନୁଯାୟୀ ବଣ୍ଟନ",
      card3Rural: "ଗ୍ରାମୀଣ (୬୮.୮%)",
      card3Urban: "ସହରୀ (୩୧.୨%)",
      card4Title: "ରାଜ୍ୟଭିତ୍ତିକ ତୁଳନା",
      card4Subtitle: "୨୦୧୧ ରେ ସର୍ବାଧିକ ଜନସଂଖ୍ୟା ଥିବା ରାଜ୍ୟ",
      aiInsightsTitle: "AI ତଥ୍ୟ ବିଶ୍ଳେଷଣ",
      aiInsightsDesc: "ସରଳ ଓଡ଼ିଆରେ ତଥ୍ୟର ସାରାଂଶ ପାଆନ୍ତୁ।",
      explainDataBtn: "ତଥ୍ୟ ବୁଝାନ୍ତୁ",
      modalTitle: "ତଥ୍ୟ ସାରାଂଶ: {region}",
      modalPoints: [
        "୧୯୫୧ ରୁ ୨୦୧୧ ମଧ୍ୟରେ ଜନସଂଖ୍ୟା ବୃଦ୍ଧି ପାଇ ୧.୨୧ ବିଲିୟନ ହେଲା।",
        "ସାକ୍ଷରତା ହାର ବୃଦ୍ଧି ପାଇ ୭୪.୦୪% ହେଲା।",
        "୬୮.୮% ଲୋକ ଗାଁରେ ଏବଂ ୩୧.୨% ସହରରେ ବାସ କରନ୍ତି।"
      ]
    },
    askAi: {
      title: "CensusSaathi AI",
      subtitle: "ଜନଗଣନା ୨୦୨୭ ବିଷୟରେ ନିଜ ଭାଷାରେ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ।",
      welcomeHeading: "ଜନଗଣନା ୨୦୨୭ ବୁଝିବାରେ ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
      placeholder: "{language} ରେ ପଚାରନ୍ତୁ (ଯଥା: ପର୍ଯ୍ୟାୟ ୧, ଗୋପନୀୟତା, ସମୟସୂଚୀ)...",
      askBtn: "ପଚାରନ୍ତୁ",
      clearConversation: "ଚାଟ୍ ଲିଭାନ୍ତୁ",
      voiceInputTitle: "ଭଏସ୍ ଦ୍ୱାରା ପଚାରିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ",
      voiceListening: "ଶୁଣୁଛି...",
      exploreTopicsTitle: "ବିଷୟସମୂହ ଦେଖନ୍ତୁ",
      consultingKnowledge: "ତଥ୍ୟ ଅନୁସନ୍ଧାନ ଚାଲିଛି...",
      advisoryBox: "CensusSaathi ଏକ ସ୍ୱତନ୍ତ୍ର ସୂଚନା ପୋର୍ଟାଲ୍। ଅଫିସିଆଲ୍ ସୂଚନା ପାଇଁ censusindia.gov.in ଦେଖନ୍ତୁ।"
    },
    modal: {
      chooseLanguageTitle: "ଆପଣଙ୍କ ଭାଷା ଚୟନ କରନ୍ତୁ",
      chooseLanguageSubtitle: "ଆପଣଙ୍କ ସୁବିଧାଜନକ ଭାଷାରେ ସୂଚନା ବୁଝନ୍ତୁ।",
      continueBtn: "ଆଗକୁ ବଢ଼ନ୍ତୁ",
      changeLaterNote: "ଆପଣ ଏହାକୁ ପରେ ବଦଳାଇ ପାରିବେ।"
    },
    footer: {
      privacyLawTitle: "ଗୋପନୀୟତା ଓ ଆଇନ (Privacy & Law)",
      officialPortalLink: "Official Census of India Portal (censusindia.gov.in)",
      independenceDisclaimer: "CensusSaathi ଏକ ସ୍ୱତନ୍ତ୍ର ନାଗରିକ ସୂଚନା ଏବଂ ମାର୍ଗଦର୍ଶନ ମଞ୍ଚ। ଏହା ଭାରତ ସରକାର କିମ୍ବା Office of the Registrar General and Census Commissioner, India (ORGI) ସହିତ ସଂଯୁକ୍ତ ବା ଅଫିସିଆଲ ସେବା ନୁହେଁ।",
      officialPortalNotice: "ସରକାରୀ ଜନଗଣନା ସୂଚନା, ବିଜ୍ଞପ୍ତି ଏବଂ ସେବା ପାଇଁ ଦୟାକରି censusindia.gov.in ରେ ସରକାରୀ Census of India ପୋର୍ଟାଲ ଦେଖନ୍ତୁ।",
      noCollectionNotice: "CensusSaathi ନାଗରିକମାନଙ୍କ ତରଫରୁ କୌଣସି ସରକାରୀ ଜନଗଣନା ଉତ୍ତର ସଂଗ୍ରହ କିମ୍ବା ଦାଖଲ କରେ ନାହିଁ।",
      copyright: "CensusSaathi AI • Citizen Information & Guidance Platform",
      links: {
        home: "ମୁଖ୍ୟପୃଷ୍ଠା",
        schedule: "ସମୟସୂଚୀ",
        selfEnum: "ସ୍ୱୟଂ-ଗଣନା",
        privacy: "ଗୋପନୀୟତା ଓ ଆଇନ",
        data: "ପୁରୁଣା ତଥ୍ୟ"
      }
    }
  }
};
