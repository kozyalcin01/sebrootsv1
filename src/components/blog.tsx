import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { getPosts } from '@/lib/blog';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { lang: Locale; dict: Dict };

export default function Blog({ lang, dict }: Props) {
  const posts = getPosts(lang);

  return (
    <section id="blog" className="bg-[#E5E1DA] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
            {dict.blog.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
            {dict.blog.heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <Link href={`/${lang}/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-[#B3C8CF]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm">
                    <span className="font-serif text-white text-xs font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#89A8B2] font-light">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#1a1a1a]/20" />
                  <span className="text-[10px] text-[#1a1a1a]/40 font-light">{post.readTime}</span>
                </div>

                <h3 className="font-serif text-xl font-light text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#89A8B2] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-sm text-[#1a1a1a]/55 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-[#1a1a1a]/30 tracking-wider uppercase font-light">
                    {post.date}
                  </span>
                  <span className="text-xs text-[#89A8B2] tracking-widest uppercase font-light group-hover:tracking-[0.3em] transition-all duration-300">
                    {dict.blog.read} →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
