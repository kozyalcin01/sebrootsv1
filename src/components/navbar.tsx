'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import { LangSwitcher } from '@/components/ui/lang-switcher';

type Props = { lang: Locale; dict: Dict };

export default function Navbar({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const base = `/${lang}`;

  const navLinks = [
    { href: `${base}/koleksiyon`, label: dict.nav.collection },
    { href: `${base}/hikayemiz`, label: dict.nav.story },
    { href: `${base}/blog`, label: dict.nav.blog },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link
          href={base}
          className="font-serif text-white text-xl tracking-[0.15em] uppercase font-light hover:opacity-70 transition-opacity"
        >
          Sobroots
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={`${base}#mailing`}
              className="text-xs tracking-[0.2em] uppercase font-light px-5 py-2 border border-[#89A8B2]/60 text-[#89A8B2] hover:bg-[#89A8B2]/10 transition-all duration-300"
            >
              {dict.nav.newsletter}
            </Link>
          </li>
          <li>
            <LangSwitcher currentLang={lang} />
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-4">
          <LangSwitcher currentLang={lang} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 text-sm tracking-[0.2em] uppercase font-light hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`${base}#mailing`}
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase font-light px-5 py-3 border border-[#89A8B2]/60 text-[#89A8B2] text-center hover:bg-[#89A8B2]/10 transition-all"
          >
            {dict.nav.newsletter}
          </Link>
        </div>
      )}
    </header>
  );
}
