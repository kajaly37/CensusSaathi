import React, { useState, useEffect } from 'react';
import { Languages, ArrowRight, X } from 'lucide-react';
import { SUPPORTED_LANGUAGES, useLanguage } from '../i18n';
import type { LanguageOption } from '../i18n';

export { SUPPORTED_LANGUAGES as LANGUAGES_LIST };
export type { LanguageOption };

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onSelectLanguage: (lang: LanguageOption) => void;
}

export const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage,
}) => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<LanguageOption>(
    SUPPORTED_LANGUAGES.find((l) => l.name.toLowerCase() === selectedLanguage.toLowerCase() || l.code.toLowerCase() === selectedLanguage.toLowerCase()) || SUPPORTED_LANGUAGES[0]
  );

  // Synchronize selection whenever modal is opened or language prop updates
  useEffect(() => {
    if (isOpen) {
      const match = SUPPORTED_LANGUAGES.find(
        (l) => l.name.toLowerCase() === selectedLanguage.toLowerCase() || l.code.toLowerCase() === selectedLanguage.toLowerCase()
      );
      if (match) {
        setSelected(match);
      }
    }
  }, [isOpen, selectedLanguage]);

  if (!isOpen) return null;

  const handleContinue = () => {
    onSelectLanguage(selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white bg-dot-pattern rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl border border-slate-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label={t.common.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3 pb-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-700 shadow-sm border border-slate-200">
            <Languages className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.modal.chooseLanguageTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            {t.modal.chooseLanguageSubtitle}
          </p>
        </div>

        {/* 11 Languages Grid (4 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-8">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = selected.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setSelected(lang)}
                className={`bg-white rounded-2xl py-4 px-3 text-center border transition-all cursor-pointer shadow-sm ${
                  isSelected
                    ? 'border-slate-900 ring-2 ring-slate-900/10 shadow-md font-bold'
                    : 'border-slate-200/90 hover:border-slate-400 hover:shadow'
                }`}
              >
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                  {lang.nativeName}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {lang.upperCode}
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Button & Disclaimer */}
        <div className="text-center space-y-3 pt-2">
          <button
            onClick={handleContinue}
            className="inline-flex items-center justify-center gap-2 px-10 py-3 rounded-xl bg-slate-700 hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] cursor-pointer"
          >
            <span>{t.modal.continueBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400">
            {t.modal.changeLaterNote}
          </p>
        </div>

      </div>
    </div>
  );
};
