import fs from 'fs';
import path from 'path';
import { Locale } from '@/lib/locale';

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content?: string;
};

function loadPostsFromDisk(lang: Locale): BlogPost[] {
  const dir = path.join(process.cwd(), 'src/content/blog', lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')) as BlogPost);
}

// Fallback in-memory data (used if content dir is missing)
const fallback: Record<Locale, BlogPost[]> = {
  tr: [
    {
      slug: 'canta-omru-nasil-uzar',
      title: 'Bir çantanın ömrü nasıl uzar?',
      category: 'Stil',
      date: 'Mart 2025',
      readTime: '4 dk',
      excerpt: 'Deri bakımı, doğru depolama ve günlük kullanım alışkanlıkları hakkında bilmeniz gerekenler.',
      image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200&q=80',
    },
    {
      slug: 'el-isciliginin-geri-donusu',
      title: 'El işçiliğinin geri dönüşü',
      category: 'Üretim',
      date: 'Şubat 2025',
      readTime: '6 dk',
      excerpt: 'Hızlı modanın gölgesinde, el emeğine verilen değer neden artıyor?',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    },
    {
      slug: 'tasidiklarimiz-bizi-anlatir',
      title: 'Taşıdıklarımız bizi anlatır',
      category: 'Kadın & Şehir',
      date: 'Ocak 2025',
      readTime: '5 dk',
      excerpt: 'Sobroots kadınlarıyla konuştuk. Her biri, çantasını seçerken neye dikkat ediyor?',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
    },
  ],
  en: [
    {
      slug: 'how-to-extend-bag-life',
      title: 'How to extend the life of your bag',
      category: 'Style',
      date: 'March 2025',
      readTime: '4 min',
      excerpt: 'Everything you need to know about leather care, proper storage, and daily use habits.',
      image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200&q=80',
    },
    {
      slug: 'return-of-craftsmanship',
      title: 'The return of craftsmanship',
      category: 'Production',
      date: 'February 2025',
      readTime: '6 min',
      excerpt: "In the shadow of fast fashion, why is the value of handwork rising?",
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    },
    {
      slug: 'what-we-carry-defines-us',
      title: 'What we carry defines us',
      category: 'Women & City',
      date: 'January 2025',
      readTime: '5 min',
      excerpt: "We spoke with Sobroots women. What does each one look for when choosing her bag?",
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
    },
  ],
};

export function getPosts(lang: Locale): BlogPost[] {
  const fromDisk = loadPostsFromDisk(lang);
  return fromDisk.length > 0 ? fromDisk : fallback[lang];
}

export function getPost(lang: Locale, slug: string): BlogPost | undefined {
  return getPosts(lang).find((p) => p.slug === slug);
}
