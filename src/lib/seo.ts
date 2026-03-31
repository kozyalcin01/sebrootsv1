import fs from 'fs';
import path from 'path';
import { Locale } from '@/lib/locale';
import { Metadata } from 'next';

type PageMeta = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
};

type MetadataFile = {
  pages: Record<string, { tr: PageMeta; en: PageMeta }>;
};

function loadMeta(): MetadataFile | null {
  const file = path.join(process.cwd(), 'src/content/seo/metadata.json');
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

export function getPageMeta(page: string, lang: Locale): Metadata {
  const data = loadMeta();
  const meta = data?.pages?.[page]?.[lang];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
    },
    alternates: {
      languages: {
        'tr-TR': `https://sobroots.com/tr`,
        'en-US': `https://sobroots.com/en`,
      },
    },
  };
}
