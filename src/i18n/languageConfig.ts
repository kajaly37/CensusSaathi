export type LanguageCode = 
  | 'en' 
  | 'hi' 
  | 'mr' 
  | 'bn' 
  | 'ta' 
  | 'te' 
  | 'gu' 
  | 'kn' 
  | 'ml' 
  | 'pa' 
  | 'or';

export interface LanguageOption {
  code: LanguageCode;
  upperCode: string;
  name: string;
  nativeName: string;
  speechLocale: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', upperCode: 'EN', name: 'English', nativeName: 'English', speechLocale: 'en-IN' },
  { code: 'hi', upperCode: 'HI', name: 'Hindi', nativeName: 'हिन्दी', speechLocale: 'hi-IN' },
  { code: 'mr', upperCode: 'MR', name: 'Marathi', nativeName: 'मराठी', speechLocale: 'mr-IN' },
  { code: 'bn', upperCode: 'BN', name: 'Bengali', nativeName: 'বাংলা', speechLocale: 'bn-IN' },
  { code: 'ta', upperCode: 'TA', name: 'Tamil', nativeName: 'தமிழ்', speechLocale: 'ta-IN' },
  { code: 'te', upperCode: 'TE', name: 'Telugu', nativeName: 'తెలుగు', speechLocale: 'te-IN' },
  { code: 'gu', upperCode: 'GU', name: 'Gujarati', nativeName: 'ગુજરાતી', speechLocale: 'gu-IN' },
  { code: 'kn', upperCode: 'KN', name: 'Kannada', nativeName: 'ಕನ್ನಡ', speechLocale: 'kn-IN' },
  { code: 'ml', upperCode: 'ML', name: 'Malayalam', nativeName: 'മലയാളം', speechLocale: 'ml-IN' },
  { code: 'pa', upperCode: 'PA', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', speechLocale: 'pa-IN' },
  { code: 'or', upperCode: 'OR', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', speechLocale: 'or-IN' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

const STORAGE_KEY = 'census_saathi_selected_language';

export function getStoredLanguage(): LanguageCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const normalized = saved.toLowerCase();
      const match = SUPPORTED_LANGUAGES.find(
        (l) => l.code === normalized || l.upperCode.toLowerCase() === normalized || l.name.toLowerCase() === normalized
      );
      if (match) return match.code;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return DEFAULT_LANGUAGE;
}

export function setStoredLanguage(code: LanguageCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Ignore storage errors
  }
}

export function getLanguageOption(code: LanguageCode | string): LanguageOption {
  const normalized = (code || 'en').toLowerCase();
  return (
    SUPPORTED_LANGUAGES.find(
      (l) => l.code === normalized || l.upperCode.toLowerCase() === normalized || l.name.toLowerCase() === normalized
    ) || SUPPORTED_LANGUAGES[0]
  );
}
