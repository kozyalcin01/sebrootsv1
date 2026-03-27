'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Mailing() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Placeholder — replace with Mailchimp/Resend integration
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="mailing" className="bg-[#F1F0E8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-6 font-light">
          Bültene Katıl
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-6">
          Yeni koleksiyonlardan
          <br />
          <em>ilk sen haber al.</em>
        </h2>
        <p className="text-sm text-[#1a1a1a]/50 font-light leading-relaxed mb-12 max-w-md mx-auto">
          Sınırlı üretim. Sadece bülten üyelerine özel ön erişim ve hikayeler.
          Spam yok — söz.
        </p>

        {status === 'success' ? (
          <div className="border border-[#89A8B2]/40 px-8 py-6 text-center">
            <p className="font-serif text-lg font-light text-[#1a1a1a] italic">
              Hoş geldin.
            </p>
            <p className="text-xs text-[#1a1a1a]/50 mt-2 font-light tracking-wide">
              E-posta onayını kontrol et.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="e-posta adresin"
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
              {status === 'loading' ? '...' : 'Kayıt Ol'}
            </Button>
          </form>
        )}

        <p className="mt-6 text-[10px] text-[#1a1a1a]/30 font-light leading-relaxed">
          Kayıt olarak{' '}
          <a href="/kvkk" className="underline hover:text-[#1a1a1a]/60 transition-colors">
            KVKK Aydınlatma Metni
          </a>
          &apos;ni okuduğunu ve kabul ettiğini onaylıyorsun.
        </p>
      </div>
    </section>
  );
}
