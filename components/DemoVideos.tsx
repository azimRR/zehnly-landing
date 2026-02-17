"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const demos = [
  {
    id: "word-battle",
    title: "Word Battle",
    description: "Challenge yourself with fast-paced vocabulary duels. Match words to meanings before time runs out.",
    thumbnail: "/assets/demos/word-battle.jpg",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: "speaking",
    title: "Speaking Practice",
    description: "Have real conversations with AI and get instant pronunciation feedback.",
    thumbnail: "/assets/demos/speaking.jpg",
    color: "from-green-500 to-green-600",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    description: "Smart spaced repetition helps you memorize vocabulary 3x faster.",
    thumbnail: "/assets/demos/flashcards.jpg",
    color: "from-yellow-500 to-yellow-600",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

export default function DemoVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
              <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                See It In Action
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl">
              Watch how Zehnly works
            </h2>
            <p className="text-lg text-purple-200/65">
              See our games and speaking practice in action. Experience how learning English becomes an addictive habit.
            </p>
          </div>

          {/* Demo cards */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, i) => (
              <div
                key={demo.id}
                className="group relative rounded-2xl bg-gray-800 p-px"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative overflow-hidden rounded-[inherit] bg-gray-950">
                  {/* Video thumbnail area */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-20`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className={`${demo.iconBg} rounded-2xl p-4`}>
                        <Play className={`w-8 h-8 ${demo.iconColor}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-300">Coming Soon</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <h3 className="mb-2 font-jakarta text-lg font-semibold text-gray-200">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-purple-200/65">{demo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
