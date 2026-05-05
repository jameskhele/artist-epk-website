import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { RELEASES, STREAMING, SOCIAL } from "@/lib/content";

export default function Music() {
  return (
    <section id="music" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Music"
          title="Latest Releases"
          subtitle="Stream Shevyn's latest single across major platforms."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                Spotify
              </span>
              <a
                href={SOCIAL.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.22em] text-teal hover:text-white"
              >
                Open ↗
              </a>
            </div>
            <iframe
              src={STREAMING.spotifyEmbed}
              width="100%"
              height="232"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Spotify player — Bye Bye"
              className="block"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                Apple Music
              </span>
              <a
                href={SOCIAL.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.22em] text-teal hover:text-white"
              >
                Open ↗
              </a>
            </div>
            <iframe
              src={STREAMING.appleEmbed}
              width="100%"
              height="232"
              loading="lazy"
              allow="autoplay *; encrypted-media *; clipboard-write"
              title="Apple Music player — Bye Bye"
              className="block bg-white"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-sm uppercase tracking-[0.24em] text-muted">
            Discography
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {RELEASES.map((r) => (
              <li
                key={r.title}
                className="group relative overflow-hidden rounded-xl border border-line bg-surface"
              >
                <div className="relative aspect-square">
                  <Image
                    src={r.image}
                    alt={`${r.title} — single artwork`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="font-display text-base">{r.title}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Single
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
