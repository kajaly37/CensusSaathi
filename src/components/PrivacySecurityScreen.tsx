import React from 'react';
import { 
  Lock, 
  Shield, 
  CheckCircle, 
  Ban, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Check, 
  X, 
  Landmark, 
  Bot, 
  ArrowRight 
} from 'lucide-react';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

export const PrivacySecurityScreen: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 font-semibold text-xs uppercase tracking-wider">
            <span>{t.privacy.badge}</span>
            <SourceBadge sourceId="CENSUS_ACT_1948" size="sm" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-pre-line">
            {t.privacy.title}
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {t.privacy.subtitle}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium max-w-lg mx-auto">
            {t.common.disclaimer}
          </p>
        </section>

        {/* 4 Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Statutory Confidentiality */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {t.privacy.cards.statutoryTitle}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.privacy.cards.statutoryDesc}
              </p>
            </div>
            <div className="pt-2">
              <SourceBadge sourceId="CENSUS_ACT_1948" size="sm" />
            </div>
          </div>

          {/* Card 2: Security Guidance */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {t.privacy.cards.securityTitle}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.privacy.cards.securityDesc}
              </p>
            </div>
            <div className="pt-2">
              <SourceBadge sourceId="ORGI" size="sm" />
            </div>
          </div>

          {/* Card 3: Verified Sources */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {t.privacy.cards.verifiedTitle}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.privacy.cards.verifiedDesc}
              </p>
            </div>
            <div className="pt-2">
              <SourceBadge sourceId="MHA_ANNUAL_REPORT" size="sm" />
            </div>
          </div>

          {/* Card 4: Zero Personal Data */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <Ban className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {t.privacy.cards.zeroDataTitle}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.privacy.cards.zeroDataDesc}
              </p>
            </div>
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {t.privacy.cards.guaranteeBadge}
              </span>
            </div>
          </div>

        </section>

        {/* Critical Security Reminder Banner */}
        <section className="bg-black text-white rounded-2xl p-5 sm:p-6 flex items-start sm:items-center gap-4 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-white mb-1">
              {t.privacy.securityReminderTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.privacy.securityReminderDesc}
            </p>
          </div>
        </section>

        {/* 2-Column Comparison: Understanding Census Data vs Data at CensusSaathi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left: Understanding Census Data */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-orange-600 rounded-full"></div>
                <h2 className="text-lg font-bold text-slate-900">
                  {t.privacy.understandingCensusTitle}
                </h2>
              </div>
              <SourceBadge sourceId="CENSUS_ACT_1948" size="sm" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.privacy.whyGovtTitle}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {t.privacy.whyGovtDesc}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.privacy.legalConfTitle}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {t.privacy.legalConfDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Data at CensusSaathi */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-5 bg-slate-900 rounded-full"></div>
              <h2 className="text-lg font-bold text-slate-900">
                {t.privacy.dataPolicyTitle}
              </h2>
            </div>

            {/* What we collect */}
            <div className="bg-emerald-50/70 border-l-2 border-emerald-500 rounded-r-xl p-3.5 space-y-1.5">
              <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.privacy.whatWeCollectTitle}</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1 pl-5 list-disc">
                {t.privacy.whatWeCollectList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* What we never collect */}
            <div className="bg-red-50/70 border-l-2 border-red-500 rounded-r-xl p-3.5 space-y-1.5">
              <div className="text-[11px] font-bold text-red-800 uppercase tracking-wider flex items-center gap-1.5">
                <X className="w-3.5 h-3.5 text-red-600" />
                <span>{t.privacy.whatWeNeverTitle}</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1 pl-5 list-disc">
                {t.privacy.whatWeNeverList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </section>

        {/* Section: Official System vs. CensusSaathi */}
        <section className="space-y-6 pt-4 text-center">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.privacy.comparisonTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.privacy.comparisonSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            
            {/* Left Card: Official Census System */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.privacy.officialRoleTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.privacy.officialRoleDesc}
                </p>
              </div>
              <div>
                <SourceBadge sourceId="ORGI" size="sm" />
              </div>
            </div>

            {/* Right Card: CensusSaathi AI (DARK) */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-7 shadow-md flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-300 mb-4 border border-slate-700">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.privacy.saathiRoleTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.privacy.saathiRoleDesc}
                </p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  {t.privacy.saathiRoleBadge}
                </span>
              </div>
            </div>

          </div>

          {/* Action button */}
          <div className="pt-2">
            <a 
              href="https://censusindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{t.privacy.visitOfficialSiteBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
