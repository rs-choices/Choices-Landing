'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

/* Boots AOS once for the whole page.

   `once: false` plus `mirror: true` is what makes a section animate out again
   when it leaves the viewport and animate back in when it returns, in both
   scroll directions — rather than settling permanently after the first pass.

   The pinned 3.0.0-beta.6 is deliberate: `mirror` is missing from the published
   build of the 2.3.4 "stable" release, so on 2.3.4 a section that scrolls off
   the top stays visible and never fades back out. It is pinned exactly rather
   than caret-ranged so a later beta cannot change the behaviour underneath. */
export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 80,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    /* Images and webfonts settle after init and move everything below them, so
       recompute the trigger positions once the page has finished loading. */
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return null;
}
