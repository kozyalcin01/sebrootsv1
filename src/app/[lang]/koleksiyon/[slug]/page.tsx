import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { getProduct, products } from '@/lib/products';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import OrderButton from '@/components/ui/order-button';
import ProductJsonLd from '@/components/seo/product-jsonld';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <ProductJsonLd
        name={product.name[locale]}
        description={product.description?.[locale] ?? product.subtitle[locale]}
        image={product.image}
        slug={product.slug}
        lang={locale}
        soldOut={product.soldOut}
      />
      <Navbar lang={locale} dict={dict} />
      <main className="bg-[#F1F0E8] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24">
          {/* Back link */}
          <Link
            href={`/${locale}/koleksiyon`}
            className="inline-block text-xs tracking-[0.25em] uppercase font-light text-[#1a1a1a]/40 hover:text-[#89A8B2] transition-colors duration-300 mb-12"
          >
            {dict.product.backToCollection}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image */}
            <ScrollReveal className="relative">
              <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.name[locale]}
                  fill
                  className={`object-cover ${product.soldOut ? 'opacity-40 grayscale' : ''}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.soldOut && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs tracking-[0.3em] uppercase font-light text-white bg-[#1a1a1a]/60 px-6 py-3">
                      {dict.product.soldOut}
                    </span>
                  </div>
                )}
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase font-light px-3 py-1.5 ${
                    product.soldOut
                      ? 'bg-[#1a1a1a]/70 text-white/50'
                      : 'bg-[#89A8B2]/90 text-white'
                  }`}
                >
                  {product.tag[locale]}
                </span>
              </div>
            </ScrollReveal>

            {/* Details */}
            <div className="pt-0 lg:pt-8">
              <ScrollReveal>
                <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
                  {product.subtitle[locale]}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-light text-[#1a1a1a] mb-6">
                  {product.name[locale]}
                </h1>

                {product.tagline && (
                  <p className="font-serif text-lg italic text-[#1a1a1a]/60 font-light mb-8 leading-relaxed">
                    {product.tagline[locale]}
                  </p>
                )}
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-px w-full bg-[#1a1a1a]/10 mb-8" />
                {product.description && (
                  <p className="text-base text-[#1a1a1a]/60 font-light leading-[1.85] mb-8">
                    {product.description[locale]}
                  </p>
                )}
              </ScrollReveal>

              {product.features && (
                <ScrollReveal delay={180}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
                    {dict.product.features}
                  </p>
                  <ul className="space-y-2 mb-10">
                    {product.features[locale].map((f) => (
                      <li key={f} className="flex items-center gap-3 text-xs font-light text-[#1a1a1a]/60">
                        <span className="w-1 h-1 rounded-full bg-[#89A8B2] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              <ScrollReveal delay={240}>
                <OrderButton
                  productName={product.name[locale]}
                  productSubtitle={product.subtitle[locale]}
                  lang={locale}
                  soldOut={product.soldOut}
                  soldOutLabel={dict.product.soldOut}
                  addToCartLabel={dict.product.addToCart}
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-32">
            <ScrollReveal>
              <div className="h-px w-full bg-[#1a1a1a]/10 mb-16" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-10 font-light">
                {locale === 'tr' ? 'Diğer Parçalar' : 'Other Pieces'}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p, i) => (
                  <ScrollReveal key={p.slug} delay={i * 80}>
                    <Link href={`/${locale}/koleksiyon/${p.slug}`} className="group block">
                      <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[3/4] mb-3">
                        <Image
                          src={p.image}
                          alt={p.name[locale]}
                          fill
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${p.soldOut ? 'opacity-40 grayscale' : ''}`}
                          sizes="33vw"
                        />
                      </div>
                      <p className="font-serif text-base font-light text-[#1a1a1a]">{p.name[locale]}</p>
                      <p className="text-[10px] text-[#1a1a1a]/40 uppercase tracking-widest font-light mt-0.5">{p.subtitle[locale]}</p>
                    </Link>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer lang={locale} dict={dict} />
    </>
  );
}
