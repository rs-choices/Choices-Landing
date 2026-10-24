'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import StoreBadges from '@/components/StoreBadges';
import { heroClips } from '@/lib/content';

const SEGMENT = 6.5; // seconds a clip holds before the next one fades in
const CROSSFADE = 1.0; // seconds of overlap

/* Two stacked <video> elements alternate: one plays while the other preloads
   the next clip, then they cross-fade. The still photo behind them carries the
   hero until a clip is actually playing, and is all that shows when motion is
   reduced or video cannot play. */
export default function Hero() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = [videoA.current, videoB.current];
    if (!els[0] || !els[1]) return;
    const videos = els as HTMLVideoElement[];

    let started = false;
    let active = 0;
    let clip = 0;
    let t0 = 0;
    let fading = false;
    let raf = 0;

    const play = (v: HTMLVideoElement) => {
      void v.play().catch(() => {});
    };
    const load = (v: HTMLVideoElement, i: number) => {
      v.src = heroClips[i];
      v.load();
    };

    videos.forEach((v) => {
      v.muted = true;
      v.loop = true;
      v.style.opacity = '0';
    });

    const onPlaying = () => {
      if (started) return;
      started = true;
      videos[0].style.opacity = '1';
      t0 = performance.now();
    };
    videos[0].addEventListener('playing', onPlaying, { once: true });

    load(videos[0], 0);
    play(videos[0]);

    const tick = () => {
      if (started && heroClips.length > 1) {
        const elapsed = (performance.now() - t0) / 1000;
        const current = videos[active];
        const next = videos[1 - active];

        if (!fading && elapsed >= SEGMENT - CROSSFADE) {
          fading = true;
          clip = (clip + 1) % heroClips.length;
          load(next, clip);
          play(next);
        }

        if (fading) {
          const t = Math.min(1, Math.max(0, (elapsed - (SEGMENT - CROSSFADE)) / CROSSFADE));
          current.style.opacity = String(1 - t);
          next.style.opacity = String(t);
          if (t >= 1) {
            current.pause();
            active = 1 - active;
            fading = false;
            t0 = performance.now();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      videos[0].removeEventListener('playing', onPlaying);
      videos.forEach((v) => v.pause());
    };
  }, []);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden">
      <Image
        src="/assets/photos/event-1.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <video
        ref={videoA}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-0"
      />
      <video
        ref={videoB}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-0"
      />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(20,8,48,0.82)_0%,rgba(20,8,48,0.55)_45%,rgba(20,8,48,0.2)_75%)]" />

      <div className="relative z-[2] max-w-[560px] px-[clamp(20px,5vw,56px)] py-[clamp(40px,7vw,88px)]">
        <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-white/15 px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.4px] text-white">
          Now live in the UAE
        </div>

        <h1 className="mb-5 text-[clamp(34px,4.5vw,54px)] font-semibold leading-[1.08] text-pretty text-white">
          Choices helps people decide what to do and helps businesses get chosen.
        </h1>

        <p className="mb-8 max-w-[480px] text-lg leading-[1.55] text-white/90">
          One app for discovering restaurants, cafés, lounges and activities nearby, instead of five
          apps and a long group chat. For businesses, it&apos;s a direct line to customers deciding right
          now.
        </p>

        <StoreBadges />
      </div>
    </section>
  );
}
