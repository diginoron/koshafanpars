'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa');

  useEffect(() => {
    const saved = localStorage.getItem('kfp_lang') as Language;
    if (saved === 'fa' || saved === 'en') {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === 'fa' ? 'rtl' : 'ltr';
    } else {
      document.documentElement.lang = 'fa';
      document.documentElement.dir = 'rtl';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kfp_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const next = language === 'fa' ? 'en' : 'fa';
    setLanguage(next);
  };

  const direction = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, toggleLanguage, t: (k) => k }}>
      <div className={language === 'fa' ? 'font-vazir dir-rtl' : 'font-sans dir-ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
