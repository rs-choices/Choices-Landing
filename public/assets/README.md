# Assets

Where each file came from, so it is clear which ones are final and which one is
still a stand-in.

## Final

| File | Used by | Source |
| --- | --- | --- |
| `logos/choices-logo.png` | header, footer, favicon | The 252×100 Choices wordmark, byte-identical to `uploads/Logo.png` in the design project. |
| `app-showcase/categories.png` | `ForYou`, `InsideTheApp` | App screen: Discover — category tiles, Plan My Day, swipe-to-match. 1179×3075. |
| `app-showcase/events.png` | `InsideTheApp` | App screen: Events search and featured events, exported at 3×. |
| `app-showcase/discover.png` | `InsideTheApp` | App screen: Events list at 1×. |
| `photos/popular-offer-hero.jpg` | `ForBusiness` | 1080×720 photo of a place. |
| `photos/categories.png` | Open Graph image in `app/layout.tsx` | Same screenshot as `app-showcase/categories.png`. |

## Stand-in

`photos/event-1.jpg` is the hero background. It is a 1590×600 crop from the
high-resolution Events app screen, used because the original in the design
project could not be transferred directly. It is on-brand and correctly
proportioned, but lower resolution than a full-bleed hero ideally wants.

To swap it, export `assets/photos/event-1.jpg` from the **Choices Marketing
Site** design project and overwrite the file. No markup changes are needed — the
path already matches.

## Notes

The Open Graph image is a 1179×3075 portrait screenshot. Social cards crop to
roughly 1.91:1, so most of it will be cut off — a landscape image sized around
1200×630 would preview far better.

The hero also plays three rotating stock clips from Pexels over the still photo.
Those are referenced by URL in `lib/content.ts` (`heroClips`) and are not stored
here.
