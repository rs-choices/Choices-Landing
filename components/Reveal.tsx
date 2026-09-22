import type { ReactNode } from 'react';

/* A page section that fades and lifts into place on entry and back out on exit,
   every time it crosses the viewport edge. The behaviour itself comes from AOS,
   configured once in components/AosProvider.tsx; this component only carries
   the data attributes so the animation is tuned in one place.

   It stays a server component — AOS reads the attributes from the DOM. */
export default function Reveal({
  children,
  className = '',
  id,
  animation = 'fade-up',
  delay,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  animation?: string;
  delay?: number;
}) {
  return (
    <section id={id} className={className} data-aos={animation} data-aos-delay={delay}>
      {children}
    </section>
  );
}
