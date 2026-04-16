import FadeIn from "./FadeIn";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-14 md:mb-20 ${alignCls}`}>
      <FadeIn>
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-ink-soft md:text-xs">
          {eyebrow}
        </p>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.16}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
