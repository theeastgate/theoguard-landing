import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const APP_URL = 'https://app.theoguard.com';
const SITE_URL = 'https://theoguard.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TheoGuard — AI Theological Analysis for Pastors',
    template: '%s | TheoGuard',
  },
  description:
    'Protect your congregation from false doctrine. Upload sermons, books, or YouTube links and receive a detailed theological soundness report — powered by AI, grounded in orthodoxy.',
  keywords: [
    'theological analysis',
    'doctrinal soundness',
    'pastor tools',
    'church resources',
    'theological review',
    'sermon analysis',
    'false doctrine detection',
    'ministry tools',
    'reformed theology',
    'doctrinal discernment',
  ],
  authors: [{ name: 'TheoGuard' }],
  creator: 'TheoGuard',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'TheoGuard',
    title: 'TheoGuard — AI Theological Analysis for Pastors',
    description:
      'Guard your congregation from false doctrine. Upload any content and receive an expert theological analysis in minutes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TheoGuard — Theological Content Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheoGuard — AI Theological Analysis for Pastors',
    description:
      'Guard your congregation from false doctrine. Upload any content and receive an expert theological analysis in minutes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'TheoGuard',
              description:
                'AI-powered theological content analysis tool for pastors and church leaders.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              url: SITE_URL,
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free',
                  price: '0',
                  priceCurrency: 'USD',
                  description: '5 theological analyses included',
                },
                {
                  '@type': 'Offer',
                  name: 'Monthly',
                  price: '9',
                  priceCurrency: 'USD',
                  billingPeriod: 'P1M',
                  description: 'Unlimited analyses per month',
                },
                {
                  '@type': 'Offer',
                  name: 'Lifetime',
                  price: '179',
                  priceCurrency: 'USD',
                  description: 'Unlimited analyses, one-time payment',
                },
              ],
              audience: {
                '@type': 'Audience',
                audienceType: 'Pastors and Church Leaders',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
