import { Locale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Mailing from '@/components/mailing';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default async function HikayemizPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDict(locale);
  const s = dict.story;

  return (
    <>
      <Navbar lang={locale} dict={dict} />
      <main>
        {/* Hero */}
        <section className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-6 font-light">
                {dict.storyPage.eyebrow}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
                {s.heading[0]}
                <br />
                <em className="text-[#89A8B2]/70">{s.heading[1]}</em>
                <br />
                {s.heading[2]}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-[#F1F0E8] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Pull quote */}
            <ScrollReveal className="border-l-2 border-[#89A8B2] pl-8 mb-16">
              <p className="font-serif text-2xl md:text-3xl italic text-[#1a1a1a]/70 font-light leading-relaxed">
                {s.quote}
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {s.body.map((para, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <p className="text-[1.0625rem] text-[#1a1a1a]/60 font-light leading-[1.85]">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300} className="mt-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
              <a
                href="https://www.instagram.com/sobroots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.25em] uppercase font-light text-[#89A8B2] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                {s.instagram}
              </a>
              <div className="h-px flex-1 bg-[#1a1a1a]/10" />
            </ScrollReveal>
          </div>
        </section>

        {/* Values strip */}
        <section className="bg-[#E5E1DA] py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: locale === 'tr' ? 'El Emeği' : 'Handcraft',
                body: locale === 'tr'
                  ? 'Her çanta başından sonuna el emeğiyle şekillenir. Seri üretimin hızı değil, zanaatın özeni.'
                  : 'Every bag is shaped by hand from start to finish. Not the speed of mass production, but the care of craft.',
              },
              {
                num: '02',
                title: locale === 'tr' ? 'Sınırlı Üretim' : 'Limited Production',
                body: locale === 'tr'
                  ? 'Her koleksiyon sınırlı sayıda üretilir. Sahip olduğunuz şey, gerçek anlamda özeldir.'
                  : 'Every collection is produced in limited numbers. What you own is genuinely rare.',
              },
              {
                num: '03',
                title: locale === 'tr' ? 'Zamansız Tasarım' : 'Timeless Design',
                body: locale === 'tr'
                  ? 'Moda sezonlarının ötesinde, yıllarca taşınmak için tasarlanan parçalar.'
                  : 'Pieces designed to be carried for years, beyond the seasons of fashion.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#89A8B2] mb-3 font-light">
                  {item.num}
                </p>
                <h3 className="font-serif text-xl font-light text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-sm font-light text-[#1a1a1a]/50 leading-relaxed">{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Mailing lang={locale} dict={dict} />
      </main>
      <Footer lang={locale} dict={dict} />
    </>
  );
}
