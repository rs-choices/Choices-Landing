import Faq from '@/app/components/Faq';
import ForBusiness from '@/app/components/ForBusiness';
import ForYou from '@/app/components/ForYou';
import GetTheApp from '@/app/components/GetTheApp';
import Hero from '@/app/components/Hero';
import HowItWorks from '@/app/components/HowItWorks';
import InsideTheApp from '@/app/components/InsideTheApp';
import Pricing from '@/app/components/Pricing';
import Reveal from '@/components/Reveal';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import WhatIsChoices from '@/app/components/WhatIsChoices';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <WhatIsChoices />
        <ForBusiness />
        <Pricing />
        <ForYou />
        <InsideTheApp />
        <HowItWorks />

        <Reveal
          id="faq"
          className="bg-surface-peach px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)]"
        >
          <Faq />
        </Reveal>

        <GetTheApp />
      </main>

      <SiteFooter />
    </>
  );
}
