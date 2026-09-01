import React from 'react';
import { 
  FileText, 
  Calendar, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Shield,
  Globe,
  Info
} from 'lucide-react';
import type { NavTab } from './Navbar';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-stitch-mesh py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-4">
          
          {/* Badge: Citizen Information Guide */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
            <Info className="w-3 h-3 text-slate-500" />
            <span>{t.common.guideBadge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            {t.home.heroTitle} <span className="text-[#9A3412]">{t.home.heroTitleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.home.heroSubtitle}
          </p>

          {/* Trust Disclaimer Notice */}
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium max-w-xl mx-auto">
            {t.common.disclaimer}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('self-enumeration')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#9A3412] hover:bg-[#832c0f] text-white text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.home.exploreGuideBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('schedule')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>{t.home.viewTimelineBtn}</span>
            </button>
          </div>

          {/* Stats Metrics Bar */}
          <div className="max-w-xl mx-auto mt-10 pt-6">
            <div className="grid grid-cols-3 divide-x divide-slate-200 bg-white/80 backdrop-blur-sm rounded-xl py-3 border border-slate-100 shadow-sm">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.home.stats.phasesCount}</div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.home.stats.phasesLabel}</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.home.stats.languagesCount}</div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.home.stats.languagesLabel}</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.home.stats.modeCount}</div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.home.stats.modeLabel}</div>
              </div>
            </div>
            <div className="pt-2 flex justify-center">
              <SourceBadge sourceId="ORGI" customText={t.home.stats.sourceNote} size="sm" />
            </div>
          </div>

        </section>

        {/* Essential Services Section */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t.home.essentialServicesTitle}
            </h2>
            <SourceBadge sourceId="ORGI" size="sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Card 1: Understand Census */}
            <div 
              onClick={() => onNavigate('how-it-works')}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.home.cards.understandTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t.home.cards.understandDesc}
                </p>
              </div>
            </div>

            {/* Card 2: My Schedule */}
            <div 
              onClick={() => onNavigate('schedule')}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.home.cards.scheduleTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t.home.cards.scheduleDesc}
                </p>
              </div>
            </div>

            {/* Card 3: Self-Enumeration */}
            <div 
              onClick={() => onNavigate('self-enumeration')}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.home.cards.selfEnumTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t.home.cards.selfEnumDesc}
                </p>
              </div>
            </div>

            {/* Card 4: Ask CensusSaathi AI (DARK CARD) */}
            <div 
              onClick={() => onNavigate('ask-ai')}
              className="bg-[#0f172a] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-slate-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.home.cards.askAiTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.home.cards.askAiDesc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                <span>{t.home.cards.askAiBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 5: Verify Information */}
            <div 
              onClick={() => onNavigate('how-it-works')}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.home.cards.verifyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t.home.cards.verifyDesc}
                </p>
              </div>
            </div>

            {/* Card 6: Explore Census Data */}
            <div 
              onClick={() => onNavigate('data-explorer')}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.home.cards.dataTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t.home.cards.dataDesc}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Empowering Citizens with Data */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Graphic / Dashboard Preview Card */}
            <div 
              onClick={() => onNavigate('schedule')}
              className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden border border-slate-800 shadow-inner cursor-pointer hover:border-slate-700 transition-colors group"
              title="Click to explore interactive location map"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                <span className="font-semibold text-slate-200">{t.common.appName}</span>
                <div className="flex items-center gap-3">
                  <span className="group-hover:text-orange-400 transition-colors">Explore Interactive Map →</span>
                </div>
              </div>

              {/* Simulated Demographic Dashboard Card */}
              <div className="space-y-4 py-2">
                <div className="text-xs font-semibold text-slate-300">{t.home.dashboardTitle}</div>
                
                <div className="relative h-44 sm:h-52 bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full opacity-70" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="90" r="60" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="150" cy="90" r="35" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
                    <path d="M 60 120 Q 150 40 240 100" stroke="#fb923c" strokeWidth="2" fill="none" />
                    <circle cx="70" cy="115" r="4" fill="#fb923c" />
                    <circle cx="150" cy="65" r="5" fill="#38bdf8" />
                    <circle cx="230" cy="95" r="4" fill="#10b981" />
                    <path d="M 140 40 L 155 35 L 170 50 L 165 70 L 180 90 L 175 120 L 150 150 L 135 125 L 120 90 L 130 60 Z" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" fill="rgba(56, 189, 248, 0.05)" />
                  </svg>
                  
                  {/* Status Indicator overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-full px-3 py-1 flex items-center gap-2 text-[11px] text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{t.home.dashboardBadge}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Information & Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t.home.empowerTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.home.empowerDesc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>{t.home.pillarZeroData}</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>{t.home.pillarMultilingual}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
