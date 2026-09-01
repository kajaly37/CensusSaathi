import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  DEFAULT_LANGUAGE,
  getStoredLanguage, 
  setStoredLanguage,
  getLanguageOption 
} from './languageConfig';
import type { LanguageCode, LanguageOption } from './languageConfig';
import { TRANSLATIONS } from './translations';
import type { TranslationSchema } from './translations';

interface LanguageContextType {
  language: LanguageCode;
  languageOption: LanguageOption;
  setLanguage: (code: LanguageCode | string) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => getStoredLanguage());

  const languageOption = useMemo(() => getLanguageOption(language), [language]);

  const setLanguage = (code: LanguageCode | string) => {
    const option = getLanguageOption(code);
    setLanguageState(option.code);
    setStoredLanguage(option.code);
  };

  // Synchronize on mount and storage changes
  useEffect(() => {
    const current = getStoredLanguage();
    if (current !== language) {
      setLanguageState(current);
    }
  }, []);

  // Compute translation with English fallback
  const t = useMemo<TranslationSchema>(() => {
    const active = TRANSLATIONS[language];
    if (active) return active;
    return TRANSLATIONS[DEFAULT_LANGUAGE] || TRANSLATIONS.en;
  }, [language]);

  const value = useMemo(() => ({
    language,
    languageOption,
    setLanguage,
    t
  }), [language, languageOption, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    const option = getLanguageOption(DEFAULT_LANGUAGE);
    return {
      language: DEFAULT_LANGUAGE,
      languageOption: option,
      setLanguage: () => {},
      t: TRANSLATIONS.en
    };
  }
  return context;
}
