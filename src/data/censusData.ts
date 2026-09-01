// Census 2027 Comprehensive Knowledge Engine & Verified Datasets

export interface PhaseInfo {
  id: number;
  name: string;
  shortName: string;
  tagline: string;
  focus: string;
  timelineEstimate: string;
  keyQuestionCount: number;
  color: string;
  description: string;
  whyItMatters: string;
  categories: {
    title: string;
    description: string;
    questions: string[];
  }[];
}

export interface StateCensusSchedule {
  id: string;
  name: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'UT';
  phase1Window: string;
  phase2Window: string;
  primaryLanguages: string[];
  capital: string;
  historical2011Pop: string;
  est2027Pop: string;
  literacy2011: number;
  sexRatio2011: number;
  specialNotes: string;
  helplinePlaceholder: string;
}

export interface MythFactItem {
  id: string;
  category: 'Banking & Money' | 'Aadhaar & Identity' | 'Documents' | 'NRC & Politics' | 'Fines & Law' | 'Self-Enumeration';
  claim: string;
  verdict: 'FALSE / RUMOR' | 'PARTIALLY TRUE' | 'VERIFIED FACT';
  verdictColor: 'red' | 'amber' | 'emerald';
  officialFact: string;
  sourceReference: string;
  actionableTip: string;
}

export interface ChartDataPoint {
  year: string;
  literacy: number;
  sexRatio: number;
  urbanization: number;
  tapWaterPercent: number;
  electricityPercent: number;
  internetPercent?: number;
}

