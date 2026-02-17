"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image?: any;
  imageDark?: any;
  color: string;
  delay?: number;
  lightImages?: string[];
  darkImages?: string[];
}

const colorMap: Record<string, { bg: string; text: string }> = {
  'bg-zehnly-yellow': { bg: 'bg-amber-100 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400' },
  'bg-zehnly-violet': { bg: 'bg-violet-100 dark:bg-violet-900/20', text: 'text-violet-600 dark:text-violet-400' },
  'bg-zehnly-red': { bg: 'bg-rose-100 dark:bg-rose-900/20', text: 'text-rose-500 dark:text-rose-400' },
  'bg-zehnly-green': { bg: 'bg-emerald-100 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400' },
};

export const FeatureCard = ({
  id,
  title,
  description,
  icon: Icon,
  color,
  lightImages = [],
  darkImages = [],
  delay = 0,
}: FeatureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { resolvedTheme } = useTheme();

  const currentThemeImages = resolvedTheme === 'dark' && darkImages.length > 0 ? darkImages : lightImages;
  const imagesToDisplay = currentThemeImages.length > 0 ? currentThemeImages : [];

  useEffect(() => {
    if (!isOpen || imagesToDisplay.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, imagesToDisplay.length]);

  const colors = colorMap[color] || colorMap['bg-zehnly-violet'];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: delay * 0.5, ease: "easeOut" }}
        onClick={() => { setIsOpen(true); setCurrentImageIndex(0); }}
        className="bg-white dark:bg-dark-surface rounded-2xl border border-zinc-200/80 dark:border-dark-border p-6 cursor-pointer group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
      >
        <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-zehnly-violet dark:group-hover:text-zehnly-violet-light transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-dark-text-muted leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Screenshot modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-[360px] aspect-[10/21] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Phone frame */}
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-zinc-900 border-[6px] border-zinc-800 shadow-2xl flex flex-col">
                {/* Notch */}
                <div className="h-7 w-full bg-zinc-900 flex justify-center relative shrink-0">
                  <div className="w-20 h-5 bg-black rounded-b-xl absolute top-0" />
                </div>

                {/* Screen */}
                <div className="flex-1 bg-white relative overflow-hidden">
                  {imagesToDisplay.length > 0 ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={imagesToDisplay[currentImageIndex]}
                          alt={`${title} screenshot ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-zinc-50">
                      <Icon className="w-16 h-16 text-zinc-200" />
                    </div>
                  )}

                  {/* Close */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Dots */}
                  {imagesToDisplay.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                      {imagesToDisplay.slice(0, 10).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all ${
                            i === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 w-1.5'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Home indicator */}
                <div className="h-5 w-full bg-zinc-900 flex justify-center items-center shrink-0">
                  <div className="w-28 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
