import React from 'react';
import { 
  Lock, 
  FileLock2, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface PrivacyAndRightsProps {
  currentLang: LanguageCode;
}

export const PrivacyAndRights: React.FC<PrivacyAndRightsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const willAskList = [
    "Predominant material of roof, wall, and floor",
    "Main source of drinking water and location",
    "Availability of electricity / lighting source",
    "Type of latrine and drainage connection",
    "Cooking fuel used (LPG/PNG, Firewood, Biogas)",
    "Electronic assets (TV, Internet, Laptop, Mobile)",
    "Family member names, ages, and dates of birth",
    "Mother tongue and other spoken languages",
    "Highest educational level attained",
    "Occupation, industry, and economic worker status"
  ];

  const willNeverAskList = [
    "Bank Account Numbers or IFSC codes",
    "Debit / Credit Card CVV or ATM PINs",
    "UPI PINs or Payment App passwords",
    "SMS OTPs or One-Time Passwords",
    "Biometric Fingerprint or Iris Scans",
    "Original Land Registration Deeds or Sale Papers",
    "Passports or Physical Citizenship Certificates",
    "Income Tax returns or Salary slip slips"
  ];

  return (
    <section id="privacy" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.privacy.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.privacy.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.privacy.subtitle}
          </p>
        </div>

        {/* Section 15 Legal Protection Hero Card */}
        <div className="bg-gradient-to-br from-slate-900 via-ashoka-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 border border-ashoka-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Scale className="w-3.5 h-3.5" />
                <span>THE CENSUS ACT, 1948 (SECTION 15)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Statutory Immunity & Non-Disclosure Guarantee
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                By Parliament law, all answers given by you to a Census enumerator or in the self-enumeration app are <strong className="text-white">strictly confidential</strong>.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-emerald-400 mb-1">Immune from Courts</div>
                  <div className="text-slate-300">Census slips cannot be inspected or produced as evidence in any judicial court.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-sky-400 mb-1">No Tax Sharing</div>
                  <div className="text-slate-300">Income Tax and GST authorities have zero access to individual census data.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-saffron-400 mb-1">Only Aggregates</div>
                  <div className="text-slate-300">Published reports contain only anonymized, macro-level statistical tables.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-md text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mx-auto flex items-center justify-center">
                <FileLock2 className="w-8 h-8" />
              </div>
              <div className="font-bold text-base text-white">Section 11 & 15 Penalties</div>
              <p className="text-xs text-slate-300">
                Any enumerator or official who leaks or discloses personal census answers faces imprisonment and financial fines under the Census Act 1948.
              </p>
            </div>

          </div>
        </div>

        {/* Side-by-Side Clarity Matrix: Will Ask vs. Will NEVER Ask */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Will Ask */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-emerald-950 font-display">
                  {t.privacy.willAskTitle}
                </h3>
                <p className="text-xs text-emerald-700">Official Standard Questionnaire Topics</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {willAskList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Will NEVER Ask */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/60 border border-rose-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-rose-200">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-rose-950 font-display">
                  {t.privacy.willNeverAskTitle}
                </h3>
                <p className="text-xs text-rose-700">Red Flags & Fraud Warning Signals</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {willNeverAskList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <XCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-rose-100/70 border border-rose-300 text-xs text-rose-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              <span>
                If anyone demands any item listed above, refuse immediately and dial National Cybercrime Helpline <strong>1930</strong>.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
