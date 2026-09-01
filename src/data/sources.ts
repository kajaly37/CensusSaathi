export interface SourceItem {
  id: string;
  name: string;
  shortName: string;
  authority: string;
  url?: string;
  legalReference?: string;
  description: string;
}

export const OFFICIAL_SOURCES: Record<string, SourceItem> = {
  ORGI: {
    id: 'ORGI',
    name: 'Office of the Registrar General & Census Commissioner, India',
    shortName: 'ORGI / Ministry of Home Affairs',
    authority: 'Ministry of Home Affairs, Government of India',
    url: 'https://censusindia.gov.in',
    description: 'Statutory authority responsible for conducting decennial population census and civil registration across India.'
  },
  CENSUS_ACT_1948: {
    id: 'CENSUS_ACT_1948',
    name: 'The Census Act, 1948 (Act No. 37 of 1948)',
    shortName: 'Census Act, 1948',
    authority: 'Parliament of India',
    legalReference: 'Section 15 (Confidentiality) & Section 10 (Duty of public to answer questions)',
    description: 'The statutory legal framework governing census operations, legal obligations, and absolute confidentiality of individual records in India.'
  },
  CENSUS_RULES_1990: {
    id: 'CENSUS_RULES_1990',
    name: 'Census Rules, 1990 (as amended)',
    shortName: 'Census Rules, 1990',
    authority: 'Ministry of Home Affairs, Government of India',
    description: 'Regulatory provisions governing enumerator appointments, houselisting schedules, and digital data collection modes.'
  },
  MHA_ANNUAL_REPORT: {
    id: 'MHA_ANNUAL_REPORT',
    name: 'Ministry of Home Affairs Annual Reports & Public Advisories',
    shortName: 'MHA Public Advisories',
    authority: 'Government of India',
    url: 'https://www.mha.gov.in',
    description: 'Official administrative publications outlining census modernization, digital enumeration plans, and budgetary approvals.'
  },
  HISTORICAL_CENSUS_ARCHIVES: {
    id: 'HISTORICAL_CENSUS_ARCHIVES',
    name: 'Decennial Census Historical Data (1951 - 2011)',
    shortName: 'Census Historical Archives',
    authority: 'Office of the Registrar General, India',
    url: 'https://censusindia.gov.in/census.website/data/census-tables',
    description: 'Published aggregate historical statistics covering population, decadal growth, literacy rates, and state distributions.'
  }
};
