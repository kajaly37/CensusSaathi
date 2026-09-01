import { STATES_SCHEDULE_DATA } from '../data/states';
import type { StateScheduleInfo } from '../data/states';
import { OFFICIAL_SOURCES } from '../data/sources';

export interface DistrictInfo {
  id: string;
  name: string;
  stateCode: string;
  stateName: string;
  headquarters: string;
  historical2011Pop: string;
  historical2011Literacy: string;
  historical2011SexRatio: string;
  regionalNotes?: string;
}

export interface CensusProgressRecord {
  location: string;
  state: string;
  stateCode: string;
  district?: string;
  city?: string;
  phase: string;
  status: string;
  householdsEnumerated: number | null; // Strictly null when not officially published
  populationEnumerationProgress: number | null; // Strictly null
  selfEnumerationCount: number | null; // Strictly null
  enumeratorsActive: number | null; // Strictly null
  lastUpdated: string | null;
  source: string;
  sourceTitle: string;
  sourceUrl: string;
  dataAvailability: 'available' | 'unavailable';
  unavailableReason: string;
  historical2011Pop?: string;
  historical2011Literacy?: string;
  historical2011SexRatio?: string;
  regionalDirectorate?: string;
  regionalNotes?: string;
  officialNotificationStatus?: string;
}

export interface LocationSearchResult {
  name: string;
  state: string;
  stateCode: string;
  district?: string;
  type: 'state' | 'district' | 'city';
}

/**
 * Verified Historical District Reference Data (Source: Census of India 2011 Official Archives)
 */
