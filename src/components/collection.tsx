import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { products } from '@/lib/products';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { lang: Locale; dict: Dict };

export default function Collection({ lang, dict }: Props) {
  return (
    <section id="collection" className="bg-[#F1F0E8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
              {dict.collection.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
              {dict.collection.heading}
              <br />
              <em>{dict.collection.subheading}</em>
            </h2>
          </div>
          <p className="text-base font-light text-[#1a1a1a]/50 max-w-xs leading-relaxed">
            {dict.collection.body}
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <Link
                href={`/${lang}/koleksiyon/${product.slug}`}
                className={`group block ${product.soldOut ? 'pointer-events-none' : ''}`}
              >
                <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[3/4] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name[lang]}
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
                      {product.tag[lang]}
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
                    {product.name[lang]}
                  </h3>
                  <p className="text-xs text-[#1a1a1a]/50 tracking-widest uppercase font-light mt-1">
                    {product.subtitle[lang]}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-16 text-center">
          <Link
            href={`/${lang}/koleksiyon`}
            className="text-xs tracking-[0.25em] uppercase font-light px-10 py-4 border border-[#1a1a1a]/30 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F1F0E8] transition-all duration-500 inline-block"
          >
            {dict.collection.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
