import Reveal from '@/components/Reveal';

export default function WhatIsChoices() {
  return (
    <Reveal
      id="what-is-choices"
      className="mx-auto max-w-[900px] px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,96px)] text-center"
    >
      <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1px] text-brand-peach">
        What is Choices
      </div>
      <h2 className="mb-6 text-[clamp(26px,3.5vw,36px)] font-semibold text-pretty text-brand-purple">
        A shared way to decide, and a shared way to be found
      </h2>
      <p className="mb-4 text-[17px] leading-[1.7] text-ink/75">
        Choices is a mobile app for discovering and deciding what to do nearby — restaurants, cafés,
        lounges and activities across the UAE, in one place instead of scattered across different
        apps and long group chats.
      </p>
      <p className="text-[17px] leading-[1.7] text-ink/75">
        For the businesses behind those places, Choices is a direct line to people who are deciding
        right now. List your business, post real offers, and get discovered by customers nearby — no big
        marketing budget required.
      </p>
    </Reveal>
  );
}
