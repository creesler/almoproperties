import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Almo Properties - Real Estate Management',
  description: 'Professional real estate management services for your property portfolio.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://almoproperties.com/',
    siteName: 'Almo Properties',
    title: 'Almo Properties - Real Estate Management',
    description: 'Professional real estate management services for your property portfolio.',
    images: [
      {
        url: '/logo/logoblack.png',
        width: 800,
        height: 600,
        alt: 'Almo Properties',
      },
    ],
  },
  twitter: {
    handle: '@almoproperties',
    site: '@almoproperties',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/logo/ico.png',
    },
  ],
}; 