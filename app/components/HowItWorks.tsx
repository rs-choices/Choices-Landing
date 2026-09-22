import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import { steps } from '@/lib/content';

export default function HowItWorks() {
  return (
    <Reveal className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)]">
      <div className="mx-auto mb-12 max-w-[600px] text-center">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
          How it works
        </div>
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold text-pretty text-brand-purple">
          List your business in three steps
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
        {steps.map((step) => (
          <div
            key={step.n}
            className="relative rounded-xl bg-surface p-7 shadow-step transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-step-hover"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="ds-icon-well ds-icon-well-square">
                <Icon name={step.icon} size="md" />
              </div>
              <div className="text-4xl font-extrabold leading-none text-brand-peach/85">
                {step.n}
              </div>
            </div>
            <div className="mb-2 text-lg font-semibold text-ink">{step.title}</div>
            <div className="text-[15px] leading-[1.55] text-ink/70">{step.body}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
