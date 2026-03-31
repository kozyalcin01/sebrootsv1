'use client';

import { useState } from 'react';

export default function ContactForm({ lang }: { lang: 'tr' | 'en' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const isTr = lang === 'tr';

  const t = {
    name: isTr ? 'Ad Soyad' : 'Full Name',
    email: isTr ? 'E-posta' : 'Email',
    subject: isTr ? 'Konu' : 'Subject',
    message: isTr ? 'Mesaj' : 'Message',
    submit: isTr ? 'GÖNDER' : 'SEND MESSAGE',
    loading: isTr ? 'GÖNDERİLİYOR...' : 'SENDING...',
    successHeading: isTr ? 'Mesajın alındı.' : 'Message received.',
    successSub: isTr ? 'En kısa sürede sana geri döneceğiz.' : 'We will get back to you shortly.',
    error: isTr ? 'Gönderim başarısız. Lütfen tekrar deneyin.' : 'Failed to send. Please try again.',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) throw new Error();
      
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-[#89A8B2]/40 px-8 py-6 text-center animate-in fade-in duration-500">
        <p className="font-serif text-lg italic text-[#1a1a1a]">{t.successHeading}</p>
        <p className="text-sm font-light text-[#1a1a1a]/60 mt-2">{t.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 font-light">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'loading'}
          className="bg-transparent border border-[#1a1a1a]/20 focus:border-[#89A8B2] rounded-none text-sm font-light text-[#1a1a1a] h-12 px-4 w-full outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 font-light">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="bg-transparent border border-[#1a1a1a]/20 focus:border-[#89A8B2] rounded-none text-sm font-light text-[#1a1a1a] h-12 px-4 w-full outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="subject" className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 font-light">
          {t.subject}
        </label>
        <input
          type="text"
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={status === 'loading'}
          className="bg-transparent border border-[#1a1a1a]/20 focus:border-[#89A8B2] rounded-none text-sm font-light text-[#1a1a1a] h-12 px-4 w-full outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/50 font-light">
          {t.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === 'loading'}
          className="bg-transparent border border-[#1a1a1a]/20 focus:border-[#89A8B2] rounded-none text-sm font-light text-[#1a1a1a] h-32 py-3 px-4 w-full outline-none transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400 font-light mt-3">
          {t.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full text-xs tracking-[0.25em] uppercase font-light py-4 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F1F0E8] transition-all duration-500 disabled:opacity-40 mt-4"
      >
        {status === 'loading' ? t.loading : t.submit}
      </button>
    </form>
  );
}
