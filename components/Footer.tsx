"use client";

import { Facebook, Instagram, Twitter, Heart, Mail, Sparkles, Gamepad2, Gift, Trophy, BookOpen, Gem, Users, PenTool } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { AnimatePresence, motion } from "framer-motion";

export const Footer = () => {
  const [mysteryBoxOpen, setMysteryBoxOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col">
      {/* 🎮 CTA Section (formerly the creative footer) */}
      <section className="relative mt-32 text-slate-800 dark:text-white">
        
        {/* 🌊 The "Level Complete" Wave Separator */}
        <div className="absolute top-0 left-0 w-full -translate-y-[99%] leading-none z-0 overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(140%+1.3px)] h-[150px] md:h-[200px] fill-white dark:fill-dark-surface">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>

        {/* 🏔️ Background Wrapper */}
        <div className="bg-white dark:bg-dark-surface pt-10 pb-32 px-6 lg:px-20 relative z-10 transition-colors duration-300">
          
          {/* 🐻‍❄️ Mascot on the Hill */}
          <div className="absolute -top-[160px] md:-top-[220px] left-[10%] md:left-[15%] z-20 animate-float">
              <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl transition-transform hover:scale-110 hover:-rotate-6">
                      <Image 
                          src="/assets/zehnly-logo.png" 
                          alt="Zehnly Mascot" 
                          fill 
                          className="object-contain"
                      />
                  </div>
                  <div className="absolute -top-12 -right-12 bg-white dark:bg-dark-surface p-4 rounded-2xl rounded-bl-none shadow-xl border-2 border-zehnly-violet rotate-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                      <p className="font-bold text-zehnly-violet">{t('levelComplete')}</p>
                  </div>
              </div>
          </div>

          {/* ☁️ Main Content - "Floating Islands" Layout */}
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start md:items-center">
              
              {/* 🏝️ Left Island: Brand & Mission */}
              <div className="lg:w-1/3 space-y-8 relative">
                  <div className="relative z-10">
                      <h2 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-zehnly-violet to-zehnly-green mb-4 drop-shadow-sm">
                          ZEHNLY
                      </h2>
                      <p className="text-lg font-bold text-slate-500 dark:text-dark-text-muted leading-relaxed">
                          {t('journeyPart1')} <br/>
                          <span className="text-zehnly-violet dark:text-zehnly-violet-light">{t('journeyPart2')}</span>
                      </p>
                  </div>
              </div>

              {/* 🏝️ Center Island: The "Level Select" Links */}
              <div className="lg:w-1/3 w-full">
                  <motion.div 
                      className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-[2.5rem] border-4 border-slate-100 dark:border-slate-700 shadow-3d dark:shadow-none relative group"
                  >
                      <motion.div layout className="absolute -top-4 -left-4 bg-zehnly-yellow text-slate-900 font-black px-4 py-1 rounded-full -rotate-6 shadow-md border-2 border-slate-900 border-opacity-10 z-20">
                          {t('menu')}
                      </motion.div>
                      
                      <AnimatePresence mode="popLayout" initial={false}>
                          {!contactOpen ? (
                              <motion.div 
                                  layout
                                  key="menu-grid"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                  className="grid grid-cols-2 gap-3"
                              >
                                  <MenuCard href="#features" icon={Trophy} title={t('features')} color="violet" delay="0s" />
                                  <MenuCard href="#" icon={Gamepad2} title={t('play')} color="green" delay="0.1s" />
                                  <div onClick={() => setContactOpen(true)} className="col-span-1">
                                      <MenuCard href="#" icon={Mail} title={t('contact')} color="red" delay="0.2s" isButton />
                                  </div>
                                  <MysteryBox isOpen={mysteryBoxOpen} onClick={() => setMysteryBoxOpen(!mysteryBoxOpen)} />
                              </motion.div>
                          ) : (
                              <motion.div 
                                  layout
                                  key="contact-form"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 20 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                  className="flex flex-col h-full"
                              >
                                  <div className="flex justify-between items-center mb-4">
                                      <h3 className="font-black text-xl text-zehnly-violet">{t('contactUs')}</h3>
                                      <button onClick={() => setContactOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors">
                                          <span className="sr-only">Close</span>
                                          ✕
                                      </button>
                                  </div>
                                  <form className="space-y-3 flex-1 flex flex-col">
                                      <input type="email" placeholder={t('emailPlaceholder')} className="w-full bg-white dark:bg-slate-700 rounded-xl px-4 py-3 border-2 border-slate-200 dark:border-slate-600 focus:border-zehnly-violet outline-none font-bold" />
                                      <textarea placeholder={t('messagePlaceholder')} className="w-full bg-white dark:bg-slate-700 rounded-xl px-4 py-3 border-2 border-slate-200 dark:border-slate-600 focus:border-zehnly-violet outline-none font-bold h-24 resize-none" />
                                      <button type="button" className="w-full mt-auto bg-zehnly-violet text-white font-bold py-3 rounded-xl shadow-3d-violet active:shadow-none active:translate-y-[2px] transition-all">
                                          {t('sendMessage')}
                                      </button>
                                  </form>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  </motion.div>
              </div>

              {/* 🏝️ Right Island: "Next Level" CTA */}
              <div className="lg:w-1/3 w-full space-y-6">
                  <div className="bg-zehnly-violet dark:bg-zehnly-violet-dark p-8 rounded-[3rem] shadow-3d-violet text-center relative overflow-hidden group hover:scale-[1.02] transition-transform">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent" />
                      
                      <div className="relative z-10 space-y-6">
                          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white font-bold text-sm tracking-wider uppercase mb-2">
                               {t('readyForNextLevel')}
                          </div>
                          <h3 className="text-3xl font-black text-white leading-none">
                              {t('getTheApp')}
                          </h3>
                          <div className="flex flex-col gap-3">
                              <AppButton store="App Store" icon="apple" href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184" />
                              <AppButton store="Google Play" icon="google" href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share" />
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
      </section>

      {/* 📜 Standard Footer - The "Credits" Screen */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 px-6 lg:px-20 relative z-20 -mt-10 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
                  {/* Col 1: Brand */}
                  <div className="space-y-6">
                      <div className="flex items-center gap-2">
                          <div className="w-10 h-10 relative">
                              <Image 
                                  src="/assets/zehnly-logo.png" 
                                  alt="Zehnly Logo" 
                                  fill 
                                  className="object-contain"
                              />
                          </div>
                          <span className="text-2xl font-black text-white tracking-tight">ZEHNLY</span>
                      </div>
                      <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                          {t('journeyPart1')} {t('journeyPart2')} 
                          <br />
                          Making language learning addictive, one mini-game at a time.
                      </p>
                  </div>

                  {/* Col 2: Company */}
                  <div>
                      <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                          <Gem className="w-5 h-5 text-zehnly-violet" />
                          Company
                      </h4>
                      <ul className="space-y-4 font-medium">
                          <li>
                              <Link href="#" className="hover:text-zehnly-violet transition-colors flex items-center gap-2 group">
                                  <span>{t('about')}</span>
                                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                              </Link>
                          </li>
                          <li>
                              <Link href="#" onClick={(e) => { e.preventDefault(); setContactOpen(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zehnly-violet transition-colors flex items-center gap-2 group">
                                  <span>{t('contact')}</span>
                                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Col 3: Legal */}
                  <div>
                      <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-zehnly-green" />
                          Legal
                      </h4>
                      <ul className="space-y-4 font-medium">
                          <li>
                              <Link href="#" className="hover:text-zehnly-green transition-colors flex items-center gap-2 group">
                                  <span>{t('privacyPolicy')}</span>
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="hover:text-zehnly-green transition-colors flex items-center gap-2 group">
                                  <span>{t('termsOfService')}</span>
                              </Link>
                          </li>
                          <li>
                              <Link href="#" className="hover:text-zehnly-green transition-colors flex items-center gap-2 group">
                                  <span>{t('cookiePolicy')}</span>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-sm font-semibold text-slate-500">
                      © {new Date().getFullYear()} Zehnly AI. {t('allRightsReserved')}
                  </p>
                  
                  <div className="flex items-center gap-2">
                      <SocialIcon icon={Twitter} href="#" color="hover:bg-[#1DA1F2]" />
                      <SocialIcon icon={Instagram} href="#" color="hover:bg-[#E1306C]" />
                      <SocialIcon icon={Facebook} href="#" color="hover:bg-[#4267B2]" />
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
};

// --- Subcomponents ---

const SocialIcon = ({ icon: Icon, color, href }: { icon: any, color: string, href: string }) => (
    <a href={href} className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:scale-110 ${color.replace('hover:', 'bg-slate-800 hover:')}`}>
        <Icon className="w-5 h-5" />
    </a>
)

const SocialButton = ({ icon: Icon, color }: { icon: any, color: string }) => (
    <a href="#" className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-3d active:shadow-none active:translate-y-[4px] transition-all hover:scale-105 ${color}`}>
        <Icon className="w-6 h-6" />
    </a>
)

const MenuCard = ({ href, icon: Icon, title, color, delay, isButton }: { href: string, icon: any, title: string, color: string, delay: string, isButton?: boolean }) => {
    const colors = {
        violet: "hover:bg-zehnly-violet hover:text-white group-hover/card:border-zehnly-violet",
        green: "hover:bg-zehnly-green hover:text-white group-hover/card:border-zehnly-green",
        red: "hover:bg-zehnly-red hover:text-white group-hover/card:border-zehnly-red",
        yellow: "hover:bg-zehnly-yellow hover:text-white group-hover/card:border-zehnly-yellow",
    }
    
    const content = (
        <>
            <Icon className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover/card:text-white transition-colors" />
            <span className="font-bold text-xs md:text-sm text-slate-600 dark:text-slate-300 group-hover/card:text-white transition-colors">{title}</span>
        </>
    );

    const className = `flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-white dark:bg-slate-700 border-2 border-transparent shadow-sm hover:shadow-md transition-all cursor-pointer group/card hover:-translate-y-1 ${colors[color as keyof typeof colors]}`;

    if (isButton) {
        return <div className={`${className} h-full`} style={{ animationDelay: delay }}>{content}</div>;
    }

    return (
        <Link href={href} className={className} style={{ animationDelay: delay }}>
            {content}
        </Link>
    )
}

const MysteryBox = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <div onClick={onClick} className={`flex flex-col items-center justify-center gap-2 p-4 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-600 cursor-pointer transition-all hover:bg-yellow-50 dark:hover:bg-yellow-900/10 active:scale-95 ${isOpen ? 'bg-yellow-100 dark:bg-yellow-900/20' : ''}`}>
             <div className={`${isOpen ? 'animate-bounce' : 'animate-shake'}`}>
                 {isOpen ? <Sparkles className="w-8 h-8 text-zehnly-yellow" /> : <Gift className="w-8 h-8 text-slate-400 dark:text-slate-500" />}
             </div>
             <span className="font-bold text-slate-500 dark:text-slate-400 text-sm">
                 {isOpen ? "Promo: FREE7" : "Mystery Box"}
             </span>
        </div>
    )
}

const AppButton = ({ store, icon, href }: { store: string, icon: "apple" | "google", href?: string }) => {
    const isApple = icon === "apple";
    // Modern, flat-ish 3D style
    const bgClasses = isApple 
        ? 'bg-[#a78bfa] border-[#8b5cf6]' 
        : 'bg-zehnly-green border-zehnly-green-dark';
    
    if (href) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    relative w-full text-white font-bold py-3 px-6 rounded-2xl 
                    flex items-center justify-center gap-3 transition-all 
                    ${bgClasses} border-b-4 
                    active:border-b-0 active:translate-y-1 active:mt-1
                    hover:brightness-110 overflow-hidden group/btn
                    shadow-lg hover:shadow-xl
                `}
            >
                {/* Beautiful Shimmer Effect */}
                <div className="absolute inset-0 z-10 flex -translate-x-full animate-[shimmer_3s_infinite]">
                     <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]" />
                </div>

                {/* Content (Above Shimmer) */}
                <div className="relative z-20 flex items-center justify-center gap-3">
                    {icon === "apple" ? (
                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg> 
                    ) : (
                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                    )}
                    <span>{store}</span>
                </div>
            </a>
        )
    }

    return (
        <button 
            className={`
                relative w-full text-white font-bold py-3 px-6 rounded-2xl 
                flex items-center justify-center gap-3 transition-all 
                ${bgClasses} border-b-4 
                active:border-b-0 active:translate-y-1 active:mt-1
                hover:brightness-110 overflow-hidden group/btn
                shadow-lg hover:shadow-xl
            `}
        >
            {/* Beautiful Shimmer Effect */}
            <div className="absolute inset-0 z-10 flex -translate-x-full animate-[shimmer_3s_infinite]">
                 <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]" />
            </div>

            {/* Content (Above Shimmer) */}
            <div className="relative z-20 flex items-center justify-center gap-3">
                {icon === "apple" ? (
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg> 
                ) : (
                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                )}
                <span>{store}</span>
            </div>
        </button>
    )
}


