import { LuSparkles } from "react-icons/lu";
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

        <FadeIn delay={0.15}>
          <div className="mt-10 rounded-3xl bg-white/55 p-7 ring-1 ring-black/5 backdrop-blur-sm md:mt-14 md:p-9">
            <div className="flex items-center gap-2.5">
              <LuSparkles aria-hidden className="text-lilac-strong" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
                AI との向き合い方
              </p>
            </div>
            <p className="mt-4 text-base leading-[1.95] text-ink md:text-lg">
              AI は仕事を奪う相手ではなく、思考を拡張してくれる相棒だと捉えています。
              便利に使いこなす一方で、基礎と原理を理解する努力は止めない。
              最後は自分の頭で考え抜く筋力を残し続けたい——そんな距離感を大事にしています。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
