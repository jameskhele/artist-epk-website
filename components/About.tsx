"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { BIO } from "@/lib/content";

export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="md:pt-2">
          <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/logo.jpg"
              alt="Shevyn Roberts logo"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-contain p-6"
            />
          </div>
          <p className="mt-6 max-w-xs text-sm uppercase tracking-[0.24em] text-muted">
            Houston, Texas — Pop & Country
          </p>
        </div>

        <div>
          <SectionHeader eyebrow="About" title="The Artist" />
          <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
            {BIO.short}
          </p>

          <div
            className={`grid transition-all duration-500 ease-out ${
              open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 border-l border-line pl-6 text-base leading-relaxed text-muted md:text-[17px]">
                {BIO.full.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal hover:text-white"
            aria-expanded={open}
          >
            {open ? "Show less" : "Read full bio"}
            <span aria-hidden>{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
