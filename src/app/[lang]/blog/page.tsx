import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { getPosts } from '@/lib/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const posts = getPosts(locale);
  const bp = dict.blogPage;

  return (
    <>
      <Navbar lang={locale} dict={dict} />
      <main className="bg-[#F1F0E8] min-h-screen">
        {/* Header */}
        <div className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
              {bp.eyebrow}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight whitespace-pre-line">
              {bp.heading}
            </h1>
          </div>
        </div>

        {/* Posts — editorial asymmetric layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          {/* Featured post (first) */}
          {posts[0] && (
            <ScrollReveal className="mb-16 md:mb-24">
              <Link href={`/${locale}/blog/${posts[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[4/3]">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#89A8B2] font-light">
                      {posts[0].category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#1a1a1a]/20" />
                    <span className="text-[10px] text-[#1a1a1a]/40 font-light">{posts[0].readTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a] leading-tight mb-4 group-hover:text-[#89A8B2] transition-colors duration-300">
                    {posts[0].title}
                  </h2>
                  <p className="text-sm text-[#1a1a1a]/50 font-light leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  <span className="text-xs text-[#89A8B2] tracking-widest uppercase font-light group-hover:tracking-[0.3em] transition-all duration-300">
                    {bp.readMore}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Divider */}
          <div className="h-px w-full bg-[#1a1a1a]/10 mb-16" />

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {posts.slice(1).map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <Link href={`/${locale}/blog/${post.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[4/3] mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm">
                      <span className="font-serif text-white text-xs font-light">
                        {String(index + 2).padStart(2, '0')}
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
                  <h2 className="font-serif text-2xl font-light text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#89A8B2] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#1a1a1a]/50 leading-relaxed font-light mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#1a1a1a]/30 tracking-wider uppercase font-light">
                      {post.date}
                    </span>
                    <span className="text-xs text-[#89A8B2] tracking-widest uppercase font-light group-hover:tracking-[0.3em] transition-all duration-300">
                      {bp.readMore}
                    </span>
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
