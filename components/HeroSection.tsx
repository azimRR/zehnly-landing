"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/hero-bear-tr.png";
import { Button } from "./ui/Button";

import avatarPanda from "@/assets/avatar-panda.png";
import avatarFox from "@/assets/avatar-fox.png";
import avatarBunny from "@/assets/avatar-bunny.png";
import avatarCat from "@/assets/avatar-cat.png";
import { useTranslations } from "next-intl";

const avatars = [avatarPanda, avatarFox, avatarBunny, avatarCat];

export const HeroSection = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-12 lg:py-20 pt-28 lg:pt-32 gap-12 lg:gap-20 overflow-hidden selection:bg-zehnly-green selection:text-white">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-6xl font-extrabold text-zehnly-violet tracking-tight leading-tight"
        >
          {t.rich('title', {
            green: (chunks) => <span className="text-zehnly-green dark:text-zehnly-green-light">{chunks}</span>,
            gray: (chunks) => <span className="text-slate-600 dark:text-gray-300">{chunks}</span>
          })}
        </motion.h1>
        {/* Social Proof */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="pt-4 flex items-center justify-center lg:justify-start gap-4"
        >
           <div className="flex -space-x-4">
             {avatars.map((avatar, i) => (
               <div key={i} className={`relative w-12 h-12 rounded-full border-4 border-white dark:border-dark-surface bg-slate-200 dark:bg-dark-surface overflow-hidden`}>
                  <Image src={avatar} alt={`User ${i+1}`} fill className="object-cover" />
               </div>
             ))}
           </div>
           <p className="text-slate-400 dark:text-dark-text-subtle font-bold text-sm tracking-wide uppercase">{t('trustedBy')}</p>
        </motion.div>
      </div>

      {/* Right Visual */}
      <div className="flex-1 relative flex justify-center items-center w-full max-w-xl lg:max-w-2xl">
        {/* Background Decorative Blob */}
        <div className="absolute inset-0 bg-zehnly-green/10 dark:bg-zehnly-green/20 rounded-full blur-3xl scale-110 animate-pulse" />
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative w-full aspect-square z-20"
        >
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ 
                 repeat: Infinity, 
                 duration: 4, 
                 ease: "easeInOut" 
               }}
               className="relative w-full h-full"
             >
                <Image
                  src={heroImage}
                  alt="Zehnly Mascot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
             </motion.div>
        </motion.div>
      </div>

    </section>
  );
};
