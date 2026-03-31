'use client';

import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { SilkBackground } from '@/components/ui/silk-background-animation';

type Props = { lang: Locale; dict: Dict };

export default function Hero({ dict }: Props) {
  const { canvasRef, isLoaded } = SilkBackground();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a1a1a]">
      <canvas ref={canvasRef} className="silk-canvas" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="text-center px-8">
          <h1
            className={`
              text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem]
              font-serif font-light tracking-[-0.02em] leading-none
              text-white mix-blend-difference opacity-0
              ${isLoaded ? 'animate-fade-in-up' : ''}
            `}
            style={{ textShadow: '0 0 60px rgba(137, 168, 178, 0.15)' }}
          >
            Sobroots
          </h1>

          <div
            className={`
              mt-8 text-base md:text-lg lg:text-xl font-light tracking-[0.3em] uppercase
              text-[#B3C8CF]/80 opacity-0
              ${isLoaded ? 'animate-fade-in-up-delay' : ''}
            `}
          >
            Carry Your Roots
          </div>

          <div
            className={`mt-12 opacity-0 ${isLoaded ? 'animate-fade-in-up-delay' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#collection"
              className="inline-block text-xs tracking-[0.25em] uppercase font-light px-8 py-3.5 border border-[#89A8B2]/50 text-[#89A8B2] hover:bg-[#89A8B2]/10 transition-all duration-500"
            >
              {dict.hero.cta}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-20 left-8 z-30 text-xs font-light tracking-widest uppercase text-white/30 opacity-0 ${isLoaded ? 'animate-fade-in-corner' : ''}`}
      >
        {dict.hero.est}
      </div>

      <div
        className={`absolute bottom-8 right-8 z-30 opacity-0 ${isLoaded ? 'animate-fade-in-corner' : ''}`}
        style={{ animationDelay: '1.2s' }}
      >
        <a
          href="https://www.instagram.com/sobroots"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-light tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
        >
          @sobroots
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/30 animate-pulse" />
      </div>
    </section>
  );
}
