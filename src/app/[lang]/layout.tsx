import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isValidLocale, Locale } from '@/lib/locale';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { Analytics } from '@vercel/analytics/react';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isTr = lang === 'tr';
  return {
    title: 'Sobroots — Carry Your Roots',
    description: isTr
      ? 'Köklerinden güç alan kadınlar için el yapımı deri çantalar. Sınırlı üretim, zamansız tasarım.'
      : 'Handmade leather bags for women who carry their roots. Limited production, timeless design.',
    keywords: isTr
      ? ['el yapımı deri çanta', 'butik çanta', 'sınırlı üretim', 'sobroots', 'kadın çantası']
      : ['handmade leather bag', 'boutique bag', 'limited production', 'sobroots'],
    openGraph: {
      title: 'Sobroots — Carry Your Roots',
      description: isTr
        ? 'El yapımı deri çantalar. Sınırlı üretim, zamansız tasarım.'
        : 'Handmade leather bags. Limited production, timeless design.',
      type: 'website',
      locale: isTr ? 'tr_TR' : 'en_US',
      alternateLocale: isTr ? 'en_US' : 'tr_TR',
    },
    alternates: {
      canonical: `https://sobroots.com/${lang}`,
      languages: {
        'tr-TR': 'https://sobroots.com/tr',
        'en-US': 'https://sobroots.com/en',
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <html
      lang={lang as Locale}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased grain`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <div className="page-enter flex flex-col flex-1">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
