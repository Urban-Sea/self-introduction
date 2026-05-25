"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";
import FadeIn from "./FadeIn";

type Tag = "資格" | "インターン" | "コンテスト" | "イベント";

type TimelineItem = {
  year: string;
  month: string;
  title: string;
  href?: string;
  body: ReactNode;
  status?: "upcoming";
  tag?: Tag;
};

const tagTones: Record<Tag, string> = {
  資格: "bg-sky-soft",
  インターン: "bg-blush",
  コンテスト: "bg-lilac",
  イベント: "bg-peach",
};

const scrollToCard = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const timeline: TimelineItem[] = [
  {
    year: "2026",
    month: "6月",
    tag: "インターン",
    title: "サイバーエージェント 1day インターン『Architecture Challenge』",
    href: "https://www.cyberagent.co.jp/careers/students/event/detail/id=33042",
    body: "テーマ「複数のサービスを支えるマルチテナンシーなプラットフォームを設計せよ」。SRE / プラットフォームエンジニアリング領域の設計課題に取り組む。",
    status: "upcoming",
  },
  {
    year: "",
    month: "5月",
    tag: "コンテスト",
    title: "第21回 情報危機管理コンテスト 二次予選",
    href: "https://sites.google.com/g.wakayama-u.jp/2026-1st/%E5%8F%82%E5%8A%A0%E3%83%81%E3%83%BC%E3%83%A0?authuser=0",
    body: "一次予選を突破して進出。突破には届かなかったものの、競技形式でのインシデント対応に取り組んだ。",
  },
  {
    year: "",
    month: "4月",
    tag: "イベント",
    title: "セキュリティ・キャンプ 2026 ミニ（東京）",
    href: "https://www.security-camp.or.jp/minicamp/tokyo2026.html",
    body: (
      <>
        Bトラックを2講座受講。『DNSサーバを書いて学ぶ：可観測性とデータ持ち出し対策』では Rust で DNS コンテンツサーバを実装し、構造化ログ設計とログ比較分析を経験。『AIエージェント時代のサイバー防衛入門』では攻撃再現→ログ分析→検知ルール作成→是正確認の防御パイプラインを構築。後者の学びを発展させて個人開発の
        <a
          href="#log_analysis"
          onClick={(e) => scrollToCard(e, "log_analysis")}
          className="underline decoration-ink/30 underline-offset-[3px] transition-colors hover:decoration-ink"
        >
          インシデント対応半自律エージェント
        </a>
        に展開。
      </>
    ),
  },
  {
    year: "",
    month: "4月",
    tag: "コンテスト",
    title: "第21回 情報危機管理コンテスト 一次予選 突破",
    href: "https://sites.google.com/g.wakayama-u.jp/2026-1st/%E5%8F%82%E5%8A%A0%E3%83%81%E3%83%BC%E3%83%A0?authuser=0",
    body: "インシデント対応の基礎力として、与えられた状況に対する分析力・戦略立案力を問う書面審査を突破。",
  },
  {
    year: "",
    month: "2月",
    tag: "コンテスト",
    title: "防衛省サイバーコンテスト",
    body: "防衛省主催のサイバーセキュリティ競技。実践形式の課題に挑戦。",
  },
  {
    year: "",
    month: "1月",
    tag: "イベント",
    title: "NTT セキュリティ・ジャパン SOC 紹介・脅威分析体験ワークショップ",
    href: "https://jp.security.ntt/insights_resources/tech_blog/soc_introduction_worksho2026/",
    body: "SOC の業務理解と脅威分析を体験するワークショップに参加。実務観点での検知・分析の流れを学んだ。",
  },
  {
    year: "2025",
    month: "8月〜10月",
    tag: "コンテスト",
    title: "千葉大学 セキュリティバグハンティングコンテスト 優秀賞",
    href: "https://jdp.chiba-u.jp/c-csirt/contest/index.html",
    body: "用意されたウェブアプリケーションを対象に、実際の脆弱性を探索・報告する実践形式のコンテスト。",
  },
  {
    year: "2024",
    month: "5月",
    tag: "資格",
    title: "IT パスポート試験 合格",
    body: "情報処理推進機構 (IPA) 主催の国家試験。情報技術の基礎を体系的に学んだ。",
  },
];

export default function Activities() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="activities" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Activities
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
            <FadeIn
              key={t.title}
              delay={i * 0.08}
              className={`${t.year && i > 0 ? "mt-16" : ""} ${i < timeline.length - 1 ? "mb-14" : ""}`}
            >
              <div className="relative pl-10">
                {/* dot: absolute left-0 makes dot box [0,16] → center at x=8 */}
                <span className="absolute left-0 top-[5px] flex h-4 w-4 items-center justify-center rounded-full bg-cream ring-2 ring-lilac-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-lilac-strong" />
                </span>

                {t.year && (
                  <span className="font-display text-2xl text-ink md:text-3xl">
                    {t.year}
                  </span>
                )}
                {(t.month || t.tag) && (
                  <div className={`flex flex-wrap items-center gap-2 ${t.year ? "mt-2" : ""}`}>
                    {t.month && (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft md:text-xs">
                        {t.month}
                      </p>
                    )}
                    {t.tag && (
                      <span className={`${tagTones[t.tag]} rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-ink ring-1 ring-black/5`}>
                        {t.tag}
                      </span>
                    )}
                  </div>
                )}
                <h3 className="mt-1.5 flex flex-wrap items-center gap-2.5 text-base font-medium text-ink md:text-xl">
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
                    <span className="rounded-full bg-mint-soft px-3 py-1 text-[10px] font-semibold tracking-widest text-ink">
                      参加予定
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
