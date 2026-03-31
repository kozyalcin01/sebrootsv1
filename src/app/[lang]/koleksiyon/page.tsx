import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { products } from '@/lib/products';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default async function KoleksiyonPage({
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
      <main className="bg-[#F1F0E8] min-h-screen">
        {/* Hero banner */}
        <div className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
              {dict.collection.eyebrow}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight">
              {dict.collection.heading}
              <br />
              <em>{dict.collection.subheading}</em>
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 70}>
                <Link
                  href={product.soldOut ? '#' : `/${locale}/koleksiyon/${product.slug}`}
                  className={`group block ${product.soldOut ? 'pointer-events-none' : ''}`}
                >
                  <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[3/4] mb-4">
                    <Image
                      src={product.image}
                      alt={product.name[locale]}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                        product.soldOut ? 'opacity-40 grayscale' : ''
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
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
                    {!product.soldOut && (
                      <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                        <span className="text-[10px] tracking-[0.3em] uppercase font-light text-white border border-white/50 px-4 py-2">
                          {dict.collection.viewProduct}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-1">
                    <h3 className="font-serif text-xl font-light text-[#1a1a1a] tracking-wide">
                      {product.name[locale]}
                    </h3>
                    <p className="text-xs text-[#1a1a1a]/50 tracking-widest uppercase font-light mt-1">
                      {product.subtitle[locale]}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={locale} dict={dict} />
    </>
  );
}
