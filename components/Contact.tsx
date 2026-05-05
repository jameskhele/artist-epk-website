"use client";

import { useState, type FormEvent } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/content";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const org = String(data.get("organization") || "").trim();
    const date = String(data.get("date") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Booking Inquiry — ${name || "New Inquiry"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org}`,
      `Event date: ${date}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${SITE.bookingEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Booking & Press Inquiries"
            subtitle="For booking, festivals, press, and management opportunities, please reach out below or email directly."
          />
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-muted">
                Booking
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.bookingEmail}`}
                  className="font-display text-xl text-white hover:text-teal"
                >
                  {SITE.bookingEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-muted">
                Press
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.pressEmail}`}
                  className="font-display text-xl text-white hover:text-teal"
                >
                  {SITE.pressEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-muted">
                Based In
              </dt>
              <dd className="mt-1 font-display text-xl">Houston, Texas</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-surface p-6 md:p-8"
          aria-label="Booking inquiry form"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field
              label="Organization / Venue"
              name="organization"
              type="text"
            />
            <Field label="Event date" name="date" type="date" />
          </div>

          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-[0.24em] text-muted">
              Message
            </span>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-teal focus:outline-none"
              placeholder="Tell us about the event, dates, and budget."
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neon-gradient px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(255,45,135,0.35)] transition hover:brightness-110 disabled:opacity-60 md:w-auto"
          >
            {submitting ? "Opening Mail…" : "Send Inquiry"}
          </button>
          <p className="mt-3 text-xs text-muted">
            Submitting opens your email client with a pre-filled message to{" "}
            {SITE.bookingEmail}.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.24em] text-muted">
        {label}
        {required && <span className="ml-1 text-pink">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-teal focus:outline-none"
      />
    </label>
  );
}
