import React from "react";
import Image from "next/image";
import { ButtonAnchor } from "@/components/ui/Button";
import { SITE } from "@/lib/content";

const BADGES = [
  "HMMA Winner — Best Pop Song",
  "Music Connection Hot 100",
  "Award Winning Recording Artist",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src="/images/cover-bye-bye.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,transparent_0%,rgba(10,10,11,0.55)_55%,#0A0A0B_95%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="container-x relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-white/80">Official EPK</span>
          <h1 className="h-display mt-5 text-[clamp(3rem,9vw,6.5rem)]">
            Shevyn <span className="neon-text">Roberts</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
            {SITE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonAnchor href="#contact" variant="primary">
              Book Shevyn
            </ButtonAnchor>
            <ButtonAnchor href="#music" variant="outline">
              Listen Now
            </ButtonAnchor>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/70">
            {BADGES.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-teal"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
