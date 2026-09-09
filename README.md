# Vibrant Valley

Farm House & Resort Project landing page — React + Vite + Tailwind CSS.

## Requirements

Node 20 or newer (Vite 6 requires it). If you use nvm:

```bash
nvm use 22
```

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Project layout

| File | Contains |
| --- | --- |
| `src/data.js` | All page copy, lists and image paths. Edit text here. |
| `src/ui.jsx` | Shared primitives: `Img`, `Reveal`, `Eyebrow`, `SectionTitle`, `ParallaxImage`, `Logo`. |
| `src/sections.jsx` | The 19 page sections, in page order. |
| `src/chrome.jsx` | Header, marquee, footer, sticky CTA, booking modal. |
| `src/App.jsx` | Page composition and booking-modal state. |
| `src/index.css` | Theme tokens (`:root`), base styles and the custom keyframes. |
| `public/images/` | All 14 images, served locally. |

## Design tokens

Defined in `src/index.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--wheat` | `#F5F2E8` | Light section background |
| `--forest` | `#1B3022` | Dark section background |
| `--terracotta` | `#8E4A35` | Accent, buttons, italics |
| `--dusty-sky` | `#D1DCE5` | Secondary accent |
| `--soil` | `#6B5D4F` | Rules, tertiary text |

Fonts: Cormorant Garamond (`font-display`) and Inter (body), loaded from Google Fonts
in `index.html`.

## Custom animations

`src/index.css` defines `fade-up` (scroll reveal), `marquee`, `float-magnetic`
(sticky CTA), `float-icon`, `scroll-cue`, plus the `.grain-overlay` noise texture.
Scroll reveals use an `IntersectionObserver` (`useReveal` in `src/ui.jsx`);
the parallax on the Experience images uses Framer Motion `useScroll`.

## Receiving booking enquiries

The "Book Site Visit" form POSTs its fields as JSON to whatever URL you put in
`VITE_LEAD_ENDPOINT`. Create a `.env` file next to `package.json`:

```
VITE_LEAD_ENDPOINT=https://your-form-backend.example/submit
```

It works with any form backend (Formspree, Basin, Getform), a CRM webhook, or your
own serverless function. The posted body is:

```json
{ "name": "", "mobile": "", "city": "", "date": "", "visitors": "1", "source": "vibrantvalley.com" }
```

**While that variable is unset the form sends nothing** — it just shows the
confirmation screen. Set it before going live or enquiries will be lost.

## Accessibility & UX notes

- The header switches to light text over the hero and dark text once the cream bar
  appears, so the nav stays legible in both states (12.9:1 and 12.56:1 contrast).
- The booking modal and mobile menu are real dialogs: they trap focus, close on
  `Escape`, lock background scrolling, and restore focus when dismissed.
- `prefers-reduced-motion` is honoured — animations stop but nothing disappears.
- Sections carry `scroll-margin-top` so nav jumps clear the fixed header.

## Notes

- Tailwind is pinned to **v3**. v4 changes how `text-*` and `leading-*` interact,
  which shifts line heights across the page. Keep it on v3.
- The location badge in the header appears at the `2xl` breakpoint and up; below
  that there isn't room for it alongside the nav without the items colliding.
