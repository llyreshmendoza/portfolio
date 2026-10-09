"use client";

import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-tight"
          >
            Sheryll<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-accent hover:text-white sm:flex dark:bg-ink-card dark:text-paper dark:hover:bg-accent"
            >
              Let&apos;s Talk
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
            >
              Menu
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
