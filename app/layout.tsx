import type { Metadata } from 'next';
import AosProvider from '@/components/AosProvider';
import { fontVariables } from '@/theme/fonts';
import './globals.css';

/* Swap for the production origin once the site has a domain. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://choicesapp.ae';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Choices — Decide what to do. Get discovered doing it. | UAE',
  description:
    'Choices is the app that helps people in the UAE decide what to do tonight, and helps restaurants, cafés and activities get discovered by customers deciding right now. List your business or get the app.',
  keywords: [
    'Choices app',
    'things to do UAE',
    'Dubai activities app',
    'list your business UAE',
    'restaurant marketing app',
    'discover events near me',
  ],
  robots: { index: true, follow: true },
  icons: { icon: '/assets/logos/choices-logo.png' },
  openGraph: {
    type: 'website',
    title: 'Choices — Decide what to do. Get discovered doing it.',
    description:
      'One app for discovering restaurants, cafés and activities in the UAE — and a simple way for businesses to get discovered by nearby customers.',
    images: ['/assets/photos/categories.png'],
    locale: 'en_AE',
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Choices',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  description:
    'Choices helps people in the UAE decide what to do nearby and helps local businesses get discovered by customers deciding in real time.',
  areaServed: 'United Arab Emirates',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="max-w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
