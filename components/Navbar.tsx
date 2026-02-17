"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "@/assets/Logo.jpg";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo */}
          <div className="relative z-10 flex flex-1 items-center">
            <Link href="/" className="inline-flex shrink-0" aria-label="Zehnly">
              <Image src={logo} alt="Zehnly" className="h-9 w-auto object-contain rounded-lg" priority />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 md:hidden p-2 text-gray-400"
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
          <ul className="relative z-10 hidden md:flex flex-1 items-center justify-end gap-3">
            <li><a className="text-sm text-gray-300 hover:text-white transition" href="#features">Features</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white transition" href="#how-it-works">How It Works</a></li>
            <li><a className="text-sm text-gray-300 hover:text-white transition" href="#pricing">Pricing</a></li>
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <a
                href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                <span className="relative z-10 inline-flex items-center">
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-3.5 h-3.5 mr-1.5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
                  App Store
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm bg-linear-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5 mr-1.5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Google Play
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-gray-900/95 border border-gray-800 p-4 space-y-3 backdrop-blur-sm md:hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Language</span>
              <LanguageSwitcher />
            </div>
            <div className="space-y-2">
              <a href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
