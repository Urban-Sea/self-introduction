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
          <p className="text-lg leading-[2] text-ink md:text-2xl md:leading-[1.9]">
            普段はシステムインフラまわりを中心に手を動かしていて、最近はセキュリティ分野も勉強しています。
            サービスを支える土台の部分から全体を見渡せるエンジニアを目指しているところです。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