export const CENSUS_PHASES: PhaseInfo[] = [
  {
    id: 1,
    name: "Phase 1: Houselisting & Housing Census (HLO)",
    shortName: "Houselisting Operations",
    tagline: "Mapping every dwelling, building structure, and living condition in India",
    focus: "Household amenities, structural quality, drinking water, sanitation, assets & living conditions",
    timelineEstimate: "Conducted over a 30 to 45-day window per State/UT (typically April to September)",
    keyQuestionCount: 31,
    color: "from-amber-500 to-saffron-600",
    description: "In Phase 1, enumerators visit every house (or citizens complete via Self-Enumeration) to list all structures, record housing materials, access to basic civic amenities, and asset ownership. No individual personal names or sensitive biographical histories are collected in this phase.",
    whyItMatters: "Provides critical data to plan national infrastructure: tap water pipelines (Jal Jeevan), housing schemes (PMAY), electricity grids, sanitation facilities, and urban municipal planning.",
    categories: [
      {
        title: "1. Building & Living Structure",
        description: "Characteristics of the house or building structure",
        questions: [
          "Building Number & Census House Number",
          "Predominant material of Floor, Wall, and Roof (Pucca / Semi-Pucca / Kutcha)",
          "Condition of Census House (Good, Livable, Dilapidated)",
          "Actual use of Census House (Residence, Shop, Residence-cum-other, Factory, etc.)",
          "Total number of persons normally residing in this household"
        ]
      },
      {
        title: "2. Household Ownership & Demography Overview",
        description: "Head of household category and ownership status",
        questions: [
          "Name and gender of the Head of Household",
          "Whether the Head of Household belongs to SC / ST / Other category",
          "Ownership status of the house (Owned / Rented / Any other)",
          "Number of dwelling rooms exclusively in possession of the household",
          "Number of married couples living in the household"
        ]
      },
      {
        title: "3. Drinking Water & Basic Amenities",
        description: "Access to clean water, lighting, and sanitation",
        questions: [
          "Main source of drinking water (Tap water from treated/untreated source, Handpump, Tubewell, Well)",
          "Availability of drinking water source (Within premises / Near premises / Away)",
          "Main source of lighting (Electricity, Solar energy, Kerosene, Other)",
          "Access to Latrine facility within premises and type of latrine",
          "Type of drainage system (Closed drainage, Open drainage, No drainage)",
          "Bathing facility availability (Enclosed bathroom / Open bath)",
          "Kitchen facility availability and cooking fuel used (LPG/PNG, Firewood, Biogas, Electricity)"
        ]
      },
      {
        title: "4. Household Assets & Digital Connectivity",
        description: "Modern assets and communication technology access",
        questions: [
          "Availability of Radio / Transistor",
          "Availability of Television",
          "Access to Internet (Broadband / Mobile Internet / Wi-Fi)",
          "Availability of Laptop / Computer / Tablet",
          "Availability of Telephone / Mobile Phone (Smart phone / Feature phone)",
          "Availability of Bicycle / Scooter / Motorcycle / Moped",
          "Availability of Car / Jeep / Van",
          "Main cereal consumed by the household (for food security planning)"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Phase 2: Population Enumeration (PE)",
    shortName: "Population Enumeration",
    tagline: "Counting every individual resident of India and capturing socio-economic profile",
    focus: "Age, gender, relationship to head, marital status, education, mother tongue, occupation & migration",
    timelineEstimate: "Conducted nationally in February (with a 5-day revision round in early March)",
    keyQuestionCount: 29,
    color: "from-blue-600 to-ashoka-800",
    description: "In Phase 2, every individual residing within the territory of India (citizens, long-term residents, and institutional populations) is enumerated. Detailed demographic, linguistic, educational, economic, and migration data is gathered.",
    whyItMatters: "Determines parliamentary and assembly constituency delimitation, fiscal devolution from Centre to States (Finance Commission), affirmative action policies, education funding, and economic policy.",
    categories: [
      {
        title: "1. Individual Demographics & Identity Basics",
        description: "Core demographic information of each resident member",
        questions: [
          "Full Name of the individual",
          "Relationship to the Head of Household",
          "Sex / Gender (Male / Female / Transgender)",
          "Date of Birth and completed age in years",
          "Current Marital Status (Never married, Currently married, Widowed, Divorced, Separated)",
          "Age at marriage (for currently married persons)"
        ]
      },
      {
        title: "2. Socio-Cultural Profile & Languages",
        description: "Social grouping and linguistic identity",
        questions: [
          "Religion of the individual",
          "Scheduled Caste (SC) / Scheduled Tribe (ST) status (if applicable)",
          "Mother Tongue (Primary language spoken in childhood)",
          "Two other languages known / spoken fluently",
          "Disability status and type (Locomotor, Visual, Hearing, Speech, Mental, Multiple, etc.)"
        ]
      },
      {
        title: "3. Literacy & Educational Attainment",
        description: "Schooling, highest qualification, and literacy",
        questions: [
          "Literacy Status (Literate / Illiterate)",
          "Attending educational institution (Yes / No / Type of school or university)",
          "Highest educational level attained (Primary, Secondary, Higher Secondary, Diploma, Graduate, Post-Graduate, Doctorate)"
        ]
      },
      {
        title: "4. Economic Activity & Occupation",
        description: "Work status, industry, and nature of employment",
        questions: [
          "Worker Status (Main Worker [>6 months], Marginal Worker [<6 months], Non-Worker)",
          "Category of Economic Activity (Cultivator, Agricultural Labourer, Household Industry Worker, Other Worker)",
          "Nature of industry, trade, profession, or service",
          "Class of worker (Employer, Employee, Single Worker, Family Worker)",
          "Seeking or available for work (for non-workers and marginal workers)"
        ]
      },
      {
        title: "5. Migration & Fertility Information",
        description: "Movement history and fertility indicators (for married women)",
        questions: [
          "Place of Birth (Village / Town / District / State / Country)",
          "Place of Last Residence and duration of stay at current location",
          "Reason for migration (Work/Employment, Business, Education, Marriage, Moved after birth, Moved with household, Other)",
          "Number of children surviving and ever born alive (for ever-married women)",
          "Number of children born alive during the last one year"
        ]
      }
    ]
  }
];

export const STATES_SCHEDULE_DATA: StateCensusSchedule[] = [
  {
    id: "MH",
    name: "Maharashtra",
    zone: "West",
    phase1Window: "May 1 – June 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Marathi", "Hindi", "English", "Urdu", "Gujarati"],
    capital: "Mumbai",
    historical2011Pop: "112.4 Million",
    est2027Pop: "131.5 Million (Est.)",
    literacy2011: 82.3,
    sexRatio2011: 929,
    specialNotes: "Extensive digital self-enumeration drive planned for MMR (Mumbai Metropolitan Region), Pune, and Nagpur urban agglomerations.",
    helplinePlaceholder: "1800-22-CENSUS (Regional Directorate: Mumbai)"
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    zone: "North",
    phase1Window: "April 15 – May 31",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "Urdu", "Bhojpuri", "Awadhi", "Braj"],
    capital: "Lucknow",
    historical2011Pop: "199.8 Million",
    est2027Pop: "241.0 Million (Est.)",
    literacy2011: 67.7,
    sexRatio2011: 912,
    specialNotes: "India's largest enumeration operation covering 75 districts and over 1 lakh gram panchayats.",
    helplinePlaceholder: "1800-180-CENSUS (Regional Directorate: Lucknow)"
  },
  {
    id: "KA",
    name: "Karnataka",
    zone: "South",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Kannada", "English", "Telugu", "Tamil", "Urdu", "Tulu"],
    capital: "Bengaluru",
    historical2011Pop: "61.1 Million",
    est2027Pop: "69.5 Million (Est.)",
    literacy2011: 75.4,
    sexRatio2011: 973,
    specialNotes: "High-density digital pilot in Bengaluru tech corridor and Hubballi-Dharwad.",
    helplinePlaceholder: "1800-425-CENSUS (Regional Directorate: Bengaluru)"
  },
  {
    id: "TN",
    name: "Tamil Nadu",
    zone: "South",
    phase1Window: "May 1 – June 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Tamil", "English", "Telugu", "Malayalam"],
    capital: "Chennai",
    historical2011Pop: "72.1 Million",
    est2027Pop: "77.8 Million (Est.)",
    literacy2011: 80.1,
    sexRatio2011: 996,
    specialNotes: "Pioneering state for automated GIS building footprint validation.",
    helplinePlaceholder: "1800-425-CENSUS (Regional Directorate: Chennai)"
  },
  {
    id: "WB",
    name: "West Bengal",
    zone: "East",
    phase1Window: "June 1 – July 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Bengali", "Hindi", "English", "Nepali", "Santhali"],
    capital: "Kolkata",
    historical2011Pop: "91.3 Million",
    est2027Pop: "100.2 Million (Est.)",
    literacy2011: 76.3,
    sexRatio2011: 950,
    specialNotes: "Comprehensive riverine and delta zone mobile enumeration teams deployed for Sunderbans.",
    helplinePlaceholder: "1800-345-CENSUS (Regional Directorate: Kolkata)"
  },
  {
    id: "GJ",
    name: "Gujarat",
    zone: "West",
    phase1Window: "April 15 – May 31",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Gujarati", "Hindi", "English", "Sindhi"],
    capital: "Gandhinagar",
    historical2011Pop: "60.4 Million",
    est2027Pop: "72.0 Million (Est.)",
    literacy2011: 78.0,
    sexRatio2011: 919,
    specialNotes: "Industrial migrant clusters and GIFT City digital pilot focus.",
    helplinePlaceholder: "1800-233-CENSUS (Regional Directorate: Gandhinagar)"
  },
  {
    id: "DL",
    name: "NCT of Delhi",
    zone: "UT",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "English", "Punjabi", "Urdu"],
    capital: "New Delhi",
    historical2011Pop: "16.8 Million",
    est2027Pop: "22.5 Million (Est.)",
    literacy2011: 86.2,
    sexRatio2011: 868,
    specialNotes: "Targeted 100% digital self-enumeration awareness across high-rise residential complexes.",
    helplinePlaceholder: "1800-11-CENSUS (Central Helpdesk: ORGI Delhi)"
  },
  {
    id: "KL",
    name: "Kerala",
    zone: "South",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Malayalam", "English", "Tamil"],
    capital: "Thiruvananthapuram",
    historical2011Pop: "33.4 Million",
    est2027Pop: "35.8 Million (Est.)",
    literacy2011: 94.0,
    sexRatio2011: 1084,
    specialNotes: "Highest historical literacy and sex ratio; extensive NRI household guidance.",
    helplinePlaceholder: "1800-425-CENSUS (Regional Directorate: Thiruvananthapuram)"
  },
  {
    id: "TG",
    name: "Telangana",
    zone: "South",
    phase1Window: "May 1 – June 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Telugu", "Urdu", "English", "Hindi"],
    capital: "Hyderabad",
    historical2011Pop: "35.2 Million",
    est2027Pop: "39.4 Million (Est.)",
    literacy2011: 66.5,
    sexRatio2011: 988,
    specialNotes: "First standalone decennial Census for Telangana since state formation in 2014.",
    helplinePlaceholder: "1800-425-CENSUS (Regional Directorate: Hyderabad)"
  },
  {
    id: "RJ",
    name: "Rajasthan",
    zone: "North",
    phase1Window: "April 15 – May 31",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "Rajasthani", "Marwari", "Mewari"],
    capital: "Jaipur",
    historical2011Pop: "68.5 Million",
    est2027Pop: "82.0 Million (Est.)",
    literacy2011: 66.1,
    sexRatio2011: 928,
    specialNotes: "Special desert mobile teams for remote Thar desert hamlets (Dhanis).",
    helplinePlaceholder: "1800-180-CENSUS (Regional Directorate: Jaipur)"
  },
  {
    id: "BR",
    name: "Bihar",
    zone: "East",
    phase1Window: "May 15 – June 30",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "Bhojpuri", "Maithili", "Magahi", "Urdu"],
    capital: "Patna",
    historical2011Pop: "104.1 Million",
    est2027Pop: "128.5 Million (Est.)",
    literacy2011: 61.8,
    sexRatio2011: 918,
    specialNotes: "Detailed awareness for seasonal migrant workers and rural households.",
    helplinePlaceholder: "1800-345-CENSUS (Regional Directorate: Patna)"
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    zone: "Central",
    phase1Window: "April 15 – May 31",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "Bundeli", "Malvi", "Nimadi", "Gondi", "Bhili"],
    capital: "Bhopal",
    historical2011Pop: "72.6 Million",
    est2027Pop: "88.0 Million (Est.)",
    literacy2011: 69.3,
    sexRatio2011: 931,
    specialNotes: "Extensive tribal belt outreach in Mandla, Dindori, Jhabua, and Alirajpur.",
    helplinePlaceholder: "1800-233-CENSUS (Regional Directorate: Bhopal)"
  },
  {
    id: "AP",
    name: "Andhra Pradesh",
    zone: "South",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Telugu", "Urdu", "English"],
    capital: "Amaravati",
    historical2011Pop: "49.5 Million",
    est2027Pop: "54.2 Million (Est.)",
    literacy2011: 67.0,
    sexRatio2011: 993,
    specialNotes: "Village and Ward Secretariat network assisting in citizen self-enumeration guidance.",
    helplinePlaceholder: "1800-425-CENSUS (Regional Directorate: Vijayawada)"
  },
  {
    id: "OD",
    name: "Odisha",
    zone: "East",
    phase1Window: "April 15 – May 31",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Odia", "Hindi", "Santali", "English"],
    capital: "Bhubaneswar",
    historical2011Pop: "41.9 Million",
    est2027Pop: "47.0 Million (Est.)",
    literacy2011: 72.9,
    sexRatio2011: 979,
    specialNotes: "Disaster-resilient scheduling and multi-lingual tribal language schedules.",
    helplinePlaceholder: "1800-345-CENSUS (Regional Directorate: Bhubaneswar)"
  },
  {
    id: "AS",
    name: "Assam",
    zone: "North-East",
    phase1Window: "May 1 – June 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Assamese", "Bengali", "Bodo", "English", "Hindi"],
    capital: "Dispur",
    historical2011Pop: "31.2 Million",
    est2027Pop: "36.8 Million (Est.)",
    literacy2011: 72.2,
    sexRatio2011: 958,
    specialNotes: "Standard decennial Census schedule adhering strictly to ORGI directives.",
    helplinePlaceholder: "1800-345-CENSUS (Regional Directorate: Guwahati)"
  },
  {
    id: "PB",
    name: "Punjab",
    zone: "North",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Punjabi", "Hindi", "English"],
    capital: "Chandigarh",
    historical2011Pop: "27.7 Million",
    est2027Pop: "31.0 Million (Est.)",
    literacy2011: 75.8,
    sexRatio2011: 895,
    specialNotes: "Active NRI and overseas family member reporting guidelines in place.",
    helplinePlaceholder: "1800-180-CENSUS (Regional Directorate: Chandigarh)"
  },
  {
    id: "HR",
    name: "Haryana",
    zone: "North",
    phase1Window: "April 1 – May 15",
    phase2Window: "February 9 – February 28",
    primaryLanguages: ["Hindi", "Haryanvi", "Punjabi", "English"],
    capital: "Chandigarh",
    historical2011Pop: "25.3 Million",
    est2027Pop: "30.5 Million (Est.)",
    literacy2011: 75.6,
    sexRatio2011: 879,
    specialNotes: "Special focus on rapid urban expansion zones in Gurugram, Faridabad, and Sonipat.",
    helplinePlaceholder: "1800-180-CENSUS (Regional Directorate: Chandigarh)"
  },
  {
    id: "JK",
    name: "Jammu & Kashmir",
    zone: "UT",
    phase1Window: "June 1 – July 15 (Snowbound areas: Sept/Oct)",
    phase2Window: "February 9 – February 28 (Snowbound: Sept)",
    primaryLanguages: ["Kashmiri", "Dogri", "Urdu", "Hindi", "English", "Pahari"],
    capital: "Srinagar / Jammu",
    historical2011Pop: "12.5 Million",
    est2027Pop: "14.8 Million (Est.)",
    literacy2011: 67.2,
    sexRatio2011: 889,
    specialNotes: "Non-synchronous enumeration for high-altitude snowbound mountain valleys.",
    helplinePlaceholder: "1800-180-CENSUS (Regional Directorate: Jammu/Srinagar)"
  }
];

