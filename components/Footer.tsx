import { SITE, SOCIAL } from "@/lib/content";

const SOCIALS = [
  { href: SOCIAL.instagram, label: "Instagram", icon: InstagramIcon },
  { href: SOCIAL.facebook, label: "Facebook", icon: FacebookIcon },
  { href: SOCIAL.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: SOCIAL.spotify, label: "Spotify", icon: SpotifyIcon },
  { href: SOCIAL.appleMusic, label: "Apple Music", icon: AppleIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-12">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl">{SITE.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted">
            Official EPK · {SITE.domain}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-3">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white transition hover:border-teal hover:text-teal"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-x mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
        <span className="uppercase tracking-[0.24em]">
          Booking · Press · Awards
        </span>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 22v-8h3l1-4h-4V7.5C13 6.6 13.4 6 14.7 6H17V2.4C16.6 2.3 15.4 2 14.1 2 11.5 2 10 3.6 10 6.6V10H7v4h3v8h3z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3v3.2c1 1 2.3 1.6 3.8 1.6V11c-1.4 0-2.7-.4-3.8-1v6.5a5.5 5.5 0 11-5.5-5.5c.3 0 .7 0 1 .1V14a2.5 2.5 0 102.5 2.5V3H16z" />
    </svg>
  );
}
function SpotifyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 14.4c-.2.3-.6.4-.9.2-2.4-1.5-5.5-1.8-9-1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 3.9-.9 7.3-.5 10 1.2.4.2.5.6.2.9zm1.2-2.7c-.3.4-.7.5-1.1.3-2.8-1.7-7-2.2-10.3-1.2-.4.1-.9-.1-1-.6s.1-.9.6-1c3.7-1.1 8.4-.6 11.6 1.4.4.2.5.7.2 1.1zm.1-2.8C14.5 8.9 9 8.7 5.7 9.7c-.5.2-1.1-.1-1.3-.7-.2-.5.1-1.1.7-1.3 3.8-1.1 9.9-.9 13.7 1.4.5.3.7.9.4 1.4-.3.5-.9.7-1.3.4z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.6 1.3-.1 1.8-.9 3.4-.9 1.6 0 2.1.9 3.4.8 1.4 0 2.3-1.2 3.2-2.5 1-1.4 1.4-2.8 1.4-2.9-.1-.1-2.7-1-2.7-3.9zm-2.6-7.3c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.6.7-1.2 2-1 3.2 1.1.1 2.2-.6 2.9-1.5z" />
    </svg>
  );
}
