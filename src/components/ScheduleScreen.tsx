import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Building
} from 'lucide-react';
import type { NavTab } from './Navbar';
import { STATES_SCHEDULE_DATA } from '../data/states';
import type { StateScheduleInfo } from '../data/states';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';
import { IndiaProgressMap } from './IndiaProgressMap';
import type { CensusProgressRecord } from '../services/censusProgressService';

interface ScheduleScreenProps {
  onNavigate?: (tab: NavTab) => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = () => {
  const [selectedStateName, setSelectedStateName] = useState<string>('Maharashtra');
  const { t } = useLanguage();

  const stateData: StateScheduleInfo | undefined = STATES_SCHEDULE_DATA[selectedStateName] || STATES_SCHEDULE_DATA['Maharashtra'];
  const allStateNames = Object.keys(STATES_SCHEDULE_DATA).filter(name => name !== 'National Timeline Overview');

  const handleLocationSelectedFromMap = (locationRecord: CensusProgressRecord) => {
    if (STATES_SCHEDULE_DATA[locationRecord.state]) {
      setSelectedStateName(locationRecord.state);
    }
  };

  return (
    <div className="w-full bg-stitch-mesh py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 font-semibold text-xs uppercase tracking-wider">
            <span>{t.schedule.badge}</span>
            <SourceBadge sourceId="ORGI" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.schedule.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {t.schedule.subtitle}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium max-w-lg mx-auto">
            {t.common.disclaimer}
          </p>
        </section>

        {/* Location-Based Census Progress Map Component */}
        <section className="space-y-4">
          <IndiaProgressMap onLocationSelected={handleLocationSelectedFromMap} />
        </section>

        {/* State/UT Selector Section */}
        <section className="space-y-6 pt-4 border-t border-slate-200">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3 max-w-3xl mx-auto">
            <label 
              htmlFor="state-select" 
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
            >
              {t.schedule.selectLabel}
            </label>

            <div className="relative">
              <select
                id="state-select"
                value={selectedStateName}
                onChange={(e) => setSelectedStateName(e.target.value)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all cursor-pointer"
              >
                <option value="National Timeline Overview">
                  {t.schedule.allIndiaOption}
                </option>
                {allStateNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Detailed State Dossier Card */}
          {stateData ? (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 max-w-4xl mx-auto">
              
              {/* Header of Card */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {stateData.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 pl-7">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{stateData.regionalDirectorate}</span>
                  </div>
                </div>

                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>{stateData.officialNotificationStatus}</span>
                </div>
              </div>

              {/* Timelines and Operational Phases */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Phase 1 Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {t.schedule.phase1Title}
                  </div>
                  <div className="text-xs font-semibold text-slate-900">
                    {stateData.houselistingStatus}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Expected: {stateData.expectedHouselistingWindow}
                  </div>
                </div>

                {/* Phase 2 Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {t.schedule.phase2Title}
                  </div>
                  <div className="text-xs font-semibold text-slate-900">
                    {stateData.populationEnumerationStatus}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Expected: {stateData.expectedPopEnumWindow}
                  </div>
                </div>

                {/* Self-Enumeration Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {t.schedule.selfEnumTitle}
                  </div>
                  <div className="text-xs font-semibold text-slate-900">
                    {stateData.selfEnumerationStatus}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Expected: {stateData.expectedSelfEnumWindow}
                  </div>
                </div>

              </div>

              {/* Regional Notes & Context */}
              <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-950">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span>{t.schedule.notesTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {stateData.regionalNotes}
                </p>
              </div>

              {/* Footer with Verified Citation */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-slate-600">
                    Official Source Reference:
                  </span>
                  <SourceBadge sourceId={stateData.sourceId} size="sm" />
                </div>

                <a
                  href="https://censusindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                >
                  <span>{t.schedule.viewOfficialPortal}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center text-sm text-red-700">
              {t.schedule.errorNotFound}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
