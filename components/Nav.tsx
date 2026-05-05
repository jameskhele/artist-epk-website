"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-bg/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight md:text-xl"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-neon-gradient px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_rgba(176,38,255,0.35)] hover:brightness-110"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span
              className={`h-px w-6 bg-white transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-t border-white/5 bg-bg/95 backdrop-blur-md`}
      >
        <nav
          className="container-x flex flex-col gap-1 py-6"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 text-sm uppercase tracking-[0.2em] text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-neon-gradient px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
