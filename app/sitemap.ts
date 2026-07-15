import { MetadataRoute } from 'next';

const SITE_URL = 'https://theoguard.com';

// Bump when page content meaningfully changes so lastModified stays stable
// across builds (previously used `new Date()`, which churned every build).
const CONTENT_UPDATED = new Date('2026-06-25');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/content-analysis`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/worship-song-analysis`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/speaker-vetting`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
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
