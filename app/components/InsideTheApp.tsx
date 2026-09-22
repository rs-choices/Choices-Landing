import Image from 'next/image';
import Reveal from '@/components/Reveal';

const screens = [
  { src: '/assets/app-showcase/events.png', alt: 'Choices Discover screen', front: false },
  {
    src: '/assets/app-showcase/categories.png',
    alt: 'Choices categories and offers screen',
    front: true,
  },
  { src: '/assets/app-showcase/discover.png', alt: 'Discover Events screen', front: false },
];

export default function InsideTheApp() {
  return (
    <Reveal className="bg-[linear-gradient(180deg,#fff_0%,rgba(244,114,97,0.05)_100%)] px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-purple">
            Inside the app
          </div>
          <h2 className="mb-4.5 text-[clamp(28px,3.8vw,40px)] font-semibold text-pretty text-brand-purple">
            What customers see when they open Choices
          </h2>
          <p className="text-[17px] leading-[1.65] text-ink/75">
            Nearby venues show up as cards with a photo, a live offer, and one tap through to view
            details, save, or book — this is the moment your business gets discovered.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-[clamp(12px,3vw,40px)]">
          {screens.map((screen) => (
            <Image
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              width={393}
              height={1400}
              className={`aspect-[9/19.5] h-auto rounded-[32px] object-cover object-top [image-rendering:-webkit-optimize-contrast] max-md:mt-0 max-md:w-[220px] max-md:max-w-[45%] ${
                screen.front
                  ? 'z-[2] w-[360px] max-w-[32%] shadow-screen-front'
                  : 'z-[1] mt-16 w-[320px] max-w-[32%] shadow-screen'
              }`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
