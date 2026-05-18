import { MetadataRoute } from 'next';

const SITE_URL = 'https://theoguard.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date('2026-05-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date('2026-05-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
