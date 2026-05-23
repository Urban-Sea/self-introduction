"use client";

import { motion } from "motion/react";
import { LuArrowUpRight, LuBriefcase } from "react-icons/lu";
import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "株式会社偶然",
    role: "エンジニアインターン",
    period: "2025.10 — 現在",
    body: "カードショップ検索サービス『秋葉原カードマップ』の開発に参加。フロントエンドを中心に、機能追加や運用フェーズの改善に取り組んでいます。",
    product: {
      name: "秋葉原カードマップ",
      href: "https://akihabara-cardmap.com/",
    },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Experience
          </p>
        </FadeIn>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.08}>
              <div className="rounded-3xl bg-white/65 p-7 ring-1 ring-black/5 backdrop-blur-sm md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <LuBriefcase aria-hidden className="text-lilac-strong" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft md:text-xs">
                      {exp.role}
                    </p>
                  </div>
                  <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-soft md:text-xs">
                    {exp.period}
                  </p>
                </div>

                <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">
                  {exp.company}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
                  {exp.body}
                </p>

                {exp.product && (
                  <motion.a
                    href={exp.product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm text-ink ring-1 ring-black/5"
                  >
                    {exp.product.name}
                    <LuArrowUpRight aria-hidden />
                  </motion.a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
