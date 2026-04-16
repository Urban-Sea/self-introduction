import { IconType } from "react-icons";
import { GiHorseHead } from "react-icons/gi";
import {
  LuCode,
  LuFlag,
  LuServer,
  LuShieldCheck,
  LuTrendingUp,
} from "react-icons/lu";
import FadeIn from "./FadeIn";

type Chip = { label: string; Icon: IconType; tone: string };

const chips: Chip[] = [
  { label: "投資", Icon: LuTrendingUp, tone: "bg-mint-soft" },
  { label: "競馬", Icon: GiHorseHead, tone: "bg-peach" },
  { label: "セキュリティ", Icon: LuShieldCheck, tone: "bg-lilac" },
  { label: "インフラ", Icon: LuServer, tone: "bg-sky-soft" },
  { label: "Web 開発", Icon: LuCode, tone: "bg-blush" },
  { label: "CTF", Icon: LuFlag, tone: "bg-mint-soft" },
];

const horses = ["デアリングタクト", "エフフォーリア", "フォーエバーヤング"];

export default function Interests() {
  return (
    <section id="interests" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Interests
          </p>
        </FadeIn>

        <div className="flex flex-wrap gap-3">
          {chips.map(({ label, Icon, tone }, i) => (
            <FadeIn key={label} delay={i * 0.04}>
              <span
                className={`${tone} inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-base text-ink ring-1 ring-black/5`}
              >
                <Icon aria-hidden className="text-[1.1em] text-ink-soft" />
                {label}
              </span>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-12 mb-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Favorite Horses
          </p>
        </FadeIn>

        <div className="flex flex-wrap gap-3">
          {horses.map((name, i) => (
            <FadeIn key={name} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-peach px-5 py-2.5 text-base text-ink ring-1 ring-black/5">
                <GiHorseHead aria-hidden className="text-[1.1em] text-ink-soft" />
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
