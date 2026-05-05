import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const TILES = [
  { src: "/images/cover-bye-bye.jpg", alt: "Bye Bye — single artwork" },
  { src: "/images/cover-im-that-girl.jpg", alt: "I'm That Girl — single artwork" },
  {
    src: "/images/cover-two-story-town.png",
    alt: "Two Story Town — single artwork",
  },
  {
    src: "/images/cover-levitating-remix.png",
    alt: "Levitating (Remix) — single artwork",
  },
  {
    src: "/images/cover-if-i-had-it-my-way.jpg",
    alt: "If I Had It My Way — single artwork",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-surface/40">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Gallery"
            title="Photos & Press Imagery"
            subtitle="High-resolution imagery available for booking, press, and award submissions."
          />
          <a
            href="/press-kit.zip"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-white hover:bg-white/5"
          >
            Download Press Kit
            <span aria-hidden>↓</span>
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
          {TILES.map((t) => (
            <li
              key={t.src}
              className="group relative overflow-hidden rounded-xl border border-line bg-surface"
            >
              <div className="relative aspect-square">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
