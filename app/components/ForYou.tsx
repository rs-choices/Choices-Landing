import Image from 'next/image';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import StoreBadges from '@/components/StoreBadges';
import { clientFeatures } from '@/lib/content';

export default function ForYou() {
  return (
    <Reveal
      id="for-you"
      className="relative overflow-hidden bg-brand-purple bg-[radial-gradient(120%_90%_at_85%_10%,rgba(244,114,97,0.35)_0%,rgba(244,114,97,0)_45%)] px-[clamp(20px,5vw,56px)] py-[clamp(64px,9vw,112px)]"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-25 -left-20 size-70 rounded-full bg-white/5"
      />

      <div className="relative z-[1] mx-auto max-w-[1160px]">
        <div className="mb-16 grid items-center gap-14 md:grid-cols-[minmax(280px,1.15fr)_minmax(260px,1fr)]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-brand-peach/20 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
              For you
            </div>

            <h2 className="mb-5 text-[clamp(34px,5vw,56px)] font-bold leading-[1.05] text-pretty text-white">
              Stop scrolling five apps <span className="text-brand-peach">to decide.</span>
            </h2>

            <p className="mb-8 max-w-[480px] text-lg leading-[1.6] text-white/85">
              Choices puts every restaurant, café, lounge and activity near you in one app — with
              live offers and a quick way to agree on plans with friends.
            </p>

            <StoreBadges />
          </div>

          <div className="relative flex justify-center py-6">
            <Image
              src="/assets/app-showcase/categories.png"
              alt="Choices app showing categories, offers and places nearby"
              width={393}
              height={1400}
              className="aspect-[10/19.5] w-[280px] max-w-[80%] rounded-phone border-6 border-brand-purple-deep object-cover object-top shadow-phone"
            />

            <div className="absolute left-0 top-[18%] flex items-center gap-2.5 rounded-lg bg-surface px-3.5 py-2.5 shadow-float max-md:top-[6%] max-[520px]:hidden">
              <div className="flex size-[34px] items-center justify-center rounded-[10px] bg-brand-peach text-[13px] font-bold text-inverse">
                %
              </div>
              <div>
                <strong className="block text-[13px] font-bold text-ink">
                  Free karak with dessert
                </strong>
                <small className="block text-[11px] text-ink/60">
                  Sitti Coffee House · until 11 PM
                </small>
              </div>
            </div>

            <div className="absolute bottom-[16%] right-0 flex items-center gap-2.5 rounded-lg bg-surface px-3.5 py-2.5 shadow-float max-md:bottom-[6%] max-[520px]:hidden">
              <div className="flex size-[34px] items-center justify-center rounded-[10px] bg-brand-teal text-[15px] font-bold text-inverse">
                ✓
              </div>
              <div>
                <strong className="block text-[13px] font-bold text-ink">Plan confirmed</strong>
                <small className="block text-[11px] text-ink/60">4 friends are in for tonight</small>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
          {clientFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/12 bg-white/7 p-7 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-peach/60 hover:bg-white/12"
            >
              <div className="ds-icon-well-peach mb-5 flex items-center justify-center">
                <Icon name={feature.icon} size="lg" />
              </div>
              <div className="mb-2 text-[19px] font-bold leading-tight text-white">
                {feature.title}
              </div>
              <div className="text-[15px] leading-[1.55] text-white/80">{feature.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
