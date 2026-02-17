'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import logo from '@/assets/Logo.jpg';
import { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Navbar');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src={logo}
              alt="Zehnly"
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-500 dark:text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
            <div className="w-px h-5 bg-zinc-200 dark:bg-dark-border mx-1.5" />
            <a
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-3.5 h-3.5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
              {t('appStore')}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zehnly-green text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              {t('googlePlay')}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-zinc-100 dark:border-dark-border bg-white dark:bg-dark-bg transition-all duration-200 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Settings</span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
          </div>
          <div className="space-y-2">
            <a
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
              {t('appStore')}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-zehnly-green text-white text-sm font-semibold"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              {t('googlePlay')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
