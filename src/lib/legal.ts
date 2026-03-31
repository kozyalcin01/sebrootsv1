import fs from 'fs';
import path from 'path';
import { Locale } from '@/lib/locale';

export type LegalSlug = 'kvkk' | 'gizlilik' | 'kullanim' | 'iade';

export function getLegalContent(slug: LegalSlug, lang: Locale): string {
  const file = path.join(process.cwd(), `src/content/legal/${slug}.${lang}.md`);
  if (!fs.existsSync(file)) {
    return lang === 'tr'
      ? 'Bu sayfa yakında içerikle doldurulacaktır.'
      : 'This page will be populated with content soon.';
  }
  return fs.readFileSync(file, 'utf-8');
}
