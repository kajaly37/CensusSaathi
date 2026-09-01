export interface CensusPhaseInfo {
  id: 'self-enum' | 'phase-1' | 'phase-2';
  number: string;
  title: string;
  badgeLabel: string;
  badgeType: 'available' | 'upcoming' | 'pending';
  shortDescription: string;
  fullDescription: string;
  timingLabel: string;
  timingValue: string;
  whatYouNeedToDo: {
    heading: string;
    items: string[];
    actionButtonText?: string;
    actionType?: 'self-enum-guide' | 'schedule-finder' | 'external-portal';
  };
  questionsCovered: string[];
  statutoryBasis: string;
  sourceId: string;
}

export const CENSUS_PHASES: CensusPhaseInfo[] = [
  {
    id: 'self-enum',
    number: '01',
    title: 'Self-Enumeration (Optional Digital Mode)',
    badgeLabel: 'Optional Digital Mode',
    badgeType: 'available',
    shortDescription: 'Citizens can voluntarily fill out their household and housing details online on the official census portal before the field enumerators visit.',
    fullDescription: 'Introduced as a citizen-centric modernization in Census 2027, Self-Enumeration provides households the option to authenticate via mobile OTP and complete questionnaires digitally at their own pace.',
    timingLabel: 'Active Window',
    timingValue: 'Pre-Enumeration Phase (Subject to Official Notification)',
    whatYouNeedToDo: {
      heading: 'Preparation & Steps',
      items: [
        'Access the official government portal (censusindia.gov.in) using your registered mobile number.',
        'Keep demographic (age, relationship, literacy) and housing amenity details ready for all household members.',
        'Save and safeguard the generated official Reference/Acknowledgement Number to show to the field enumerator.'
      ],
      actionButtonText: 'Start Self-Enumeration Guide',
      actionType: 'self-enum-guide'
    },
    questionsCovered: [
      'Household demographic summary',
      'Ownership status of house',
      'Predominant materials of floor, wall, and roof',
      'Main source of drinking water and availability',
      'Source of lighting and latrine facilities',
      'Availability of kitchen and cooking fuel'
    ],
    statutoryBasis: 'Census Rules, 1990 (Electronic Collection Provisions)',
    sourceId: 'ORGI'
  },
  {
    id: 'phase-1',
    number: '02',
    title: 'Phase 1: Houselisting & Housing Census',
    badgeLabel: 'Upcoming Phase',
    badgeType: 'upcoming',
    shortDescription: 'Field enumerators visit every building and structure to assign building numbers, list houses, and gather detailed statistical data on housing conditions and amenities.',
    fullDescription: 'Phase 1 builds the complete physical framework of residential and non-residential structures across the nation. It assesses living conditions, asset possession, and infrastructure access for all households.',
    timingLabel: 'Proposed Schedule',
    timingValue: 'Subject to Official Gazette Notification',
    whatYouNeedToDo: {
      heading: 'What Citizens Provide',
      items: [
        'Provide accurate information regarding building construction materials (wall, roof, floor).',
        'Share household amenity details including water supply, electricity, toilet access, and kitchen fuel.',
        'Verify household assets such as radio, television, internet access, two-wheeler, or four-wheeler.'
      ],
      actionButtonText: 'View State Timelines',
      actionType: 'schedule-finder'
    },
    questionsCovered: [
      'Building Number and Census House Number',
      'Use of Census House (Residence, Shop, Workshop, School, etc.)',
      'Condition of the Census House (Good, Livable, Dilapidated)',
      'Household size and number of dwelling rooms',
      'Drinking water source and location within premises',
      'Availability of electricity and latrine type',
      'Main fuel used for cooking'
    ],
    statutoryBasis: 'The Census Act, 1948 (Section 10)',
    sourceId: 'ORGI'
  },
  {
    id: 'phase-2',
    number: '03',
    title: 'Phase 2: Population Enumeration',
    badgeLabel: 'Dates to be notified',
    badgeType: 'pending',
    shortDescription: 'The core decennial enumeration where comprehensive demographic, socio-economic, literacy, language, migration, and occupational data is collected for every individual.',
    fullDescription: 'Conducted across the entire country during a synchronized national reference window, Phase 2 captures detailed profiles of all individuals residing in India regardless of nationality or background.',
    timingLabel: 'National Window',
    timingValue: 'To be notified in the Gazette of India',
    whatYouNeedToDo: {
      heading: 'Important Guidance',
      items: [
        'Every resident is legally obligated to provide true answers to official census enumerators under Section 10 of the Census Act.',
        'All individual responses are strictly confidential under Section 15 of the Census Act and cannot be disclosed for non-statistical purposes.',
        'Detailed question schedules and dates will be officially announced by the Registrar General of India.'
      ]
    },
    questionsCovered: [
      'Individual Name, Relationship to Head of Household, Sex, Date of Birth / Age',
      'Marital Status and Age at Marriage',
      'Religion, Scheduled Caste (SC) / Scheduled Tribe (ST) status',
      'Mother Tongue and other languages known',
      'Literacy status and highest educational attainment',
      'Economic activity, occupation, industry, and class of worker',
      'Migration details (place of birth, place of last residence, reason for migration)',
      'Fertility indicators for ever-married women'
    ],
    statutoryBasis: 'The Census Act, 1948 (Sections 8, 10 & 15)',
    sourceId: 'CENSUS_ACT_1948'
  }
];
