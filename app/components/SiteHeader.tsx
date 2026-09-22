'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks, PRIMARY_CTA } from '@/lib/content';

/* Transparent over the hero, white once the page scrolls past it. */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-4 transition-[background-color,box-shadow] duration-350 max-md:gap-3 ${
        scrolled ? 'bg-surface shadow-[0_2px_16px_rgba(0,0,0,0.1)]' : 'bg-transparent'
      }`}
    >
      <a href="#" aria-label="Choices home" className="flex items-center">
        <Image
          src="/assets/logos/choices-logo.png"
          alt="Choices"
          width={252}
          height={100}
          priority
          className={`block h-[34px] w-auto transition-[filter] duration-350 ${
            scrolled ? '' : 'brightness-0 invert'
          }`}
        />
      </a>

      <nav
        aria-label="Primary"
        className="flex flex-wrap gap-7 text-[15px] max-md:order-3 max-md:w-full max-md:gap-[18px] max-md:text-sm max-[520px]:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`transition-colors duration-350 hover:text-brand-peach ${
              scrolled ? 'text-ink/85' : 'text-white/95'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="ds-button" href="#for-business">
        {PRIMARY_CTA}
      </a>
    </header>
  );
}
