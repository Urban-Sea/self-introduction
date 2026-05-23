"use client";

import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import FadeIn from "./FadeIn";

type Product = {
  name: string;
  href: string;
  description: string;
  role: string;
  badge: string;
  badgeTone: string;
  gradient: string;
  stack?: string;
};

const products: Product[] = [
  {
    name: "Akihabara Card Map",
    href: "https://akihabara-cardmap.com/",
    description:
      "秋葉原のカードショップを地図上で探せるサービス。",
    role: "企業内プロダクト · Frontend / UI",
    badge: "公開中",
    badgeTone: "bg-mint-soft",
    gradient: "from-blush to-peach",
  },
  {
    name: "Open Regime",
    href: "https://open-regime.com",
    description:
      "投資リサーチを支援する個人プロダクト。相場局面（レジーム）の可視化を試しています。",
    role: "Personal · Full-stack · 2026.02–04",
    badge: "公開中",
    badgeTone: "bg-mint-soft",
    gradient: "from-sky-soft to-lilac",
    stack:
      "Next.js 15 / Go (Echo) / Python (FastAPI, pandas, numpy) / PostgreSQL / Redis / Docker Compose / nginx / GitHub Actions / Cloudflare (R2, WAF, Zero Trust) / Sakura VPS",
  },
  {
    name: "AI Incident Pipeline",
    href: "https://github.com/Urban-Sea/log_analysis",
    description:
      "電話受電起点のインシデント対応を Claude Code の slash command で半自動化。4 層アーキテクチャ（観測→判断→検証）と物理ゲートで、AI と人間の責任境界を明確に切ったパイプライン。",
    role: "Personal · Security / Ops",
    badge: "OSS",
    badgeTone: "bg-lilac",
    gradient: "from-mint-soft to-sky-soft",
    stack:
      "Claude Code / Anthropic API / Python 3.10+ / bash / 各種ログパーサ (Apache CLF, named, syslog, secure, maillog)",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Products
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} p-7 ring-1 ring-black/5 md:p-8`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
                    {p.role}
                  </p>
                  <span
                    className={`${p.badgeTone} shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink ring-1 ring-black/5`}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                  {p.description}
                </p>

                {p.stack && (
                  <div className="mt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft md:text-xs">
                      Stack
                    </p>
                    <p className="mt-1 overflow-x-auto whitespace-nowrap pb-1 text-[11px] leading-relaxed text-ink-soft/80 md:text-xs [-ms-overflow-style:none] [scrollbar-width:thin]">
                      {p.stack}
                    </p>
                  </div>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-medium text-ink md:text-base">
                  サイトを見る
                  <motion.span
                    aria-hidden
                    className="inline-flex"
                    whileHover={{ x: 2, y: -2 }}
                  >
                    <LuArrowUpRight />
                  </motion.span>
                </span>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
