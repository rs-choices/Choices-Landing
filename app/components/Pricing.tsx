import Reveal from '@/components/Reveal';
import { PRIMARY_CTA, pricingPlans } from '@/lib/content';

export default function Pricing() {
  return (
    <Reveal
      id="pricing"
      className="mx-auto max-w-[1160px] px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)]"
    >
      <div className="mx-auto mb-12 max-w-[640px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
          Pricing
        </div>
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold text-pretty text-brand-purple">
          Simple plans for every venue
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl bg-surface p-8 ${
              plan.highlighted ? 'shadow-card-selected' : 'shadow-card'
            }`}
          >
            {plan.highlighted && (
              <div className="mb-4 inline-block rounded-pill bg-brand-peach px-3 py-1 text-xs font-bold text-inverse">
                Most popular
              </div>
            )}

            <div className="mb-2 text-lg font-semibold text-brand-purple">{plan.name}</div>

            <div className="mb-5 flex items-baseline gap-1.5">
              <span className="text-[32px] font-bold text-ink">{plan.price}</span>
              <span className="text-sm text-ink/60">{plan.period}</span>
            </div>

            <div className="mb-6 flex flex-col gap-2.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-ink/75">
                  <span className="font-bold text-brand-peach">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="#"
              className={`ds-button ds-button-block ${
                plan.variant === 'outline' ? 'ds-button-outline' : ''
              }`}
            >
              {PRIMARY_CTA}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-[13px] text-ink/50">
        Prices in AED, billed monthly. No long-term contract.
      </div>
    </Reveal>
  );
}
