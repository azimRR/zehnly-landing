import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try Zehnly AI risk-free",
      features: ["Learn up to 200 words", "Access to all 6 games", "Basic speaking practice", "Perfect for getting started"],
      cta: "Get Started Free",
      href: "https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share",
      highlighted: false,
    },
    {
      name: "Monthly",
      price: "$5",
      period: "/month",
      description: "Full access, no limits",
      features: ["Unlimited vocabulary", "Full access to all games", "AI-powered adaptive difficulty", "Advanced speaking practice", "Detailed progress tracking"],
      cta: "Start Monthly",
      href: "https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share",
      highlighted: false,
    },
    {
      name: "Yearly",
      price: "$39",
      period: "/year",
      description: "Best value \u2014 save $21",
      features: ["Everything in Monthly", "Only $3.25/month", "Priority new features", "Learn without limits", "Cancel anytime"],
      cta: "Start Yearly",
      href: "https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
              <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl">
              Start free, upgrade when ready
            </h2>
            <p className="text-lg text-purple-200/65">
              No hidden fees. Cancel anytime. All plans include access to every game.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-px ${plan.highlighted ? "bg-linear-to-b from-purple-500 to-green-500" : "bg-gray-800"}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative rounded-[inherit] bg-gray-950 p-6">
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex bg-linear-to-r from-green-500 to-green-400 text-gray-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Best Value
                      </span>
                    </div>
                  )}
                  <div className="mb-5">
                    <h3 className="font-jakarta text-lg font-semibold text-gray-200">{plan.name}</h3>
                    <p className="text-sm text-purple-200/65">{plan.description}</p>
                  </div>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="font-jakarta text-4xl font-semibold text-gray-200">{plan.price}</span>
                    <span className="text-sm text-purple-200/65">{plan.period}</span>
                  </div>
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full mb-6 ${
                      plan.highlighted
                        ? "bg-linear-to-t from-green-600 to-green-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                        : "bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] relative"
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                  </a>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-purple-200/65">
                        <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-green-400" : "text-purple-400"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
