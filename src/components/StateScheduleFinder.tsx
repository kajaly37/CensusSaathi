import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Calendar, 
  Languages, 
  Phone, 
  TrendingUp, 
  Sparkles, 
  Info
} from 'lucide-react';
import { STATES_SCHEDULE_DATA } from '../data/censusData';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface StateScheduleFinderProps {
  currentLang: LanguageCode;
  onOpenSandbox: () => void;
}

export const StateScheduleFinder: React.FC<StateScheduleFinderProps> = ({ currentLang, onOpenSandbox }) => {
  const [selectedStateId, setSelectedStateId] = useState<string>("MH");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedZone, setSelectedZone] = useState<string>("ALL");

  const t = TRANSLATIONS[currentLang];

  const filteredStates = STATES_SCHEDULE_DATA.filter(state => {
    const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          state.primaryLanguages.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesZone = selectedZone === "ALL" || state.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const selectedState = STATES_SCHEDULE_DATA.find(s => s.id === selectedStateId) || STATES_SCHEDULE_DATA[0];

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.stateFinder.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.stateFinder.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.stateFinder.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-2/3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state, UT, capital or language (e.g. Maharashtra, Hindi, Delhi)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ashoka-600 focus:border-transparent bg-slate-50/50"
              />
            </div>

            {/* Zone Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {['ALL', 'North', 'South', 'East', 'West', 'Central', 'UT'].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedZone === zone
                      ? 'bg-ashoka-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* State Selector Dropdown / Grid & Details Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive States List */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col max-h-[560px]">
            <div className="p-3.5 bg-slate-100/70 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>Select Region ({filteredStates.length} Results)</span>
              <span className="text-[10px] text-slate-500 font-normal">Click to view schedule</span>
            </div>
            
            <div className="overflow-y-auto divide-y divide-slate-100 flex-1 p-2 space-y-1">
              {filteredStates.map((state) => {
                const isSelected = state.id === selectedState.id;
                return (
                  <button
                    key={state.id}
                    onClick={() => setSelectedStateId(state.id)}
                    className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between gap-2 ${
                      isSelected 
                        ? 'bg-ashoka-50 border border-ashoka-300 text-ashoka-900 shadow-xs' 
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm flex items-center gap-1.5">
                        <span>{state.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-normal">
                          {state.zone}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Cap: {state.capital} • {state.primaryLanguages[0]}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] font-bold text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded border border-saffron-200">
                        {state.phase1Window.split('–')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredStates.length === 0 && (
                <div className="p-8 text-center text-xs text-slate-400">
                  No states found matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>

          {/* Right: Selected State Comprehensive Dossier */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-gov space-y-6">
            
            {/* Header: State Name & Capital */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-saffron-700 bg-saffron-100 px-2.5 py-0.5 rounded-full">
                    {selectedState.zone} Zone • State/UT Code: {selectedState.id}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
                  {selectedState.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Administrative Capital: <span className="font-semibold text-slate-700">{selectedState.capital}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenSandbox}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-transform flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Practice Form for {selectedState.name}</span>
                </button>
              </div>
            </div>

            {/* Operational Schedules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phase 1 Card */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-saffron-600" />
                    <span>Phase 1 (Houselisting)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-200/70 text-amber-900 text-[10px]">
                    30-45 Days
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  {selectedState.phase1Window}
                </div>
                <p className="text-xs text-amber-900 leading-normal">
                  House listing, dwelling structure records & household amenities enumeration.
                </p>
              </div>

              {/* Phase 2 Card */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-ashoka-800 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-ashoka-600" />
                    <span>Phase 2 (Population)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-200/70 text-ashoka-900 text-[10px]">
                    National Window
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  {selectedState.phase2Window}
                </div>
                <p className="text-xs text-ashoka-900 leading-normal">
                  Individual demographic, socio-cultural, educational & occupation count.
                </p>
              </div>

            </div>

            {/* Languages & Regional Helpdesk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-ashoka-600" />
                  <span>{t.stateFinder.languagesSupported}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedState.primaryLanguages.map((lang, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{t.stateFinder.helpline}</span>
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {selectedState.helplinePlaceholder}
                </div>
                <div className="text-[11px] text-slate-500">
                  Operated in official state languages during enumeration hours (9 AM – 6 PM).
                </div>
              </div>

            </div>

            {/* Demographic Benchmarks: 2011 vs 2027 Projections */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-ashoka-950 text-white space-y-3">
              <div className="text-xs font-bold text-ashoka-300 uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-saffron-400" />
                <span>State Demographic Benchmarks & Growth Projections</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                <div>
                  <div className="text-[11px] text-slate-400">2011 Census Pop</div>
                  <div className="text-base sm:text-lg font-bold text-white font-display">
                    {selectedState.historical2011Pop}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">2027 Est. Pop</div>
                  <div className="text-base sm:text-lg font-bold text-saffron-400 font-display">
                    {selectedState.est2027Pop}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">2011 Literacy</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400 font-display">
                    {selectedState.literacy2011}%
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">2011 Sex Ratio</div>
                  <div className="text-base sm:text-lg font-bold text-sky-400 font-display">
                    {selectedState.sexRatio2011} <span className="text-xs font-normal text-slate-400">/ 1k M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Regional Notes & Guidelines */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
              <Info className="w-4 h-4 text-ashoka-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Regional Deployment Notes: </span>
                <span>{selectedState.specialNotes}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
