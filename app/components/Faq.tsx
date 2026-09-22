'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-[760px]">
      <div className="mb-3.5 text-center text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
        FAQ
      </div>
      <h2 className="mb-10 text-center text-[clamp(26px,3.5vw,36px)] font-semibold text-pretty text-brand-purple">
        Common questions
      </h2>

      <div>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-border-hairline">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-body text-base font-semibold transition-colors duration-300 ${
                  isOpen ? 'text-brand-purple' : 'text-ink'
                }`}
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xl font-normal leading-none transition-[transform,background-color,color] duration-400 ease-reveal ${
                    isOpen
                      ? 'rotate-45 bg-brand-peach text-inverse'
                      : 'bg-brand-purple/8 text-brand-purple'
                  }`}
                >
                  +
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-450 ease-reveal ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-12 text-[15px] leading-relaxed text-ink/70">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
