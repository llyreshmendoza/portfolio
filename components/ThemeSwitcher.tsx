"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const options = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "Device" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-ink/10 bg-paper-soft p-1 dark:border-white/10 dark:bg-ink-card"
      role="group"
      aria-label="Theme switcher"
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            title={label}
            aria-label={`${label} theme`}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-ink/60 hover:text-ink dark:text-paper/60 dark:hover:text-paper"
            }`}
          >
            <Icon size={15} strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
