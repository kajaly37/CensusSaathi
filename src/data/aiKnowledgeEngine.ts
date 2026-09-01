import { STATES_SCHEDULE_DATA } from './states.ts';

export interface AiResponse {
  answer: string;
  sourceId: string;
  category: string;
  isSubjectToNotification?: boolean;
}

export type SupportedLangCode = 'EN' | 'HI' | 'MR' | 'BN' | 'TA' | 'TE' | 'GU' | 'KN' | 'ML' | 'PA' | 'OR';

interface LocalizedTopicContent {
  overview: string;
  phases: string;
  self_enumeration: string;
  confidentiality: string;
  why_census: string;
  aadhaar_clarification: string;
  schedule_timeline: string;
  security_advisory: string;
  default_guidance: string;
  state_template: (stateName: string, directorate: string, notes: string) => string;
}

export const KNOWLEDGE_BASE_MULTILINGUAL: Record<SupportedLangCode, LocalizedTopicContent> = {
  EN: {
    overview: `What is Census 2027?\n\nCensus 2027 is India's upcoming decennial enumeration, capturing demographic, socio-economic, housing, and cultural indicators across all 36 States and Union Territories.\n\nKey Highlights:\n• Conducted decennially under The Census Act, 1948.\n• Synchronized hybrid execution combining digital Self-Enumeration with door-to-door field enumerator visits.\n• Provides the statutory statistical foundation for national welfare planning, legislative seat delimitation, and resource allocation.`,
    phases: `Census 2027 will be conducted in two distinct statutory phases:\n\n1. Phase 1: Houselisting & Housing Census\n• Field enumerators record building structures, housing conditions, and household amenities (drinking water, electricity, sanitation, cooking fuel, assets).\n• Schedule: Subject to Official Gazette Notification.\n\n2. Phase 2: Population Enumeration\n• Comprehensive demographic survey recording age, literacy, educational attainment, mother tongue, occupation, and migration for every individual.\n• Schedule: Subject to Official Gazette Notification.`,
    self_enumeration: `Digital Self-Enumeration Guide:\n\n• What it is: An optional digital facility allowing citizens to voluntarily fill out household details online via the official government portal before enumerator field visits.\n• Authentication: Conducted via mobile OTP on registered portal (censusindia.gov.in).\n• Reference Code: Save the generated Acknowledgement Reference Number and show it to the visiting enumerator for synchronization.\n• Voluntary Nature: In-person field enumeration remains fully available for all households.\n• Note: Aadhaar numbers and biometrics are NOT required.`,
    confidentiality: `Statutory Privacy & Confidentiality Protection:\n\n• Under Section 15 of The Census Act, 1948, all individual census responses are strictly confidential by law.\n• Personal records cannot be accessed by police, tax departments, or private bodies.\n• Individual answers are non-admissible as evidence in any civil or criminal court.\n• Census data is published exclusively in aggregated, anonymized statistical tables.`,
    why_census: `Why is the Census Conducted?\n\n• Delimitation & Representation: Provides statutory population counts for parliamentary and assembly constituency delimitation.\n• Resource Allocation: Forms the benchmark for Finance Commission state tax devolution and welfare fund allocation.\n• Infrastructure Planning: Helps the government plan essential public services (schools, hospitals, electricity, water, housing).\n• Statistical Benchmark: Serves as the master sample frame for all national economic and demographic surveys.`,
    aadhaar_clarification: `Aadhaar & Biometrics Clarification:\n\n• The Census of India does NOT mandate, collect, or require Aadhaar card numbers or biometric records.\n• Official census enumerators only record demographic, socio-economic, and household amenity information.\n• You do not need to share Aadhaar biometrics or financial credentials for census participation.`,
    schedule_timeline: `Census Schedule Information:\n\n• All specific operational dates and self-enumeration windows are proposed and subject to official Gazette notifications issued by the Registrar General & Census Commissioner, India (ORGI).\n• Phase 1 (Houselisting) will precede Phase 2 (Population Enumeration).\n• You can select your State or Union Territory in the "My Schedule" section for local administrative details.`,
    security_advisory: `Critical Security Advisory:\n\n• Neither the official Census of India nor CensusSaathi will ever ask for your banking passwords, OTPs, UPI PINs, or financial account details.\n• Official census enumeration involves no fees or charges.\n• Report any fraudulent or suspicious messages claiming to be from census authorities immediately.`,
    default_guidance: `CensusSaathi Citizen Guidance:\n\n• Census 2027 operations and statutory data collection are conducted under The Census Act, 1948 by the Registrar General of India (ORGI).\n• All personal responses are confidential by law under Section 15 of the Census Act.\n• For active state portals and Gazette notifications, visit censusindia.gov.in.\n\nNotice: CensusSaathi is an independent citizen information platform. It does not replace the official Census system.`,
    state_template: (stateName, directorate, notes) =>
      `Census Schedule Guidance for ${stateName}:\n\n• Official Status: Proposed (Subject to Official Notification)\n• Operational Directorate: ${directorate}\n• Phase 1 (Houselisting): Subject to State/UT Gazette Notification\n• Phase 2 (Population): To be notified in Gazette of India\n• Digital Self-Enumeration: Optional Digital Mode (When Notified)\n\nRegional Context: ${notes}`
  },

  HI: {
    overview: `जनगणना 2027 क्या है?\n\nजनगणना 2027 भारत की आगामी दशकीय जनगणना है, जिसमें देश के सभी 36 राज्यों और केंद्र शासित प्रदेशों में जनसांख्यिकी, आवास और सामाजिक-आर्थिक आंकड़े एकत्र किए जाएंगे।\n\nमुख्य बिंदु:\n• यह जनगणना अधिनियम, 1948 के तहत प्रत्येक 10 वर्ष में आयोजित की जाती है।\n• इसमें पहली बार डिजिटल स्व-गणना (Self-Enumeration) और घर-घर प्रगणक दौरे दोनों का हाइब्रिड मॉडल उपलब्ध होगा।\n• यह राष्ट्रीय कल्याणकारी योजनाओं, परिसीमन और बजटीय आवंटन का संवैधानिक आधार है।`,
    phases: `जनगणना 2027 दो वैधानिक चरणों में आयोजित की जाएगी:\n\n1. चरण 1: मकान सूचीकरण एवं आवास जनगणना\n• प्रगणक घरों की संरचना, रहने की स्थिति और घरेलू सुविधाओं (पेयजल, बिजली, शौचालय, रसोई ईंधन) का विवरण दर्ज करेंगे।\n• समय: भारत सरकार की आधिकारिक राजपत्र अधिसूचना के अधीन।\n\n2. चरण 2: जनसंख्या गणना\n• प्रत्येक नागरिक की आयु, साक्षरता, मातृभाषा, शिक्षा, व्यवसाय और प्रवास की विस्तृत गणना।\n• समय: आधिकारिक राजपत्र अधिसूचना के अधीन।`,
    self_enumeration: `डिजिटल स्व-गणना (Self-Enumeration) मार्गदर्शिका:\n\n• प्रक्रिया: नागरिक प्रगणक के घर आने से पहले आधिकारिक पोर्टल (censusindia.gov.in) पर मोबाइल OTP द्वारा लॉगिन करके परिवार का विवरण ऑनलाइन दर्ज कर सकते हैं।\n• संदर्भ कोड: फॉर्म सबमिट करने पर मिलने वाला एक्नॉलेजमेंट नंबर सुरक्षित रखें और प्रगणक के आने पर दिखाएं।\n• स्वैच्छिक सुविधा: यदि आप ऑनलाइन नहीं भरते हैं, तो प्रगणक घर आकर पूरी जानकारी दर्ज करेंगे।\n• महत्वपूर्ण: आधार संख्या या बायोमेट्रिक्स अनिवार्य नहीं हैं।`,
    confidentiality: `कानूनी गोपनीयता एवं सुरक्षा (धारा 15):\n\n• जनगणना अधिनियम, 1948 की धारा 15 के अनुसार आपकी व्यक्तिगत जानकारी पूर्णतः गोपनीय है।\n• यह जानकारी किसी भी पुलिस, कर विभाग या निजी संस्था के साथ साझा नहीं की जा सकती।\n• व्यक्तिगत उत्तर किसी भी अदालत में साक्ष्य के रूप में उपयोग नहीं किए जा सकते।\n• आंकड़े केवल समेकित सांख्यिकीय तालिकाओं के रूप में प्रकाशित होते हैं।`,
    why_census: `जनगणना क्यों कराई जाती है?\n\n• संसदीय एवं विधानसभा परिसीमन: निर्वाचन क्षेत्रों के परिसीमन और SC/ST सीटों के आरक्षण का वैधानिक आधार।\n• वित्तीय संसाधन आवंटन: वित्त आयोग द्वारा राज्यों को करों के बंटवारे और केंद्रीय योजनाओं का आधार।\n• जनसुविधाओं की योजना: स्कूल, अस्पताल, सड़क, बिजली और आवास परियोजनाओं की योजना।\n• सांख्यिकीय मानक: सभी राष्ट्रीय आर्थिक और सामाजिक सर्वेक्षणों का मुख्य आधार।`,
    aadhaar_clarification: `आधार और बायोमेट्रिक्स पर स्पष्टीकरण:\n\n• भारत की जनगणना में आधार कार्ड संख्या या बायोमेट्रिक्स (फिंगरप्रिंट/आइरिस) अनिवार्य नहीं हैं।\n• प्रगणक केवल जनसांख्यिकीय और घरेलू सुविधाओं की जानकारी दर्ज करते हैं।\n• जनगणना के नाम पर किसी को भी आधार बायोमेट्रिक्स या बैंकिंग विवरण न दें।`,
    schedule_timeline: `जनगणना समय-सारणी सूचना:\n\n• सभी विशिष्ट तिथियां एवं स्व-गणना विंडो भारत के महापंजीयक एवं जनगणना आयुक्त कार्यालय (ORGI) द्वारा आधिकारिक राजपत्र अधिसूचना के अधीन हैं।\n• चरण 1 (मकान सूचीकरण) चरण 2 (जनसंख्या गणना) से पहले होगा।\n• राज्यवार विवरण के लिए "My Schedule" अनुभाग देखें।`,
    security_advisory: `महत्वपूर्ण सुरक्षा चेतावनी:\n\n• आधिकारिक जनगणना विभाग या CensusSaathi कभी भी पासवर्ड, OTP, बैंक पिन या वित्तीय विवरण नहीं मांगते।\n• जनगणना में भाग लेने के लिए कोई शुल्क या भुगतान नहीं लगता।\n• किसी भी फर्जी कॉल या संदिग्ध वेबसाइट से सावधान रहें।`,
    default_guidance: `CensusSaathi नागरिक सहायता:\n\n• जनगणना 2027 का संचालन जनगणना अधिनियम, 1948 के तहत महापंजीयक कार्यालय (ORGI) द्वारा किया जाता है।\n• आपकी व्यक्तिगत जानकारी धारा 15 के तहत कानूनी रूप से सुरक्षित है।\n• आधिकारिक जानकारी के लिए censusindia.gov.in पर जाएं।\n\nसूचना: CensusSaathi एक स्वतंत्र नागरिक सूचना गाइड है और यह सरकारी जनगणना प्रणाली का स्थान नहीं लेता है।`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} हेतु जनगणना समय-सारणी मार्गदर्शन:\n\n• आधिकारिक स्थिति: प्रस्तावित (राजपत्र अधिसूचना के अधीन)\n• परिचालन निदेशालय: ${directorate}\n• चरण 1 (मकान सूचीकरण): राज्य/UT अधिसूचना के अधीन\n• चरण 2 (जनसंख्या गणना): भारत के राजपत्र में अधिसूचित की जाएगी\n• डिजिटल स्व-गणना: स्वैच्छिक ऑनलाइन विकल्प\n\nक्षेत्रीय संदर्भ: ${notes}`
  },

  MR: {
    overview: `जनगणना 2027 काय आहे?\n\nजनगणना 2027 ही भारताची आगामी दशवार्षिक जनगणना आहे, ज्यामध्ये सर्व 36 राज्ये आणि केंद्रशासित प्रदेशांमधील लोकसंख्या, घरे आणि सामाजिक-आर्थिक माहिती संकलित केली जाईल.\n\nमहत्त्वाचे मुद्दे:\n• जनगणना कायदा, 1948 अंतर्गत दर 10 वर्षांनी ही प्रक्रिया राबवली जाते.\n• यामध्ये पहिल्यांदाच डिजिटल सेल्फ-एन्युमरेशन आणि प्रत्यक्ष प्रगणक भेट अशा दोन्ही पद्धतींचा समावेश असेल.\n• ही माहिती देशाच्या कल्याणकारी योजना, मतदारसंघ पुनर्रचना आणि निधी वाटपाचा आधार आहे.`,
    phases: `जनगणना 2027 दोन वैधानिक टप्प्यांत पार पडेल:\n\n1. पहिला टप्पा: घर नोंदणी व गृहनिर्माण जनगणना\n• प्रगणक घरांची रचना, राहणीमान आणि घरगुती सुविधा (पिण्याचे पाणी, वीज, शौचालय, स्वयंपाकाचे इंधन) यांची नोंद घेतील.\n• वेळ: शासकीय राजपत्रातील अधिसूचनेनुसार.\n\n2. दुसरा टप्पा: प्रत्यक्ष लोकसंख्या गणना\n• प्रत्येक नागरिकाचे वय, साक्षरता, शिक्षण, मातृभाषा, व्यवसाय आणि स्थलांतर याविषयीची सविस्तर माहिती.\n• वेळ: शासकीय राजपत्रातील अधिसूचनेनुसार.`,
    self_enumeration: `डिजिटल सेल्फ-एन्युमरेशन मार्गदर्शक:\n\n• प्रक्रिया: नागरिक प्रगणक येण्यापूर्वी अधिकृत पोर्टलवर (censusindia.gov.in) मोबाईल OTP द्वारे लॉगिन करून आपल्या कुटुंबाची माहिती भरू शकतात.\n• पोचपावती कोड: फॉर्म सबमिट केल्यानंतर मिळालेला रेफरन्स नंबर जपून ठेवा आणि प्रगणक आल्यावर दाखवा.\n• ऐच्छिक सुविधा: जर तुम्ही ऑनलाइन भरले नाही, तर प्रगणक प्रत्यक्ष घरी येऊन माहिती नोंदवून घेतील.\n• टीप: आधार क्रमांक किंवा बायोमेट्रिक्स आवश्यक नाहीत.`,
    confidentiality: `कायदेशीर गोपनीयता आणि सुरक्षा (कलम 15):\n\n• जनगणना कायदा, 1948 च्या कलम 15 अन्वये तुमची वैयक्तिक माहिती पूर्णपणे गोपनीय ठेवली जाते.\n• ही माहिती पोलीस, कर विभाग किंवा कोणत्याही न्यायालयाला देता येत नाही.\n• प्रसिद्ध होणारी आकडेवारी केवळ एकत्रित सांख्यिकी स्वरूपात असते.`,
    why_census: `जनगणना का केली जाते?\n\n• मतदारसंघ पुनर्रचना: लोकसभा आणि विधानसभा मतदारसंघ पुनर्रचनेचा वैधानिक आधार.\n• निधी वाटप: वित्त आयोगाद्वारे राज्यांना कर वाटप आणि केंद्रीय योजनांचा निधी ठरवण्यासाठी.\n• पायाभूत सुविधांचे नियोजन: शाळा, रुग्णालये, रस्ते, वीज आणि पाणी योजनांच्या आराखड्यासाठी.\n• सांख्यिकीय आधार: सर्व राष्ट्रीय सामाजिक आणि आर्थिक सर्वेक्षणांचा पाया.`,
    aadhaar_clarification: `आधार आणि बायोमेट्रिक्सबाबत स्पष्टीकरण:\n\n• भारताच्या जनगणनेमध्ये आधार क्रमांक किंवा बायोमेट्रिक्स (बोटांचे ठसे) देणे बंधनकारक नाही.\n• प्रगणक केवळ जनसांख्यिकी आणि घरगुती सुविधांची माहिती नोंदवतात.\n• जनगणनेच्या नावाखाली कोणालाही बँक तपशील किंवा बायोमेट्रिक्स देऊ नका.`,
    schedule_timeline: `वेळापत्रक माहिती:\n\n• सर्व अधिकृत तारखा भारताचे महापंजीयक व जनगणना आयुक्त कार्यालय (ORGI) यांच्या अधिसूचनेनुसार जाहीर केल्या जातील.\n• पहिला टप्पा दुसऱ्या टप्प्यापूर्वी पूर्ण केला जाईल.\n• अधिक माहितीसाठी "My Schedule" पर्याय तपासा.`,
    security_advisory: `सुरक्षा सूचना:\n\n• जनगणना विभाग किंवा CensusSaathi कधीही बँक पासवर्ड, OTP किंवा पिन मागत नाही.\n• जनगणनेसाठी कोणतेही शुल्क आकारले जात नाही.\n• संशयास्पद संदेश किंवा लिंकपासून सावध राहा.`,
    default_guidance: `CensusSaathi नागरिक मार्गदर्शन:\n\n• जनगणना 2027 ही जनगणना कायदा, 1948 नुसार ORGI द्वारे राबवली जाते.\n• तुमची माहिती कलम 15 अन्वये पूर्णपणे गोपनीय आहे.\n• अधिकृत माहितीसाठी censusindia.gov.in ला भेट द्या.\n\nसूचना: CensusSaathi हे एक स्वतंत्र माहिती पोर्टल आहे, हे सरकारी यंत्रणेची जागा घेत नाही.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} साठी जनगणना वेळापत्रक मार्गदर्शन:\n\n• अधिकृत स्थिती: प्रस्तावित (शासकीय अधिसूचनेच्या अधीन)\n• विभागीय कार्यालय: ${directorate}\n• पहिला टप्पा (घर नोंदणी): राज्य/UT अधिसूचनेनुसार\n• दुसरा टप्पा (लोकसंख्या): राजपत्रात जाहीर केला जाईल\n• डिजिटल सेल्फ-एन्युमरेशन: ऐच्छिक पर्याय\n\nस्थानिक माहिती: ${notes}`
  },

  BN: {
    overview: `জনগণনা ২০২৭ কী?\n\nজনগণনা ২০২৭ ভারতের আসন্ন দশবার্ষিক জনগণনা। এতে দেশের ৩৬টি রাজ্য ও কেন্দ্রশাসিত অঞ্চলের জনসংখ্যা, বাসস্থান এবং আর্থ-সামাজিক তথ্য সংগ্রহ করা হবে।\n\nমূল বিষয়:\n• জনগণনা আইন, ১৯৪৮ অনুসারে প্রতি ১০ বছর অন্তর এটি পরিচালিত হয়।\n• এতে প্রথমবার ডিজিটাল সেলফ-এনিউমারেশন এবং ঘরে ঘরে সমীক্ষার হাইব্রিড পদ্ধতি থাকবে।\n• এটি দেশের উন্নয়ন পরিকল্পনা ও সম্পদ বণ্টনের ভিত্তি।`,
    phases: `জনগণনা ২০২৭ দুটি পর্যায়ে পরিচালিত হবে:\n\n১. পর্যায় ১: গৃহতালিকা ও গৃহায়ন গণনা\n• বাড়ির কাঠামো, বসবাসের অবস্থা এবং সুযোগ-সুবিধা (পানীয় জল, বিদ্যুৎ, শৌচাগার, রান্নার জ্বালানি) সংক্রান্ত তথ্য।\n• সময়: সরকারি গেজেট বিজ্ঞপ্তির সাপেক্ষে।\n\n২. পর্যায় ২: জনসংখ্যা গণনা\n• প্রতিটি নাগরিকের বয়স, সাক্ষরতা, শিক্ষা, ভাষা, জীবিকা এবং স্থানান্তর সম্পর্কিত তথ্য।\n• সময়: সরকারি গেজেট বিজ্ঞপ্তির সাপেক্ষে।`,
    self_enumeration: `ডিজিটাল সেলফ-এনিউমারেশন নির্দেশিকা:\n\n• পদ্ধতি: নাগরিকরা প্রগণক আসার আগে অফিসিয়াল পোর্টালে (censusindia.gov.in) মোবাইল ওটিপি দিয়ে লগইন করে নিজেদের তথ্য নথিভুক্ত করতে পারেন।\n• রেফারেন্স কোড: ফর্ম জমা দেওয়ার পর প্রাপ্ত অ্যাকনলেজমেন্ট নম্বরটি প্রগণককে দেখানোর জন্য সংরক্ষণ করুন।\n• ঐচ্ছিক সুবিধা: অনলাইন পূরণ না করলে প্রগণক সরাসরি বাড়িতে এসে তথ্য সংগ্রহ করবেন।\n• আধার নম্বর বা বায়োমেট্রিক্স বাধ্যতামূলক নয়।`,
    confidentiality: `আইনগত গোপনীয়তা সুরক্ষা (ধারা ১৫):\n\n• জনগণনা আইন, ১৯৪৮-এর ধারা ১৫ অনুযায়ী ব্যক্তিগত তথ্য সম্পূর্ণ গোপনীয়।\n• এই তথ্য পুলিশ, কর বিভাগ বা আদালতের কাছে প্রকাশযোগ্য নয়।\n• তথ্য কেবল সামগ্রিক পরিসংখ্যান হিসেবে প্রকাশিত হয়।`,
    why_census: `জনগণনা কেন করা হয়?\n\n• আসন পুনর্বিন্যাস: সংসদীয় ও বিধানসভা নির্বাচনী এলাকার পুনর্বিন্যাসের ভিত্তি।\n• আর্থিক বরাদ্দ: অর্থ কমিশন দ্বারা রাজ্যগুলির জন্য করের ভাগ ও উন্নয়ন তহবিল নির্ধারণ।\n• পরিকাঠামো পরিকল্পনা: বিদ্যালয়, হাসপাতাল, পানীয় জল ও আবাসন প্রকল্প পরিকল্পনা।\n• সামাজিক-অর্থনৈতিক সমীক্ষার মূল ভিত্তি।`,
    aadhaar_clarification: `আধার ও বায়োমেট্রিক্স সম্পর্কিত স্পষ্টীকরণ:\n\n• জনগণনায় আধার কার্ড নম্বর বা বায়োমেট্রিক্স প্রদান বাধ্যতামূলক নয়।\n• প্রগণকরা কেবল সাধারণ জনতাত্ত্বিক ও গৃহস্থালি সুযোগ-সুবিধার তথ্য সংগ্রহ করেন।\n• জনগণনার নামে কাউকেই ব্যাঙ্ক বা বায়োমেট্রিক বিবরণ দেবেন না।`,
    schedule_timeline: `সময়সূচী সম্পর্কিত তথ্য:\n\n• নির্দিষ্ট তারিখগুলি ভারতের রেজিস্ট্রার জেনারেল ও সেন্সাস কমিশনারের (ORGI) সরকারি বিজ্ঞপ্তির সাপেক্ষে নির্ধারিত হবে।\n• রাজ্যভিত্তিক তথ্যের জন্য "My Schedule" বিভাগটি দেখুন।`,
    security_advisory: `নিরাপত্তা সতর্কতা:\n\n• জনগণনা কর্তৃপক্ষ বা CensusSaathi কখনোই ব্যাঙ্ক পাসওয়ার্ড, ওটিপি বা পিন চায় না।\n• জনগণনায় কোনো ফি বা টাকা লাগে না। ভুয়ো কল বা লিঙ্ক থেকে সাবধান থাকুন।`,
    default_guidance: `CensusSaathi নাগরিক নির্দেশিকা:\n\n• জনগণনা ২০২৭ জনগণনা আইন, ১৯৪৮ অনুযায়ী পরিচালিত হয়।\n• আপনার তথ্য ধারা ১৫ অনুসারে সুরক্ষিত। সরকারি বিবরণের জন্য censusindia.gov.in দেখুন।\n\nবিজ্ঞপ্তি: CensusSaathi একটি স্বাধীন নাগরিক তথ্য নির্দেশিকা।`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} জনগণনা সময়সূচী নির্দেশিকা:\n\n• সরকারি স্থিতি: প্রস্তাবিত (গেজেট বিজ্ঞপ্তির সাপেক্ষে)\n• পরিচালনা দপ্তর: ${directorate}\n• পর্যায় ১ (গৃহতালিকা): রাজ্য/UT বিজ্ঞপ্তির সাপেক্ষে\n• পর্যায় ২ (জনসংখ্যা): ভারতের গেজেটে প্রকাশিত হবে\n• ডিজিটাল সেলফ-এনিউমারেশন: ঐচ্ছিক অনলাইন পদ্ধতি\n\nআঞ্চলিক বিবরণ: ${notes}`
  },

  TA: {
    overview: `மக்கள்தொகை கணக்கெடுப்பு 2027 என்றால் என்ன?\n\nமக்கள்தொகை கணக்கெடுப்பு 2027 என்பது இந்தியாவின் அனைத்து 36 மாநிலங்கள் மற்றும் யூனியன் பிரதேசங்களின் மக்கள்தொகை, வீடுகள் மற்றும் சமூக-பொருளாதார விவரங்களை சேகரிக்கும் பத்தாண்டு கணக்கெடுப்பாகும்.\n\nமுக்கிய அம்சங்கள்:\n• 1948 ஆம் ஆண்டு மக்கள் தொகை கணக்கெடுப்புச் சட்டத்தின் கீழ் நடத்தப்படுகிறது.\n• இணையவழி சுய கணக்கெடுப்பு (Self-Enumeration) மற்றும் வீடு வீடாக செல்லும் முறை ஆகிய இரண்டும் இருக்கும்.\n• நாட்டின் நலத்திட்டங்கள் மற்றும் வளர்ச்சித் திட்டங்களுக்கான சட்டப்பூர்வ அடிப்படை.`,
    phases: `கணக்கெடுப்பு இரண்டு கட்டங்களாக நடைபெறும்:\n\n1. கட்டம் 1: வீடுகள் பட்டியல் மற்றும் வீட்டு வசதி கணக்கெடுப்பு\n• வீட்டின் கட்டமைப்பு, வசதிகள் (குடிநீர், மின்சாரம், கழிப்பறை, சமையல் எரிவாயு) பற்றிய விவரங்கள்.\n\n2. கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு\n• வயது, கல்வி, தாய்மொழி, தொழில் மற்றும் இடம்பெயர்வு பற்றிய தனிநபர் விவரங்கள்.`,
    self_enumeration: `சுய கணக்கெடுப்பு வழிகாட்டி:\n\n• அதிகாரப்பூர்வ இணையதளத்தில் (censusindia.gov.in) மொபைல் OTP மூலம் விவரங்களை தாங்களாகவே பதிவு செய்யலாம்.\n• பெறப்படும் ஒப்புகை எண்ணை (Reference Code) கணக்கெடுப்பாளர் வரும்போது காட்டவும்.\n• இது ஒரு விருப்பத்தேர்வே; ஆன்லைனில் செய்யாவிட்டால் அலுவலரே நேரில் வருவார்.\n• ஆதார் எண் அல்லது கைரேகை கட்டாயமில்லை.`,
    confidentiality: `சட்டப்பூர்வ ரகசியத்தன்மை (பிரிவு 15):\n\n• மக்கள் தொகை கணக்கெடுப்புச் சட்டம் 1948 பிரிவு 15 இன் கீழ் உங்கள் விவரங்கள் முழுமையாக ரகசியமாக வைக்கப்படும்.\n• இந்த விவரங்களை நீதிமன்றத்திலோ அல்லது வேறு துறைகளிலோ சான்றாக பயன்படுத்த முடியாது.`,
    why_census: `கணக்கெடுப்பு ஏன் நடத்தப்படுகிறது?\n\n• தொகுதி மறுசீரமைப்பு மற்றும் சட்டமன்ற பிரதிநிதித்துவம்.\n• மாநிலங்களுக்கான நிதிப் பகிர்வு மற்றும் மத்திய திட்டங்கள் ஒதுக்கீடு.\n• கல்விக்கூடங்கள், மருத்துவமனைகள் மற்றும் சாலைகள் போன்ற பொது உள்கட்டமைப்பு திட்டமிடல்.`,
    aadhaar_clarification: `ஆதார் மற்றும் பயோமெட்ரிக்ஸ் தெளிவு:\n\n• கணக்கெடுப்பிற்கு ஆதார் எண் அல்லது பயோமெட்ரிக்ஸ் கட்டாயமில்லை.\n• அதிகாரப்பூர்வ அலுவலர்கள் வங்கி விவரங்கள் எதையும் கேட்க மாட்டார்கள்.`,
    schedule_timeline: `அட்டவணை விவரங்கள்:\n\n• அதிகாரப்பூர்வ தேதிகள் இந்திய அரசிதழில் வெளியிடப்படும்.\n• மாநில விவரங்களை "My Schedule" பகுதியில் காணலாம்.`,
    security_advisory: `பாதுகாப்பு எச்சரிக்கை:\n\n• கணக்கெடுப்பு துறை அல்லது CensusSaathi ஒருபோதும் OTP, வங்கி கடவுச்சொல் அல்லது பணம் கேட்காது.`,
    default_guidance: `CensusSaathi குடிமக்கள் வழிகாட்டி:\n\n• கணக்கெடுப்பு 1948 சட்டத்தின் கீழ் ORGI அமைப்பால் நடத்தப்படுகிறது.\n• அதிகாரப்பூர்வ தகவல்களுக்கு censusindia.gov.in ஐப் பார்வையிடவும்.\n\nஅறிவிப்பு: CensusSaathi ஒரு சுதந்திரமான வழிகாட்டி தளமாகும்.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} அட்டவணை வழிகாட்டி:\n\n• நிலை: முன்மொழியப்பட்டது (அரசிதழ் அறிவிப்பிற்கு உட்பட்டது)\n• அலுவலகம்: ${directorate}\n• கட்டம் 1: மாநில அறிவிப்பின்படி\n• கட்டம் 2: மத்திய அறிவிப்பின்படி\n• சுய கணக்கெடுப்பு: விருப்ப முறை\n\nகுறிப்பு: ${notes}`
  },

  TE: {
    overview: `జనాభా గణన 2027 ఏమిటి?\n\nజనాభా గణన 2027 భారతదేశ రాబోయే దశాబ్ద జనాభా లెక్కల ప్రక్రియ. ఇది దేశంలోని 36 రాష్ట్రాలు, కేంద్రపాలిత ప్రాంతాల జనాభా, గృహాలు, సామాజిక-ఆర్థిక సూచికలను నమోదు చేస్తుంది.\n\nముఖ్యాంశాలు:\n• జనాభా గణన చట్టం 1948 ప్రకారం నిర్వహించబడుతుంది.\n• మొదటిసారిగా ఆన్‌లైన్ సెల్ఫ్-ఎన్యూమరేషన్ మరియు ఇంటింటి సర్వేల మిశ్రమ విధానం.\n• జాతీయ సంక్షేమ పథకాలు, నియోజకవర్గాల పునర్విభజనకు ప్రాతిపదిక.`,
    phases: `జనాభా గణన రెండు దశల్లో జరుగుతుంది:\n\n1. దశ 1: ఇళ్ల జాబితా మరియు గృహ గణన\n• ఇళ్ల నిర్మాణం, నివాస పరిస్థితులు, తాగునీరు, విద్యుత్, మరుగుదొడ్ల సౌకర్యాల వివరాలు.\n\n2. దశ 2: జనాభా గణన\n• ప్రతి పౌరుడి వయస్సు, విద్య, మాతృభాష, వృత్తి మరియు వలస వివరాల సమగ్ర నమోదు.`,
    self_enumeration: `సెల్ఫ్-ఎన్యూమరేషన్ మార్గదర్శకాలు:\n\n• పౌరులు censusindia.gov.in పోర్టల్‌లో మొబైల్ OTP తో లాగిన్ అయి వివరాలు సమర్పించవచ్చు.\n• రసీదు సంఖ్యను (Reference Code) గణకుడు వచ్చినప్పుడు చూపించాలి.\n• ఇది పూర్తిగా ఐచ్ఛికం; ఆన్‌లైన్ చేయనివారికి గణకుడే స్వయంగా వస్తారు.\n• ఆధార్ లేదా బయోమెట్రిక్స్ తప్పనిసరి కాదు.`,
    confidentiality: `చట్టపరమైన గోప్యత (సెక్షన్ 15):\n\n• జనాభా గణన చట్టం 1948 సెక్షన్ 15 ప్రకారం మీ వ్యక్తిగత సమాచారం పూర్తిగా గోప్యంగా ఉంటుంది.\n• ఏ కోర్టులోనూ లేదా ప్రభుత్వ శాఖతోనూ వ్యక్తిగత సమాచారాన్ని పంచుకోరు.`,
    why_census: `జనాభా గణన ఎందుకు నిర్వహిస్తారు?\n\n• నియోజకవర్గాల పునర్విభజన మరియు ప్రాతినిధ్యం.\n• రాష్ట్రాలకు పన్నుల వాటా, కేంద్ర నిధుల కేటాయింపు.\n• పాఠశాలలు, ఆసుపత్రులు, రవాణా, గృహ నిర్మాణ ప్రణాళికలు.`,
    aadhaar_clarification: `ఆధార్ స్పష్టత:\n\n• జనాభా లెక్కల కోసం ఆధార్ నంబర్ లేదా బయోమెట్రిక్స్ తప్పనిసరి కాదు.\n• ఎలాంటి బ్యాంక్ లేదా ఆర్థిక వివరాలు ఇవ్వవలసిన అవసరం లేదు.`,
    schedule_timeline: `షెడ్యూల్ వివరాలు:\n\n• అధికారిక తేదీలు ప్రభుత్వ గెజిట్ నోటిఫికేషన్ ద్వారా వెల్లడవుతాయి.\n• రాష్ట్రాల వివరాలకు "My Schedule" చూడండి.`,
    security_advisory: `భద్రతా హెచ్చరిక:\n\n• జనాభా గణన పేరుతో OTPలు, పాస్‌వర్డ్‌లు లేదా నగదు ఎవ్వరికీ ఇవ్వకండి.`,
    default_guidance: `CensusSaathi పౌర మార్గదర్శి:\n\n• జనాభా గణన 2027 చట్టబద్ధంగా ORGI ద్వారా నిర్వహించబడుతుంది.\n• అధికారిక పోర్టల్: censusindia.gov.in.\n\nగమనిక: CensusSaathi ఒక స్వతంత్ర సమాచార వేదిక.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} జనాభా గణన షెడ్యూల్ మార్గదర్శకాలు:\n\n• స్థితి: ప్రతిపాదితం (గెజిట్ నోటిఫికేషన్‌కు లోబడి)\n• డైరెక్టరేట్: ${directorate}\n• దశ 1: రాష్ట్ర నోటిఫికేషన్ ప్రకారం\n• దశ 2: కేంద్ర నోటిఫికేషన్ ప్రకారం\n• సెల్ఫ్-ఎన్యూమరేషన్: ఐచ్ఛిక విధానం\n\nప్రాంతీయ సమాచారం: ${notes}`
  },

  GU: {
    overview: `વસ્તી ગણતરી 2027 શું છે?\n\nવસ્તી ગણતરી 2027 એ ભારતની આગામી દશાબ્દી વસ્તી ગણતરી છે, જે તમામ 36 રાજ્યો અને કેન્દ્રશાસિત પ્રદેશોની વસ્તી, મકાનો અને સામાજિક-આર્થિક ડેટા એકત્રિત કરશે.\n\nમુખ્ય મુદ્દા:\n• સેન્સસ એક્ટ, 1948 હેઠળ દર 10 વર્ષે આયોજિત થાય છે.\n• ડિજિટલ સેલ્ફ-એન્યુમરેશન અને રૂબરૂ મુલાકાત બંનેનું સંયોજન.\n• સરકારી યોજનાઓ, સીમાંકન અને બજેટ ફાળવણીનો વૈધાનિક આધાર.`,
    phases: `વસ્તી ગણતરી બે તબક્કામાં હાથ ધરાશે:\n\n1. તબક્કો 1: મકાન સૂચિ અને આવાસ ગણતરી\n• મકાનની રચના, રહેઠાણની સ્થિતિ અને સુવિધાઓ (પીવાનું પાણી, વીજળી, શૌચાલય, બળતણ).\n\n2. તબક્કો 2: વસ્તી ગણતરી\n• દરેક વ્યક્તિની ઉંમર, સાક્ષરતા, શિક્ષણ, માતૃભાષા, વ્યવસાય અને સ્થળાંતરની માહિતી.`,
    self_enumeration: `સેલ્ફ-એન્યુમરેશન માર્ગદર્શિકા:\n\n• નાગરિકો censusindia.gov.in પોર્ટલ પર મોબાઈલ OTP થી લોગિન કરીને વિગતો ભરી શકે છે.\n• સબમિટ કર્યા પછી મળેલ એકનોલેજમેન્ટ કોડ ગણતરીકાર આવે ત્યારે બતાવવો.\n• આ પ્રક્રિયા સ્વૈચ્છિક છે; ઓનલાઇન ન ભરો તો કર્મચારી ઘરે આવશે.\n• આધાર કાર્ડ કે બાયોમેટ્રિક્સ ફરજિયાત નથી.`,
    confidentiality: `કાનૂની ગુપ્તતા (કલમ 15):\n\n• સેન્સસ એક્ટ, 1948 ની કલમ 15 હેઠળ તમારી વ્યક્તિગત માહિતી કાયદેસર રીતે સંપૂર્ણ ગુપ્ત રહે છે.\n• આ માહિતી કોઈપણ કોર્ટ કે અન્ય વિભાગ સાથે શેર કરી શકાતી નથી.`,
    why_census: `વસ્તી ગણતરી કેમ કરવામાં આવે છે?\n\n• મતવિસ્તાર સીમાંકન અને પ્રતિનિધિત્વ.\n• રાજ્યોને નાણાકીય ફાળવણી અને યોજનાઓનું બજેટ.\n• શાળાઓ, હોસ્પિટલો, રસ્તા અને પાણીની સુવિધાઓનું આયોજન.`,
    aadhaar_clarification: `આધાર અંગે સ્પષ્ટતા:\n\n• વસ્તી ગણતરી માટે આધાર નંબર કે બાયોમેટ્રિક્સ ફરજિયાત નથી.\n• બેંક ખાતા કે નાણાકીય વિગતો આપવાની જરૂર નથી.`,
    schedule_timeline: `સમયપત્રક માહિતી:\n\n• સત્તાવાર તારીખો ગેઝેટ નોટિફિકેશન દ્વારા જાહેર થશે.\n• રાજ્ય મુજબ માહિતી માટે "My Schedule" જુઓ.`,
    security_advisory: `સુરક્ષા ચેતવણી:\n\n• વસ્તી ગણતરી માટે ક્યારેય OTP, બેંક પાસવર્ડ કે પૈસા આપશો નહીં.`,
    default_guidance: `CensusSaathi નાગરિક માર્ગદર્શિકા:\n\n• સેન્સસ એક્ટ, 1948 હેઠળ ORGI દ્વારા સંચાલિત.\n• સત્તાવાર પોર્ટલ: censusindia.gov.in.\n\nનોંધ: CensusSaathi એક સ્વતંત્ર માહિતી પોર્ટલ છે.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} વસ્તી ગણતરી માર્ગદર્શિકા:\n\n• સ્થિતિ: પ્રસ્તાવિત (ગેઝેટ નોટિફિકેશનને આધીન)\n• કચેરી: ${directorate}\n• તબક્કો 1: રાજ્ય નોટિફિકેશન મુજબ\n• તબક્કો 2: કેન્દ્રીય નોટિફિકેશન મુજબ\n• સેલ્ફ-એન્યુમરેશન: સ્વૈચ્છિક વિકલ્પ\n\nસ્થાનિક વિગત: ${notes}`
  },

  KN: {
    overview: `ಜನಗಣತಿ 2027 ಎಂದರೇನು?\n\nಜನಗಣತಿ 2027 ಭಾರತದ ಮುಂಬರುವ ಜನಗಣತಿ ಪ್ರಕ್ರಿಯೆಯಾಗಿದ್ದು, 36 ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳ ಜನಸಂಖ್ಯಾ ಮತ್ತು ವಸತಿ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ.\n\nಮುಖ್ಯಾಂಶಗಳು:\n• ಜನಗಣತಿ ಕಾಯ್ದೆ 1948 ರ ಅಡಿಯಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ.\n• ಆನ್‌ಲೈನ್ ಸ್ವಯಂ-ಗಣತಿ ಮತ್ತು ಮನೆ ಮನೆ ಸಮೀಕ್ಷೆಗಳೆರಡೂ ಲಭ್ಯ.\n• ರಾಷ್ಟ್ರೀಯ ಯೋಜನೆಗಳು ಮತ್ತು ಅನುದಾನ ಹಂಚಿಕೆಗೆ ಆಧಾರ.`,
    phases: `ಜನಗಣತಿಯು ಎರಡು ಹಂತಗಳಲ್ಲಿ ನಡೆಯಲಿದೆ:\n\n1. ಹಂತ 1: ಮನೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ವಸತಿ ಗಣತಿ\n• ಮನೆಗಳ ಸ್ಥಿತಿ, ಕುಡಿಯುವ ನೀರು, ವಿದ್ಯುತ್, ಶೌಚಾಲಯ ಮುಂತಾದ ಸೌಕರ್ಯಗಳ ವಿವರ.\n\n2. ಹಂತ 2: ಜನಸಂಖ್ಯಾ ಗಣತಿ\n• ವಯಸ್ಸು, ಶಿಕ್ಷಣ, ಮಾತೃಭಾಷೆ, ಉದ್ಯೋಗ ಮತ್ತು ವಲಸೆಯ ಸಮಗ್ರ ವಿವರ.`,
    self_enumeration: `ಸ್ವಯಂ-ಗಣತಿ (Self-Enumeration) ಮಾರ್ಗದರ್ಶಿ:\n\n• ನಾಗರಿಕರು censusindia.gov.in ನಲ್ಲಿ ಮೊಬೈಲ್ OTP ಮೂಲಕ ಲಾಗಿನ್ ಆಗಿ ಮಾಹಿತಿ ಭರ್ತಿ ಮಾಡಬಹುದು.\n• ಸಲ್ಲಿಕೆಯ ನಂತರದ ರೆಫರೆನ್ಸ್ ಕೋಡ್ ಅನ್ನು ಗಣತಿದಾರರು ಬಂದಾಗ ತೋರಿಸಿ.\n• ಇದು ಐಚ್ಛಿಕ; ಆನ್‌ಲೈನ್ ಮಾಡದಿದ್ದರೆ ಗಣತಿದಾರರೇ ಮನೆಗೆ ಬರುತ್ತಾರೆ.\n• ಆಧಾರ್ ಅಥವಾ ಬಯೋಮೆಟ್ರಿಕ್ಸ್ ಕಡ್ಡಾಯವಲ್ಲ.`,
    confidentiality: `ಕಾನೂನುಬದ್ಧ ಗೌಪ್ಯತೆ (ಸೆಕ್ಷನ್ 15):\n\n• ಜನಗಣತಿ ಕಾಯ್ದೆ 1948 ರ ಸೆಕ್ಷನ್ 15 ರ ಅಡಿಯಲ್ಲಿ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಗೌಪ್ಯವಾಗಿರುತ್ತದೆ.\n• ಇದನ್ನು ಯಾವುದೇ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಸಾಕ್ಷ್ಯವಾಗಿ ಬಳಸಲಾಗುವುದಿಲ್ಲ.`,
    why_census: `ಜನಗಣತಿ ಏಕೆ ನಡೆಸಲಾಗುತ್ತದೆ?\n\n• ಕ್ಷೇತ್ರಗಳ ಪುನರ್ವಿಂಗಡಣೆ ಮತ್ತು ಪ್ರಾತಿನಿಧ್ಯ.\n• ರಾಜ್ಯಗಳಿಗೆ ತೆರಿಗೆ ಪಾಲು ಮತ್ತು ಕೇಂದ್ರ ಅನುದಾನ ಹಂಚಿಕೆ.\n• ಶಾಲೆಗಳು, ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ರಸ್ತೆ ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳು.`,
    aadhaar_clarification: `ಆಧಾರ್ ಕುರಿತು ಸ್ಪಷ್ಟನೆ:\n\n• ಜನಗಣತಿಗಾಗಿ ಆಧಾರ್ ಸಂಖ್ಯೆ ಅಥವಾ ಬಯೋಮೆಟ್ರಿಕ್ಸ್ ಕಡ್ಡಾಯವಲ್ಲ.\n• ಯಾವುದೇ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ನೀಡಬೇಕಾಗಿಲ್ಲ.`,
    schedule_timeline: `ವೇಳಾಪಟ್ಟಿ ಮಾಹಿತಿ:\n\n• ಅಧಿಕೃತ ದಿನಾಂಕಗಳು ಸರ್ಕಾರಿ ಅಧಿಸೂಚನೆಯಲ್ಲಿ ಪ್ರಕಟವಾಗಲಿವೆ.\n• ರಾಜ್ಯಗಳ ವಿವರಗಳಿಗೆ "My Schedule" ನೋಡಿ.`,
    security_advisory: `ಭದ್ರತಾ ಎಚ್ಚರಿಕೆ:\n\n• ಜನಗಣತಿ ಹೆಸರಿನಲ್ಲಿ OTP, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಹಣವನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.`,
    default_guidance: `CensusSaathi ನಾಗರಿಕ ಮಾರ್ಗದರ್ಶಿ:\n\n• ಜನಗಣತಿಯು 1948 ರ ಕಾಯ್ದೆಯಡಿ ORGI ಯಿಂದ ನಡೆಯುತ್ತದೆ.\n• ಅಧಿಕೃತ ಪೋರ್ಟಲ್: censusindia.gov.in.\n\nಸೂಚನೆ: CensusSaathi ಸ್ವತಂತ್ರ ಮಾಹಿತಿ ವೇದಿಕೆಯಾಗಿದೆ.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} ಜನಗಣತಿ ವೇಳಾಪಟ್ಟಿ ಮಾರ್ಗದರ್ಶಿ:\n\n• ಸ್ಥಿತಿ: ಪ್ರಸ್ತಾವಿತ (ಸರ್ಕಾರಿ ಅಧಿಸೂಚನೆಗೆ ಒಳಪಟ್ಟಿದೆ)\n• ಕಚೇರಿ: ${directorate}\n• ಹಂತ 1: ರಾಜ್ಯ ಅಧಿಸೂಚನೆಯಂತೆ\n• ಹಂತ 2: ಕೇಂದ್ರ ಅಧಿಸೂಚನೆಯಂತೆ\n• ಸ್ವಯಂ-ಗಣತಿ: ಐಚ್ಛಿಕ ವಿಧಾನ\n\nಪ್ರಾದೇಶಿಕ ವಿವರ: ${notes}`
  },

  ML: {
    overview: `സെൻസസ് 2027 എന്താണ്?\n\nസെൻസസ് 2027 ഇന്ത്യയുടെ അടുത്ത ദശാബ്ദ സെൻസസ് ആണ്. ഇത് രാജ്യത്തെ 36 സംസ്ഥാനങ്ങളിലെയും കേന്ദ്രഭരണ പ്രദേശങ്ങളിലെയും ജനസംഖ്യാ, ഭവന, സാമൂഹിക-സാമ്പത്തിക വിവരങ്ങൾ ശേഖരിക്കുന്നു.\n\nപ്രധാന വിവരങ്ങൾ:\n• 1948-ലെ സെൻസസ് ആക്ട് പ്രകാരം നടത്തപ്പെടുന്നു.\n• ആദ്യമായി ഡിജിറ്റൽ സെൽഫ്-എന്യൂമറേഷൻ സൗകര്യവും ലഭ്യമാണ്.\n• ക്ഷേമപദ്ധതികളുടെയും വിഭവ വിതരണത്തിന്റെയും അടിസ്ഥാനം.`,
    phases: `സെൻസസ് രണ്ട് ഘട്ടങ്ങളായാണ് നടക്കുക:\n\n1. ഘട്ടം 1: ഭവന ലിസ്റ്റിംഗും ഭവന സെൻസസും\n• വീടുകളുടെ ഘടന, കുടിവെള്ളം, വൈദ്യുതി, ശുചിമുറി സൗകര്യങ്ങൾ.\n\n2. ഘട്ടം 2: ജനസംഖ്യാ കണക്കെടുപ്പ്\n• പ്രായം, വിദ്യാഭ്യാസം, മാതൃഭാഷ, തൊഴിൽ എന്നിവയുടെ വ്യക്തിഗത വിവരങ്ങൾ.`,
    self_enumeration: `സെൽഫ്-എന്യൂമറേഷൻ മാർഗ്ഗരേഖ:\n\n• censusindia.gov.in പോർട്ടലിൽ മൊബൈൽ OTP ഉപയോഗിച്ച് ലോഗിൻ ചെയ്ത് വിവരങ്ങൾ നൽകാം.\n• സമർപ്പിച്ച ശേഷം ലഭിക്കുന്ന റഫറൻസ് നമ്പർ എന്യൂമറേറ്റർ വരുമ്പോൾ കാണിക്കുക.\n• ഇത് തികച്ചും സ്വമേധയാ ഉള്ളതാണ്; ഓൺലൈൻ ചെയ്യാത്തവരുടെ വീടുകളിൽ എന്യൂമറേറ്റർ നേരിട്ടെത്തും.\n• ആധാർ നിർബന്ധമല്ല.`,
    confidentiality: `നിയമപരമായ രഹസ്യസ്വഭാവം (സെക്ഷൻ 15):\n\n• സെൻസസ് ആക്ട് സെക്ഷൻ 15 പ്രകാരം നിങ്ങളുടെ വിവരങ്ങൾ അതീവ രഹസ്യമായി സൂക്ഷിക്കും.\n• ഒരു കോടതിയിലും ഇവ തെളിവായി ഉപയോഗിക്കാൻ കഴിയില്ല.`,
    why_census: `എന്തിനാണ് സെൻസസ് നടത്തുന്നത്?\n\n• മണ്ഡല പുനർനിർണ്ണയം.\n• സംസ്ഥാനങ്ങൾക്കുള്ള നികുതി വിഹിതവും കേന്ദ്ര ഫണ്ടുകളും നിശ്ചയിക്കാൻ.\n• സ്കൂളുകൾ, ആശുപത്രികൾ തുടങ്ങിയ പൊതുസൗകര്യങ്ങളുടെ ആസൂത്രണം.`,
    aadhaar_clarification: `ആധാർ വ്യക്തത:\n\n• സെൻസസിന് ആധാർ നമ്പറോ ബയോമെട്രിക്സോ ആവശ്യമില്ല.\n• ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ നൽകേണ്ടതില്ല.`,
    schedule_timeline: `ടൈംടേബിൾ വിവരങ്ങൾ:\n\n• ഔദ്യോഗിക തീയതികൾ കേന്ദ്ര ഗസറ്റ് വിജ്ഞാപനത്തിലൂടെ പ്രഖ്യാപിക്കും.\n• സംസ്ഥാന വിവരങ്ങൾക്ക് "My Schedule" കാണുക.`,
    security_advisory: `സുരക്ഷാ മുന്നറിയിപ്പ്:\n\n• സെൻസസിന്റെ പേരിൽ OTP, പാസ്‌വേഡ് എന്നിവ ആരുമായും പങ്കിടരുത്.`,
    default_guidance: `CensusSaathi പൗര മാർഗ്ഗനിർദ്ദേശം:\n\n• സെൻസസ് 1948 നിയമപ്രകാരം ORGI നടത്തുന്നു.\n• ഔദ്യോഗിക പോർട്ടൽ: censusindia.gov.in.\n\nഅറിയിപ്പ്: CensusSaathi ഒരു സ്വതന്ത്ര വിവര പ്ലാറ്റ്‌ഫോമാണ്.`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} സെൻസസ് ഷെഡ്യൂൾ:\n\n• നില: നിർദ്ദിഷ്ടം (വിജ്ഞാപനത്തിന് വിധേയം)\n• ഓഫീസ്: ${directorate}\n• ഘട്ടം 1: സംസ്ഥാന വിജ്ഞാപനപ്രകാരം\n• ഘട്ടം 2: കേന്ദ്ര വിജ്ഞാപനപ്രകാരം\n• സെൽഫ്-എന്യൂമറേഷൻ: സ്വമേധയാ ഉള്ള രീതി\n\nവിവരണം: ${notes}`
  },

  PA: {
    overview: `ਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਕੀ ਹੈ?\n\nਮਰਦਮਸ਼ੁਮਾਰੀ 2027 ਭਾਰਤ ਦੀ ਅਗਲੀ ਦਹਾਕੇਵਾਰ ਜਨਗਣਨਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਸਾਰੇ 36 ਰਾਜਾਂ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਦੇ ਲੋਕਾਂ, ਘਰਾਂ ਅਤੇ ਸਮਾਜਿਕ-ਆਰਥਿਕ ਸੂਚਕਾਂ ਦਾ ਡਾਟਾ ਇਕੱਠਾ ਕੀਤਾ ਜਾਵੇਗਾ।\n\nਮੁੱਖ ਨੁਕਤੇ:\n• ਮਰਦਮਸ਼ੁਮਾਰੀ ਐਕਟ, 1948 ਤਹਿਤ ਹਰ 10 ਸਾਲ ਬਾਅਦ ਕਰਵਾਈ ਜਾਂਦੀ ਹੈ।\n• ਡਿਜੀਟਲ ਸਵੈ-ਗਣਨਾ (Self-Enumeration) ਅਤੇ ਘਰ-ਘਰ ਜਾ ਕੇ ਸਰਵੇ ਦੋਵੇਂ ਵਿਕਲਪ ਹੋਣਗੇ।\n• ਸਰਕਾਰੀ ਭਲਾਈ ਯੋਜਨਾਵਾਂ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਵੰਡ ਦਾ ਆਧਾਰ।`,
    phases: `ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੋ ਪੜਾਵਾਂ ਵਿੱਚ ਹੋਵੇਗੀ:\n\n1. ਪੜਾਅ 1: ਮਕਾਨ ਸੂਚੀਕਰਨ ਅਤੇ ਰਿਹਾਇਸ਼ੀ ਗਣਨਾ\n• ਮਕਾਨਾਂ ਦੀ ਬਣਤਰ, ਰਹਿਣ ਦੀ ਸਥਿਤੀ, ਪਾਣੀ, ਬਿਜਲੀ, ਪਖਾਨੇ ਅਤੇ ਰਸੋਈ ਬਾਲਣ ਦੇ ਵੇਰਵੇ।\n\n2. ਪੜਾਅ 2: ਆਬਾਦੀ ਦੀ ਗਣਨਾ\n• ਹਰੇਕ ਵਿਅਕਤੀ ਦੀ ਉਮਰ, ਪੜ੍ਹਾਈ, ਮਾਤ-ਭਾਸ਼ਾ, ਕਿੱਤਾ ਅਤੇ ਪ੍ਰਵਾਸ ਦੇ ਵੇਰਵੇ।`,
    self_enumeration: `ਸਵੈ-ਗਣਨਾ (Self-Enumeration) ਗਾਈਡ:\n\n• ਨਾਗਰਿਕ censusindia.gov.in ਪੋਰਟਲ 'ਤੇ ਮੋਬਾਈਲ OTP ਨਾਲ ਲੌਗਇਨ ਕਰਕੇ ਪਰਿਵਾਰ ਦੇ ਵੇਰਵੇ ਭਰ ਸਕਦੇ ਹਨ।\n• ਜਮ੍ਹਾ ਕਰਨ ਉਪਰੰਤ ਮਿਲਿਆ ਰੈਫਰੈਂਸ ਕੋਡ ਗਣਨਾਕਾਰ ਨੂੰ ਦਿਖਾਉਣ ਲਈ ਸੰਭਾਲ ਕੇ ਰੱਖੋ।\n• ਇਹ ਵਿਕਲਪਿਕ ਹੈ; ਆਨਲਾਈਨ ਨਾ ਭਰਨ 'ਤੇ ਮੁਲਾਜ਼ਮ ਘਰ ਆ ਕੇ ਵੇਰਵੇ ਦਰਜ ਕਰਨਗੇ।\n• ਆਧਾਰ ਨੰਬਰ ਜਾਂ ਬਾਇਓਮੈਟ੍ਰਿਕਸ ਲਾਜ਼ਮੀ ਨਹੀਂ ਹਨ।`,
    confidentiality: `ਕਾਨੂੰਨੀ ਗੁਪਤਤਾ (ਧਾਰਾ 15):\n\n• ਜਨਗਣਨਾ ਐਕਟ 1948 ਦੀ ਧਾਰਾ 15 ਅਧੀਨ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਗੁਪਤ ਹੈ।\n• ਇਹ ਜਾਣਕਾਰੀ ਕਿਸੇ ਵੀ ਅਦਾਲਤ ਜਾਂ ਪੁਲਿਸ ਨਾਲ ਸਾਂਝੀ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ।`,
    why_census: `ਜਨਗਣਨਾ ਕਿਉਂ ਕਰਵਾਈ ਜਾਂਦੀ ਹੈ?\n\n• ਹਲਕਾਬੰਦੀ ਅਤੇ ਨੁਮਾਇੰਦਗੀ।\n• ਰਾਜਾਂ ਨੂੰ ਕੇਂਦਰੀ ਫੰਡਾਂ ਅਤੇ ਟੈਕਸਾਂ ਦੀ ਵੰਡ।\n• ਸਕੂਲ, ਹਸਪਤਾਲ ਅਤੇ ਸੜਕਾਂ ਦੇ ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਦੀ ਯੋਜਨਾਬੰਦੀ।`,
    aadhaar_clarification: `ਆਧਾਰ ਬਾਰੇ ਸਪੱਸ਼ਟੀਕਰਨ:\n\n• ਜਨਗਣਨਾ ਲਈ ਆਧਾਰ ਕਾਰਡ ਜਾਂ ਬਾਇਓਮੈਟ੍ਰਿਕਸ ਦੇਣਾ ਲਾਜ਼ਮੀ ਨਹੀਂ ਹੈ।\n• ਬੈਂਕ ਵੇਰਵੇ ਦੇਣ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ ਹੈ।`,
    schedule_timeline: `ਸ਼ਡਿਊਲ ਜਾਣਕਾਰੀ:\n\n• ਸਰਕਾਰੀ ਤਾਰੀਖਾਂ ਗਜ਼ਟ ਨੋਟੀਫਿਕੇਸ਼ਨ ਰਾਹੀਂ ਜਾਰੀ ਹੋਣਗੀਆਂ।\n• ਰਾਜ-ਵਾਰ ਜਾਣਕਾਰੀ ਲਈ "My Schedule" ਦੇਖੋ।`,
    security_advisory: `ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀ:\n\n• ਜਨਗਣਨਾ ਦੇ ਨਾਂ 'ਤੇ ਕਦੇ ਵੀ OTP ਜਾਂ ਬੈਂਕ ਪਾਸਵਰਡ ਸਾਂਝਾ ਨਾ ਕਰੋ।`,
    default_guidance: `CensusSaathi ਨਾਗਰਿਕ ਗਾਈਡ:\n\n• ਜਨਗਣਨਾ 1948 ਐਕਟ ਅਧੀਨ ORGI ਵੱਲੋਂ ਕਰਵਾਈ ਜਾਂਦੀ ਹੈ।\n• ਅਧਿਕਾਰਤ ਪੋਰਟਲ: censusindia.gov.in.\n\nਨੋਟ: CensusSaathi ਇੱਕ ਸੁਤੰਤਰ ਜਾਣਕਾਰੀ ਪੋਰਟਲ ਹੈ।`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} ਜਨਗਣਨਾ ਸ਼ਡਿਊਲ:\n\n• ਸਥਿਤੀ: ਪ੍ਰਸਤਾਵਿਤ (ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਅਧੀਨ)\n• ਦਫ਼ਤਰ: ${directorate}\n• ਪੜਾਅ 1: ਰਾਜ ਨੋਟੀਫਿਕੇਸ਼ਨ ਅਨੁਸਾਰ\n• ਪੜਾਅ 2: ਕੇਂਦਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਅਨੁਸਾਰ\n• ਸਵੈ-ਗਣਨਾ: ਵਿਕਲਪਿਕ ਵਿਧੀ\n\nਖੇਤਰੀ ਵੇਰਵਾ: ${notes}`
  },

  OR: {
    overview: `ଜନଗଣନା ୨୦୨୭ କ'ଣ?\n\nଜନଗଣନା ୨୦୨୭ ହେଉଛି ଭାରତର ଆଗାମୀ ଦଶବାର୍ଷିକ ଜନଗଣନା, ଯାହା ଦେଶର ୩୬ଟି ରାଜ୍ୟ ଓ କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳର ଜନସଂଖ୍ୟା, ବାସଗୃହ ଏବଂ ସାମାଜିକ-ଅର୍ଥନୈତିକ ତଥ୍ୟ ସଂଗ୍ରହ କରିବ।\n\nମୁଖ୍ୟ ବିଷୟ:\n• ଜନଗଣନା ଆଇନ, ୧୯୪୮ ଅନୁଯାୟୀ ପ୍ରତି ୧୦ ବର୍ଷରେ ଅନୁଷ୍ଠିତ ହୁଏ।\n• ଡିଜିଟାଲ୍ ସ୍ୱୟଂ-ଗଣନା (Self-Enumeration) ଏବଂ ଘରକୁ ଘର ଗଣତି ଉଭୟ ଉପଲବ୍ଧ ହେବ।\n• ଜନକଲ୍ୟାଣ ଯୋଜନା ଓ ସମ୍ବଳ ବଣ୍ଟନର ମୂଳ ଆଧାର।`,
    phases: `ଜନଗଣନା ଦୁଇଟି ପର୍ଯ୍ୟାୟରେ ଅନୁଷ୍ଠିତ ହେବ:\n\n୧. ପ୍ରଥମ ପର୍ଯ୍ୟାୟ: ଘର ତାଲିକା ଏବଂ ଗୃହ ନିର୍ମାଣ ଜନଗଣନା\n• ଘରର ସ୍ଥିତି, ପାନୀୟ ଜଳ, ବିଦ୍ୟୁତ୍, ଶୌଚାଳୟ ଓ ରନ୍ଧନ ଇନ୍ଧନର ସୁବିଧା।\n\n୨. ଦ୍ୱିତୀୟ ପର୍ଯ୍ୟାୟ: ଜନସଂଖ୍ୟା ଗଣନା\n• ବୟସ, ସାକ୍ଷରତା, ମାତୃଭାଷା, ଶିକ୍ଷା, ବୃତ୍ତି ଓ ସ୍ଥାନାନ୍ତରର ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ।`,
    self_enumeration: `ସ୍ୱୟଂ-ଗଣନା (Self-Enumeration) ମାର୍ଗଦର୍ଶିକା:\n\n• ନାଗରିକମାନେ censusindia.gov.in ରେ ମୋବାଇଲ୍ OTP ଦ୍ୱାରା ଲଗଇନ୍ କରି ତଥ୍ୟ ଦାଖଲ କରିପାରିବେ।\n• ଦାଖଲ ପରେ ମିଳିଥିବା ରେଫରେନ୍ସ କୋଡ୍ ସାଇତି ରଖନ୍ତୁ ଏବଂ ଗଣନାକାରୀ ଆସିଲେ ଦେଖାନ୍ତୁ।\n• ଏହା ସମ୍ପୂର୍ଣ୍ଣ ଐଚ୍ଛିକ; ଅନଲାଇନ୍ ନକଲେ କର୍ମଚାରୀ ଘରକୁ ଆସି ତଥ୍ୟ ନେବେ।\n• ଆଧାର କାର୍ଡ ବା ବାୟୋମେଟ୍ରିକ୍ସ ବାଧ୍ୟତାମୂଳକ ନୁହେଁ।`,
    confidentiality: `ଆଇନଗତ ଗୋପନୀୟତା (ଧାରା ୧୫):\n\n• ଜନଗଣନା ଆଇନ ୧୯୪୮ ର ଧାରା ୧୫ ଅନୁଯାୟୀ ଆପଣଙ୍କ ତଥ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ ଗୋପନୀୟ ରଖାଯାଏ।\n• କୌଣସି ଅଦାଲତ ବା ପୋଲିସକୁ ଏହି ତଥ୍ୟ ପ୍ରଦାନ କରାଯାଏ ନାହିଁ।`,
    why_census: `ଜନଗଣନା କାହିଁକି କରାଯାଏ?\n\n• ନିର୍ବାଚନ ମଣ୍ଡଳୀ ପୁନର୍ନିର୍ଦ୍ଧାରଣ।\n• ରାଜ୍ୟଗୁଡ଼ିକୁ କେନ୍ଦ୍ରୀୟ ଅନୁଦାନ ଓ ଟିକସ ବଣ୍ଟନ।\n• ସ୍କୁଲ, ଡାକ୍ତରଖାନା ଓ ରାସ୍ତା ନିର୍ମାଣର ଯୋଜନା।`,
    aadhaar_clarification: `ଆଧାର ସମ୍ପର୍କିତ ସ୍ପଷ୍ଟୀକରଣ:\n\n• ଜନଗଣନା ପାଇଁ ଆଧାର ନମ୍ବର ବା ବାୟୋମେଟ୍ରିକ୍ସ ଦେବା ଆବଶ୍ୟକ ନାହିଁ।\n• ବ୍ୟାଙ୍କ ତଥ୍ୟ ଦେବା ଆବଶ୍ୟକ ନାହିଁ।`,
    schedule_timeline: `ସମୟସୂଚୀ ବିବରଣୀ:\n\n• ସରକାରୀ ଗେଜେଟ୍ ବିଜ୍ଞପ୍ତି ଦ୍ୱାରା ତାରିଖ ଘୋଷଣା ହେବ।\n• ରାଜ୍ୟ ତଥ୍ୟ ପାଇଁ "My Schedule" ଦେଖନ୍ତୁ।`,
    security_advisory: `ସୁରକ୍ଷା ସତର୍କତା:\n\n• ଜନଗଣନା ନାମରେ କାହାକୁ OTP ବା ପାସୱାର୍ଡ ଦିଅନ୍ତୁ ନାହିଁ।`,
    default_guidance: `CensusSaathi ନାଗରିକ ଗାଇଡ୍:\n\n• ଜନଗଣନା ୧୯୪୮ ଆଇନ ଅନୁଯାୟୀ ORGI ଦ୍ୱାରା ପରିଚାଳିତ।\n• ସରକାରୀ ୱେବସାଇଟ୍: censusindia.gov.in.\n\nସୂଚନା: CensusSaathi ଏକ ସ୍ୱତନ୍ତ୍ର ସୂଚନା ପୋର୍ଟାଲ୍।`,
    state_template: (stateName, directorate, notes) =>
      `${stateName} ଜନଗଣନା ସୂଚୀ ମାର୍ଗଦର୍ଶନ:\n\n• ସ୍ଥିତି: ପ୍ରସ୍ତାବିତ (ସରକାରୀ ବିଜ୍ଞପ୍ତି ଅଧୀନ)\n• କାର୍ଯ୍ୟାଳୟ: ${directorate}\n• ପ୍ରଥମ ପର୍ଯ୍ୟାୟ: ରାଜ୍ୟ ବିଜ୍ଞପ୍ତି ଅନୁଯାୟୀ\n• ଦ୍ୱିତୀୟ ପର୍ଯ୍ୟାୟ: କେନ୍ଦ୍ରୀୟ ବିଜ୍ଞପ୍ତି ଅନୁଯାୟୀ\n• ସ୍ୱୟଂ-ଗଣନା: ଐଚ୍ଛିକ ପଦ୍ଧତି\n\nଆଞ୍ଚଳିକ ବିବରଣୀ: ${notes}`
  }
};

