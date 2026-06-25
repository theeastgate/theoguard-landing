import type { Metadata } from 'next';

const SITE_URL = 'https://theoguard.com';
const SITE_NAME = 'TheoGuard';
const DEFAULT_OG_IMAGE = '/og-image.svg';

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
}: SEOOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
