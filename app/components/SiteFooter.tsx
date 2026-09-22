import Image from 'next/image';

const productLinks = [
  { href: '#for-business', label: 'For business' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#for-you', label: 'For you' },
  { href: '#faq', label: 'FAQ' },
];

const companyLinks = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Terms' },
];

function LinkColumn({ heading, links }: { heading: string; links: typeof productLinks }) {
  return (
    <div>
      <div className="mb-3 text-[13px] uppercase tracking-[0.5px] opacity-60">{heading}</div>
      <div className="flex flex-col gap-2 text-sm">
        {links.map((link, i) => (
          <a
            key={`${link.label}-${i}`}
            href={link.href}
            className="text-inverse opacity-90 transition-colors hover:text-brand-peach hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-brand-purple px-[clamp(20px,5vw,56px)] pb-7 pt-14 text-inverse">
      <div className="mx-auto mb-10 flex max-w-[1160px] flex-wrap gap-14">
        <div className="max-w-[260px]">
          <Image
            src="/assets/logos/choices-logo.png"
            alt="Choices"
            width={252}
            height={100}
            className="mb-4 block h-[34px] w-auto brightness-0 invert"
          />
          <div className="text-[13px] leading-relaxed opacity-75">Dubai, United Arab Emirates</div>
          <div className="text-[13px] leading-relaxed opacity-75">hello@choicesapp.ae</div>
        </div>

        <LinkColumn heading="Product" links={productLinks} />
        <LinkColumn heading="Company" links={companyLinks} />
      </div>

      <div className="mx-auto max-w-[1160px] border-t border-white/15 pt-5 text-xs opacity-60">
        © 2026 Choices. Choices Made Easy. Made for the UAE.
      </div>
    </footer>
  );
}