// Intent keywords across languages
const INTENT_KEYWORDS = {
  security: ['password', 'otp', 'pin', 'bank', 'card', 'upi', 'fraud', 'पासवर्ड', 'ओटीपी', 'पिन', 'ಬ್ಯಾಂಕ್', 'பாஸ்വേഡ്', 'পাসওয়ার্ড'],
  aadhaar: ['aadhaar', 'biometric', 'fingerprint', 'iris', 'आधार', 'बायोमेट्रिक', 'আধার', 'ஆதார்', 'ఆధార్', 'ಆಧಾರ್', 'ആധാർ', 'ਆਧਾਰ', 'ଆଧାର'],
  phases: ['phase', 'phases', 'two phases', 'houselisting', 'population enumeration', 'चरण', 'દોન તબક્કા', 'টপ্পਾ', 'পর্যায়', 'கட்டம்', 'దశ', 'તબક્કો', 'ಹಂತ', 'ഘട്ടം', 'ਪੜਾਅ', 'ପର୍ଯ୍ୟାୟ'],
  self_enumeration: ['self-enumeration', 'self enumeration', 'online', 'digital', 'portal', 'स्व-गणना', 'सेल्फ-एन्युमरेशन', 'সেলফ-এনিউমারেশন', 'சுய கணக்கெடுப்பு', 'సెల్ఫ్-ఎన్యూమరేషన్', 'સ્વયં ગણતરી', 'ಸ್ವಯಂ-ಗಣತಿ', 'സെൽഫ്-എന്യൂമറേഷൻ', 'ਸਵੈ-ਗਣਨਾ', 'ସ୍ୱୟଂ-ଗଣନା'],
  confidentiality: ['confidential', 'privacy', 'security', 'court', 'section 15', 'act', 'गोपनीय', 'गोपनीयता', 'सुरक्षा', 'গোপনীয়তা', 'ரகசியத்தன்மை', 'గోప್ಯత', 'ગુપ્તતા', 'ಗೌಪ್ಯತೆ', 'രഹസ്യസ്വഭാവം', 'ਗੁਪਤਤਾ', 'ଗୋପନୀୟତା'],
  why_census: ['why is', 'purpose of census', 'benefit of census', 'importance of census', 'need for census', 'क्यों कराई जाती है', 'का केली जाते', 'কিসের জন্য', 'ஏன் நடத்தப்படுகிறது', 'ఎందుకు నిర్వహిస్తారు', 'કેમ કરવામાં આવે છે', 'ಏಕೆ ನಡೆಸಲಾಗುತ್ತದೆ', 'എന്തിനാണ്', 'ਕਿਉਂ ਕਰਵਾਈ ਜਾਂਦੀ ਹੈ', 'କାହିଁକି କରାଯାଏ'],
  schedule: ['when is', 'start date', 'timeline', 'schedule date', 'कब होगी', 'कधी होणार', 'কখন হবে', 'எப்போது', 'ఎప్పుడు', 'ક્યારે', 'ಯಾವಾಗ', 'എപ്പോൾ', 'ਕਦੋਂ', 'କେବେ'],
  overview: ['what is census', 'about census', 'meaning', 'census 2027', 'क्या है', 'काय आहे', 'কী', 'என்ன', 'ఏమిటి', 'શું છે', 'ಏನು', 'എന്താണ്', 'ਕੀ ਹੈ', 'କଣ', 'जनगणना', 'লোকগণনা', 'மக்கள்தொகை', 'జనాభా', 'વસ્તી', 'ಜನಗಣತಿ', 'സെൻസസ്', 'ਮਰਦਮਸ਼ੁਮਾਰੀ', 'ଜନଗଣନା']
};