export const MYTH_BUSTER_ITEMS: MythFactItem[] = [
  {
    id: "myth-1",
    category: "Banking & Money",
    claim: "Census enumerators will ask for your Bank Account Number, UPI PIN, or OTP.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "The Census of India NEVER collects bank account numbers, IFSC codes, credit/debit card numbers, UPI PINs, or SMS OTPs. Any person asking for financial credentials in the name of Census is committing fraud.",
    sourceReference: "Office of the Registrar General of India (ORGI) Security Circular",
    actionableTip: "If anyone requests financial passwords or OTPs claiming to be a Census official, immediately decline and report to cybercrime.gov.in or the local police helpline 1930."
  },
  {
    id: "myth-2",
    category: "Documents",
    claim: "You must show original physical documents (Birth Certificate, Land Deeds, Passport) to the enumerator.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "Census enumeration is strictly based on self-declaration and canvassing. Enumerators will NOT ask you to surrender or physically verify passports, property registration deeds, or legacy birth certificates during the visit.",
    sourceReference: "Census Rules 1990 under Census Act 1948",
    actionableTip: "Keep basic family details (dates of birth, educational qualifications of family members) handy for easy verbal reporting or self-enumeration entry."
  },
  {
    id: "myth-3",
    category: "Aadhaar & Identity",
    claim: "Sharing your Aadhaar number is mandatory and enumerators will do fingerprint / iris scanning.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "Census 2027 is NOT a biometric capture exercise. Census enumerators do not carry fingerprint scanners or iris machines. Aadhaar is strictly voluntary if asked for authentication during digital self-enumeration.",
    sourceReference: "Census Act 1948 & ORGI Digital Guidelines",
    actionableTip: "No biometric scanning takes place during standard Census 2027 operations."
  },
  {
    id: "myth-4",
    category: "Fines & Law",
    claim: "Census data can be accessed by the Income Tax department, Police, or Courts against you.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "Under Section 15 of the Census Act 1948, all individual Census records are strictly confidential and legally protected. They CANNOT be inspected by any court, police department, or tax authority, and cannot be used as evidence against any citizen.",
    sourceReference: "Section 15 & Section 11, The Census Act 1948",
    actionableTip: "Census data is solely used to compute statistical aggregates and national planning tables, never for individual surveillance or taxation."
  },
  {
    id: "myth-5",
    category: "Self-Enumeration",
    claim: "Digital Self-Enumeration is compulsory for everyone and physical enumerators won't come.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "Digital Self-Enumeration is an optional, citizen-friendly convenience. If you do not self-enumerate online, an official Census enumerator will visit your home in person to collect the information using the official mobile app.",
    sourceReference: "ORGI Digital Census 2027 Master Plan",
    actionableTip: "If you prefer digital self-service, you can fill out the form online during the self-enumeration window and simply share the Reference Token with the visiting enumerator."
  },
  {
    id: "myth-6",
    category: "NRC & Politics",
    claim: "Tenants and renters will be registered under the landlord's name or risk losing tenancy rights.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "Renters and tenants are enumerated as independent households at the location where they currently reside. Census recording has zero impact on property ownership, rental agreements, or tenancy disputes.",
    sourceReference: "ORGI Household Definitions & Enumerator Manual",
    actionableTip: "If living on rent, list your own household members and select 'Rented' under the house ownership status question."
  },
  {
    id: "myth-7",
    category: "Aadhaar & Identity",
    claim: "Babies born just before or on Census night are not counted.",
    verdict: "FALSE / RUMOR",
    verdictColor: "red",
    officialFact: "All individuals alive at 00:00 hours on the Census Reference Date are counted. A 5-day revisionary round takes place at the end of Phase 2 to account for recent births and deaths occurring during the enumeration period.",
    sourceReference: "ORGI Population Enumeration Reference Standards",
    actionableTip: "Inform the enumerator of any new births in the household during the revision round."
  },
  {
    id: "myth-8",
    category: "Fines & Law",
    claim: "Participating in Census is legally optional and citizens can refuse to answer.",
    verdict: "PARTIALLY TRUE",
    verdictColor: "amber",
    officialFact: "Under Section 8 of the Census Act 1948, every citizen is legally obligated to answer the Census questions truthfully to the best of their knowledge. In return, the state is legally bound to absolute confidentiality under Section 15.",
    sourceReference: "Section 8 & 11, The Census Act 1948",
    actionableTip: "Accurate census participation ensures your district and community receive adequate funding for hospitals, schools, electricity, and roads."
  }
];

