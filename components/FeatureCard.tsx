"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
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

export const FeatureCard = ({
  id,
  title,
  description,
  icon: Icon,
  image,
  imageDark,
  color,
  lightImages = [],
  darkImages = [],
  delay = 0,
}: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { resolvedTheme } = useTheme();

  // Determine which set of images to use based on theme
  const currentThemeImages = resolvedTheme === 'dark' && darkImages.length > 0 ? darkImages : lightImages;
  
  // Determine front image
  const frontImage = (resolvedTheme === 'dark' && imageDark) ? imageDark : image;

  // Ensure we have images to display, fallback to placeholders if empty
  const imagesToDisplay = currentThemeImages.length > 0 ? currentThemeImages : [
      "/assets/Flashcards(white)/Flashcards.png",
  ];

  // Auto-rotate carousel when expanded and flipped
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isExpanded && isFlipped) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isExpanded, isFlipped, imagesToDisplay.length]);

  const handleExpand = () => {
    setIsExpanded(true);
   setTimeout(() => setIsFlipped(true), 500)
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsExpanded(false);
    setCurrentImageIndex(0);
  };
 

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + imagesToDisplay.length) % imagesToDisplay.length);
  };

  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.1 }}
          whileHover={{ y: -8 }}
          className="relative"
      >
        { !isExpanded &&
          <motion.div
            layoutId={`card-${id}`}
            onClick={handleExpand}
            className="bg-white dark:bg-dark-surface rounded-3xl overflow-hidden border-4 border-slate-100 dark:border-dark-border shadow-3d hover:shadow-3d-violet hover:border-zehnly-violet dark:hover:border-zehnly-violet-light transition-all duration-200 cursor-pointer group h-full flex flex-col relative z-1"
          >
            <div className={`relative h-48 w-full ${color} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }} 
              />
              {image ? (
                <div className="relative h-40 w-40 transform group-hover:scale-110 transition-transform duration-300 ease-out">
                  <Image src={image} alt={title} fill className="object-contain drop-shadow-xl" />
                </div>
              ) : (
                <Icon className="w-20 h-20 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-black text-slate-800 dark:text-dark-text mb-3 tracking-tight group-hover:text-zehnly-violet dark:group-hover:text-zehnly-violet-light transition-colors">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-dark-text-muted font-medium leading-relaxed flex-1">
                {description}
              </p>
            </div>
          </motion.div>}
          { isExpanded && <motion.div
            onClick={handleExpand}
            className="bg-white dark:bg-dark-surface rounded-3xl overflow-hidden border-4 border-slate-100 dark:border-dark-border shadow-3d hover:shadow-3d-violet hover:border-zehnly-violet dark:hover:border-zehnly-violet-light transition-all duration-200 cursor-pointer group h-full flex flex-col absolute z-0 inset-0 opacity-0"
          >
            <div className={`relative h-48 w-full ${color} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }} 
              />
              {image ? (
                <div className="relative h-40 w-40 transform group-hover:scale-110 transition-transform duration-300 ease-out">
                  <Image src={image} alt={title} fill className="object-contain drop-shadow-xl" />
                </div>
              ) : (
                <Icon className="w-20 h-20 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-black text-slate-800 dark:text-dark-text mb-3 tracking-tight group-hover:text-zehnly-violet dark:group-hover:text-zehnly-violet-light transition-colors">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-dark-text-muted font-medium leading-relaxed flex-1">
                {description}
              </p>
            </div>
          </motion.div>}
      </motion.div>

      <AnimatePresence mode="wait">
        {isExpanded && (
        
          <motion.div 
            key="modal"
            transition={{ duration: 0.3, ease: "easeOut" }} 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              onClick={handleClose}
            />
            <div className="relative w-full max-w-[400px] aspect-10/21 h-auto max-h-[90vh] perspective-[1600px]">
              <motion.div
                layoutId={`card-${id}`}
                layout
                className="w-full h-full relative transform-3d"
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                exit={{ 
                  rotateY: 0,
                  scale: 0.9,
                  opacity: 0,
                  y: 30,
                  transition: { 
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }
                }}
                transition={{ 
                  layout: { duration: 0.8, ease: "easeInOut" },
                  rotateY: { duration: 0.8, ease: "easeInOut" }
                }}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-dark-surface rounded-[3rem] overflow-hidden border-8 border-slate-100 dark:border-dark-border shadow-2xl">
                    {/* Recreate front content for visual continuity */}
                    <div className={`relative h-1/2 w-full ${color} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10" 
                            style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }} />
                      {frontImage ? (
                          <div className="relative h-48 w-48">
                              <Image src={frontImage} alt={title} fill className="object-contain drop-shadow-xl" />
                          </div>
                      ) : (
                          <Icon className="w-32 h-32 text-white drop-shadow-lg" />
                      )}
                    </div>
                    <div className="p-8 h-1/2 flex flex-col items-center text-center bg-white dark:bg-dark-surface">
                      <h3 className="text-3xl font-black text-slate-800 dark:text-dark-text mb-6 tracking-tight">{title}</h3>
                      <p className="text-slate-600 dark:text-dark-text-muted font-medium text-lg leading-relaxed">{description}</p>
                    </div>
                </div>

                {/* BACK FACE - iPHONE STYLE */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-[3rem] overflow-hidden bg-slate-900 border-8 border-slate-900 shadow-2xl flex flex-col"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {/* Status Bar / Notch Area */}
                  <div className="h-8 w-full bg-slate-900 flex justify-center items-center z-20 relative">
                      <div className="w-24 h-6 bg-black rounded-b-xl absolute top-0" />
                  </div>

                  {/* Screen Content */}
                  <div className="flex-1 bg-white dark:bg-slate-100 relative overflow-hidden rounded-b-[2.5rem]">
                    
                    {/* Carousel */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-full"
                        >
                            <Image 
                              src={imagesToDisplay[currentImageIndex]} 
                              alt={`Flashcard ${currentImageIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                            
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Close Button */}
                        <button 
                        onClick={() =>{setIsFlipped(false);setTimeout(() =>{ handleClose()}, 800)}}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/40 transition-colors z-10 text-white"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="h-6 w-full bg-slate-900 flex justify-center items-start pt-2">
                    <div className="w-32 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        
      )}
      </AnimatePresence>  
      
    </>
  );
};
