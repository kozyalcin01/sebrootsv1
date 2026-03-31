import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import { getPost, getPosts } from '@/lib/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Mailing from '@/components/mailing';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export async function generateStaticParams() {
  const trPosts = getPosts('tr').map((p) => ({ lang: 'tr', slug: p.slug }));
  const enPosts = getPosts('en').map((p) => ({ lang: 'en', slug: p.slug }));
  return [...trPosts, ...enPosts];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const post = getPost(locale, slug);

  if (!post) notFound();

  const allPosts = getPosts(locale);
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar lang={locale} dict={dict} />
      <main>
        {/* Hero image */}
        <div className="relative h-[60vh] bg-[#1a1a1a] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-65"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#1a1a1a]" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-14">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs tracking-[0.25em] uppercase text-[#89A8B2] font-light">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs text-white/40 font-light">{post.readTime}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="bg-[#F1F0E8] px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Lead */}
            <ScrollReveal>
              <p className="font-serif text-xl md:text-2xl italic text-[#1a1a1a]/60 font-light leading-relaxed mb-12 border-l-2 border-[#89A8B2] pl-6">
                {post.excerpt}
              </p>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={80}>
              {post.content ? (
                <div className="
                  [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-[#1a1a1a] [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-[#1a1a1a]/10
                  [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-light [&_h3]:text-[#1a1a1a] [&_h3]:mt-8 [&_h3]:mb-4
                  [&_p]:text-[1.0625rem] [&_p]:font-light [&_p]:text-[#1a1a1a]/65 [&_p]:leading-[1.85] [&_p]:mb-6
                  [&_strong]:font-normal [&_strong]:text-[#1a1a1a]/85
                  [&_em]:italic [&_em]:text-[#1a1a1a]/60
                  [&_ul]:pl-5 [&_ul]:mb-6
                  [&_li]:text-[1.0625rem] [&_li]:font-light [&_li]:text-[#1a1a1a]/65 [&_li]:leading-relaxed [&_li]:mb-2
                  [&_hr]:border-none [&_hr]:h-px [&_hr]:bg-[#1a1a1a]/10 [&_hr]:my-10
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-base font-light text-[#1a1a1a]/40 italic">
                  {locale === 'tr' ? 'İçerik yakında eklenecek.' : 'Content coming soon.'}
                </p>
              )}
            </ScrollReveal>

            <ScrollReveal delay={150} className="mt-14 flex items-center gap-6">
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/30 font-light">
                {post.date}
              </span>
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            </ScrollReveal>

            <ScrollReveal delay={200} className="mt-8">
              <Link
                href={`/${locale}/blog`}
                className="text-sm tracking-[0.2em] uppercase font-light text-[#89A8B2] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                ← {locale === 'tr' ? 'Tüm Yazılar' : 'All Posts'}
              </Link>
            </ScrollReveal>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="bg-[#E5E1DA] py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal className="mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] font-light">
                  {locale === 'tr' ? 'Devam Et' : 'Keep Reading'}
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((p, i) => (
                  <ScrollReveal key={p.slug} delay={i * 100}>
                    <Link href={`/${locale}/blog/${p.slug}`} className="group flex gap-6 items-start">
                      <div className="relative overflow-hidden bg-[#B3C8CF] flex-shrink-0 w-28 h-28">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="112px"
                        />
                      </div>
                      <div>
                        <span className="text-xs tracking-[0.25em] uppercase text-[#89A8B2] font-light">
                          {p.category}
                        </span>
                        <h3 className="font-serif text-lg font-light text-[#1a1a1a] mt-2 group-hover:text-[#89A8B2] transition-colors duration-300 leading-snug">
                          {p.title}
                        </h3>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <Mailing lang={locale} dict={dict} />
      </main>
      <Footer lang={locale} dict={dict} />
    </>
  );
}