export const HISTORICAL_CENSUS_METRICS: ChartDataPoint[] = [
  { year: "1951", literacy: 18.3, sexRatio: 946, urbanization: 17.3, tapWaterPercent: 12.0, electricityPercent: 6.2 },
  { year: "1961", literacy: 28.3, sexRatio: 941, urbanization: 18.0, tapWaterPercent: 16.5, electricityPercent: 14.5 },
  { year: "1971", literacy: 34.5, sexRatio: 930, urbanization: 19.9, tapWaterPercent: 22.0, electricityPercent: 24.8 },
  { year: "1981", literacy: 43.6, sexRatio: 934, urbanization: 23.3, tapWaterPercent: 31.2, electricityPercent: 32.7 },
  { year: "1991", literacy: 52.2, sexRatio: 927, urbanization: 25.7, tapWaterPercent: 43.6, electricityPercent: 42.4 },
  { year: "2001", literacy: 64.8, sexRatio: 933, urbanization: 27.8, tapWaterPercent: 55.4, electricityPercent: 55.8, internetPercent: 1.2 },
  { year: "2011", literacy: 74.0, sexRatio: 943, urbanization: 31.2, tapWaterPercent: 68.6, electricityPercent: 67.2, internetPercent: 12.5 },
  { year: "2027 (Est)", literacy: 84.5, sexRatio: 955, urbanization: 38.5, tapWaterPercent: 88.4, electricityPercent: 98.2, internetPercent: 68.0 }
];

