export interface FAQItem {
  id: string;
  category: 'General' | 'Phases' | 'Self-Enumeration' | 'Confidentiality' | 'Schedule';
  question: string;
  answer: string;
  sourceId: string;
}

export interface CensusOverviewData {
  whatIsCensus: {
    title: string;
    description: string;
    historicalContext: string;
    frequency: string;
    sourceId: string;
  };
  whyConducted: {
    title: string;
    reasons: { heading: string; detail: string }[];
    sourceId: string;
  };
  citizenRightsAndDuties: {
    rights: string[];
    duties: string[];
    statutoryRef: string;
    sourceId: string;
  };
  confidentialityGuarantees: {
    title: string;
    legalProvisions: string[];
    penaltiesForBreach: string;
    sourceId: string;
  };
  faqs: FAQItem[];
}

export const CENSUS_OVERVIEW: CensusOverviewData = {
  whatIsCensus: {
    title: 'What is the Census of India?',
    description: 'The Census of India is the single largest administrative and statistical exercise conducted in the country. It provides a complete, synchronized snapshot of the size, distribution, socio-economic characteristics, literacy, languages, and living conditions of India’s population.',
    historicalContext: 'India has held decennial censuses uninterruptedly since 1881. The upcoming Census will be the 16th Census of India and the 8th after Independence.',
    frequency: 'Conducted decennially (every 10 years) under the statutory provisions of the Census Act, 1948.',
    sourceId: 'ORGI'
  },
  whyConducted: {
    title: 'Why is the Census conducted?',
    reasons: [
      {
        heading: 'Constitutional Representation & Delimitation',
        detail: 'Census population figures form the fundamental statutory benchmark for delimiting parliamentary and assembly constituencies and reserving legislative seats for SC/ST communities.'
      },
      {
        heading: 'Resource Allocation & Devolution of Taxes',
        detail: 'The Finance Commission and Central Ministries use census demographic data for state revenue devolution, centrally sponsored welfare schemes, and infrastructure funds.'
      },
      {
        heading: 'Public Policy & Infrastructure Planning',
        detail: 'Essential public services—including hospitals, schools, electricity grids, water lines, housing projects, and public transport—are planned based on census density and demographic data.'
      },
      {
        heading: 'Socio-Economic & Academic Benchmarking',
        detail: 'Census data serves as the baseline for all national sample surveys, demographic projections, economic research, and policy evaluations.'
      }
    ],
    sourceId: 'ORGI'
  },
  citizenRightsAndDuties: {
    rights: [
      'Right to complete confidentiality of all personal data under Section 15 of the Census Act.',
      'Right to be enumerated in your usual place of residence without discrimination.',
      'Right to answer questions in your preferred official scheduled language.',
      'Right to verify the identity badge of visiting official census enumerators.'
    ],
    duties: [
      'Duty to answer all statutory census questions truthfully under Section 10 of the Census Act, 1948.',
      'Duty to allow official census enumerators access to mark building numbers on Census houses.',
      'Duty to provide accurate household and amenity details to the best of your knowledge.'
    ],
    statutoryRef: 'Sections 8, 10, and 15 of The Census Act, 1948',
    sourceId: 'CENSUS_ACT_1948'
  },
  confidentialityGuarantees: {
    title: 'Statutory Confidentiality Guarantees',
    legalProvisions: [
      'Section 15 of the Census Act, 1948 establishes that individual census records are strictly confidential and cannot be inspected by any public authority.',
      'Census answers are completely exempt from disclosure under the Right to Information (RTI) Act.',
      'Individual responses are non-admissible as evidence in any civil or criminal court of law.',
      'Published census data is strictly released in aggregated tables with no individual identifiable markers.'
    ],
    penaltiesForBreach: 'The Census Act prescribes rigorous statutory penalties and imprisonment for any census officer or personnel who breaches confidentiality or unlawfully discloses individual data.',
    sourceId: 'CENSUS_ACT_1948'
  },
  faqs: [
    {
      id: 'faq-1',
      category: 'General',
      question: 'What is Census 2027?',
      answer: 'Census 2027 is India’s upcoming decennial population census, designed to gather demographic, socio-economic, housing, and amenity data across all 36 States and Union Territories. It introduces a modernized hybrid model offering digital self-enumeration alongside standard field visits.',
      sourceId: 'ORGI'
    },
    {
      id: 'faq-2',
      category: 'Phases',
      question: 'What are the two phases of the Census?',
      answer: 'Phase 1 is the Houselisting & Housing Census (collecting housing structures, conditions, and amenities). Phase 2 is the Population Enumeration (recording demographic data including age, education, literacy, languages, and occupation for every individual).',
      sourceId: 'ORGI'
    },
    {
      id: 'faq-3',
      category: 'Self-Enumeration',
      question: 'Is Self-Enumeration compulsory?',
      answer: 'No. Self-Enumeration is entirely voluntary. If a household chooses not to self-enumerate online, an official field enumerator will visit the household in person to collect the information.',
      sourceId: 'ORGI'
    },
    {
      id: 'faq-4',
      category: 'Confidentiality',
      question: 'Is my information confidential and secure?',
      answer: 'Yes, absolutely. Under Section 15 of the Census Act, 1948, all individual responses are confidential by law. They cannot be accessed by police, tax authorities, or courts, and are published exclusively in anonymized, aggregated statistical reports.',
      sourceId: 'CENSUS_ACT_1948'
    },
    {
      id: 'faq-5',
      category: 'General',
      question: 'Are Aadhaar numbers or biometrics required for Census?',
      answer: 'No. The Census of India does NOT require, collect, or mandate Aadhaar biometric authentication or financial account details.',
      sourceId: 'CENSUS_ACT_1948'
    },
    {
      id: 'faq-6',
      category: 'Schedule',
      question: 'When will Census activity begin in my State/UT?',
      answer: 'Official schedules will be announced via Gazette of India notifications by the Registrar General & Census Commissioner, India (ORGI). You can inspect regional timelines and notes in the "My Schedule" section.',
      sourceId: 'ORGI'
    }
  ]
};
