import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Bot, 
  ShieldAlert, 
  ArrowRight, 
  Calendar,
  Lock,
  Smartphone,
  FileCheck
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface HeroProps {
  currentLang: LanguageCode;
  onOpenSandbox: () => void;
  onOpenChecklist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenSandbox, onOpenChecklist }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-ashoka-950 to-slate-900 text-white pt-10 pb-16 sm:pb-24">
      {/* Background Decorative Mesh & Tricolor Aura */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-saffron-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-ashoka-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Civic Companion Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ashoka-800/80 border border-ashoka-600/50 backdrop-blur-md text-xs font-semibold text-ashoka-200">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse"></span>
            <span>CENSUS 2027 CITIZEN GUIDANCE INITIATIVE</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-semibold text-emerald-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Zero Data Stored • 100% Private Sandbox</span>
          </div>
        </div>

        {/* Main Headline & Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            {t.hero.mainHeading}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            {t.hero.subHeading}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenSandbox}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-saffron-600/30 hover:scale-[1.02] transition-all"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>{t.hero.practiceBtn}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href="#schedule"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <MapPin className="w-5 h-5 text-ashoka-400" />
            <span>{t.hero.findStateBtn}</span>
          </a>

          <a
            href="#saathi-ai"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-ashoka-900/90 hover:bg-ashoka-800/90 border border-ashoka-600/60 text-ashoka-100 font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <Bot className="w-5 h-5 text-ashoka-300" />
            <span>{t.hero.askAiBtn}</span>
          </a>

          <button
            onClick={onOpenChecklist}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-600/50 text-emerald-200 font-semibold text-sm sm:text-base backdrop-blur-md transition-all"
          >
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <span>Checklist Generator</span>
          </button>
        </div>

        {/* 4 Interactive Feature Launch Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: 2 Phases */}
          <a
            href="#phases"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
              The Two Phases
            </h2>
            <p className="text-xs text-slate-300 mt-1.5 leading-normal">
              Understand the difference between Houselisting (Phase 1) and Population Counting (Phase 2).
            </p>
          </a>

          {/* Card 2: Self-Enumeration */}
          <a
            href="#self-enumeration"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
              Digital Self-Enumeration
            </h2>
            <p className="text-xs text-slate-300 mt-1.5 leading-normal">
              Step-by-step guide to fill your household schedule online and get your reference QR code.
            </p>
          </a>

          {/* Card 3: AI Assistant */}
          <a
            href="#saathi-ai"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
              Saathi AI Assistant
            </h2>
            <p className="text-xs text-slate-300 mt-1.5 leading-normal">
              Ask questions on rent rules, birth registration, languages, and rights in 8 Indian languages.
            </p>
          </a>

          {/* Card 4: MythBuster */}
          <a
            href="#myth-buster"
            className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-white group-hover:text-rose-300 transition-colors">
              Rumor & Myth Fact-Check
            </h2>
            <p className="text-xs text-slate-300 mt-1.5 leading-normal">
              Instant verification of viral claims (e.g. bank details, fine threats, documents).
            </p>
          </a>

        </div>

        {/* Bottom National Key Metric Stats */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-saffron-400 font-display">1.4B+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.citizens}</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">16+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.languages}</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">2</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.phases}</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-display">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.digitalFirst}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
