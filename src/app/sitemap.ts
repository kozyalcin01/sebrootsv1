import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { getPosts } from '@/lib/blog';

const BASE = 'https://sobroots.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['tr', 'en'] as const;

  const staticRoutes = ['', '/koleksiyon', '/hikayemiz', '/blog', '/kvkk', '/gizlilik', '/kullanim', '/iade'];

  const staticEntries = locales.flatMap((lang) =>
    staticRoutes.map((route) => ({
      url: `${BASE}/${lang}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          'tr-TR': `${BASE}/tr${route}`,
          'en-US': `${BASE}/en${route}`,
        },
      },
    }))
  );

  const productEntries = locales.flatMap((lang) =>
    products.map((p) => ({
      url: `${BASE}/${lang}/koleksiyon/${p.slug}`,
      lastModified: new Date(),
    }))
  );

  const blogEntries = locales.flatMap((lang) =>
    getPosts(lang).map((p) => ({
      url: `${BASE}/${lang}/blog/${p.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...staticEntries, ...productEntries, ...blogEntries];
}
