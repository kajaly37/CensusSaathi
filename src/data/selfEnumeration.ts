export interface SelfEnumerationStep {
  stepNumber: number;
  stepCode: string;
  title: string;
  shortDescription: string;
  fullInstruction: string;
  keyChecklist: string[];
  actionLabel?: string;
  actionType?: 'schedule-link' | 'portal-link' | 'none';
  tags: string[];
  importantNotice?: string;
  sourceId: string;
}

export const SELF_ENUMERATION_STEPS: SelfEnumerationStep[] = [
  {
    stepNumber: 1,
    stepCode: '01',
    title: 'What is Self-Enumeration?',
    shortDescription: 'A voluntary online facility to record household details before the enumerator visit, saving time and allowing entry at your own pace.',
    fullInstruction: 'Self-Enumeration enables the head of household or authorized adult member to complete the official census questionnaire digitally. Participation is completely voluntary; households who do not self-enumerate are fully enumerated by official field enumerators during physical visits.',
    keyChecklist: [
      'Voluntary digital mode enabled alongside field enumeration',
      'No charges, fees, or payment ever required',
      'Accessible from smartphones, tablets, or computers'
    ],
    tags: ['Voluntary Participation', 'Digital Mode'],
    sourceId: 'ORGI'
  },
  {
    stepNumber: 2,
    stepCode: '02',
    title: 'Check your applicable schedule',
    shortDescription: 'Self-enumeration is activated for pre-notified windows in each State and Union Territory.',
    fullInstruction: 'The online portal opens prior to the field enumerator visit in your district. Check the specific proposed schedule for your State or Union Territory using our schedule guide.',
    keyChecklist: [
      'Review the designated window for your State/UT',
      'Verify if your region has active pre-enumeration enabled',
      'Keep track of official Gazette announcements'
    ],
    actionLabel: 'Check My Schedule',
    actionType: 'schedule-link',
    tags: ['Schedule Verification', 'State Timelines'],
    sourceId: 'ORGI'
  },
  {
    stepNumber: 3,
    stepCode: '03',
    title: 'Prepare the required information',
    shortDescription: 'Keep basic demographic and household amenity details for all household members ready before beginning.',
    fullInstruction: 'Gather standard household records: names of all usual residents, relation to head of household, sex, date of birth / age, marital status, educational attainment, occupation, and housing amenities (drinking water, electricity, toilet type, cooking fuel). Note: Official Census does not mandate Aadhaar numbers or biometrics.',
    keyChecklist: [
      'Basic demographic information for all usual residents',
      'Housing structure and ownership details',
      'Household amenities and asset indicators'
    ],
    tags: ['Basic Demographics', 'Household Amenities'],
    importantNotice: 'Aadhaar numbers and biometrics are NOT mandatory for Census enumeration.',
    sourceId: 'CENSUS_ACT_1948'
  },
  {
    stepNumber: 4,
    stepCode: '04',
    title: 'Visit the official portal',
    shortDescription: 'Access only the official government portal (censusindia.gov.in) using your verified mobile number and secure OTP.',
    fullInstruction: 'Always ensure the website URL ends in ".gov.in" (e.g. censusindia.gov.in). Register with your active mobile number to receive a secure one-time password (OTP). Never enter personal details on unofficial or third-party web domains.',
    keyChecklist: [
      'Verify official government domain (.gov.in)',
      'Authenticate via secure SMS OTP on registered mobile',
      'Beware of phishing links, fake APKs, or unofficial apps'
    ],
    actionLabel: 'Visit Official Portal',
    actionType: 'portal-link',
    tags: ['Official Portal (.gov.in)', 'OTP Authentication'],
    sourceId: 'ORGI'
  },
  {
    stepNumber: 5,
    stepCode: '05',
    title: 'Complete the official process',
    shortDescription: 'Fill in the digital forms carefully. You can save your progress as a draft and review all entries before submitting.',
    fullInstruction: 'Navigate through the designated sections: Household Schedule, Housing Conditions, and Individual Demographics. Verify the spellings of names, dates of birth, and amenities carefully. Once satisfied, submit the form to generate the official acknowledgement.',
    keyChecklist: [
      'Answer all required statistical questions truthfully',
      'Save progress periodically if filling in multiple sittings',
      'Review summary sheet before final submission'
    ],
    tags: ['Digital Form Completion', 'Draft & Review'],
    sourceId: 'ORGI'
  },
  {
    stepNumber: 6,
    stepCode: '06',
    title: 'Keep your reference info',
    shortDescription: 'Save the official acknowledgement/reference number generated upon submission to share with the visiting enumerator.',
    fullInstruction: 'Upon successful submission, the official portal generates a unique Acknowledgement Number / Reference Token via SMS and downloadable slip. When the field enumerator visits your home, show this reference code so they can verify and synchronize your submission in their official Census device.',
    keyChecklist: [
      'Download and save the official acknowledgement PDF/SMS',
      'Present reference code to the enumerator during their visit',
      'No physical form refilling required once code is validated'
    ],
    tags: ['Reference Code', 'Enumerator Verification'],
    sourceId: 'ORGI'
  }
];
