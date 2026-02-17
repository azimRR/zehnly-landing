"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    nameKey: "ceoName" as const,
    roleKey: "ceoRole" as const,
    image: "/assets/team/ceo.jpg",
  },
  {
    nameKey: "eng1Name" as const,
    roleKey: "eng1Role" as const,
    image: "/assets/team/eng1.jpg",
  },
  {
    nameKey: "eng2Name" as const,
    roleKey: "eng2Role" as const,
    image: "/assets/team/eng2.jpg",
  },
];

export default function TeamSection() {
  const t = useTranslations("Team");

  return (
    <section id="team" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
              <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
                {t("badge")}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-jakarta text-3xl font-semibold text-transparent md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-lg text-purple-200/65">{t("subtitle")}</p>
          </div>

          {/* Team grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-3 sm:gap-8 lg:gap-16">
            {team.map((member, i) => (
              <motion.div
                key={member.nameKey}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-2 border-purple-500/30 shadow-lg shadow-purple-500/10">
                  <Image
                    src={member.image}
                    alt={t(member.nameKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-jakarta text-lg font-semibold text-gray-200">
                  {t(member.nameKey)}
                </h3>
                <p className="mt-1 text-sm text-purple-200/65">
                  {t(member.roleKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
