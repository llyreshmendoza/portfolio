"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink/50 dark:text-paper/50">
            <span className="h-1.5 w-1.5 rounded-full border border-current" />
            Contact
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Let&apos;s <span className="text-accent">Talk</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70 dark:text-paper/70">
            Have a project, a role, or just want to connect? My inbox is always
            open.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Mail size={16} />
              </span>
              <a
                href={profile.socials.email}
                className="transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Phone size={16} />
              </span>
              <span>{profile.phone}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin size={16} />
              </span>
              <span>{profile.location}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Github size={16} />
              </span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                github.com/llyreshmendoza
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Linkedin size={16} />
              </span>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-ink/10 bg-paper-soft p-8 dark:border-white/10 dark:bg-ink-card"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-paper/50"
              >
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-white/10"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-paper/50"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-white/10"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-paper/50"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-white/10"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              Send Message
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
