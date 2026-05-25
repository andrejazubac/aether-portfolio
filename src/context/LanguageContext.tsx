"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Language } from "@/data/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Serbian ('sr') for local Serbian business targeting
  const [lang, setLangState] = useState<Language>("sr");

  useEffect(() => {
    const savedLang = localStorage.getItem("aether-lang") as Language;
    if (savedLang === "en" || savedLang === "sr") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("aether-lang", newLang);
  };

  // Safe dot-notation translation lookup helper
  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[lang];
    
    for (const key of keys) {
      if (current && key in current) {
        current = current[key];
      } else {
        // Return key as fallback if translation is missing
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
