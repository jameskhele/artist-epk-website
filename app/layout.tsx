import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import React from "react";
import { SITE, SOCIAL, AWARDS } from "@/lib/content";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Official EPK | Award Winning Recording Artist`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Official Electronic Press Kit for Shevyn Roberts — Award Winning Recording Artist from Houston, Texas. Booking, press, and media inquiries.",
  keywords: [
    "Shevyn Roberts",
    "EPK",
    "Electronic Press Kit",
    "Booking",
    "Country Music",
    "Pop Music",
    "Houston Texas",
    "Recording Artist",
    "Hollywood Music in Media Awards",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — Official EPK`,
    description:
      "Award Winning Recording Artist. Booking & press inquiries.",
    url: SITE.url,
    siteName: `${SITE.name} EPK`,
    images: [
      {
        url: "/images/cover-bye-bye.jpg",
        width: 1200,
        height: 1200,
        alt: `${SITE.name} — Bye Bye`,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Official EPK`,
    description: "Award Winning Recording Artist.",
    images: ["/images/cover-bye-bye.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: SITE.name,
  url: SITE.url,
  genre: ["Pop", "Country"],
  image: `${SITE.url}/images/cover-bye-bye.jpg`,
  description:
    "Award Winning Recording Artist from Houston, Texas.",
  award: AWARDS.map((a) => `${a.title} — ${a.detail}`),
  sameAs: [
    SOCIAL.instagram,
    SOCIAL.facebook,
    SOCIAL.tiktok,
    SOCIAL.spotify,
    SOCIAL.appleMusic,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
