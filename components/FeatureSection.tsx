"use client";

import { FeatureCard } from "@/components/FeatureCard";
import { Sword, Image as ImageIcon, HelpCircle, Layers, Swords, Grid3x3, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export const FeatureSection = () => {
  const t = useTranslations('FeatureSection');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      title: t('flashcards.title'),
      description: t('flashcards.description'),
      icon: Layers,
      image: "/assets/FeaturesExtended/Flashcards(light)/Flashcards.jpg",
      imageDark: "/assets/FeaturesExtended/Flashcards(dark)/Flashcards.jpg",
      color: "bg-zehnly-yellow",
      delay: 0,
      lightImages: [
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-1.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-2.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-3.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-4.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-5.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-6.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-7.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-8.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-9.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-10.jpg",
        "/assets/FeaturesExtended/Flashcards(light)/Flashcards-11.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-1.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-2.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-3.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-4.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-5.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-6.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-7.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-8.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-9.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-10.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-11.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-12.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-13.jpg",
        "/assets/FeaturesExtended/Flashcards(dark)/Flashcards-14.jpg",
      ]
    },
    {
      id: 2,
      title: t('oddOneOut.title'),
      description: t('oddOneOut.description'),
      icon: HelpCircle,
      image: "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT.png",
      imageDark: "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT.jpg",
      color: "bg-zehnly-violet",
      delay: 0.1,
      lightImages: [
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT.png",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-1.png",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-1.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-2.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-3.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-4.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-5.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-6.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-7.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-8.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-9.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-10.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-11.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-12.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-13.jpg",
        "/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-14.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-1.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-2.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-3.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-4.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-5.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-6.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-7.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-8.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-9.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-10.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-11.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-12.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-13.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-14.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-15.jpg",
        "/assets/FeaturesExtended/Odd1Out(dark)/ODD 1 OUT-16.jpg",
      ]
    },
    {
      id: 3,
      title: t('connections.title'),
      description: t('connections.description'),
      icon: Sword,
      image: "/assets/FeaturesExtended/Connections/Game/Connections.jpg",
      color: "bg-zehnly-red",
      delay: 0.2,
      lightImages: [
        "/assets/FeaturesExtended/Connections/Game/Connections.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-1.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-2.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-3.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-4.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-5.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-6.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-7.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-8.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-9.jpg",
        "/assets/FeaturesExtended/Connections/Game/end.jpg",
        "/assets/FeaturesExtended/Connections/Game/end-1.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/Connections/Game/Connections.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-1.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-2.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-3.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-4.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-5.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-6.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-7.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-8.jpg",
        "/assets/FeaturesExtended/Connections/Game/Connections-9.jpg",
        "/assets/FeaturesExtended/Connections/Game/end.jpg",
        "/assets/FeaturesExtended/Connections/Game/end-1.jpg",
      ]
    },
    {
      id: 4,
      title: t('fourPics.title'),
      description: t('fourPics.description'),
      icon: ImageIcon,
      image: "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD.png",
      imageDark: "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD.jpg",
      color: "bg-zehnly-green",
      delay: 0.3,
      lightImages: [
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD.png",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-1.png",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-1.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-2.png",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-2.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-3.png",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-3.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-4.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-5.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-6.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-7.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-8.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-9.jpg",
        "/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-10.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-1.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-2.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-3.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-4.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-5.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-6.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-7.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-8.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-9.jpg",
        "/assets/FeaturesExtended/4Pics1Word(dark)/4 PICS 1 WORD-10.jpg",
      ]
    },
    {
      id: 5,
      title: t('words.title'),
      description: t('words.description'),
      icon: Grid3x3,
      image: "/assets/FeaturesExtended/Squares/Game.jpg",
      color: "bg-zehnly-yellow",
      delay: 0.4,
      lightImages: [
        "/assets/FeaturesExtended/Squares/Game.jpg",
        "/assets/FeaturesExtended/Squares/Game-1.jpg",
        "/assets/FeaturesExtended/Squares/Game-2.jpg",
        "/assets/FeaturesExtended/Squares/Game-3.jpg",
        "/assets/FeaturesExtended/Squares/Game-4.jpg",
        "/assets/FeaturesExtended/Squares/Game-5.jpg",
        "/assets/FeaturesExtended/Squares/Game-6.jpg",
        "/assets/FeaturesExtended/Squares/Game-7.jpg",
        "/assets/FeaturesExtended/Squares/Game-8.jpg",
        "/assets/FeaturesExtended/Squares/Game-9.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/Squares/Game.jpg",
        "/assets/FeaturesExtended/Squares/Game-1.jpg",
        "/assets/FeaturesExtended/Squares/Game-2.jpg",
        "/assets/FeaturesExtended/Squares/Game-3.jpg",
        "/assets/FeaturesExtended/Squares/Game-4.jpg",
        "/assets/FeaturesExtended/Squares/Game-5.jpg",
        "/assets/FeaturesExtended/Squares/Game-6.jpg",
        "/assets/FeaturesExtended/Squares/Game-7.jpg",
        "/assets/FeaturesExtended/Squares/Game-8.jpg",
        "/assets/FeaturesExtended/Squares/Game-9.jpg",
      ]
    },
    {
      id: 6,
      title: t('wordBattle.title'),
      description: t('wordBattle.description'),
      icon: Swords,
      image: "/assets/FeaturesExtended/WordBattle(light)/Word Battle.png",
      imageDark: "/assets/FeaturesExtended/WordBattle(dark)/Word Battle.jpg",
      color: "bg-zehnly-red",
      delay: 0.5,
      lightImages: [
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle.png",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-1.png",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-1.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-2.png",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-2.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-3.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-4.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-5.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-6.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-7.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-8.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-9.jpg",
        "/assets/FeaturesExtended/WordBattle(light)/Word Battle-10.jpg",
      ],
      darkImages: [
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle.png",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-1.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-2.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-3.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-4.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-5.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-6.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-7.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-8.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-9.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-10.jpg",
        "/assets/FeaturesExtended/WordBattle(dark)/Word Battle-11.jpg",
      ]
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300 relative">
      <div className="container mx-auto px-4 relative flex flex-col justify-center min-h-[80vh]">
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zehnly-violet dark:text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-dark-text-muted font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto"> 
            {features.map((feature, index) => (
                <div key={feature.title} className="w-full max-w-[320px] h-[440px]">
                   <FeatureCard {...feature} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
