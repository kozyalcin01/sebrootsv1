'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { lang: Locale; dict: Dict };

export default function Mailing({ lang, dict }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const m = dict.mailing;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  };

  const kvkkHref = lang === 'tr' ? '/tr/kvkk' : '/en/privacy';

  return (
    <section id="mailing" className="bg-[#F1F0E8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-6 font-light">
            {m.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-6">
            {m.heading[0]}
            <br />
            <em>{m.heading[1]}</em>
          </h2>
          <p className="text-base text-[#1a1a1a]/55 font-light leading-relaxed mb-12 max-w-md mx-auto">
            {m.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          {status === 'success' ? (
            <div className="border border-[#89A8B2]/40 px-8 py-6 text-center">
              <p className="font-serif text-lg font-light text-[#1a1a1a] italic">
                {m.successTitle}
              </p>
              <p className="text-xs text-[#1a1a1a]/50 mt-2 font-light tracking-wide">
                {m.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={m.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border-[#1a1a1a]/20 focus:border-[#89A8B2] rounded-none text-sm font-light text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 h-12 px-4"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-none bg-[#1a1a1a] hover:bg-[#89A8B2] text-[#F1F0E8] text-xs tracking-[0.2em] uppercase font-light h-12 px-8 transition-all duration-500 disabled:opacity-50"
              >
                {status === 'loading' ? m.loading : m.cta}
              </Button>
            </form>
          )}

          <p className="mt-6 text-[10px] text-[#1a1a1a]/30 font-light leading-relaxed">
            {m.legal}
            <Link
              href={kvkkHref}
              className="underline hover:text-[#1a1a1a]/60 transition-colors"
            >
              {m.legalLink}
            </Link>
            &apos;ni okuduğunu ve kabul ettiğini onaylıyorsun.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
