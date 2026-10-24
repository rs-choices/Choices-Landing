import Image from 'next/image';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import { businessFeatures, PRIMARY_CTA } from '@/lib/content';

export default function ForBusiness() {
  return (
    <Reveal
      id="for-business"
      className="bg-surface-peach px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)]"
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-14 md:grid-cols-[minmax(260px,1fr)_minmax(260px,1.1fr)]">
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
            For businesses
          </div>
          <h2 className="mb-4.5 text-[clamp(28px,3.8vw,40px)] font-semibold text-pretty text-brand-purple">
            Get discovered by people deciding right now
          </h2>
          <p className="mb-7 max-w-[520px] text-[17px] leading-[1.65] text-ink/75">
            Restaurants, cafés, lounges and activity providers across the UAE use Choices to reach
            nearby customers at the exact moment they&apos;re choosing where to go.
          </p>
          <a className="ds-button" href="#pricing">
            {PRIMARY_CTA}
          </a>
        </div>

        <Image
          src="/assets/photos/popular-offer-hero.jpg"
          alt="A business's offer shown to nearby customers"
          width={1590}
          height={570}
          className="h-[340px] w-full rounded-xl object-cover shadow-card"
        />
      </div>

      <div className="mx-auto mt-12 grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {businessFeatures.map((feature) => (
          <div key={feature.title} className="rounded-xl bg-surface p-7 shadow-card">
            <div className="ds-icon-well mb-4">
              <Icon name={feature.icon} size="sm" />
            </div>
            <div className="mb-2 text-[17px] font-semibold text-ink">{feature.title}</div>
            <div className="text-[15px] leading-[1.55] text-ink/70">{feature.body}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
