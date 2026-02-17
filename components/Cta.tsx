import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2" aria-hidden="true">
        <div className="w-[760px] h-[668px] bg-purple-500/15 rounded-full blur-[128px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Mascot */}
            <div className="relative w-24 h-24 mx-auto mb-6" data-aos="fade-up">
              <Image src="/assets/zehnly-logo.png" alt="Zehnly" fill className="object-contain" />
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-jakarta text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Start your English journey today
            </h2>
            <p className="text-lg text-purple-200/65 mb-8" data-aos="fade-up" data-aos-delay={100}>
              Join 30,000+ learners who are already improving their English with Zehnly AI. Download free and start playing.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <div data-aos="fade-up" data-aos-delay={200}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 mr-2"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.8 71.8 77.3 71.8 30.3 0 42.7-16.4 82.3-16.4 46.3 0 52.8 14.1 82.8 14.1 69.7-11.9 95.7-93.7 95.7-93.7-1 .1-47.8-21.3-48.4-53.1zM245.9 76.8c12.4-19.1 27.6-35 50.7-35 8.1 43-22.1 86.8-50.7 86.8-9.4-46.3 12.4-70.9 12.4-70.9z"/></svg>
                    App Store
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">-&gt;</span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 mr-2"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
