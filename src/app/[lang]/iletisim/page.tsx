import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default async function IletisimPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const c = dict.contact;

  return (
    <>
      <Navbar lang={locale} dict={dict} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#89A8B2] font-light mb-6">
                {c.eyebrow}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight">
                {c.heading[0]}
                <br />
                <em className="text-[#89A8B2]/70">{c.heading[1]}</em>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* İçerik */}
        <section className="bg-[#F1F0E8] py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal delay={80}>
              <div className="space-y-12 pr-0 lg:pr-12">
                <p className="text-xl md:text-2xl font-serif text-[#1a1a1a]/70 leading-relaxed font-light">
                  {c.infoText}
                </p>
                <div className="space-y-6 pt-8 border-t border-[#1a1a1a]/10">
                  <div>
                    <span className="block text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 font-light mb-2">
                      {locale === 'tr' ? 'E-posta' : 'Email'}
                    </span>
                    <a href={`mailto:${c.email}`} className="text-[#1a1a1a] hover:text-[#89A8B2] transition-colors font-light text-sm">
                      {c.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 font-light mb-2">
                      Instagram
                    </span>
                    <a href="https://instagram.com/sobroots" target="_blank" rel="noreferrer" className="text-[#1a1a1a] hover:text-[#89A8B2] transition-colors font-light text-sm">
                      {c.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <ContactForm lang={locale} />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer lang={locale} dict={dict} />
    </>
  );
}
