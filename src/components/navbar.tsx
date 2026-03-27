'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#collection', label: 'Koleksiyon', en: 'Collection' },
  { href: '#story', label: 'Hikayemiz', en: 'Our Story' },
  { href: '#blog', label: 'Blog', en: 'Blog' },
];

export default function Navbar({ lang = 'tr' }: { lang?: 'tr' | 'en' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-white text-xl tracking-[0.15em] uppercase font-light hover:opacity-70 transition-opacity"
        >
          Sobroots
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300"
              >
                {lang === 'tr' ? link.label : link.en}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#mailing"
              className="text-xs tracking-[0.2em] uppercase font-light px-5 py-2 border border-[#89A8B2]/60 text-[#89A8B2] hover:bg-[#89A8B2]/10 transition-all duration-300"
            >
              {lang === 'tr' ? 'Bülten' : 'Newsletter'}
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 text-sm tracking-[0.2em] uppercase font-light hover:text-white transition-colors"
            >
              {lang === 'tr' ? link.label : link.en}
            </a>
          ))}
          <a
            href="#mailing"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase font-light px-5 py-3 border border-[#89A8B2]/60 text-[#89A8B2] text-center hover:bg-[#89A8B2]/10 transition-all"
          >
            {lang === 'tr' ? 'Bülten' : 'Newsletter'}
          </a>
        </div>
      )}
    </header>
  );
}
