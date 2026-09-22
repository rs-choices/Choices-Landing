import Reveal from '@/components/Reveal';
import StoreBadges from '@/components/StoreBadges';

export default function GetTheApp() {
  return (
    <Reveal className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,88px)] text-center">
      <h2 className="mb-3 text-[clamp(24px,3.2vw,32px)] font-semibold text-brand-purple">
        Get the app
      </h2>
      <p className="mb-7 text-base text-ink/70">Discover what&apos;s around you, tonight.</p>
      <StoreBadges variant="solid" className="justify-center gap-4" />
    </Reveal>
  );
}
