"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/hero-bear-tr.png";
import avatarPanda from "@/assets/avatar-panda.png";
import avatarFox from "@/assets/avatar-fox.png";
import avatarBunny from "@/assets/avatar-bunny.png";
import avatarCat from "@/assets/avatar-cat.png";
import { useTranslations } from "next-intl";

const avatars = [avatarPanda, avatarFox, avatarBunny, avatarCat];

export const HeroSection = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]"
          >
            {t.rich('title', {
              green: (chunks) => <span className="text-zehnly-violet dark:text-zehnly-violet-light">{chunks}</span>,
              gray: (chunks) => <span className="text-zinc-400 dark:text-zinc-500">{chunks}</span>
            })}
          </motion.h1>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-[15px] hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-200 dark:border-dark-border text-zinc-700 dark:text-zinc-300 font-semibold text-[15px] hover:bg-zinc-50 dark:hover:bg-dark-surface transition-colors"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((avatar, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white dark:border-dark-bg bg-zinc-100 dark:bg-dark-surface overflow-hidden">
                  <Image src={avatar} alt={`User ${i+1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-zinc-400 dark:text-dark-text-subtle text-sm font-medium">{t('trustedBy')}</p>
          </motion.div>
        </div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center w-full max-w-sm lg:max-w-md"
        >
          <div className="relative w-full aspect-square">
            <Image
              src={heroImage}
              alt="Zehnly Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
