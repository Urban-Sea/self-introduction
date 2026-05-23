import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            About
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-base leading-[1.95] text-ink md:text-xl md:leading-[1.9]">
            セキュリティに興味を持ったものの、Web やインフラの実務知識が不足していたため、まずは Web インフラを扱えるエンジニアとして手を動かし始めました。
            業務で得た知見を個人開発でアウトプットしながら、セキュリティコンテストやワークショップにも継続して参加しています。
            インフラを起点にセキュリティまで一気通貫で理解できるエンジニアを目指しています。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
