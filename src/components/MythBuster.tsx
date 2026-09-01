import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  Info
} from 'lucide-react';
import { MYTH_BUSTER_ITEMS } from '../data/censusData';
import { TRANSLATIONS } from '../data/translations';
import type { MythFactItem } from '../data/censusData';
import type { LanguageCode } from '../data/translations';

interface MythBusterProps {
  currentLang: LanguageCode;
}

export const MythBuster: React.FC<MythBusterProps> = ({ currentLang }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLang];

  const categories = ['All', 'Banking & Money', 'Aadhaar & Identity', 'Documents', 'NRC & Politics', 'Fines & Law', 'Self-Enumeration'];

  const filteredItems = MYTH_BUSTER_ITEMS.filter(item => {
    const matchesSearch = item.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.officialFact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyFact = (item: MythFactItem) => {
    const shareText = `🔍 CENSUS 2027 FACT CHECK (via CensusSaathi AI)\n\n` +
      `❌ Rumor / Claim: "${item.claim}"\n` +
      `✅ Official Fact: ${item.officialFact}\n` +
      `📖 Source: ${item.sourceReference}\n` +
      `💡 Citizen Tip: ${item.actionableTip}`;

    navigator.clipboard.writeText(shareText);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="myth-buster" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t.myths.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.myths.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.myths.subtitle}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-10 max-w-4xl mx-auto space-y-4">
          
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.myths.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ashoka-600 bg-slate-50/50"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Myth vs Fact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  
                  {/* Category & Verdict Tags */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 ${
                      item.verdictColor === 'red' 
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : item.verdictColor === 'amber'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}>
                      {item.verdictColor === 'red' ? <XCircle className="w-3.5 h-3.5 text-rose-600" /> : <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      <span>{item.verdict}</span>
                    </span>
                  </div>

                  {/* Viral Claim */}
                  <div>
                    <div className="text-[10px] font-bold uppercase text-rose-500 tracking-wider">
                      VIRAL CLAIM / RUMOR:
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 leading-snug">
                      "{item.claim}"
                    </p>
                  </div>

                  {/* Official Fact */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="text-[10px] font-bold uppercase text-ashoka-700 tracking-wider flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{t.myths.officialVerdict}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.officialFact}
                    </p>
                  </div>

                  {/* Citizen Tip */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900">
                    <strong>Citizen Tip:</strong> {item.actionableTip}
                  </div>

                </div>

                {/* Card Footer: Source citation & Copy Fact */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 italic">
                    Ref: {item.sourceReference}
                  </span>

                  <button
                    onClick={() => handleCopyFact(item)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors text-xs"
                    title="Copy fact check to share on WhatsApp"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied Fact!' : 'Share Fact'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200 max-w-lg mx-auto">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="font-semibold text-sm">No claims found matching "{searchQuery}".</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "Aadhaar", "Bank", "NRC", "Rent", or "Fine".</p>
          </div>
        )}

      </div>
    </section>
  );
};
