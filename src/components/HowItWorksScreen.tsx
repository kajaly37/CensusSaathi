import React from 'react';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  ExternalLink, 
  ArrowRight, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';
import type { NavTab } from './Navbar';

interface HowItWorksScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const HowItWorksScreen: React.FC<HowItWorksScreenProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const flowSteps = [
    {
      stepNumber: 1,
      title: t.howItWorks?.step1Title || 'Discover Census Information',
      desc: t.howItWorks?.step1Desc || 'Understand the purpose, decennial significance, and statutory background of the upcoming Census 2027.',
      icon: Compass,
      actionLabel: 'Explore Overview',
      actionTab: 'home' as NavTab,
      badge: 'Step 1 • Discover',
    },
    {
      stepNumber: 2,
      title: t.howItWorks?.step2Title || 'Select Your Location',
      desc: t.howItWorks?.step2Desc || 'Use our interactive map or location search (e.g. Pune, Maharashtra) to check regional schedules, directorates, and notification windows.',
      icon: MapPin,
      actionLabel: 'Open Map & Schedule',
      actionTab: 'schedule' as NavTab,
      badge: 'Step 2 • Location',
    },
    {
      stepNumber: 3,
      title: t.howItWorks?.step3Title || 'Understand Census Phases',
      desc: t.howItWorks?.step3Desc || 'Learn the procedural difference between Phase 1 (Houselisting & Housing Census) and Phase 2 (Population Enumeration), including digital self-enumeration.',
      icon: Layers,
      actionLabel: 'View Self-Enumeration Steps',
      actionTab: 'self-enumeration' as NavTab,
      badge: 'Step 3 • Phases',
    },
    {
      stepNumber: 4,
      title: t.howItWorks?.step4Title || 'Ask CensusSaathi GenAI',
      desc: t.howItWorks?.step4Desc || 'Ask questions in your preferred Indian language. Our AI is strictly grounded on official notifications and never fabricates live Census statistics.',
      icon: Sparkles,
      actionLabel: 'Chat with AI Assistant',
      actionTab: 'ask-ai' as NavTab,
      badge: 'Step 4 • AI Guidance',
    },
    {
      stepNumber: 5,
      title: t.howItWorks?.step5Title || 'Verify Census Claims & Myths',
      desc: t.howItWorks?.step5Desc || 'Cross-check rumors regarding Aadhaar mandates, biometrics, or fees. Review legal confidentiality guarantees under Section 15 of The Census Act, 1948.',
      icon: ShieldCheck,
      actionLabel: 'Check Privacy & Law',
      actionTab: 'privacy' as NavTab,
      badge: 'Step 5 • Verification',
    },
    {
      stepNumber: 6,
      title: t.howItWorks?.step6Title || 'Explore Historical Census Data',
      desc: t.howItWorks?.step6Desc || 'Inspect verified historical Census data from 1951 to 2011 across population growth, literacy progression, and gender ratios without simulated figures.',
      icon: BarChart3,
      actionLabel: 'Open Data Explorer',
      actionTab: 'data-explorer' as NavTab,
      badge: 'Step 6 • Archives',
    },
    {
      stepNumber: 7,
      title: t.howItWorks?.step7Title || 'Access Official Census Services',
      desc: t.howItWorks?.step7Desc || 'When official gazette notifications are published, follow direct links to the official government portal (censusindia.gov.in) to participate safely.',
      icon: ExternalLink,
      actionLabel: 'Official Portal',
      isExternal: true,
      url: 'https://censusindia.gov.in/',
      badge: 'Step 7 • Official Participation',
    },
  ];

  return (
    <div className="w-full bg-stitch-mesh py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <section className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 font-semibold text-xs uppercase tracking-wider">
            <span>{t.howItWorks?.badge || 'Platform Workflow Guide'}</span>
            <SourceBadge sourceId="ORGI" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks?.title || 'How CensusSaathi Works'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {t.howItWorks?.subtitle || 'A simple, verified citizen guidance journey to help you understand and navigate the upcoming Census with clarity and confidence.'}
          </p>
          
          {/* Statutory Boundary Notice */}
          <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] sm:text-xs text-amber-900 text-center max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold">Independent Citizen Platform:</span>{' '}
            {t.common.disclaimer}
          </div>
        </section>

        {/* The 7-Step User Flow */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.howItWorks?.stepsTitle || 'The 7-Step CensusSaathi Experience'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              From discovering basic facts to verifying official announcements
            </p>
          </div>

          <div className="space-y-4">
            {flowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.stepNumber}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-orange-200 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number Circle */}
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      {step.stepNumber}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {step.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                    {step.isExternal ? (
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        <span>{step.actionLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onNavigate(step.actionTab!)}
                        className="inline-flex items-center justify-center gap-1.5 w-full md:w-auto px-4 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all hover:scale-[1.01] cursor-pointer"
                      >
                        <Icon className="w-3.5 h-3.5 text-orange-300" />
                        <span>{step.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Core Principles & Trust Boundaries */}
        <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-orange-600" />
              <span>{t.howItWorks?.trustTitle || 'Our Core Principles & Guardrails'}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              What CensusSaathi does — and what it strictly does not do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Collection of Official Responses</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                CensusSaathi is exclusively an information and education tool. It never asks for, records, or transmits official Census responses. Official responses can only be submitted to authorized government enumerators or on the official government portal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Fabricated or Simulated Statistics</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Because official live fieldwork numbers for Census 2027 have not been publicly issued by ORGI, CensusSaathi explicitly displays an unavailable state rather than showing fake progress percentages or mock enumerator numbers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strict Grounding & Statutory Citations</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All guidance on timelines, self-enumeration steps, and data privacy references authoritative public sources: The Census Act 1948, The Census Rules 1990, and ORGI annual gazettes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Equal Access Across 11 Indian Languages</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Census guidance is available in English, Hindi, Marathi, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Punjabi, and Odia to ensure linguistic accessibility for citizens across every State and Union Territory.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
