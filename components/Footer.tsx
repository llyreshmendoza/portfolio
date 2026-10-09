import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-ink/50 sm:flex-row sm:px-10 dark:text-paper/50">
        <span className="font-display text-lg font-bold text-ink dark:text-paper">
          Sheryll<span className="text-accent">.</span>
        </span>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js 15
          &amp; Tailwind CSS.
        </p>
        <a
          href="#home"
          className="uppercase tracking-widest transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
