"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "@/assets/Logo.jpg";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 z-30 w-full transition-all duration-300 ${scrolled ? "mt-0 pt-2" : "mt-2 md:mt-5"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl px-4 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-gray-900/90 backdrop-blur-xs"
        } before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[inherit]`}>

          {/* Subtle bottom glow */}
          <div className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          {/* Logo + brand */}
          <div className="relative z-10 flex flex-1 items-center gap-2.5">
            <Link href="/" className="inline-flex shrink-0 items-center gap-2.5 group" aria-label="Zehnly">
              <Image src={logo} alt="Zehnly" className="h-8 w-auto object-contain rounded-lg ring-1 ring-white/10 group-hover:ring-purple-500/30 transition-all" priority />
              <span className="hidden sm:inline font-jakarta font-bold text-gray-100 text-sm tracking-tight group-hover:text-white transition-colors">
                Zehnly
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>

          {/* Desktop nav */}
          <nav className="relative z-10 hidden md:flex flex-1 items-center justify-end gap-1">
            {/* Nav links */}
            {/* Nav links hidden temporarily */}

            {/* Language */}
            <div className="mr-2">
              <LanguageSwitcher />
            </div>

            {/* App Store */}
            <a
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hover:text-white transition-colors"
            >
              <span className="relative z-10 inline-flex items-center">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-3.5 h-3.5 mr-1.5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
                App Store
              </span>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm relative bg-linear-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] hover:shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16),0_0_12px_rgba(74,222,128,0.25)] transition-shadow"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5 mr-1.5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`mt-2 rounded-2xl bg-gray-950/90 border border-gray-800/80 p-4 space-y-4 backdrop-blur-xl md:hidden transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none absolute left-4 right-4"
        }`}>
          {/* Nav links */}
          <div className="space-y-1">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-sm font-medium">
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              {t("features")}
            </a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-sm font-medium">
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              {t("howItWorks")}
            </a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-sm font-medium">
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              {t("pricing")}
            </a>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Language */}
          <div className="flex items-center justify-between px-3">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Language</span>
            <LanguageSwitcher />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Buttons */}
          <div className="space-y-2">
            <a href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-800/80 text-gray-300 text-sm font-medium border border-gray-700/50 hover:bg-gray-800 hover:text-white transition-colors">
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors shadow-[0_0_20px_rgba(74,222,128,0.15)]">
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
