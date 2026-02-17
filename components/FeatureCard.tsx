"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon, X } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
  lightImages?: string[];
}

const colorMap: Record<string, { icon: string; bg: string }> = {
  yellow: { icon: "text-yellow-400", bg: "bg-yellow-500/10" },
  purple: { icon: "text-purple-400", bg: "bg-purple-500/10" },
  red: { icon: "text-red-400", bg: "bg-red-500/10" },
  green: { icon: "text-green-400", bg: "bg-green-500/10" },
};

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  color,
  delay = 0,
  lightImages = [],
}: FeatureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || lightImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % lightImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, lightImages.length]);

  const colors = colorMap[color] || colorMap.purple;

  return (
    <>
      <article
        className="cursor-pointer group"
        data-aos="fade-up"
        data-aos-delay={delay * 600}
        onClick={() => {
          if (lightImages.length > 0) {
            setIsOpen(true);
            setCurrentImageIndex(0);
          }
        }}
      >
        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg}`}>
          <Icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
        <h3 className="mb-1 font-jakarta text-[1rem] font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-purple-200/65">{description}</p>
        {lightImages.length > 0 && (
          <span className="inline-flex items-center gap-1 mt-3 text-xs text-purple-400/60 group-hover:text-purple-400 transition-colors">
            Tap to preview
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </span>
        )}
      </article>

      {/* Screenshot modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
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
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-gray-900 border-[6px] border-gray-800 shadow-2xl flex flex-col">
                <div className="h-7 w-full bg-gray-900 flex justify-center relative shrink-0">
                  <div className="w-20 h-5 bg-black rounded-b-xl absolute top-0" />
                </div>
                <div className="flex-1 bg-white relative overflow-hidden">
                  {lightImages.length > 0 && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image src={lightImages[currentImageIndex]} alt={`${title} screenshot`} fill className="object-cover" />
                      </motion.div>
                    </AnimatePresence>
                  )}
                  <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10">
                    <X className="w-4 h-4" />
                  </button>
                  {lightImages.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                      {lightImages.slice(0, 8).map((_, i) => (
                        <button key={i} onClick={() => setCurrentImageIndex(i)} className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? "bg-white w-4" : "bg-white/40 w-1.5"}`} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-5 w-full bg-gray-900 flex justify-center items-center shrink-0">
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
