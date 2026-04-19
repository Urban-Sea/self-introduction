"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const timeline = [
  {
    year: "2026",
    title: "セキュリティ・キャンプ 2026 ミニ（東京）",
    href: "https://www.security-camp.or.jp/minicamp/tokyo2026.html",
    body: "短期集中でセキュリティを深掘りできる貴重な機会。手を動かしながら学び、得たものをどんどんアウトプットしていきたいです。",
    status: "upcoming" as const,
  },
  {
    year: "",
    title: "第21回 情報危機管理コンテスト 一次予選突破",
    href: "https://sites.google.com/g.wakayama-u.jp/2026-1st/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=0",
    body: "インシデント対応の基礎力として、与えられた状況に対する分析力・戦略立案力を問う書面審査を突破。",
    status: "done" as const,
  },
  {
    year: "2025",
    title: "千葉大学 セキュリティバグハンティングコンテスト 優秀賞",
    href: "https://jdp.chiba-u.jp/c-csirt/contest/index.html",
    body: "用意されたウェブアプリケーションを対象に、実際の脆弱性を探索・報告する実践形式のコンテスト。",
    status: "done" as const,
  },
];

export default function Career() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="career" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Career
          </p>
        </FadeIn>

        <div ref={ref} className="relative">
          {/* vertical track (centered under the dots: line center x=7.5, dot center x=8 → close enough) */}
          <div className="pointer-events-none absolute bottom-0 left-[7px] top-[12px] w-px bg-ink/10" />
          <motion.div
            style={{ scaleY }}
            className="pointer-events-none absolute bottom-0 left-[7px] top-[12px] w-px origin-top bg-gradient-to-b from-blush-strong via-lilac-strong to-sky-strong"
          />

          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.08}>
              <div className={`relative pl-10 last:mb-0 ${t.year && i > 0 ? "mt-6 mb-12" : "mb-12"}`}>
                {/* dot: absolute left-0 makes dot box [0,16] → center at x=8 */}
                <span className="absolute left-0 top-[5px] flex h-4 w-4 items-center justify-center rounded-full bg-cream ring-2 ring-lilac-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-lilac-strong" />
                </span>

                {t.year && (
                  <span className="font-display text-2xl text-ink md:text-3xl">
                    {t.year}
                  </span>
                )}
                <h3 className="mt-2 flex flex-wrap items-center gap-2.5 text-base font-medium text-ink md:text-xl">
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-ink/20 underline-offset-[5px] transition-colors hover:decoration-ink"
                    >
                      {t.title}
                    </a>
                  ) : (
                    t.title
                  )}
                  {t.status === "upcoming" && (
                    <span className="rounded-full bg-mint-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                      Upcoming
                    </span>
                  )}
                </h3>
                {t.body && (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft md:text-base">
                    {t.body}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