export const QUICK_SAATHI_FAQS = [
  {
    q: "What is Census 2027 and why is it conducted?",
    a: "The decennial Census is the official count of India's population and living conditions. It provides foundational data for planning public services like healthcare centers, drinking water, schools, roads, food rations, and municipal infrastructure."
  },
  {
    q: "How can I do Digital Self-Enumeration?",
    a: "During the designated Self-Enumeration window for your State/UT, citizens can log into the official Census Portal or Mobile App using their registered mobile number, fill out the household schedule online, and receive an encrypted Reference Token to show the visiting enumerator."
  },
  {
    q: "What documents should I keep ready?",
    a: "You do not need physical proof documents. Simply keep handy: full names of household members, dates of birth, highest educational qualifications, mother tongue/languages spoken, and basic household details (drinking water source, fuel used, etc.)."
  },
  {
    q: "Is my personal information safe and confidential?",
    a: "Yes. Under Section 15 of the Census Act 1948, your individual answers are completely confidential. They cannot be shared with courts, police, or tax authorities, and are only published as anonymous statistical aggregates."
  },
  {
    q: "What if I am living away from my hometown on rent?",
    a: "You will be counted at the place where you normally reside (for at least 6 months or intending to stay for 6 months). Living on rent is an official category and does not affect your legal tenancy or permanent address."
  },
  {
    q: "Will the enumerator ask for bank details or Aadhaar biometrics?",
    a: "No! Official Census enumerators NEVER ask for bank accounts, credit cards, UPI PINs, passwords, or fingerprint scans. Anyone asking for these is a fraudster."
  }
];
