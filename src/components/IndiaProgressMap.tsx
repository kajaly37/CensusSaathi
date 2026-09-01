import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Navigation, 
  Building, 
  Calendar, 
  ExternalLink, 
  ShieldAlert,
  Info
} from 'lucide-react';
import { censusProgressService } from '../services/censusProgressService';
import type { 
  CensusProgressRecord, 
  LocationSearchResult, 
  DistrictInfo 
} from '../services/censusProgressService';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

// State geometries and placement coordinates for interactive India map representation
interface StateMapNode {
  code: string;
  name: string;
  x: number;
  y: number;
  path: string; // SVG path
  labelX: number;
  labelY: number;
}

// Stylized vector map paths for Indian States & UTs (Accurate topological relative positioning)
const INDIA_MAP_NODES: StateMapNode[] = [
  // North
  { code: 'JK', name: 'Jammu and Kashmir', x: 120, y: 35, path: 'M 100 20 L 140 25 L 145 60 L 120 75 L 95 55 Z', labelX: 118, labelY: 45 },
  { code: 'LA', name: 'Ladakh', x: 165, y: 30, path: 'M 140 25 L 195 20 L 205 60 L 145 60 Z', labelX: 170, labelY: 42 },
  { code: 'HP', name: 'Himachal Pradesh', x: 135, y: 80, path: 'M 120 75 L 145 60 L 165 75 L 150 100 L 125 95 Z', labelX: 140, labelY: 82 },
  { code: 'PB', name: 'Punjab', x: 105, y: 95, path: 'M 95 80 L 125 80 L 120 115 L 90 110 Z', labelX: 106, labelY: 98 },
  { code: 'HR', name: 'Haryana', x: 125, y: 115, path: 'M 115 105 L 140 100 L 145 130 L 115 130 Z', labelX: 128, labelY: 118 },
  { code: 'DL', name: 'Delhi', x: 138, y: 118, path: 'M 135 115 L 145 115 L 145 125 L 135 125 Z', labelX: 140, labelY: 120 },
  { code: 'UT', name: 'Uttarakhand', x: 160, y: 100, path: 'M 145 95 L 175 90 L 185 120 L 155 120 Z', labelX: 165, labelY: 105 },
  { code: 'RJ', name: 'Rajasthan', x: 95, y: 155, path: 'M 70 120 L 125 125 L 140 180 L 70 190 L 50 145 Z', labelX: 95, labelY: 155 },
  { code: 'UP', name: 'Uttar Pradesh', x: 180, y: 150, path: 'M 135 130 L 195 120 L 235 155 L 205 185 L 145 175 Z', labelX: 180, labelY: 152 },
  
  // West
  { code: 'GJ', name: 'Gujarat', x: 65, y: 210, path: 'M 40 175 L 85 185 L 95 240 L 45 255 L 25 215 Z', labelX: 60, labelY: 215 },
  { code: 'MH', name: 'Maharashtra', x: 120, y: 260, path: 'M 85 225 L 165 220 L 180 280 L 115 315 L 85 270 Z', labelX: 125, labelY: 265 },
  { code: 'GA', name: 'Goa', x: 95, y: 325, path: 'M 90 320 L 105 320 L 105 335 L 90 335 Z', labelX: 97, labelY: 328 },

  // Central
  { code: 'MP', name: 'Madhya Pradesh', x: 150, y: 205, path: 'M 115 180 L 195 175 L 210 230 L 130 240 Z', labelX: 155, labelY: 205 },
  { code: 'CG', name: 'Chhattisgarh', x: 195, y: 240, path: 'M 185 205 L 215 205 L 220 280 L 185 275 Z', labelX: 200, labelY: 240 },

  // East
  { code: 'BR', name: 'Bihar', x: 235, y: 165, path: 'M 210 145 L 265 145 L 265 185 L 215 185 Z', labelX: 238, labelY: 165 },
  { code: 'JH', name: 'Jharkhand', x: 230, y: 205, path: 'M 215 185 L 260 185 L 255 230 L 210 225 Z', labelX: 235, labelY: 205 },
  { code: 'WB', name: 'West Bengal', x: 265, y: 215, path: 'M 255 165 L 285 165 L 275 255 L 250 240 Z', labelX: 265, labelY: 210 },
  { code: 'OD', name: 'Odisha', x: 230, y: 265, path: 'M 205 240 L 260 235 L 250 300 L 205 285 Z', labelX: 230, labelY: 265 },

  // South
  { code: 'TG', name: 'Telangana', x: 155, y: 305, path: 'M 135 275 L 180 270 L 185 325 L 140 330 Z', labelX: 158, labelY: 300 },
  { code: 'AP', name: 'Andhra Pradesh', x: 175, y: 350, path: 'M 175 295 L 235 285 L 185 395 L 150 365 Z', labelX: 180, labelY: 345 },
  { code: 'KA', name: 'Karnataka', x: 120, y: 355, path: 'M 100 295 L 145 290 L 150 380 L 105 385 Z', labelX: 125, labelY: 345 },
  { code: 'KL', name: 'Kerala', x: 115, y: 415, path: 'M 105 385 L 125 385 L 130 450 L 110 445 Z', labelX: 116, labelY: 415 },
  { code: 'TN', name: 'Tamil Nadu', x: 145, y: 415, path: 'M 125 375 L 165 370 L 160 450 L 125 450 Z', labelX: 145, labelY: 410 },

  // North-East
  { code: 'AS', name: 'Assam', x: 310, y: 165, path: 'M 290 150 L 335 145 L 340 180 L 295 180 Z', labelX: 315, labelY: 165 },
  { code: 'AR', name: 'Arunachal Pradesh', x: 340, y: 135, path: 'M 315 115 L 370 120 L 360 150 L 315 145 Z', labelX: 342, labelY: 135 },
  { code: 'ML', name: 'Meghalaya', x: 305, y: 185, path: 'M 295 180 L 325 180 L 325 195 L 295 195 Z', labelX: 308, labelY: 187 },
  { code: 'TR', name: 'Tripura', x: 305, y: 215, path: 'M 298 205 L 315 205 L 312 225 L 298 225 Z', labelX: 306, labelY: 215 },
];

