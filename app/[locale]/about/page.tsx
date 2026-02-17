import Image from "next/image";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
            <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              Our Story
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-jakarta text-3xl font-semibold text-transparent md:text-4xl mb-6">
            About Zehnly AI
          </h1>
          <p className="text-lg text-purple-200/65 max-w-2xl mx-auto">
            We believe learning English should feel like playing, not studying. That&apos;s why we built Zehnly AI.
          </p>
        </div>

        <div className="space-y-12 text-purple-200/65 text-[15px] leading-relaxed">
          {/* Mission */}
          <section className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
            <h2 className="text-xl font-semibold text-gray-200 mb-4 font-jakarta">Our Mission</h2>
            <p>
              Zehnly AI was born from a simple observation: traditional language learning is boring, and boredom kills progress. We set out to build an app that makes English learning so fun and addictive that learners don&apos;t even realize they&apos;re studying.
            </p>
            <p className="mt-4">
              Using AI-powered adaptive technology, our six mini-games — Flashcards, Odd One Out, Connections, 4 Pics 1 Word, Squares, and Word Battle — adjust in real-time to each learner&apos;s level, ensuring the perfect balance of challenge and progress.
            </p>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30K+", label: "Active Learners" },
              { value: "6", label: "Learning Games" },
              { value: "25K+", label: "Play Store Downloads" },
              { value: "5K+", label: "App Store Downloads" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30">
                <div className="font-jakarta text-2xl font-semibold text-purple-400 mb-1">{stat.value}</div>
                <div className="text-xs text-purple-200/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* What makes us different */}
          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-6 font-jakarta">What Makes Us Different</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Game-First Approach", desc: "Every learning moment is wrapped in a game. You compete, solve puzzles, and battle — all while absorbing English vocabulary." },
                { title: "AI That Adapts", desc: "Our AI engine monitors your strengths and weaknesses in real-time, adjusting difficulty so you're always learning at your optimal level." },
                { title: "Speaking Practice", desc: "Real conversations with AI that gives instant pronunciation feedback. Build confidence before speaking with real people." },
                { title: "Built for Everyone", desc: "Whether you're a complete beginner or advanced learner, from Uzbekistan or anywhere in the world, Zehnly adapts to you." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-gray-800 bg-gray-900/30">
                  <h3 className="font-jakarta font-semibold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-sm text-purple-200/65">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-200 mb-4 font-jakarta">Join 30,000+ Learners</h2>
            <p className="mb-6">Download Zehnly AI free and start your English journey today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-linear-to-t from-green-600 to-green-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 mr-2"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 border border-gray-700 hover:bg-[length:100%_150%]"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 mr-2"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Google Play
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
