import { useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'te' | 'mr';

export const languages = {
  en: 'English',
  hi: 'हिंदी',
  bn: 'বাংলা',
  te: 'తెలుగు',
  mr: 'मराठी'
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    languages
  };
};