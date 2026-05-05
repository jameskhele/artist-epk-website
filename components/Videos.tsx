import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Watch"
          title="Live, Visuals & Reels"
          subtitle="Performance footage, official visuals, and social highlights."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-teal/40">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                Official Music Video
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-teal">
                New Release
              </span>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/4OAwVGgFc_M"
                title="Bye Bye – Shevyn Roberts (Official Music Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl">Bye Bye</h3>
              <p className="mt-2 text-sm text-muted">
                Official music video for the high-energy country pop breakup anthem.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-pink/40">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                Official Music Video
              </span>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/8bxjQ3h-Mrs"
                title="Someone Else’s Son – Shevyn Roberts (Official Music Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl">Someone Else&apos;s Son</h3>
              <p className="mt-2 text-sm text-muted">
                Heartfelt country pop ballad about growth and relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
