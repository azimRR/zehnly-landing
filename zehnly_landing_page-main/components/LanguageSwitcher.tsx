"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useTransition, useEffect, useRef } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uz', label: 'O\'zbek', flag: '🇺🇿' }
  ];

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const handleSelect = (code: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 h-10 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-slate-700 dark:text-slate-200"
        >
            <span className="text-xl">{currentLanguage.flag}</span>
            <span className="uppercase text-xs hidden md:block">{currentLanguage.code}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-dark-surface rounded-xl border border-slate-200 dark:border-dark-border shadow-xl overflow-hidden z-50 origin-top-right"
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            disabled={isPending}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left ${locale === lang.code ? 'bg-slate-50 dark:bg-slate-800' : ''}`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="font-bold text-sm text-slate-700 dark:text-slate-200 flex-1">{lang.label}</span>
                            {locale === lang.code && <Check className="w-3.5 h-3.5 text-zehnly-violet" />}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};
