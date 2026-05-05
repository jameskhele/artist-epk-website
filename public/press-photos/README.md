# Press Photos

Drop high-resolution editorial press photos in this folder, then update the
gallery tile list in `components/Gallery.tsx` (the `TILES` array near the top).

## Recommended specs

- **Format:** JPG (sRGB) or WebP. PNG only for logos/transparency.
- **Resolution:** at least 2000px on the longest edge.
- **Aspect:** square (1:1) or portrait (3:4) renders best in the grid.
- **Naming:** lowercase slugs only — `shevyn-press-01.jpg`, `live-2025-houston.jpg`.

## After dropping files

1. Edit `components/Gallery.tsx`.
2. Add an entry to `TILES`: `{ src: "/press-photos/your-file.jpg", alt: "..." }`.
3. Remove the dashed "Press Photo — replace" placeholder tiles in the same file.
4. (Optional) Build a real ZIP from these files and replace `public/press-kit.zip`.

## Press kit ZIP

The "Download Press Kit" button on the gallery section links to
`/press-kit.zip`. Replace the placeholder file in `/public/press-kit.zip` with
a real ZIP containing photos + a one-page bio PDF when ready.
