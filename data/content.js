/**
 * Hardcoded sample content for the portfolio site.
 *
 * NOTE FOR FUTURE SANITY CMS INTEGRATION:
 * Each exported object/array below is shaped the way a Sanity query result
 * would be shaped (flat fields, arrays of objects with simple keys).
 * When connecting Sanity later, you can replace each export with a fetch
 * to your Sanity client (e.g. `await client.fetch(query)`) and keep the
 * component code untouched, since components only read these field names.
 */

export const hero = {
  name: "Alex Carter",
  tagline: "Photographer & Videographer capturing real, unscripted moments.",
  // Placeholder asset included so the project runs out of the box.
  // Replace with a real photo at /public/images/hero-bg.jpg (or your own filename).
  backgroundImage: "/images/hero-bg.svg",
};

export const about = {
  heading: "About Me",
  bio:
    "I'm a freelance photographer and videographer based in Ahmedabad, India, " +
    "with over 6 years of experience telling stories through stills and motion. " +
    "I work with brands, couples, and creators to capture moments that feel " +
    "honest and lasting — from weddings and portraits to short documentary films.",
};

// Placeholder assets included so the project runs out of the box.
// Replace src with real photos (e.g. /images/photo-1.jpg) when available.
export const photos = [
  { id: 1, src: "/images/photo-1.svg", alt: "Portrait in natural light" },
  { id: 2, src: "/images/photo-2.svg", alt: "Candid street photography" },
  { id: 3, src: "/images/photo-3.svg", alt: "Golden hour landscape" },
  { id: 4, src: "/images/photo-4.svg", alt: "Wedding ceremony moment" },
  { id: 5, src: "/images/photo-5.svg", alt: "Studio fashion shoot" },
  { id: 6, src: "/images/photo-6.svg", alt: "Black and white portrait" },
];

export const videos = [
  {
    id: 1,
    title: "Wedding Highlight Film — Riya & Dev",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Brand Commercial — Local Coffee Co.",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Behind the Scenes — Studio Shoot",
    type: "mp4",
    // Placeholder sample video so the page works out of the box.
    // Replace with your own file at /public/videos/your-file.mp4 when ready.
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
];

export const contact = {
  heading: "Get In Touch",
  message: "Available for bookings, collaborations, and freelance work.",
  email: "hello@alexcarter.com",
  phone: "+91 98765 43210",
  instagram: "https://instagram.com/alexcarter.visuals",
  instagramHandle: "@alexcarter.visuals",
};

export const siteMeta = {
  title: "Alex Carter | Photographer & Videographer",
  description:
    "Portfolio of Alex Carter, a photographer and videographer specializing in weddings, portraits, and brand films.",
};
