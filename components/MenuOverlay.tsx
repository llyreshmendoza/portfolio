"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-ink text-paper transition-all duration-500 dark:bg-paper dark:text-ink ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-display text-2xl font-bold tracking-tight">
          Sheryll<span className="text-accent">.</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent hover:text-accent dark:border-ink/20"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-2">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`group flex items-baseline gap-4 py-2 font-display text-4xl font-medium transition-all duration-500 hover:text-accent sm:text-6xl ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
          >
            <span className="font-sans text-xs tracking-widest2 text-accent">
              0{i + 1}
            </span>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-1 px-6 pb-10 text-sm text-paper/50 dark:text-ink/50">
        <a
          href={profile.socials.email}
          className="transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
        <span>{profile.location}</span>
      </div>
    </div>
  );
}
