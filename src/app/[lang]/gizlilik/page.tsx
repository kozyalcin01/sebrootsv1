import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { getLegalContent } from '@/lib/legal';
import LegalPage from '@/components/legal-page';

export default async function GizlilikPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const content = getLegalContent('gizlilik', locale);

  return <LegalPage lang={locale} dict={dict} title={dict.legal_pages.gizlilik} content={content} />;
}
