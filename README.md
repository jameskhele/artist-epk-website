# Shevyn Roberts — Official EPK

A premium, booking-ready Electronic Press Kit website for Shevyn Roberts —
award-winning singer, songwriter, actress, and six-time National Solo Dance
Champion.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Designed for booking agents, managers, labels, press, and award submissions.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the build locally
```

Requires Node.js **18.18+** (Node 20 LTS recommended).

---

## Project structure

```
app/
  layout.tsx         # fonts, SEO metadata, JSON-LD schema, OpenGraph
  page.tsx           # composes all sections in order
  globals.css        # design tokens + Tailwind layers
  sitemap.ts         # auto-generated /sitemap.xml
  robots.ts          # auto-generated /robots.txt
components/
  Nav.tsx Hero.tsx About.tsx Music.tsx Videos.tsx
  Gallery.tsx Press.tsx Highlights.tsx Contact.tsx Footer.tsx
  ui/                # Button, SectionHeader
lib/
  content.ts         # SINGLE SOURCE OF TRUTH for all copy and links
public/
  images/            # release artwork (ships with site)
  press-photos/      # drop editorial press photos here
  logo.jpg           # Shevyn Roberts brush-script logo
  press-kit.zip      # placeholder — replace with real press kit
```

---

## Editing content (no developer required)

**Almost all copy lives in `lib/content.ts`.** Open it, edit, save, redeploy.

| Want to change…                         | Where to edit                                       |
| --------------------------------------- | --------------------------------------------------- |
| Booking / press email                   | `lib/content.ts` → `SITE.bookingEmail`, `pressEmail`|
| Short bio / full bio                    | `lib/content.ts` → `BIO.short`, `BIO.full[]`        |
| Awards list                             | `lib/content.ts` → `AWARDS[]`                       |
| Press quotes                            | `lib/content.ts` → `PRESS_QUOTES[]`                 |
| Career highlights                       | `lib/content.ts` → `HIGHLIGHTS[]`                   |
| Spotify / Apple Music links and embeds  | `lib/content.ts` → `SOCIAL`, `STREAMING`            |
| Instagram / Facebook / TikTok links     | `lib/content.ts` → `SOCIAL`                         |
| Hero photo                              | `components/Hero.tsx` (replace `/images/...` src)   |
| Gallery photos                          | `components/Gallery.tsx` → `TILES` array            |
| YouTube official video                  | `components/Videos.tsx` (search "TODO")             |

### Adding press photos

See `public/press-photos/README.md`. Drop files in that folder, then add
entries to the `TILES` array in `components/Gallery.tsx`.

---

## Deployment — Vercel (recommended)

1. Create a GitHub repo and push this project.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Next.js**. Click **Deploy**. Done.
4. Vercel issues a free `*.vercel.app` URL immediately and an SSL certificate.

Alternative: Netlify works equally well. Use the build command `next build`
and publish directory `.next` (with the Netlify Next.js plugin) or switch to
static export if needed.

---

## Domain — Namecheap → Vercel DNS

You own `shevynroberts.net` at Namecheap. To point it at Vercel:

### 1. Add domain in Vercel

- Vercel Dashboard → your project → **Settings → Domains**.
- Add `shevynroberts.net`. Vercel will display the DNS values you need.
- Add `www.shevynroberts.net` as well.

### 2. Update DNS at Namecheap

- Log in to Namecheap → **Domain List** → **Manage** next to `shevynroberts.net`.
- Open the **Advanced DNS** tab.
- **Delete** any default Namecheap parking records (CNAME `www` → parkingpage,
  URL Redirect, etc.). Do **not** delete email records (MX, TXT) if you have
  email on this domain.
- Add these two records:

| Type  | Host | Value                  | TTL       |
| ----- | ---- | ---------------------- | --------- |
| A     | `@`  | `76.76.21.21`          | Automatic |
| CNAME | `www`| `cname.vercel-dns.com.`| Automatic |

- Save. DNS propagation takes anywhere from 10 minutes to 1 hour (occasionally
  up to 24 hours).

### 3. Confirm SSL

Once Vercel detects the DNS change, it auto-issues a Let's Encrypt SSL
certificate. The Domains panel in Vercel will show a green check next to both
`shevynroberts.net` and `www.shevynroberts.net`.

### 4. Pick a canonical hostname

In Vercel → Domains, set one of the two as the canonical (e.g. apex
`shevynroberts.net`) and the other as a redirect. We recommend the apex.

---

## SEO checklist (already configured)

- `<title>`, meta description, OpenGraph image, Twitter card — `app/layout.tsx`.
- `MusicGroup` JSON-LD structured data — `app/layout.tsx`.
- `/sitemap.xml` and `/robots.txt` auto-generated from `app/sitemap.ts` /
  `app/robots.ts`.
- All images use `next/image` with `alt` text and lazy loading (hero is
  priority-loaded).

After deploy, submit the sitemap to Google Search Console:
`https://shevynroberts.net/sitemap.xml`.

---

## Performance & accessibility targets

- Lighthouse Mobile: Performance ≥ 95, Accessibility ≥ 95, SEO 100.
- WCAG AA color contrast on all text.
- Keyboard-navigable; visible focus rings; skip-to-content link.
- Reduced-motion respected.

---

## v1 limitations (by design)

- **Booking form** uses `mailto:`. To capture submissions server-side, add a
  Next.js API route + Resend (or Formspree) and update `components/Contact.tsx`.
- **Editorial press photos** are not yet included; placeholder slots are shown
  in the gallery. See `public/press-photos/README.md`.
- **Official YouTube video** is a placeholder card; replace in
  `components/Videos.tsx` when the URL is ready.

---

## License & ownership

All artist photography, logos, and copy © Shevyn Roberts. Codebase is private.
