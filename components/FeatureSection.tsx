"use client";

import { FeatureCard } from "@/components/FeatureCard";
import { Layers, HelpCircle, Sword, Image as ImageIcon, Grid3x3, Swords } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    { id: 1, title: "Flashcards", description: "Master new vocabulary quickly with AI-powered flashcards tailored to your learning level.", icon: Layers, color: "yellow", delay: 0, lightImages: ["/assets/FeaturesExtended/Flashcards(light)/Flashcards.jpg","/assets/FeaturesExtended/Flashcards(light)/Flashcards-1.jpg","/assets/FeaturesExtended/Flashcards(light)/Flashcards-2.jpg","/assets/FeaturesExtended/Flashcards(light)/Flashcards-3.jpg","/assets/FeaturesExtended/Flashcards(light)/Flashcards-4.jpg","/assets/FeaturesExtended/Flashcards(light)/Flashcards-5.jpg"] },
    { id: 2, title: "Odd One Out", description: "Spot the word that doesn't belong. Sharpen your logic and vocabulary skills instantly.", icon: HelpCircle, color: "purple", delay: 0.1, lightImages: ["/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT.png","/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT.jpg","/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-1.png","/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-1.jpg","/assets/FeaturesExtended/Odd1Out(light)/ODD 1 OUT-2.jpg"] },
    { id: 3, title: "Connections", description: "Find groups of four related items. Spot the patterns and make the connections!", icon: Sword, color: "red", delay: 0.2, lightImages: ["/assets/FeaturesExtended/Connections/Game/Connections.jpg","/assets/FeaturesExtended/Connections/Game/Connections-1.jpg","/assets/FeaturesExtended/Connections/Game/Connections-2.jpg","/assets/FeaturesExtended/Connections/Game/Connections-3.jpg"] },
    { id: 4, title: "4 Pics 1 Word", description: "Find the word that connects four images. Train your brain to think conceptually in English.", icon: ImageIcon, color: "green", delay: 0.3, lightImages: ["/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD.png","/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD.jpg","/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-1.png","/assets/FeaturesExtended/4Pics1Word(light)/4 PICS 1 WORD-1.jpg"] },
    { id: 5, title: "Squares", description: "Discover hidden words by analyzing colorful letter tiles and patterns.", icon: Grid3x3, color: "yellow", delay: 0.4, lightImages: ["/assets/FeaturesExtended/Squares/Game.jpg","/assets/FeaturesExtended/Squares/Game-1.jpg","/assets/FeaturesExtended/Squares/Game-2.jpg","/assets/FeaturesExtended/Squares/Game-3.jpg"] },
    { id: 6, title: "Word Battle", description: "Face off against opponents in thrilling 1v1 battles of speed and vocabulary.", icon: Swords, color: "red", delay: 0.5, lightImages: ["/assets/FeaturesExtended/WordBattle(light)/Word Battle.png","/assets/FeaturesExtended/WordBattle(light)/Word Battle.jpg","/assets/FeaturesExtended/WordBattle(light)/Word Battle-1.png","/assets/FeaturesExtended/WordBattle(light)/Word Battle-1.jpg"] },
  ];

  return (
    <section id="features" className="relative">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <div className="w-[760px] h-[668px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
              <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                6 Addictive Games
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl">
              Play your way to fluency
            </h2>
            <p className="text-lg text-purple-200/65">
              Forget boring textbooks. Zehnly uses addictive mini-games to make learning English feel like play. Tap a game to preview it.
            </p>
          </div>

          {/* Games grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
