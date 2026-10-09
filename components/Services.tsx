"use client";

import { useState } from "react";
import { Cloud, Code2, LayoutDashboard, Layers } from "lucide-react";
import { services } from "@/lib/data";

const icons: Record<string, typeof Code2> = {
  code: Code2,
  layout: LayoutDashboard,
  cloud: Cloud,
  layers: Layers,
};

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
            <span className="h-1.5 w-1.5 rounded-full border border-current" />
            Services
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            What I <span className="text-accent">Do</span>
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2;
            const isActive = active === i;
            return (
              <button
                key={service.number}
                type="button"
                onClick={() => setActive(i)}
                className={`block w-full rounded-2xl border bg-paper-soft px-6 py-6 text-left transition-all duration-300 sm:px-8 dark:bg-ink-card ${
                  isActive
                    ? "border-accent/60 shadow-[0_8px_30px_rgba(168,85,247,0.15)]"
                    : "border-ink/10 hover:border-accent/40 dark:border-white/10"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-lg font-semibold text-ink/40 dark:text-paper/40">
                    {service.number}/
                  </span>
                  <span className="flex items-center gap-3 font-display text-xl font-semibold sm:text-2xl">
                    <Icon
                      size={22}
                      className={isActive ? "text-accent" : "text-ink/50 dark:text-paper/50"}
                    />
                    {service.title}
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pl-14 pr-2 text-sm leading-relaxed text-ink/60 sm:pl-[4.5rem] dark:text-paper/60">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`mt-4 h-px w-full transition-colors duration-300 ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
