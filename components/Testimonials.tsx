export default function Testimonials() {
  const testimonials = [
    { name: "Dilnoza M.", country: "Uzbekistan", content: "I've tried many English apps, but Zehnly is the only one that made learning feel like playing. Word Battle is so addictive!" },
    { name: "Aziz K.", country: "Uzbekistan", content: "The speaking practice feature changed everything for me. I went from being afraid to speak to having real conversations in English." },
    { name: "Anna V.", country: "Russia", content: "My son loves Zehnly. He doesn't even realize he's studying because the games are so fun. His vocabulary has doubled in 3 months." },
    { name: "Javlon T.", country: "Uzbekistan", content: "Flashcards + Connections is the perfect combo. I learn words faster than ever and actually remember them. Totally worth the subscription." },
    { name: "Kamila R.", country: "Russia", content: "As a teacher, I recommend Zehnly to all my students. The AI adapts perfectly to each level. It's like having a personal tutor." },
    { name: "Sardor N.", country: "Uzbekistan", content: "I use Zehnly every day on the bus. 15 minutes of games and my English keeps improving. The progress tracking keeps me motivated." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
            <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              What Learners Say
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl">
            Loved by 30,000+ students
          </h2>
          <p className="text-lg text-purple-200/65">
            Join thousands of English learners who are already improving their skills with Zehnly AI.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-purple-200/65 before:content-['\u201C'] after:content-['\u201D']">
                  {t.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-green-500 flex items-center justify-center text-white font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-sm font-medium text-gray-200">
                    <span>{t.name}</span>
                    <span className="text-gray-700"> &mdash; </span>
                    <span className="text-purple-200/65">{t.country}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
