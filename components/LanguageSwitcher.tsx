"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useTransition, useEffect, useRef } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
    { code: 'ru', label: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439', flag: '\u{1F1F7}\u{1F1FA}' },
    { code: 'uz', label: 'O\'zbek', flag: '\u{1F1FA}\u{1F1FF}' }
  ];

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const handleSelect = (code: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 h-9 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-dark-surface rounded-xl border border-zinc-200 dark:border-dark-border shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              disabled={isPending}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-left ${
                locale === lang.code ? 'bg-zinc-50 dark:bg-zinc-800' : ''
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex-1">{lang.label}</span>
              {locale === lang.code && <Check className="w-3.5 h-3.5 text-zehnly-violet" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
