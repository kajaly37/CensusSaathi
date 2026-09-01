import React from 'react';
import { useLanguage } from '../i18n';

interface FooterProps {
  onNavigatePrivacy?: () => void;
  onNavigateHowItWorks?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePrivacy, onNavigateHowItWorks }) => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#f8fafc] border-t border-slate-200/80 py-10 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
          <button 
            onClick={onNavigateHowItWorks}
            className="hover:text-slate-900 transition-colors focus:outline-none cursor-pointer font-semibold"
          >
            {t.nav.howItWorks}
          </button>
          <button 
            onClick={onNavigatePrivacy}
            className="hover:text-slate-900 transition-colors focus:outline-none cursor-pointer font-semibold"
          >
            {t.footer.privacyLawTitle}
          </button>
          <a
            href="https://censusindia.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors focus:outline-none underline text-slate-700 font-semibold cursor-pointer"
          >
            {t.footer.officialPortalLink}
          </a>
        </div>

        {/* Independence & Non-affiliation Disclaimer */}
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {t.footer.independenceDisclaimer}
        </p>

        {/* Official Portal Notice */}
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {t.footer.officialPortalNotice}
        </p>

        {/* Non-collection of official responses notice */}
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {t.footer.noCollectionNotice}
        </p>

        {/* Copyright info */}
        <p className="text-[11px] text-slate-400 font-medium pt-1">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
