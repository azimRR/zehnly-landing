"use client";

import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col">
      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <Image
              src="/assets/zehnly-logo.png"
              alt="Zehnly"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            {t('getTheApp')}
          </h2>
          <p className="text-zinc-500 dark:text-dark-text-muted text-lg mb-10 max-w-md mx-auto">
            {t('journeyPart1')} {t('journeyPart2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-zehnly-green text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-dark-border px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">ZEHNLY</span>
              <div className="flex items-center gap-6 text-sm text-zinc-400 dark:text-dark-text-subtle">
                <Link href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">{t('about')}</Link>
                <Link href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">{t('privacyPolicy')}</Link>
                <Link href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">{t('termsOfService')}</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Facebook} />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-dark-border/50">
            <p className="text-center text-xs text-zinc-400 dark:text-dark-text-subtle">
              &copy; {new Date().getFullYear()} Zehnly AI. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);
