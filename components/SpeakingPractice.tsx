"use client";

import { Mic, MessageCircle, BarChart3, Brain, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";

const screenshots = [
  "/assets/FeaturesEx/FlashCards(light)/Pronunciation-1.jpg",
  "/assets/FeaturesEx/FlashCards(light)/Pronunciation.jpg",
  "/assets/FeaturesEx/FlashCards(light)/Pronunciation-2.jpg",
].map((p) => p.split("/").map(encodeURIComponent).join("/"));

export default function SpeakingPractice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Speaking");

  const features = [
    { icon: Mic, title: t("pronunciation"), description: t("pronunciationDesc") },
    { icon: MessageCircle, title: t("conversation"), description: t("conversationDesc") },
    { icon: BarChart3, title: t("progress"), description: t("progressDesc") },
    { icon: Brain, title: t("adaptive"), description: t("adaptiveDesc") },
  ];

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    if (child) child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setCurrentIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCurrentIndex(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  return (
    <section id="speaking" className="relative">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
        <div className="w-[760px] h-[668px] bg-green-500/10 rounded-full blur-[128px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Phone */}
            <div className="flex-1 relative" data-aos="fade-right">
              <div className="relative mx-auto w-[280px]">
                {/* Phone shell */}
                <div className="relative rounded-[3rem] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-[6px] shadow-[0_0_60px_rgba(0,0,0,0.5),0_0_120px_rgba(124,58,237,0.1)]">
                  {/* Screen bezel */}
                  <div className="rounded-[2.6rem] bg-black overflow-hidden">
                    {/* Status bar + notch */}
                    <div className="relative h-8 bg-gray-900 flex items-start justify-center">
                      <div className="w-[90px] h-[22px] bg-black rounded-b-2xl" />
                    </div>

                    {/* Screenshot carousel */}
                    <div className="relative aspect-[9/17] bg-white">
                      <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                      >
                        {screenshots.map((src, i) => (
                          <div key={i} className="flex-none w-full h-full snap-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt={`Speaking practice ${i + 1}`} className="w-full h-full object-cover" loading="eager" />
                          </div>
                        ))}
                      </div>

                      {/* Arrows */}
                      {currentIndex > 0 && (
                        <button onClick={() => scrollToIndex(currentIndex - 1)} className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white z-10">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                      )}
                      {currentIndex < screenshots.length - 1 && (
                        <button onClick={() => scrollToIndex(currentIndex + 1)} className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white z-10">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Home indicator */}
                    <div className="h-6 bg-white flex justify-center items-center">
                      <div className="w-24 h-1 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Side buttons (volume + power) */}
                <div className="absolute left-[-2px] top-[100px] w-[3px] h-8 bg-gray-600 rounded-l-sm" />
                <div className="absolute left-[-2px] top-[145px] w-[3px] h-12 bg-gray-600 rounded-l-sm" />
                <div className="absolute left-[-2px] top-[170px] w-[3px] h-12 bg-gray-600 rounded-l-sm" />
                <div className="absolute right-[-2px] top-[130px] w-[3px] h-16 bg-gray-600 rounded-r-sm" />

                {/* Dots */}
                {screenshots.length > 1 && (
                  <div className="flex justify-center gap-1.5 mt-4">
                    {screenshots.map((_, i) => (
                      <button key={i} onClick={() => scrollToIndex(i)} className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-green-400 w-4" : "bg-gray-600 w-1.5"}`} />
                    ))}
                  </div>
                )}

                {/* Glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/15 to-green-500/10 rounded-full blur-[80px] -z-10" aria-hidden="true" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-green-200/50" data-aos="fade-left">
                <span className="inline-flex bg-linear-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                  {t("badge")}
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-green-200),var(--color-gray-50),var(--color-green-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-left" data-aos-delay={100}>
                {t("title")}
              </h2>
              <p className="text-lg text-purple-200/65 mb-8" data-aos="fade-left" data-aos-delay={200}>
                {t("subtitle")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-3" data-aos="fade-left" data-aos-delay={300 + i * 100}>
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-jakarta text-sm font-semibold text-gray-200 mb-1">{feature.title}</h3>
                      <p className="text-sm text-purple-200/65">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
