import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { lang: Locale; dict: Dict };

export default function Story({ dict }: Props) {
  const s = dict.story;

  return (
    <section id="story" className="bg-[#1a1a1a] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — decorative panel */}
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#2a2a2a] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(137,168,178,0.15) 40px, rgba(137,168,178,0.15) 41px)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center border border-[#89A8B2]/20 p-12">
                  <p className="font-serif text-6xl md:text-8xl font-light text-[#89A8B2]/30 tracking-wide italic leading-none">
                    S
                  </p>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mt-4 font-light">
                    {s.stamp}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#89A8B2] p-6 max-w-[220px]">
              <p className="font-serif text-sm italic text-white leading-relaxed font-light">
                {s.quote}
              </p>
            </div>
          </ScrollReveal>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-6 font-light">
                {s.eyebrow}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-10">
                {s.heading[0]}
                <br />
                <em>{s.heading[1]}</em>
                <br />
                {s.heading[2]}
              </h2>
            </ScrollReveal>

            <div className="space-y-5 text-white/55 font-light text-base leading-[1.85]">
              {s.body.map((para, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <p>{para}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300} className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />
              <a
                href="https://www.instagram.com/sobroots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.25em] uppercase font-light text-[#89A8B2] hover:text-white transition-colors duration-300"
              >
                {s.instagram}
              </a>
              <div className="h-px flex-1 bg-white/10" />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
