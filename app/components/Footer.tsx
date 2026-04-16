import { FaGithub, FaXTwitter } from "react-icons/fa6";
import FadeIn from "./FadeIn";

const links = [
  {
    label: "@frankie_kincsem",
    href: "https://twitter.com/frankie_kincsem",
    Icon: FaXTwitter,
  },
  {
    label: "Urban-Sea",
    href: "https://github.com/Urban-Sea",
    Icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-12 md:px-12 md:pt-20">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {links.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/60 px-5 py-2.5 text-base text-ink ring-1 ring-black/5 backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                <Icon aria-hidden className="text-[1.1em]" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <p className="mt-12 text-center text-[10px] text-ink-soft md:text-xs">
          © 2026 Ryu
        </p>
      </div>
    </footer>
  );
}
