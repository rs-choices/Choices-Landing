import type { IconName } from '@/components/Icon';

export type Feature = {
  icon: IconName;
  title: string;
  body: string;
};

export type Step = Feature & { n: string };

export type Plan = {
  name: string;
  price: string;
  period: string;
  highlighted: boolean;
  variant: 'default' | 'outline';
  features: string[];
};

export type Faq = {
  q: string;
  a: string;
};

export const PRIMARY_CTA = 'List your business';

export const businessFeatures: Feature[] = [
  {
    icon: 'markerPin',
    title: 'Get discovered by nearby customers',
    body: 'Show up when people close by are deciding where to go, without a big marketing budget.',
  },
  {
    icon: 'calendarEdit',
    title: 'A simple dashboard to post deals',
    body: 'Publish a time-limited offer in minutes and update it whenever you have room to fill.',
  },
  {
    icon: 'clockArrow',
    title: 'Analytics on views and bookings',
    body: 'See how many people viewed your listing, claimed an offer, or booked a table.',
  },
];

export const clientFeatures: Feature[] = [
  {
    icon: 'search',
    title: 'Discover things to do nearby',
    body: 'Browse restaurants, cafés, lounges and activities curated for where you are.',
  },
  {
    icon: 'check',
    title: 'Decide faster with friends',
    body: 'Share picks and settle on a plan instead of a long back-and-forth.',
  },
  {
    icon: 'bookmark',
    title: 'One app instead of five',
    body: 'Restaurants, cafés and activities live in the same place, so you stop switching apps.',
  },
  {
    icon: 'star',
    title: 'Personalized recommendations',
    body: "The more you use Choices, the better it gets at knowing what you're in the mood for.",
  },
];

export const steps: Step[] = [
  {
    n: '01',
    icon: 'user',
    title: 'Create your business profile',
    body: 'Add your venue, hours and photos in a few minutes.',
  },
  {
    n: '02',
    icon: 'plus',
    title: 'Post offers and events',
    body: 'Publish real offers whenever you have room to fill.',
  },
  {
    n: '03',
    icon: 'star',
    title: 'Get discovered and booked',
    body: 'Show up to nearby customers browsing Choices right now.',
  },
];

export const pricingPlans: Plan[] = [
  {
    name: 'Starter',
    price: '299 AED',
    period: '/ month',
    highlighted: false,
    variant: 'outline',
    features: ['Up to 10 active offers', 'Business dashboard', 'Basic support'],
  },
  {
    name: 'Growth',
    price: '799 AED',
    period: '/ month',
    highlighted: true,
    variant: 'default',
    features: [
      'Unlimited offers',
      'Analytics dashboard',
      'Priority placement in search',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlighted: false,
    variant: 'outline',
    features: ['Multiple locations', 'Dedicated account manager', 'API access'],
  },
];

export const faqs: Faq[] = [
  {
    q: 'What is Choices?',
    a: "Choices is a mobile app that helps people in the UAE decide what to do nearby, and helps businesses reach them at the moment they're deciding.",
  },
  {
    q: 'Where is Choices available?',
    a: 'Choices is launching in the UAE, with more cities to follow.',
  },
  {
    q: 'How much does it cost to list my business?',
    a: 'Plans start at 299 AED per month. See the pricing section above for full details.',
  },
  {
    q: 'Do I need a contract?',
    a: 'No long-term contract. Plans are billed monthly and you can cancel anytime.',
  },
  {
    q: 'How do customers find my business?',
    a: 'Customers browse nearby venues and offers in the app. When you post a deal or update your profile, you show up in their search and recommendations.',
  },
];

/* Rotating hero clips, played over the still photo. */
export const heroClips = [
  'https://videos.pexels.com/video-files/5530013/5530013-uhd_2732_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/2099536/2099536-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/8922355/8922355-uhd_2732_1440_25fps.mp4',
];

export const navLinks = [
  { href: '#what-is-choices', label: 'What is Choices' },
  { href: '#for-business', label: 'For business' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#for-you', label: 'For you' },
  { href: '#faq', label: 'FAQ' },
];
