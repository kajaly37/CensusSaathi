import React, { useState } from 'react';
import { BookOpen, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { OFFICIAL_SOURCES } from '../data/sources';
import type { SourceItem } from '../data/sources';
import { useLanguage } from '../i18n';

interface SourceBadgeProps {
  sourceId?: string;
  customText?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  sourceId = 'ORGI',
  customText,
  className = '',
  size = 'sm'
}) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();
  const source: SourceItem = OFFICIAL_SOURCES[sourceId] || OFFICIAL_SOURCES.ORGI;

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
        className={`inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-slate-600 hover:text-slate-900 border border-slate-200/80 transition-all cursor-pointer font-medium ${
          size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
        } ${className}`}
        title={`Source: ${source.name}`}
      >
        <BookOpen className={size === 'sm' ? 'w-3 h-3 text-slate-500' : 'w-3.5 h-3.5 text-slate-500'} />
        <span className="truncate max-w-[220px] sm:max-w-none">
          {customText || `${t.common.sourcePrefix}: ${source.shortName}`}
        </span>
      </button>

      {/* Source Reference Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 text-left"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.common.verifiedGuidance}</h4>
                  <p className="text-[11px] text-slate-500">{source.authority}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md cursor-pointer"
                aria-label={t.common.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-900">{source.name}</p>
              {source.legalReference && (
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-700">
                  <strong>Statutory Provision:</strong> {source.legalReference}
                </div>
              )}
              <p>{source.description}</p>
            </div>

            <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 hover:underline cursor-pointer"
                >
                  <span>{t.selfEnumeration.officialPortalBtn}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-[11px] text-slate-400">Statutory Record</span>
              )}

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 bg-black text-white text-xs font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
