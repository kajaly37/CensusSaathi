import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { CENSUS_PHASES } from '../data/censusData';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface PhasesOverviewProps {
  currentLang: LanguageCode;
  onOpenSandbox: () => void;
}

export const PhasesOverview: React.FC<PhasesOverviewProps> = ({ currentLang, onOpenSandbox }) => {
  const [activePhaseId, setActivePhaseId] = useState<number>(1);
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState<number | null>(0);

  const t = TRANSLATIONS[currentLang];
  const activePhase = CENSUS_PHASES.find(p => p.id === activePhaseId) || CENSUS_PHASES[0];

  return (
    <section id="phases" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ashoka-100 text-ashoka-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>{t.phasesSection.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.phasesSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.phasesSection.subtitle}
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-2xl mx-auto">
          <button
            onClick={() => {
              setActivePhaseId(1);
              setExpandedCategoryIndex(0);
            }}
            className={`w-full sm:w-1/2 p-4 rounded-2xl border transition-all text-left flex items-center gap-4 ${
              activePhaseId === 1
                ? 'bg-gradient-to-r from-amber-50 to-saffron-50 border-saffron-500 shadow-md ring-2 ring-saffron-400/30'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activePhaseId === 1 ? 'bg-saffron-500 text-white shadow-md' : 'bg-slate-200 text-slate-600'
            }`}>
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-saffron-700">STAGE 1</div>
              <div className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                Houselisting & Housing Census
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">31 Structured Questions</div>
            </div>
          </button>

          <button
            onClick={() => {
              setActivePhaseId(2);
              setExpandedCategoryIndex(0);
            }}
            className={`w-full sm:w-1/2 p-4 rounded-2xl border transition-all text-left flex items-center gap-4 ${
              activePhaseId === 2
                ? 'bg-gradient-to-r from-blue-50 to-ashoka-50 border-ashoka-600 shadow-md ring-2 ring-ashoka-400/30'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activePhaseId === 2 ? 'bg-ashoka-700 text-white shadow-md' : 'bg-slate-200 text-slate-600'
            }`}>
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ashoka-700">STAGE 2</div>
              <div className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                Population Enumeration
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">29 Individual Demographic Items</div>
            </div>
          </button>
        </div>

        {/* Phase Details Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Phase Description & Key Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 mb-3 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-ashoka-600" />
                  <span>{activePhase.timelineEstimate}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {activePhase.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600 italic">
                  "{activePhase.tagline}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Summary</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activePhase.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Why this Phase Matters</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {activePhase.whyItMatters}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenSandbox}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4 text-saffron-400" />
                  <span>Preview {activePhase.shortName} in Practice Simulator</span>
                </button>
              </div>

            </div>

            {/* Right Col: Interactive Question Categories Accordion */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Questionnaire Categories ({activePhase.keyQuestionCount} Questions Total)
                </div>
                <span className="text-xs text-ashoka-700 font-semibold bg-ashoka-50 px-2 py-0.5 rounded-full border border-ashoka-200">
                  Official Standard Framework
                </span>
              </div>

              {activePhase.categories.map((category, catIdx) => {
                const isExpanded = expandedCategoryIndex === catIdx;
                return (
                  <div
                    key={catIdx}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isExpanded 
                        ? 'bg-white border-ashoka-400 shadow-sm' 
                        : 'bg-white hover:bg-slate-100/80 border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedCategoryIndex(isExpanded ? null : catIdx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isExpanded ? 'bg-ashoka-700 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {catIdx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900">
                            {category.title}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {category.description} ({category.questions.length} questions)
                          </div>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-ashoka-700 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Specific Questions Asked in this Category:
                        </div>
                        <ul className="space-y-2">
                          {category.questions.map((q, qIdx) => (
                            <li key={qIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-2 shrink-0"></span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Comparison Table: Phase 1 vs Phase 2 Summary */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-x-auto">
          <h4 className="font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-ashoka-700" />
            <span>Quick Comparative Reference: Phase 1 vs. Phase 2</span>
          </h4>
          <table className="w-full text-xs sm:text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="p-3 font-bold">Feature</th>
                <th className="p-3 font-bold text-saffron-800 bg-saffron-50/70">Phase 1: Houselisting</th>
                <th className="p-3 font-bold text-ashoka-800 bg-ashoka-50/70">Phase 2: Population Enumeration</th>
              </tr>
            </thead>
            <tbody className="divide-y border-slate-100 text-slate-600">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Primary Focus</td>
                <td className="p-3">House structures, amenities, water, toilets, assets</td>
                <td className="p-3">Every individual resident's socio-economic & demographic profile</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Unit of Observation</td>
                <td className="p-3">The Census House and Living Unit</td>
                <td className="p-3">The Individual Human Being (All age groups)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Individual Names Asked?</td>
                <td className="p-3">Only Head of Household's name</td>
                <td className="p-3">Full name of every residing family member</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Digital Self-Enumeration</td>
                <td className="p-3">Available during Phase 1 state window</td>
                <td className="p-3">Available during Phase 2 national window</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Legal Protection</td>
                <td className="p-3">Section 15, Census Act 1948 (Absolute Confidentiality)</td>
                <td className="p-3">Section 15, Census Act 1948 (Absolute Confidentiality)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