export function queryAiAssistant(userQuery: string, languageCode: string = 'EN'): AiResponse {
  const rawLang = (languageCode || 'EN').toUpperCase() as SupportedLangCode;
  const lang: SupportedLangCode = KNOWLEDGE_BASE_MULTILINGUAL[rawLang] ? rawLang : 'EN';
  const content = KNOWLEDGE_BASE_MULTILINGUAL[lang];
  const q = userQuery.toLowerCase().trim();

  // 1. Phishing / Sensitive Data Guard
  if (INTENT_KEYWORDS.security.some(k => q.includes(k))) {
    return {
      answer: content.security_advisory,
      sourceId: 'ORGI',
      category: 'Security Advisory'
    };
  }

  // 2. Aadhaar / Biometrics
  if (INTENT_KEYWORDS.aadhaar.some(k => q.includes(k))) {
    return {
      answer: content.aadhaar_clarification,
      sourceId: 'CENSUS_ACT_1948',
      category: 'Identity & Documentation'
    };
  }

  // 3. Two Phases / Phase 1 / Phase 2
  if (INTENT_KEYWORDS.phases.some(k => q.includes(k))) {
    return {
      answer: content.phases,
      sourceId: 'ORGI',
      category: 'Census Phases',
      isSubjectToNotification: true
    };
  }

  // 4. Self-Enumeration
  if (INTENT_KEYWORDS.self_enumeration.some(k => q.includes(k))) {
    return {
      answer: content.self_enumeration,
      sourceId: 'ORGI',
      category: 'Self-Enumeration'
    };
  }

  // 5. Confidentiality / Privacy / Census Act
  if (INTENT_KEYWORDS.confidentiality.some(k => q.includes(k))) {
    return {
      answer: content.confidentiality,
      sourceId: 'CENSUS_ACT_1948',
      category: 'Privacy & Law'
    };
  }

  // 6. Why is Census conducted?
  if (INTENT_KEYWORDS.why_census.some(k => q.includes(k))) {
    return {
      answer: content.why_census,
      sourceId: 'ORGI',
      category: 'Civic Purpose'
    };
  }

  // 7. Specific State / UT Timelines (check against 36 states)
  const stateNames = Object.keys(STATES_SCHEDULE_DATA);
  const matchedStateName = stateNames.find(st => q.includes(st.toLowerCase()));
  if (matchedStateName) {
    const st = STATES_SCHEDULE_DATA[matchedStateName];
    return {
      answer: content.state_template(st.name, st.regionalDirectorate, st.regionalNotes),
      sourceId: 'ORGI',
      category: 'State Timelines',
      isSubjectToNotification: true
    };
  }

  // 8. General Schedule / Dates
  if (INTENT_KEYWORDS.schedule.some(k => q.includes(k))) {
    return {
      answer: content.schedule_timeline,
      sourceId: 'ORGI',
      category: 'Schedule',
      isSubjectToNotification: true
    };
  }

  // 9. What is Census / Overview
  if (INTENT_KEYWORDS.overview.some(k => q.includes(k))) {
    return {
      answer: content.overview,
      sourceId: 'ORGI',
      category: 'Census Overview'
    };
  }

  // 10. Default Generalized Guidance
  return {
    answer: content.default_guidance,
    sourceId: 'ORGI',
    category: 'Citizen Guidance'
  };
}
