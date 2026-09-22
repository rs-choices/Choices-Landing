type Variant = 'light' | 'solid';

function AppleMark({ fill }: { fill: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={fill} aria-hidden="true" className="shrink-0">
      <path d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.4-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M3.6 1.8 13.4 12 3.6 22.2c-.35-.2-.6-.6-.6-1.1V2.9c0-.5.25-.9.6-1.1z" fill="#00d7fe" />
      <path d="m16.8 8.6-3.4 3.4-9.8-10.2c.3-.18.7-.2 1.1 0l12.1 6.8z" fill="#00f076" />
      <path d="m16.8 15.4-12.1 6.8c-.4.2-.8.18-1.1 0l9.8-10.2 3.4 3.4z" fill="#ff3a44" />
      <path
        d="M20.4 12c0 .45-.25.87-.66 1.1l-2.94 2.3-3.4-3.4 3.4-3.4 2.94 2.3c.41.23.66.65.66 1.1z"
        fill="#ffd400"
      />
    </svg>
  );
}

export default function StoreBadges({
  variant = 'light',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const base =
    'flex items-center gap-2.5 shadow-badge transition-transform duration-250 hover:-translate-y-[3px]';
  const skin =
    variant === 'solid'
      ? 'bg-brand-purple text-inverse rounded-pill px-[22px] py-3'
      : 'bg-surface text-brand-purple rounded-[14px] px-5 py-2.5';
  const smallOpacity = variant === 'solid' ? 'opacity-85' : 'opacity-75';
  const strongWeight = variant === 'solid' ? 'font-semibold' : 'font-bold';

  return (
    <div className={`flex flex-wrap gap-3.5 ${className}`}>
      <a href="#" aria-label="Download on the App Store" className={`${base} ${skin}`}>
        <AppleMark fill={variant === 'solid' ? '#fff' : '#2E1374'} />
        <span className="flex flex-col items-start leading-[1.1]">
          <span className={`text-[10px] font-medium ${smallOpacity}`}>Download on the</span>
          <span className={`text-base ${strongWeight}`}>App Store</span>
        </span>
      </a>

      <a href="#" aria-label="Get it on Google Play" className={`${base} ${skin}`}>
        <PlayMark />
        <span className="flex flex-col items-start leading-[1.1]">
          <span className={`text-[10px] font-medium ${smallOpacity}`}>GET IT ON</span>
          <span className={`text-base ${strongWeight}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
