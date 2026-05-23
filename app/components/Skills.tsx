import FadeIn from "./FadeIn";

type SkillGroup = { label: string; items: string[] };

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "PHP", "C", "Bash"],
  },
  { label: "Frontend", items: ["Next.js", "React"] },
  { label: "Backend", items: ["Echo (Go)", "FastAPI (Python)"] },
  { label: "Database", items: ["PostgreSQL", "Redis"] },
  { label: "Infra", items: ["Docker", "nginx", "Linux", "Sakura VPS"] },
  { label: "Cloud", items: ["Cloudflare (R2 / WAF / Zero Trust)"] },
  { label: "CI/CD", items: ["GitHub Actions"] },
  { label: "AI", items: ["Claude Code", "Anthropic API"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Skills
          </p>
        </FadeIn>

        <div className="space-y-5">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.04}>
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
                <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft md:w-28 md:text-xs">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/60 px-3 py-1 text-xs text-ink ring-1 ring-black/5 backdrop-blur-sm md:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
