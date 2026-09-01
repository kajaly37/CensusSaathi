import React, { useState } from 'react';
import { 
  HelpCircle, 
  Calendar, 
  FileCheck, 
  ExternalLink, 
  FileEdit, 
  Key, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  Check,
  CheckCircle2
} from 'lucide-react';
import type { NavTab } from './Navbar';
import { SELF_ENUMERATION_STEPS } from '../data/selfEnumeration';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

interface SelfEnumerationScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const SelfEnumerationScreen: React.FC<SelfEnumerationScreenProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { t } = useLanguage();

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const handleNext = () => {
    if (activeStepIndex < SELF_ENUMERATION_STEPS.length - 1) {
      const nextIdx = activeStepIndex + 1;
      setActiveStepIndex(nextIdx);
      if (!completedSteps.includes(activeStepIndex)) {
        setCompletedSteps([...completedSteps, activeStepIndex]);
      }
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  // Localized step titles and descriptions from translation dictionary
  const localizedSteps = [
    {
      code: '01',
      title: t.selfEnumeration.steps.step1Title,
      description: t.selfEnumeration.steps.step1Desc,
      badge: t.selfEnumeration.steps.step1Badge,
      icon: HelpCircle,
      sourceId: 'ORGI'
    },
    {
      code: '02',
      title: t.selfEnumeration.steps.step2Title,
      description: t.selfEnumeration.steps.step2Desc,
      badge: null,
      icon: Calendar,
      sourceId: 'ORGI',
      hasScheduleAction: true
    },
    {
      code: '03',
      title: t.selfEnumeration.steps.step3Title,
      description: t.selfEnumeration.steps.step3Desc,
      badge: null,
      icon: FileCheck,
      sourceId: 'CENSUS_ACT_1948',
      check1: t.selfEnumeration.steps.step3Check1,
      check2: t.selfEnumeration.steps.step3Check2
    },
    {
      code: '04',
      title: t.selfEnumeration.steps.step4Title,
      description: t.selfEnumeration.steps.step4Desc,
      badge: null,
      icon: ExternalLink,
      sourceId: 'ORGI',
      hasPortalAction: true
    },
    {
      code: '05',
      title: t.selfEnumeration.steps.step5Title,
      description: t.selfEnumeration.steps.step5Desc,
      badge: t.selfEnumeration.steps.step5Badge,
      icon: FileEdit,
      sourceId: 'ORGI'
    },
    {
      code: '06',
      title: t.selfEnumeration.steps.step6Title,
      description: t.selfEnumeration.steps.step6Desc,
      badge: t.selfEnumeration.steps.step6Badge,
      icon: Key,
      sourceId: 'ORGI'
    }
  ];

  const currentStep = localizedSteps[activeStepIndex];

  return (
    <div className="w-full bg-stitch-mesh py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 font-semibold text-xs uppercase tracking-wider">
            <span>{t.selfEnumeration.badge}</span>
            <SourceBadge sourceId="ORGI" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto">
            {t.selfEnumeration.title}
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {t.selfEnumeration.subtitle}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium max-w-lg mx-auto">
            {t.common.disclaimer}
          </p>
        </section>

        {/* Step Progress Bar Navigator */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>
              {t.selfEnumeration.stepProgress
                .replace('{current}', String(activeStepIndex + 1))
                .replace('{total}', '6')
                .replace('{title}', currentStep.title)}
            </span>
            <span className="text-slate-400 text-[11px]">
              {t.selfEnumeration.guidedProgress.replace('{percent}', String(Math.round(((activeStepIndex + 1) / 6) * 100)))}
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {localizedSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isDone = completedSteps.includes(idx) || idx < activeStepIndex;
              return (
                <button
                  key={step.code}
                  onClick={() => handleStepClick(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-black ring-2 ring-black/20'
                      : isDone
                      ? 'bg-emerald-500 hover:bg-emerald-600'
                      : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  title={`Step ${idx + 1}: ${step.title}`}
                />
              );
            })}
          </div>

          {/* Active Step Quick Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={activeStepIndex === 0}
              className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeStepIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.selfEnumeration.prevBtn}</span>
            </button>

            <div className="flex items-center gap-2">
              <SourceBadge sourceId={currentStep.sourceId} size="sm" />

              {activeStepIndex < 5 ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-black text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                >
                  <span>{t.selfEnumeration.nextBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => handleStepClick(0)}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.selfEnumeration.restartBtn}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Alternating Step-by-Step Zigzag Layout */}
        <div className="relative">
          
          {/* Vertical Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 -translate-x-1/2" />

          <div className="space-y-10 md:space-y-12">
            
            {/* Step 01 (Left) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div 
                onClick={() => handleStepClick(0)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:mr-8 transition-all cursor-pointer ${
                  activeStepIndex === 0 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-400">01</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[0].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[0].description}
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">{localizedSteps[0].badge}</span>
                  <SourceBadge sourceId="ORGI" size="sm" />
                </div>
              </div>

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ring-4 z-10 ${
                activeStepIndex === 0 ? 'bg-orange-500 ring-orange-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div className="hidden md:block" />
            </div>

            {/* Step 02 (Right) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="hidden md:block" />

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ring-4 z-10 ${
                activeStepIndex === 1 ? 'bg-orange-500 ring-orange-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div 
                onClick={() => handleStepClick(1)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:ml-8 transition-all cursor-pointer ${
                  activeStepIndex === 1 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-bold text-slate-400">02</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[1].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[1].description}
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('schedule');
                    }}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>{t.selfEnumeration.checkScheduleBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <SourceBadge sourceId="ORGI" size="sm" />
                </div>
              </div>
            </div>

            {/* Step 03 (Left) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div 
                onClick={() => handleStepClick(2)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:mr-8 transition-all cursor-pointer ${
                  activeStepIndex === 2 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-400">03</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[2].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[2].description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3 text-emerald-600" />
                      {localizedSteps[2].check1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                      <Check className="w-3 h-3 text-slate-600" />
                      {localizedSteps[2].check2}
                    </span>
                  </div>
                  <SourceBadge sourceId="CENSUS_ACT_1948" size="sm" />
                </div>
              </div>

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ring-4 z-10 ${
                activeStepIndex === 2 ? 'bg-orange-500 ring-orange-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div className="hidden md:block" />
            </div>

            {/* Step 04 (Right) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="hidden md:block" />

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ring-4 z-10 ${
                activeStepIndex === 3 ? 'bg-orange-500 ring-orange-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div 
                onClick={() => handleStepClick(3)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:ml-8 transition-all cursor-pointer ${
                  activeStepIndex === 3 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-bold text-slate-400">04</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[3].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[3].description}
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <a
                    href="https://censusindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.selfEnumeration.officialPortalBtn}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <SourceBadge sourceId="ORGI" size="sm" />
                </div>
              </div>
            </div>

            {/* Step 05 (Left) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div 
                onClick={() => handleStepClick(4)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:mr-8 transition-all cursor-pointer ${
                  activeStepIndex === 4 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-400">05</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <FileEdit className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[4].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[4].description}
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">{localizedSteps[4].badge}</span>
                  <SourceBadge sourceId="ORGI" size="sm" />
                </div>
              </div>

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ring-4 z-10 ${
                activeStepIndex === 4 ? 'bg-orange-500 ring-orange-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div className="hidden md:block" />
            </div>

            {/* Step 06 (Right) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="hidden md:block" />

              <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ring-4 z-10 ${
                activeStepIndex === 5 ? 'bg-emerald-500 ring-emerald-100' : 'bg-slate-300 ring-slate-100'
              }`} />

              <div 
                onClick={() => handleStepClick(5)}
                className={`bg-white border rounded-2xl p-6 shadow-sm space-y-3 relative md:ml-8 transition-all cursor-pointer ${
                  activeStepIndex === 5 ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Key className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-bold text-slate-400">06</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {localizedSteps[5].title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {localizedSteps[5].description}
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600">{localizedSteps[5].badge}</span>
                  <SourceBadge sourceId="ORGI" size="sm" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Ready to Begin Card */}
        <section className="bg-white border border-slate-200/90 rounded-3xl p-8 text-center space-y-4 max-w-xl mx-auto shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.selfEnumeration.readyCardTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {t.selfEnumeration.readyCardDesc}
          </p>
          <div className="pt-2">
            <a
              href="https://censusindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.common.officialPortalBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Important Advisory Callout */}
        <div className="pt-2">
          <div className="flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs text-slate-500 max-w-2xl mx-auto bg-orange-50/60 border border-orange-100 rounded-xl p-3">
            <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
            <span>
              <strong>{t.common.disclaimer}</strong>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
