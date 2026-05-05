import SectionHeader from "@/components/ui/SectionHeader";
import { AWARDS, PRESS_QUOTES } from "@/lib/content";

export default function Press() {
  return (
    <section id="press" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Press & Awards"
          title="Recognition"
          subtitle="Industry awards, nominations, and press coverage."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-muted">
              Awards, Honors & Credits
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {AWARDS.map((a, i) => (
                <li
                  key={i}
                  className="flex min-h-36 items-start gap-5 rounded-xl border border-line bg-surface p-5"
                >
                  <span
                    aria-hidden
                    className="font-display text-2xl leading-none text-white/30"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight">
                      {a.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-muted">
              Press
            </h3>
            <div className="mt-6 space-y-5">
              {PRESS_QUOTES.map((q, i) => (
                <blockquote
                  key={i}
                  className="rounded-xl border border-line bg-surface p-6 md:p-7"
                >
                  <p className="font-display text-lg leading-snug text-white/95 md:text-xl">
                    “{q.quote}”
                  </p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.24em] text-teal">
                    — {q.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
