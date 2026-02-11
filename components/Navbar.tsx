'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import logo from '@/assets/logo.jpg';
import { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Navbar');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border shadow-sm dark:shadow-lg py-2' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex h-[80px] items-center justify-between">
          <div className="flex items-center gap-2 relative z-20">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Image
                src={logo}
                alt="Zehnly Logo"
                className="h-[60px] md:h-[110px] lg:h-[120px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-slate-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 relative z-20">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <ModeToggle />
            
            {/* App Store Button */}
            <Link
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-linear-to-b from-[#9d7eeb] to-zehnly-violet text-white font-bold text-xs uppercase tracking-wide shadow-3d-violet active:shadow-none active:translate-y-[2px] transition-all hover:brightness-110 group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 z-0 flex -translate-x-full animate-[shimmer_3s_infinite]">
                 <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]" />
              </div>

              <div className="relative z-10 flex items-center gap-2">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/>
                </svg>
                <span>{t('appStore')}</span>
              </div>
            </Link>

            {/* Google Play Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-zehnly-green text-white font-bold text-xs uppercase tracking-wide shadow-3d-green active:shadow-none active:translate-y-[2px] transition-all hover:bg-zehnly-green-light group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 z-0 flex -translate-x-full animate-[shimmer_3s_infinite]">
                 <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]" />
              </div>

              <div className="relative z-10 flex items-center gap-2">
                 <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span>{t('googlePlay')}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 items-center">
            
            <div className="flex w-full justify-between items-center bg-slate-50 dark:bg-dark-bg p-4 rounded-xl">
                 <span className="text-sm font-bold text-slate-500 dark:text-dark-text-muted">Settings</span>
                 <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <ModeToggle />
                 </div>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-dark-border" />

            <div className="flex flex-col w-full gap-4">
                 {/* App Store Button - Full Width */}
                <Link
                href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
                className="relative overflow-hidden flex items-center justify-center gap-3 h-12 px-6 rounded-xl bg-linear-to-b from-[#9d7eeb] to-zehnly-violet text-white font-bold text-sm uppercase tracking-wide shadow-3d-violet active:shadow-none active:translate-y-[2px] transition-all hover:brightness-110 group w-full"
                >
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/>
                    </svg>
                    <span>{t('appStore')}</span>
                </Link>

                {/* Google Play Button - Full Width */}
                <Link
                href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
                className="relative overflow-hidden flex items-center justify-center gap-3 h-12 px-6 rounded-xl bg-zehnly-green text-white font-bold text-sm uppercase tracking-wide shadow-3d-green active:shadow-none active:translate-y-[2px] transition-all hover:bg-zehnly-green-light group w-full"
                >
                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <span>{t('googlePlay')}</span>
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
};
