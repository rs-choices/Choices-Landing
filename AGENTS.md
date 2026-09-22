<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Choices marketing site

A single-page marketing site for Choices, a UAE app for deciding what to do
nearby. Built from a design file on claude.ai/design. Next.js 16 (App Router,
Turbopack), React 19, TypeScript, Tailwind v4.

## Verify before claiming anything works

```bash
npm run build     # type-checks as part of the build
npm run lint
```

Both must pass clean. There is no test suite; a build plus a look at the page in
a browser is the bar.

## Where things go

| Path | Holds |
| --- | --- |
| `app/components/` | page sections, one file each — used only by `app/page.tsx` |
| `components/` | shared pieces: `Icon`, `StoreBadges`, `Reveal`, `AosProvider` |
| `lib/content.ts` | every string and data list on the page, typed |
| `theme/` | the whole design system |
| `public/assets/` | logo, app screens, photos |

A new section goes in `app/components/` and is added to `app/page.tsx`. Promote
something to `components/` only once a second section needs it.

## Conventions

**Copy lives in `lib/content.ts`.** Do not inline marketing copy, prices or FAQ
entries into a component. Long prose that is structurally part of one section
(the two `WhatIsChoices` paragraphs, the hero headline) is the exception.

**Server components by default.** Only three components carry `'use client'`,
each for a real browser need: `SiteHeader` (scroll state), `Hero` (video
cross-fade), `Faq` (accordion state). `AosProvider` is client-side but renders
nothing. Do not add `'use client'` to a section just to pass a handler — lift the
interactive bit into its own small client component instead.

**Tailwind utilities in the JSX, tokens from `theme/`.** There is no
`tailwind.config.js`; Tailwind v4 reads the `@theme` block in
`theme/tokens/theme.css`. Use the semantic utilities (`bg-brand-purple`,
`text-ink/75`, `bg-surface-peach`, `rounded-pill`, `shadow-card`, `font-button`,
`ease-reveal`) rather than raw hex values or the `fig-*` variables.

**Never define a design token outside `theme/`.** That folder is deliberately
self-contained so the whole design system can be deleted in one step. Only two
lines outside it reference it: the `@import` in `app/globals.css` and the
`fontVariables` import in `app/layout.tsx`. Keep it that way — no new colours,
radii, shadows or font families in component files or in `globals.css`.

**Images go through `next/image`** with explicit `width`/`height`, or `fill` for
the hero backdrop.

## Things that will bite you

**AOS is pinned to `3.0.0-beta.6` on purpose.** Do not "upgrade" it to the 2.3.4
release that npm calls stable: `mirror` is absent from that published build, so
sections that scroll off the top stay visible and never fade back out. The pin is
exact, not caret-ranged, so a later beta cannot change the behaviour underneath.

**Do not remove the `[data-aos]` guards in `app/globals.css`.** `aos.css` sets
`opacity: 0` on every fade element the moment it loads, so without the
`:not(.aos-init)` rule the page renders blank whenever the script fails, is
blocked, or has not run yet. The rules sit outside `@layer` deliberately, so they
outrank `aos.css` whichever order the two stylesheets land in.

**Animation is configured in one place.** Tune timing and behaviour in
`components/AosProvider.tsx`; pick a per-section effect with the `animation` and
`delay` props on `Reveal`. Do not sprinkle `data-aos` attributes directly into
section markup.

**Reduced motion is wired up and should stay that way.** AOS is disabled via its
`disable` option, the hero video never starts, and `globals.css` forces
`[data-aos]` content visible. Any new animation needs the same treatment.

**Two photos are stand-ins.** `public/assets/photos/event-1.jpg` and
`popular-offer-hero.jpg` are crops from an app screenshot, not the originals from
the design project. `public/assets/README.md` records which files are final and
how to swap the rest.

**Store links are placeholders.** The App Store and Google Play hrefs in
`components/StoreBadges.tsx` are `#` until the real listings exist.

## Style of the code itself

Match what is already there: named default exports per component, props typed
inline, comments that explain *why* a piece exists rather than restating the
code, and no comment at all where the code is obvious.
