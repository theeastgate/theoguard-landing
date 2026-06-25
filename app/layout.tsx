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

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TheoGuard',
    description:
      'AI-powered theological discernment platform for pastors and church leaders. Three tools: Theological Content Analysis, Worship Song Analysis, and Speaker & Conference Vetting.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'USD',
        description: '4 analyses included — Theological Content Analysis and Worship Song Analysis',
      },
      {
        '@type': 'Offer',
        name: 'Monthly',
        price: '9',
        priceCurrency: 'USD',
        billingPeriod: 'P1M',
        description: 'Unlimited analyses per month — all three tools including Speaker Vetting',
      },
      {
        '@type': 'Offer',
        name: 'Annual',
        price: '79',
        priceCurrency: 'USD',
        billingPeriod: 'P1Y',
        description: 'Unlimited analyses per year — all three tools, save 27%',
      },
      {
        '@type': 'Offer',
        name: 'Lifetime',
        price: '179',
        priceCurrency: 'USD',
        description: 'Unlimited analyses forever — all three tools, all future features',
      },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Pastors, Church Leaders, and Ministry Directors',
    },
    featureList: [
      'Theological Content Analysis (PDF, DOCX, YouTube, books, text)',
      'Worship Song Analysis (lyrics, song search, YouTube)',
      'Speaker & Conference Vetting (name, bio, sermon links)',
      'Doctrinal Soundness Scoring',
      'Psychological Framework Detection',
      'Worldly Philosophy Analysis',
      'Critical Alert System (CRITICAL, HIGH, MEDIUM, LOW)',
      'Confessional Alignment Settings',
      'Analysis History',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheoGuard',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@theoguard.com',
      contactType: 'customer support',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TheoGuard',
    url: SITE_URL,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TheoGuard — AI Theological Discernment for Pastors',
    template: '%s | TheoGuard',
  },
  description:
    'Three AI-powered tools for pastoral discernment: analyze sermons and books for doctrinal soundness, score worship songs theologically, and vet speakers before you invite them. Grounded in historic orthodoxy.',
  keywords: [
    'theological analysis',
    'doctrinal soundness',
    'theological discernment',
    'sermon analysis',
    'false doctrine detection',
    'pastor tools',
    'church resources',
    'theological review',
    'ministry tools',
    'reformed theology',
    'Christian discernment',
    'doctrinal review',
    'worship song analysis',
    'speaker vetting',
    'biblical faithfulness',
    'church leader tools',
    'heresy detection',
    'discernment ministry',
  ],
  authors: [{ name: 'TheoGuard' }],
  creator: 'TheoGuard',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'TheoGuard',
    title: 'TheoGuard — AI Theological Discernment for Pastors',
    description:
      'Analyze sermons and books for doctrinal soundness, score worship songs theologically, and vet speakers — powered by AI, grounded in orthodoxy.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TheoGuard — AI Theological Discernment Tool for Pastors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheoGuard — AI Theological Discernment for Pastors',
    description:
      'Analyze sermons and books for doctrinal soundness, score worship songs theologically, and vet speakers — powered by AI, grounded in orthodoxy.',
    images: ['/og-image.svg'],
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
  other: {
    'application/ld+json': JSON.stringify(structuredData),
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="ai-content-declaration" content="human-created" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
