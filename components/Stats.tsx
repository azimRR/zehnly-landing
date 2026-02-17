export default function Stats() {
  const stats = [
    { value: "30K+", label: "Active Learners" },
    { value: "25K+", label: "Google Play Downloads" },
    { value: "5K+", label: "App Store Downloads" },
    { value: "6", label: "Learning Games" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-jakarta text-4xl font-semibold text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-purple-200/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
