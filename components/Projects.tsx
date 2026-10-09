import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
            <span className="h-1.5 w-1.5 rounded-full border border-current" />
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>
        <a
          href="https://github.com/llyreshmendoza?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/60 transition-colors hover:text-accent dark:text-paper/60"
        >
          View all on GitHub
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_40px_rgba(168,85,247,0.15)] dark:border-white/10 dark:bg-ink-card"
          >
            {/* Card header band */}
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,0.2),transparent_50%)] opacity-80 transition-opacity group-hover:opacity-100"
              />
              <span className="text-outline-light relative font-display text-7xl font-bold">
                {project.number}
              </span>
              {project.private && (
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                  <Lock size={10} />
                  Private
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {project.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/10 px-3 py-1 text-[11px] font-medium text-ink/60 dark:border-white/10 dark:text-paper/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-white/15"
              >
                <Github size={14} />
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
