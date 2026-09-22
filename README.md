# Choices marketing site

Next.js 16 (App Router, Turbopack) + Tailwind v4, built from the **Choices
Marketing Site** design file on claude.ai/design.

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

## Layout

```
app/
├── layout.tsx            metadata, JSON-LD, font variables, AOS boot
├── page.tsx              section order
├── globals.css           Tailwind + the theme + the AOS guards
└── components/           one file per page section
components/               shared pieces: Icon, StoreBadges, Reveal, AosProvider
lib/content.ts            all page copy and data, typed
theme/                    the design system — see theme/README.md
public/assets/            logo, app screens, photos — see public/assets/README.md
```

Page sections live in `app/components/` because they only ever appear on this
page; anything reused across sections sits in the top-level `components/`.

Copy lives in `lib/content.ts`, not in the components, so wording, pricing and
FAQ entries change without touching layout.

## Server and client components

Everything renders on the server except three components that need the browser:

| Component | Why it is a client component |
| --- | --- |
| `SiteHeader` | goes from transparent to white past 80px of scroll |
| `Hero` | cross-fades two `<video>` elements over the still photo |
| `Faq` | accordion open state |

`AosProvider` is a fourth, but it renders nothing — it only calls `AOS.init()`
once for the page.

`Reveal` stays a server component: it just puts `data-aos` attributes on a
`<section>`, and AOS reads them from the DOM.

All of it respects `prefers-reduced-motion` — AOS is disabled outright, the hero
video never starts, and the still hero photo carries that section on its own.

## Section animation

Sections fade and lift in when they enter the viewport and fade back out when
they leave, in both scroll directions, every time — handled by
[AOS](https://michalsnik.github.io/aos/), configured in one place in
`components/AosProvider.tsx` (`once: false`, `mirror: true`).

To change how a section animates, pass a different AOS animation to `Reveal`:

```tsx
<Reveal id="pricing" animation="fade-right" delay={100} className="…">
```

Two things worth knowing:

- **AOS is pinned to `3.0.0-beta.6`, on purpose.** `mirror` is missing from the
  published build of the 2.3.4 "stable" release, so on 2.3.4 a section that
  scrolls off the top stays visible and never fades back out.
- `app/globals.css` keeps `[data-aos]` content visible until AOS has marked it
  with `.aos-init`. Without that guard, `aos.css` sets `opacity: 0` on every
  fade element as soon as it loads, and the page would be blank if the script
  failed or never ran.

## Styling

Tailwind utilities in the JSX; design tokens and the few component classes
(`ds-button`, `ds-icon`) come from `theme/`. There is no `tailwind.config.js` —
Tailwind v4 reads the `@theme` block in `theme/tokens/theme.css`, and every
token there becomes a utility (`bg-brand-purple`, `text-ink/75`, `rounded-pill`,
`shadow-card`, `ease-reveal`).

Fonts are Plus Jakarta Sans and Montserrat, self-hosted through `next/font` in
`theme/fonts.ts`. See `theme/README.md` for the full token table and why those
two families stand in for the ones named in Figma.

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` to the real origin so Open Graph image URLs
  resolve (it falls back to `https://choicesapp.ae`).
- Point the App Store and Google Play links in `components/StoreBadges.tsx` at
  the real listings; they are `#` today.
- Replace the hero stand-in photo described in `public/assets/README.md`.
- Swap the Open Graph image for a landscape one. It currently points at a
  1179×3075 portrait screenshot, and social cards crop to roughly 1.91:1.