export const VERIFIED_DISTRICTS_DATA: Record<string, DistrictInfo[]> = {
  MH: [
    { id: 'pune', name: 'Pune', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Pune', historical2011Pop: '9,429,408', historical2011Literacy: '86.15%', historical2011SexRatio: '915', regionalNotes: 'Major urban and rural district covering Pune metropolitan and rural divisions.' },
    { id: 'mumbai', name: 'Mumbai City', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Mumbai', historical2011Pop: '3,085,411', historical2011Literacy: '89.21%', historical2011SexRatio: '832', regionalNotes: '100% urban district; Island City division.' },
    { id: 'mumbai_sub', name: 'Mumbai Suburban', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Bandra', historical2011Pop: '9,356,962', historical2011Literacy: '89.91%', historical2011SexRatio: '860', regionalNotes: 'Highest populated suburban district in Maharashtra.' },
    { id: 'thane', name: 'Thane', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Thane', historical2011Pop: '11,060,148', historical2011Literacy: '84.53%', historical2011SexRatio: '886', regionalNotes: 'Composite 2011 boundary prior to Palghar bifurcation.' },
    { id: 'nagpur', name: 'Nagpur', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Nagpur', historical2011Pop: '4,653,570', historical2011Literacy: '88.39%', historical2011SexRatio: '951', regionalNotes: 'Vidarbha administrative center.' },
    { id: 'nashik', name: 'Nashik', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Nashik', historical2011Pop: '6,107,187', historical2011Literacy: '82.31%', historical2011SexRatio: '934', regionalNotes: 'Northern Maharashtra agrarian and industrial hub.' },
    { id: 'aurangabad', name: 'Chhatrapati Sambhajinagar (Aurangabad)', stateCode: 'MH', stateName: 'Maharashtra', headquarters: 'Chhatrapati Sambhajinagar', historical2011Pop: '3,701,282', historical2011Literacy: '79.02%', historical2011SexRatio: '923', regionalNotes: 'Marathwada administrative center.' },
  ],
  DL: [
    { id: 'new_delhi', name: 'New Delhi', stateCode: 'DL', stateName: 'Delhi', headquarters: 'Connaught Place', historical2011Pop: '142,004', historical2011Literacy: '88.34%', historical2011SexRatio: '822', regionalNotes: 'National capital administrative territory.' },
    { id: 'south_delhi', name: 'South Delhi', stateCode: 'DL', stateName: 'Delhi', headquarters: 'Saket', historical2011Pop: '2,731,929', historical2011Literacy: '86.57%', historical2011SexRatio: '862', regionalNotes: 'Urban residential and commercial zone.' },
    { id: 'north_delhi', name: 'North Delhi', stateCode: 'DL', stateName: 'Delhi', headquarters: 'Alipur', historical2011Pop: '887,978', historical2011Literacy: '86.85%', historical2011SexRatio: '869', regionalNotes: 'Historic North Delhi zone.' },
  ],
  KA: [
    { id: 'bengaluru_urban', name: 'Bengaluru Urban', stateCode: 'KA', stateName: 'Karnataka', headquarters: 'Bengaluru', historical2011Pop: '9,621,551', historical2011Literacy: '87.67%', historical2011SexRatio: '916', regionalNotes: 'Major IT and metropolitan hub.' },
    { id: 'mysuru', name: 'Mysuru', stateCode: 'KA', stateName: 'Karnataka', headquarters: 'Mysuru', historical2011Pop: '3,001,127', historical2011Literacy: '72.79%', historical2011SexRatio: '985', regionalNotes: 'Heritage capital and southern division.' },
    { id: 'dharwad', name: 'Dharwad', stateCode: 'KA', stateName: 'Karnataka', headquarters: 'Hubballi-Dharwad', historical2011Pop: '1,847,023', historical2011Literacy: '80.00%', historical2011SexRatio: '971', regionalNotes: 'North Karnataka cultural center.' },
  ],
  TN: [
    { id: 'chennai', name: 'Chennai', stateCode: 'TN', stateName: 'Tamil Nadu', headquarters: 'Chennai', historical2011Pop: '4,646,732', historical2011Literacy: '90.18%', historical2011SexRatio: '989', regionalNotes: '100% urban district; coastal metropolitan city.' },
    { id: 'coimbatore', name: 'Coimbatore', stateCode: 'TN', stateName: 'Tamil Nadu', headquarters: 'Coimbatore', historical2011Pop: '3,458,045', historical2011Literacy: '83.98%', historical2011SexRatio: '1000', regionalNotes: 'Western industrial textile center.' },
    { id: 'madurai', name: 'Madurai', stateCode: 'TN', stateName: 'Tamil Nadu', headquarters: 'Madurai', historical2011Pop: '3,038,252', historical2011Literacy: '83.45%', historical2011SexRatio: '990', regionalNotes: 'Southern heritage and temple hub.' },
  ],
  WB: [
    { id: 'kolkata', name: 'Kolkata', stateCode: 'WB', stateName: 'West Bengal', headquarters: 'Kolkata', historical2011Pop: '4,496,694', historical2011Literacy: '86.31%', historical2011SexRatio: '908', regionalNotes: 'Metropolitan district on the Hooghly river.' },
    { id: 'north_24_pgs', name: 'North 24 Parganas', stateCode: 'WB', stateName: 'West Bengal', headquarters: 'Barasat', historical2011Pop: '10,009,781', historical2011Literacy: '84.06%', historical2011SexRatio: '955', regionalNotes: 'Dense suburban and deltaic district.' },
  ],
  UP: [
    { id: 'lucknow', name: 'Lucknow', stateCode: 'UP', stateName: 'Uttar Pradesh', headquarters: 'Lucknow', historical2011Pop: '4,589,838', historical2011Literacy: '77.29%', historical2011SexRatio: '917', regionalNotes: 'State capital administrative division.' },
    { id: 'kanpur_nagar', name: 'Kanpur Nagar', stateCode: 'UP', stateName: 'Uttar Pradesh', headquarters: 'Kanpur', historical2011Pop: '4,581,268', historical2011Literacy: '79.65%', historical2011SexRatio: '862', regionalNotes: 'Major commercial and manufacturing cluster.' },
    { id: 'varanasi', name: 'Varanasi', stateCode: 'UP', stateName: 'Uttar Pradesh', headquarters: 'Varanasi', historical2011Pop: '3,676,841', historical2011Literacy: '75.60%', historical2011SexRatio: '913', regionalNotes: 'Cultural and religious center along the Ganga.' },
  ],
  GJ: [
    { id: 'ahmedabad', name: 'Ahmedabad', stateCode: 'GJ', stateName: 'Gujarat', headquarters: 'Ahmedabad', historical2011Pop: '7,214,225', historical2011Literacy: '85.31%', historical2011SexRatio: '904', regionalNotes: 'Commercial and industrial metropolis.' },
    { id: 'surat', name: 'Surat', stateCode: 'GJ', stateName: 'Gujarat', headquarters: 'Surat', historical2011Pop: '6,081,322', historical2011Literacy: '85.53%', historical2011SexRatio: '787', regionalNotes: 'Textile and diamond trade center.' },
  ],
  RJ: [
    { id: 'jaipur', name: 'Jaipur', stateCode: 'RJ', stateName: 'Rajasthan', headquarters: 'Jaipur', historical2011Pop: '6,626,178', historical2011Literacy: '75.51%', historical2011SexRatio: '910', regionalNotes: 'State capital and cultural tourism center.' },
  ],
  BR: [
    { id: 'patna', name: 'Patna', stateCode: 'BR', stateName: 'Bihar', headquarters: 'Patna', historical2011Pop: '5,838,465', historical2011Literacy: '70.68%', historical2011SexRatio: '897', regionalNotes: 'State capital along the south bank of the Ganges.' },
  ],
  TG: [
    { id: 'hyderabad', name: 'Hyderabad', stateCode: 'TG', stateName: 'Telangana', headquarters: 'Hyderabad', historical2011Pop: '3,943,323', historical2011Literacy: '83.26%', historical2011SexRatio: '954', regionalNotes: 'State capital and technology hub.' },
  ],
  MP: [
    { id: 'indore', name: 'Indore', stateCode: 'MP', stateName: 'Madhya Pradesh', headquarters: 'Indore', historical2011Pop: '3,276,697', historical2011Literacy: '80.87%', historical2011SexRatio: '928', regionalNotes: 'Commercial and educational center.' },
    { id: 'bhopal', name: 'Bhopal', stateCode: 'MP', stateName: 'Madhya Pradesh', headquarters: 'Bhopal', historical2011Pop: '2,371,061', historical2011Literacy: '80.37%', historical2011SexRatio: '918', regionalNotes: 'State capital administrative center.' },
  ]
};

// City to District/State index
const CITY_MAPPINGS: Record<string, { stateCode: string; stateName: string; districtName: string }> = {
  pune: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Pune' },
  mumbai: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Mumbai City' },
  thane: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Thane' },
  nagpur: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Nagpur' },
  nashik: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Nashik' },
  aurangabad: { stateCode: 'MH', stateName: 'Maharashtra', districtName: 'Chhatrapati Sambhajinagar (Aurangabad)' },
  bengaluru: { stateCode: 'KA', stateName: 'Karnataka', districtName: 'Bengaluru Urban' },
  bangalore: { stateCode: 'KA', stateName: 'Karnataka', districtName: 'Bengaluru Urban' },
  mysuru: { stateCode: 'KA', stateName: 'Karnataka', districtName: 'Mysuru' },
  mysore: { stateCode: 'KA', stateName: 'Karnataka', districtName: 'Mysuru' },
  chennai: { stateCode: 'TN', stateName: 'Tamil Nadu', districtName: 'Chennai' },
  madras: { stateCode: 'TN', stateName: 'Tamil Nadu', districtName: 'Chennai' },
  coimbatore: { stateCode: 'TN', stateName: 'Tamil Nadu', districtName: 'Coimbatore' },
  madurai: { stateCode: 'TN', stateName: 'Tamil Nadu', districtName: 'Madurai' },
  kolkata: { stateCode: 'WB', stateName: 'West Bengal', districtName: 'Kolkata' },
  calcutta: { stateCode: 'WB', stateName: 'West Bengal', districtName: 'Kolkata' },
  delhi: { stateCode: 'DL', stateName: 'Delhi', districtName: 'New Delhi' },
  'new delhi': { stateCode: 'DL', stateName: 'Delhi', districtName: 'New Delhi' },
  lucknow: { stateCode: 'UP', stateName: 'Uttar Pradesh', districtName: 'Lucknow' },
  kanpur: { stateCode: 'UP', stateName: 'Uttar Pradesh', districtName: 'Kanpur Nagar' },
  varanasi: { stateCode: 'UP', stateName: 'Uttar Pradesh', districtName: 'Varanasi' },
  ahmedabad: { stateCode: 'GJ', stateName: 'Gujarat', districtName: 'Ahmedabad' },
  surat: { stateCode: 'GJ', stateName: 'Gujarat', districtName: 'Surat' },
  jaipur: { stateCode: 'RJ', stateName: 'Rajasthan', districtName: 'Jaipur' },
  patna: { stateCode: 'BR', stateName: 'Bihar', districtName: 'Patna' },
  hyderabad: { stateCode: 'TG', stateName: 'Telangana', districtName: 'Hyderabad' },
  indore: { stateCode: 'MP', stateName: 'Madhya Pradesh', districtName: 'Indore' },
  bhopal: { stateCode: 'MP', stateName: 'Madhya Pradesh', districtName: 'Bhopal' },
};

/**
 * Census Progress Service
 * Clean data-service abstraction preparing CensusSaathi for official live Census progress feeds.
 * Ensures zero fabricated progress data.
 */
class CensusProgressService {
  
  /**
   * Search for locations matching query (states, UTs, districts, cities)
   */
  public searchLocations(query: string): LocationSearchResult[] {
    const clean = query.trim().toLowerCase();
    if (!clean) return [];

    const results: LocationSearchResult[] = [];

    // 1. Check City Mappings
    for (const [cityKey, cityData] of Object.entries(CITY_MAPPINGS)) {
      if (cityKey.includes(clean) || clean.includes(cityKey)) {
        results.push({
          name: cityKey.charAt(0).toUpperCase() + cityKey.slice(1),
          state: cityData.stateName,
          stateCode: cityData.stateCode,
          district: cityData.districtName,
          type: 'city'
        });
      }
    }

    // 2. Check Districts
    for (const [sCode, dList] of Object.entries(VERIFIED_DISTRICTS_DATA)) {
      for (const d of dList) {
        if (d.name.toLowerCase().includes(clean) || clean.includes(d.name.toLowerCase())) {
          // Avoid duplicate with city
          if (!results.some(r => r.district === d.name && r.stateCode === sCode)) {
            results.push({
              name: d.name,
              state: d.stateName,
              stateCode: sCode,
              district: d.name,
              type: 'district'
            });
          }
        }
      }
    }

    // 3. Check States & UTs
    for (const [sName, sData] of Object.entries(STATES_SCHEDULE_DATA)) {
      if (sName.toLowerCase().includes(clean) || sData.code.toLowerCase().includes(clean)) {
        if (sData.type !== 'national') {
          results.push({
            name: sName,
            state: sName,
            stateCode: sData.code,
            type: 'state'
          });
        }
      }
    }

    return results.slice(0, 8);
  }

  /**
   * Get verified districts for a state
   */
  public getDistrictsForState(stateCode: string): DistrictInfo[] {
    const code = stateCode.toUpperCase();
    return VERIFIED_DISTRICTS_DATA[code] || [];
  }

  /**
   * Get progress and statutory information for a location query
   */
  public getProgress(locationQuery: string): CensusProgressRecord | null {
    const clean = locationQuery.trim();
    if (!clean) return null;

    const lower = clean.toLowerCase();

    // Check if city matches
    for (const [cityKey, cityData] of Object.entries(CITY_MAPPINGS)) {
      if (lower.includes(cityKey)) {
        const stateSchedule = STATES_SCHEDULE_DATA[cityData.stateName];
        const distList = VERIFIED_DISTRICTS_DATA[cityData.stateCode] || [];
        const distObj = distList.find(d => d.name === cityData.districtName);

        return this.createProgressRecord(
          `${cityKey.charAt(0).toUpperCase() + cityKey.slice(1)}, ${cityData.stateName}`,
          cityData.stateName,
          cityData.stateCode,
          cityData.districtName,
          cityKey.charAt(0).toUpperCase() + cityKey.slice(1),
          stateSchedule,
          distObj
        );
      }
    }

    // Check if district matches
    for (const [sCode, dList] of Object.entries(VERIFIED_DISTRICTS_DATA)) {
      for (const d of dList) {
        if (lower.includes(d.name.toLowerCase()) || lower.includes(d.id)) {
          const stateSchedule = STATES_SCHEDULE_DATA[d.stateName];
          return this.createProgressRecord(
            `${d.name}, ${d.stateName}`,
            d.stateName,
            sCode,
            d.name,
            undefined,
            stateSchedule,
            d
          );
        }
      }
    }

    // Check if state matches
    for (const [sName, sData] of Object.entries(STATES_SCHEDULE_DATA)) {
      if (lower.includes(sName.toLowerCase()) || lower === sData.code.toLowerCase()) {
        const distList = VERIFIED_DISTRICTS_DATA[sData.code] || [];
        const firstDist = distList.length > 0 ? distList[0] : undefined;

        return this.createProgressRecord(
          sName,
          sName,
          sData.code,
          firstDist?.name,
          undefined,
          sData,
          firstDist
        );
      }
    }

    // Default National Overview
    const national = STATES_SCHEDULE_DATA['National Timeline (Default)'] || STATES_SCHEDULE_DATA['National Timeline Overview'];
    return this.createProgressRecord(
      'All India',
      'All India',
      'IN',
      undefined,
      undefined,
      national,
      undefined
    );
  }

  /**
   * Approximate Geolocation Resolver (Mapping broad lat/lng to state without tracking precise location)
   */
  public async resolveCoordinates(lat: number, lng: number): Promise<{ state: string; stateCode: string; district?: string } | null> {
    // Coarse bounding box approximation across key Indian zones
    // No third-party network tracking needed; preserves user privacy completely
    if (lat >= 18.0 && lat <= 20.5 && lng >= 72.5 && lng <= 75.0) {
      return { state: 'Maharashtra', stateCode: 'MH', district: 'Pune' };
    }
    if (lat >= 28.2 && lat <= 28.9 && lng >= 76.8 && lng <= 77.4) {
      return { state: 'Delhi', stateCode: 'DL', district: 'New Delhi' };
    }
    if (lat >= 12.7 && lat <= 13.3 && lng >= 77.3 && lng <= 77.9) {
      return { state: 'Karnataka', stateCode: 'KA', district: 'Bengaluru Urban' };
    }
    if (lat >= 12.8 && lat <= 13.3 && lng >= 80.0 && lng <= 80.4) {
      return { state: 'Tamil Nadu', stateCode: 'TN', district: 'Chennai' };
    }
    if (lat >= 22.3 && lat <= 22.8 && lng >= 88.2 && lng <= 88.5) {
      return { state: 'West Bengal', stateCode: 'WB', district: 'Kolkata' };
    }
    if (lat >= 26.5 && lat <= 27.2 && lng >= 80.7 && lng <= 81.2) {
      return { state: 'Uttar Pradesh', stateCode: 'UP', district: 'Lucknow' };
    }
    if (lat >= 22.8 && lat <= 23.3 && lng >= 72.3 && lng <= 72.8) {
      return { state: 'Gujarat', stateCode: 'GJ', district: 'Ahmedabad' };
    }
    if (lat >= 26.7 && lat <= 27.1 && lng >= 75.6 && lng <= 76.0) {
      return { state: 'Rajasthan', stateCode: 'RJ', district: 'Jaipur' };
    }
    if (lat >= 17.2 && lat <= 17.6 && lng >= 78.3 && lng <= 78.7) {
      return { state: 'Telangana', stateCode: 'TG', district: 'Hyderabad' };
    }
    if (lat >= 25.4 && lat <= 25.8 && lng >= 85.0 && lng <= 85.3) {
      return { state: 'Bihar', stateCode: 'BR', district: 'Patna' };
    }

    // Default fallback to Maharashtra
    return { state: 'Maharashtra', stateCode: 'MH', district: 'Pune' };
  }

  private createProgressRecord(
    location: string,
    state: string,
    stateCode: string,
    district: string | undefined,
    city: string | undefined,
    stateSchedule: StateScheduleInfo | undefined,
    districtInfo: DistrictInfo | undefined
  ): CensusProgressRecord {
    const orgiSource = OFFICIAL_SOURCES.ORGI;

    return {
      location,
      state,
      stateCode,
      district,
      city,
      phase: stateSchedule?.houselistingStatus || 'Houselisting & Housing Census (Subject to Official Notification)',
      status: stateSchedule?.officialNotificationStatus || 'Subject to Official Gazette Notification',
      // Strictly null: zero fabricated percentages or numbers
      householdsEnumerated: null,
      populationEnumerationProgress: null,
      selfEnumerationCount: null,
      enumeratorsActive: null,
      lastUpdated: null,
      source: orgiSource.shortName,
      sourceTitle: orgiSource.name,
      sourceUrl: orgiSource.url || 'https://censusindia.gov.in',
      dataAvailability: 'unavailable',
      unavailableReason: 'Official progress data is not currently available through CensusSaathi.',
      historical2011Pop: districtInfo?.historical2011Pop,
      historical2011Literacy: districtInfo?.historical2011Literacy,
      historical2011SexRatio: districtInfo?.historical2011SexRatio,
      regionalDirectorate: stateSchedule?.regionalDirectorate,
      regionalNotes: districtInfo?.regionalNotes || stateSchedule?.regionalNotes,
      officialNotificationStatus: stateSchedule?.officialNotificationStatus
    };
  }
}

export const censusProgressService = new CensusProgressService();
