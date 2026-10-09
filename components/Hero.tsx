import { Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";

const socials = [
  { href: profile.socials.github, icon: Github, label: "GitHub" },
  { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.socials.email, icon: Mail, label: "Email" },
];

function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-56 sm:w-64 lg:w-72">
      {/* glow ring */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent/40 via-fuchsia-500/20 to-cyan-400/30 blur-2xl"
      />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black dark:border-white/10">
        {/* placeholder avatar — replace with <Image src="/photo.jpg" fill .../> */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(34,211,238,0.25),transparent_50%)]"
        />
        <span className="relative font-display text-7xl font-semibold text-white/90 sm:text-8xl">
          {profile.initials}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* soft backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {/* Giant outlined name */}
        <h1
          className="text-outline select-none whitespace-nowrap text-center font-display font-bold leading-none"
          style={{ fontSize: "clamp(3rem, 11.5vw, 11rem)" }}
        >
          {profile.firstName} {profile.lastName}
        </h1>

        <div className="mt-10 grid items-center gap-12 pb-20 sm:mt-14 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Left column */}
          <div className="order-2 space-y-10 text-center lg:order-1 lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
                Biography
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {profile.role} crafting enterprise-grade software for web, cloud,
                and modern platforms.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
                Skills
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {profile.skillsLine}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-accent">
                Connect
              </p>
              <div className="mt-4 flex justify-center gap-3 lg:justify-start">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white dark:bg-white/10 dark:text-paper/70 dark:hover:bg-accent dark:hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center portrait */}
          <div className="order-1 lg:order-2">
            <Portrait />
          </div>

          {/* Right column — stats */}
          <div className="order-3 space-y-10 text-center lg:text-right">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
