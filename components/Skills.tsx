import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
        <span className="h-1.5 w-1.5 rounded-full border border-current" />
        Toolbox
      </p>
      <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
        Skills &amp; <span className="text-accent">Stack</span>
      </h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-ink/10 bg-paper-soft p-6 transition-colors hover:border-accent/50 dark:border-white/10 dark:bg-ink-card"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-accent">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/70 dark:border-white/10 dark:text-paper/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
