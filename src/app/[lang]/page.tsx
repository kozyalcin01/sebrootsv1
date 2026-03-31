import { Metadata } from 'next';
import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { getPageMeta } from '@/lib/seo';
import Navbar from '@/components/navbar';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return getPageMeta('home', lang as Locale);
}
import Hero from '@/components/hero';
import Collection from '@/components/collection';
import Story from '@/components/story';
import Blog from '@/components/blog';
import Mailing from '@/components/mailing';
import Footer from '@/components/footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navbar lang={locale} dict={dict} />
      <main>
        <Hero lang={locale} dict={dict} />
        <Collection lang={locale} dict={dict} />
        <Story lang={locale} dict={dict} />
        <Blog lang={locale} dict={dict} />
        <Mailing lang={locale} dict={dict} />
      </main>
      <Footer lang={locale} dict={dict} />
    </>
  );
}
