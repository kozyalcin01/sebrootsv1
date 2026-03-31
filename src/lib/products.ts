import fs from 'fs';
import path from 'path';
import { Locale } from '@/lib/locale';

export type Product = {
  id: number;
  slug: string;
  name: { tr: string; en: string };
  subtitle: { tr: string; en: string };
  tag: { tr: string; en: string };
  soldOut: boolean;
  image: string;
  tagline?: { tr: string; en: string };
  description?: { tr: string; en: string };
  features?: { tr: string[]; en: string[] };
};

function loadFromDisk(): Product[] {
  const file = path.join(process.cwd(), 'src/content/products/products.json');
  if (!fs.existsSync(file)) return [];
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  return data.products as Product[];
}

const fallback: Product[] = [
  {
    id: 1,
    slug: 'toprak',
    name: { tr: 'Toprak', en: 'Toprak' },
    subtitle: { tr: 'Deri Omuz Çantası', en: 'Leather Shoulder Bag' },
    tag: { tr: 'Sınırlı — 12 Adet', en: 'Limited — 12 Pieces' },
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
  },
  {
    id: 2,
    slug: 'kil',
    name: { tr: 'Kıl', en: 'Kıl' },
    subtitle: { tr: 'Mini Tote Çanta', en: 'Mini Tote Bag' },
    tag: { tr: 'Yeni Sezon', en: 'New Season' },
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
  },
  {
    id: 3,
    slug: 'koy',
    name: { tr: 'Köy', en: 'Köy' },
    subtitle: { tr: 'Kapaklı Çapraz Çanta', en: 'Flap Crossbody Bag' },
    tag: { tr: 'Son 3 Adet', en: 'Last 3 Pieces' },
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
  },
  {
    id: 4,
    slug: 'tas',
    name: { tr: 'Taş', en: 'Taş' },
    subtitle: { tr: 'Clutch', en: 'Clutch' },
    tag: { tr: 'Tükendi', en: 'Sold Out' },
    soldOut: true,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
  },
];

let _cache: Product[] | null = null;

export function getProducts(): Product[] {
  if (!_cache) {
    const fromDisk = loadFromDisk();
    _cache = fromDisk.length > 0 ? fromDisk : fallback;
  }
  return _cache;
}

// Named export for backwards compat with existing imports
export const products = getProducts();

export function getProduct(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function localizedTag(product: Product, lang: Locale): string {
  return product.tag[lang];
}
