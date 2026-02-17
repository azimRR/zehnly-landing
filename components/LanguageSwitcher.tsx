"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import { Check, ChevronDown } from "lucide-react";

const FlagGB = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm shrink-0">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
    <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
  </svg>
);

const FlagRU = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm shrink-0">
    <path fill="#FFF" d="M0 0h640v160H0z"/>
    <path fill="#0039A6" d="M0 160h640v160H0z"/>
    <path fill="#D52B1E" d="M0 320h640v160H0z"/>
  </svg>
);

const FlagUZ = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm shrink-0">
    <path fill="#1EB53A" d="M0 320h640v160H0z"/>
    <path fill="#0099B5" d="M0 0h640v160H0z"/>
    <path fill="#CE1126" d="M0 153.6h640v6.4H0zM0 320h640v6.4H0z"/>
    <path fill="#FFF" d="M0 160h640v160H0z"/>
    <circle fill="#FFF" cx="134.4" cy="76.8" r="57.6"/>
    <circle fill="#0099B5" cx="153.6" cy="76.8" r="57.6"/>
    <g fill="#FFF" transform="translate(261.1 20.5) scale(1.92)">
      <g id="uzStar"><path d="M0-6 1.7-.5H6.2L2.2 2.1l1.5 5.5L0 4.2l-3.7 3.4 1.5-5.5-4-2.6h5.5z"/></g>
    </g>
  </svg>
);

const flags: Record<string, () => React.JSX.Element> = {
  en: FlagGB,
  ru: FlagRU,
  uz: FlagUZ,
};

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "uz", label: "O'zbek" },
  ];

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0];
  const CurrentFlag = flags[currentLanguage.code];

  const handleSelect = (code: string) => {
    setIsOpen(false);
    if (code === locale) return;
    window.location.href = `/${code}${pathname}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all text-sm"
      >
        <CurrentFlag />
        <span className="text-xs font-medium uppercase tracking-wide hidden sm:inline">{currentLanguage.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full right-0 mt-2 w-44 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/80 shadow-2xl shadow-black/40 overflow-hidden z-50 transition-all duration-200 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        {languages.map((lang) => {
          const Flag = flags[lang.code];
          return (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800/70 transition-colors text-left ${
                locale === lang.code ? "bg-gray-800/50" : ""
              }`}
            >
              <Flag />
              <span className="text-sm font-medium text-gray-300 flex-1">{lang.label}</span>
              {locale === lang.code && <Check className="w-3.5 h-3.5 text-purple-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
