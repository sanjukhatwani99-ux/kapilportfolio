# Photographer & Videographer Portfolio

A clean, minimal, single-page portfolio template built with **Next.js (App Router)**,
plain CSS, and hardcoded sample content. No UI frameworks, no animations, no sliders —
just simple, readable code that's easy to extend.

## Tech Stack

- **Next.js 14** (App Router)
- **React** (function components only)
- **Plain CSS** (`app/globals.css` — no Tailwind/Bootstrap)
- No external UI libraries

## Folder Structure

```
photographer-portfolio/
├── app/
│   ├── layout.js        # Root layout, loads global CSS + page metadata
│   ├── page.js           # Home page — composes all sections in order
│   └── globals.css       # All styling for the entire site
├── components/
│   ├── Hero.js           # Name, tagline, background image
│   ├── About.js          # Short bio
│   ├── Photography.js    # Responsive image gallery
│   ├── Videos.js         # YouTube + MP4 video embeds
│   ├── Contact.js        # Email, phone, Instagram
│   └── Footer.js         # Copyright line
├── data/
│   └── content.js        # ALL hardcoded sample content lives here
├── public/
│   ├── images/           # Hero background + gallery photos
│   └── videos/           # Local MP4s (if used instead of YouTube)
├── package.json
└── next.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
npm start
```

## Editing Content

All site text, image paths, and links live in **`data/content.js`**.
You don't need to touch any component to change the name, bio, photos, videos,
or contact details — just edit the values in that one file.

### Replacing placeholder images

The gallery and hero background currently use generated placeholder SVGs
(`/public/images/*.svg`) so the project runs out of the box. To use real photos:

1. Drop your `.jpg`/`.png` files into `public/images/`.
2. Update the `src` / `backgroundImage` paths in `data/content.js` to match.

### Replacing the sample video

The third video entry points to a public sample MP4 for demo purposes.
To use your own file, add it to `public/videos/` and update its `src` in
`data/content.js` (e.g. `/videos/my-reel.mp4`).

## Connecting Sanity CMS Later

This template was structured so that swapping hardcoded content for live
Sanity data is a small, isolated change:

1. Every section component (`Hero.js`, `About.js`, etc.) imports its content
   from `data/content.js` and never hardcodes text inline. The shape of each
   export (`hero`, `about`, `photos`, `videos`, `contact`) already mirrors
   what a Sanity GROQ query would return — flat objects and arrays of objects.
2. To connect Sanity:
   - Install the Sanity client: `npm install @sanity/client`
   - Create a `lib/sanity.js` file with your client config.
   - In `app/page.js`, fetch each section's data with GROQ queries (Next.js
     Server Components can `await` data directly in the page).
   - Pass the fetched data into each component as props instead of importing
     from `data/content.js`.
3. Because component JSX already expects this exact field structure
   (`hero.name`, `photos[].src`, `videos[].type`, etc.), you mainly need to
   match your Sanity schema field names to these same keys — no markup or
   CSS changes required.

## Notes

- No animations, carousels, or sliders are used, per the design brief.
- All images use plain `<img>` tags (not `next/image`) to keep things simple
  and CMS-agnostic — swap in `next/image` later if you want built-in
  optimization for remote Sanity image URLs.
- The gallery and video grids use CSS Grid with `auto`-responsive breakpoints
  — no JavaScript required for layout.