interface IndiaProgressMapProps {
  onLocationSelected?: (location: CensusProgressRecord) => void;
}

export const IndiaProgressMap: React.FC<IndiaProgressMapProps> = ({ onLocationSelected }) => {
  const { t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<LocationSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedStateCode, setSelectedStateCode] = useState('MH');
  const [selectedDistrictName, setSelectedDistrictName] = useState<string>('Pune');
  const [progressRecord, setProgressRecord] = useState<CensusProgressRecord | null>(null);
  const [availableDistricts, setAvailableDistricts] = useState<DistrictInfo[]>([]);
  const [locationStatusNotice, setLocationStatusNotice] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [hoveredStateCode, setHoveredStateCode] = useState<string | null>(null);

  // Initialize with Maharashtra - Pune as default location
  useEffect(() => {
    handleSelectLocation('Pune, Maharashtra');
  }, []);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const results = censusProgressService.searchLocations(val);
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  const handleSelectLocation = (locationQuery: string) => {
    setIsSearching(false);
    setSearchQuery('');
    setLocationStatusNotice(null);

    const record = censusProgressService.getProgress(locationQuery);
    if (record) {
      setProgressRecord(record);
      setSelectedStateCode(record.stateCode);
      if (record.district) {
        setSelectedDistrictName(record.district);
      }
      const dists = censusProgressService.getDistrictsForState(record.stateCode);
      setAvailableDistricts(dists);

      if (onLocationSelected) {
        onLocationSelected(record);
      }
    }
  };

  const handleStateNodeClick = (stateNode: StateMapNode) => {
    setSelectedStateCode(stateNode.code);
    const dists = censusProgressService.getDistrictsForState(stateNode.code);
    setAvailableDistricts(dists);
    const firstDistrict = dists.length > 0 ? dists[0].name : undefined;
    setSelectedDistrictName(firstDistrict || '');

    const record = censusProgressService.getProgress(stateNode.name);
    if (record) {
      setProgressRecord(record);
      if (onLocationSelected) {
        onLocationSelected(record);
      }
    }
  };

  const handleDistrictChipClick = (district: DistrictInfo) => {
    setSelectedDistrictName(district.name);
    const record = censusProgressService.getProgress(`${district.name}, ${district.stateName}`);
    if (record) {
      setProgressRecord(record);
      if (onLocationSelected) {
        onLocationSelected(record);
      }
    }
  };

  // Browser Geolocation Handler
  const handleUseMyLocation = () => {
    setLocationStatusNotice(null);

    if (!navigator.geolocation) {
      setLocationStatusNotice(t.schedule.locationNotSupported || 'Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsLocating(false);
        const { latitude, longitude } = position.coords;
        const resolved = await censusProgressService.resolveCoordinates(latitude, longitude);

        if (resolved) {
          handleSelectLocation(`${resolved.district || resolved.state}, ${resolved.state}`);
          setLocationStatusNotice(`Location detected: ${resolved.district || resolved.state}, ${resolved.state}`);
        } else {
          setLocationStatusNotice(t.schedule.locationAccessDenied || 'Location access was not provided. You can search for your location manually.');
        }
      },
      (error) => {
        setIsLocating(false);
        // Explicit required wording for permission denied
        if (error.code === error.PERMISSION_DENIED) {
          setLocationStatusNotice(t.schedule.locationAccessDenied || 'Location access was not provided. You can search for your location manually.');
        } else {
          setLocationStatusNotice(t.schedule.locationUnavailable || 'Unable to retrieve location. Please search manually.');
        }
      },
      { timeout: 8000, enableHighAccuracy: false }
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Search & Location Bar */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          
          {/* Location Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={t.schedule.searchLocationPlaceholder || "Search State, UT, District or City (e.g. Pune, Maharashtra)..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all"
            />

            {/* Autocomplete Dropdown */}
            {isSearching && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto divide-y divide-slate-100">
                {searchResults.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectLocation(`${item.name}, ${item.state}`)}
                    className="w-full p-3 text-left hover:bg-orange-50 flex items-center justify-between text-xs cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <span className="text-slate-500 text-[11px] ml-1.5">{item.state}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Use My Location Button */}
          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={isLocating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm transition-all cursor-pointer shrink-0 disabled:opacity-50"
          >
            <Navigation className={`w-3.5 h-3.5 text-orange-600 ${isLocating ? 'animate-spin' : ''}`} />
            <span>{isLocating ? (t.schedule.locating || 'Locating...') : (t.schedule.useMyLocation || 'Use my location')}</span>
          </button>

        </div>

        {/* Location Notice (Permission denied / feedback) */}
        {locationStatusNotice && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{locationStatusNotice}</span>
          </div>
        )}
      </div>

      {/* Main Map & Location Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Interactive India Vector Map Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">
                {t.schedule.interactiveMapTitle || 'Interactive India Census Map'}
              </h3>
              <p className="text-xs text-slate-500">
                {t.schedule.interactiveMapSubtitle || 'Click any State or Union Territory to inspect regional schedule & district progress'}
              </p>
            </div>
            <span className="text-[11px] font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              {INDIA_MAP_NODES.find(n => n.code === selectedStateCode)?.name || 'India'}
            </span>
          </div>

          {/* Interactive SVG Canvas */}
          <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden flex items-center justify-center p-2">
            <svg
              viewBox="0 0 380 480"
              className="w-full h-full max-h-full transition-all duration-300 drop-shadow-xs"
            >
              {/* Outer India Regional Boundaries */}
              <g id="states-layer">
                {INDIA_MAP_NODES.map((node) => {
                  const isSelected = selectedStateCode === node.code;
                  const isHovered = hoveredStateCode === node.code;

                  return (
                    <g key={node.code}>
                      <path
                        d={node.path}
                        onClick={() => handleStateNodeClick(node)}
                        onMouseEnter={() => setHoveredStateCode(node.code)}
                        onMouseLeave={() => setHoveredStateCode(null)}
                        className={`transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'fill-orange-200 stroke-orange-600 stroke-[2.5]'
                            : isHovered
                            ? 'fill-orange-100 stroke-orange-400 stroke-2'
                            : 'fill-white stroke-slate-300 stroke-[1.2] hover:fill-orange-50'
                        }`}
                      />
                      
                      {/* State Label */}
                      <text
                        x={node.labelX}
                        y={node.labelY}
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight={isSelected ? 'bold' : '600'}
                        className={`pointer-events-none select-none transition-colors ${
                          isSelected ? 'fill-orange-950 font-bold' : 'fill-slate-600'
                        }`}
                      >
                        {node.code}
                      </text>

                      {/* Map Pin on Selected State */}
                      {isSelected && (
                        <g transform={`translate(${node.labelX - 6}, ${node.labelY - 18})`}>
                          <circle cx="6" cy="6" r="5" fill="#ea580c" />
                          <circle cx="6" cy="6" r="8" fill="#ea580c" opacity="0.3" className="animate-ping" />
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Map Legend Floating Tag */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg px-2.5 py-1.5 text-[10px] text-slate-600 shadow-xs flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-orange-200 border border-orange-500"></span>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-white border border-slate-300"></span>
                <span>Regions</span>
              </div>
            </div>
          </div>

          {/* District Quick Chips Bar */}
          {availableDistricts.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>{t.schedule.districtsInState || 'Districts in'} {progressRecord?.state}:</span>
                <span className="text-[11px] text-slate-400 font-normal">{availableDistricts.length} Verified Districts</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {availableDistricts.map((d) => {
                  const isSelected = selectedDistrictName === d.name;
                  return (
                    <button
                      key={d.id}
                      onClick={() => handleDistrictChipClick(d)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white shadow-xs font-semibold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                      }`}
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Selected Location Progress & Information Dossier (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {progressRecord ? (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-6">
              
              {/* Header: Location & Directorate */}
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {progressRecord.district || progressRecord.location}
                  </h3>
                </div>
                <div className="text-xs text-slate-500 pl-7 font-medium">
                  {progressRecord.state} • Region Code: {progressRecord.stateCode}
                </div>
                {progressRecord.regionalDirectorate && (
                  <div className="text-[11px] text-slate-400 pl-7 flex items-center gap-1 pt-0.5">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span>{progressRecord.regionalDirectorate}</span>
                  </div>
                )}
              </div>

              {/* Statutory Phase & Status Indicator */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.schedule.currentPhaseLabel || 'Statutory Census Phase'}
                </div>
                <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-100 space-y-1">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>{progressRecord.phase}</span>
                  </div>
                  <div className="text-xs text-orange-950 font-medium">
                    Status: {progressRecord.status}
                  </div>
                </div>
              </div>

              {/* Official Progress Data Availability State (CRITICAL HONESTY PANEL) */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.schedule.progressMetricsLabel || 'Live Census Fieldwork Progress'}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>{t.schedule.progressUnavailableTitle || 'Official progress data is not currently available through CensusSaathi.'}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {t.schedule.progressUnavailableDesc || 'Live enumeration metrics (households enumerated, active enumerator counts, and completion percentages) have not been published by the Office of the Registrar General & Census Commissioner, India (ORGI). CensusSaathi does not generate simulated progress numbers.'}
                  </p>
                </div>
              </div>

              {/* Historical Census Data (2011 Verified Benchmark) */}
              {progressRecord.historical2011Pop && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>{t.schedule.historicalCensusTitle || 'HISTORICAL CENSUS DATA'}</span>
                    <span className="text-[10px] text-slate-400">2011 Census Archive</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Population</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{progressRecord.historical2011Pop}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Literacy</div>
                      <div className="text-sm font-bold text-emerald-700 mt-0.5">{progressRecord.historical2011Literacy || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Sex Ratio</div>
                      <div className="text-sm font-bold text-sky-700 mt-0.5">{progressRecord.historical2011SexRatio || 'N/A'}</div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-normal pl-1">
                    {t.schedule.historicalCensusDisclaimer || 'Historical Census data — not a live population count.'}
                  </p>
                </div>
              )}

              {/* Trust Boundary & Legal Citations */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  {t.schedule.trustBoundary || 'CensusSaathi provides citizen information and guidance. It is not an official Government of India Census system.'}
                </p>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <SourceBadge sourceId="ORGI" size="sm" />

                  <a
                    href="https://censusindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                  >
                    <span>{t.schedule.viewOfficialPortal || 'Official Census Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center text-slate-400">
              Select a location to view schedule and progress details.
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
