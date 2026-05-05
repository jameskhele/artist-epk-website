import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HIGHLIGHTS } from "@/lib/content";

const ICONS: Record<string, JSX.Element> = {
  "Shared Stages": (
    <path d="M12 2v8m0 0a4 4 0 100 8 4 4 0 000-8zm0 12v6m-4-3h8" />
  ),
  "Film & Television": (
    <path d="M3 7h18M3 17h18M7 3v18M17 3v18" />
  ),
  Founder: (
    <path d="M12 21s-7-4.5-7-11a7 7 0 1114 0c0 6.5-7 11-7 11z" />
  ),
  "Cross-Genre Artist": (
    <path d="M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  "Live Performance": (
    <path d="M4 21V8a8 8 0 0116 0v13M4 21h16M9 21v-6h6v6" />
  ),
  "Award Winning Recording Artist": (
    <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3z" />
  ),
};

export default function Highlights() {
  return (
    <section id="highlights" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Career"
          title="Highlights"
          subtitle="Selected credits across music, film, and live performance."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h.title}
              className="flex items-start gap-5 bg-surface p-6 md:p-8"
            >
              <span
                aria-hidden
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-bg ring-1 ring-line"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal"
                >
                  {ICONS[h.title] ?? <circle cx="12" cy="12" r="6" />}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg leading-tight">
                  {h.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted md:text-[15px]">
                  {h.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
