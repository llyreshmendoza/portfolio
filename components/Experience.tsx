import { certifications, education, experience } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
        <span className="h-1.5 w-1.5 rounded-full border border-current" />
        Resume
      </p>
      <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
        My <span className="text-accent">Experience</span>
      </h2>

      <div className="mt-14 grid gap-16 lg:grid-cols-[2fr_1fr]">
        {/* Timeline */}
        <ol className="relative space-y-12 border-l border-ink/10 pl-8 dark:border-white/10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper dark:bg-ink" />
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {job.period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                {job.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink/60 dark:text-paper/60">
                {job.company}
                {job.location ? ` — ${job.location}` : ""}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {job.summary}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-ink/50 dark:text-paper/40">
                {job.tech}
              </p>
            </li>
          ))}
        </ol>

        {/* Education + Certifications */}
        <div className="space-y-12">
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
              <GraduationCap size={16} className="text-accent" />
              Education
            </h3>
            <div className="mt-5 space-y-5">
              {education.map((ed) => (
                <div
                  key={ed.school}
                  className="rounded-2xl border border-ink/10 bg-paper-soft p-5 dark:border-white/10 dark:bg-ink-card"
                >
                  <p className="font-display text-lg font-semibold">
                    {ed.school}
                  </p>
                  <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                    {ed.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
              <Award size={16} className="text-accent" />
              Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="rounded-2xl border border-ink/10 bg-paper-soft p-5 text-sm font-medium dark:border-white/10 dark:bg-ink-card"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
