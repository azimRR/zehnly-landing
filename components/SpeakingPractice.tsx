import { Mic, MessageCircle, BarChart3, Brain } from "lucide-react";

export default function SpeakingPractice() {
  const features = [
    { icon: Mic, title: "Pronunciation Feedback", description: "Get instant AI feedback on how you pronounce every word and sentence." },
    { icon: MessageCircle, title: "Conversation Scenarios", description: "Practice real-world dialogues: ordering food, job interviews, travel, and more." },
    { icon: BarChart3, title: "Progress Tracking", description: "See your speaking accuracy improve over time with detailed analytics." },
    { icon: Brain, title: "Adaptive AI Tutor", description: "The AI adjusts difficulty and topics based on your strengths and weaknesses." },
  ];

  return (
    <section id="speaking" className="relative">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
        <div className="w-[760px] h-[668px] bg-green-500/10 rounded-full blur-[128px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Visual */}
            <div className="flex-1 relative" data-aos="fade-right">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Phone mockup */}
                <div className="aspect-[9/16] rounded-[3rem] bg-gray-900 border-4 border-gray-800 overflow-hidden shadow-2xl">
                  <div className="h-8 bg-gray-900 flex justify-center relative">
                    <div className="w-20 h-5 bg-black rounded-b-xl absolute top-0" />
                  </div>
                  <div className="flex-1 bg-linear-to-br from-purple-900/40 via-gray-900 to-green-900/30 p-6 space-y-4">
                    {/* Chat bubbles */}
                    <div className="flex justify-end">
                      <div className="bg-purple-600/80 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-white">Hello! How do I order coffee?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Great question! Try saying: &quot;I&apos;d like a latte, please.&quot;</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-purple-600/80 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                        <div className="flex items-center gap-2">
                          <Mic className="w-4 h-4 text-purple-200" />
                          <div className="flex gap-0.5">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className="w-1 bg-purple-300/60 rounded-full" style={{ height: `${8 + Math.random() * 16}px` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-green-600/20 border border-green-500/30 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-green-300">Excellent pronunciation! 95% accuracy</p>
                      </div>
                    </div>
                    {/* Mic button */}
                    <div className="flex justify-center pt-4">
                      <div className="w-16 h-16 rounded-full bg-linear-to-t from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <Mic className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-[60px] -z-10" aria-hidden="true" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-green-200/50" data-aos="fade-left">
                <span className="inline-flex bg-linear-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                  Speaking Practice
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-green-200),var(--color-gray-50),var(--color-green-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-left" data-aos-delay={100}>
                Practice speaking with AI
              </h2>
              <p className="text-lg text-purple-200/65 mb-8" data-aos="fade-left" data-aos-delay={200}>
                Our AI-powered speaking practice helps you build confidence in real conversations. Get instant feedback on pronunciation, fluency, and grammar.
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
