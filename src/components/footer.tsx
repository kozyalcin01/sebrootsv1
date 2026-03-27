import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white/40 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/5">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-light text-white tracking-[0.1em] mb-3">
              Sobroots
            </p>
            <p className="text-xs font-light leading-relaxed text-white/30 max-w-xs">
              Köklerinden güç alan, şehirde özgürce yürüyen kadınlar için
              el yapımı deri çantalar.
            </p>
            <a
              href="https://www.instagram.com/sobroots"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[10px] tracking-[0.3em] uppercase text-[#89A8B2]/60 hover:text-[#89A8B2] transition-colors duration-300"
            >
              @sobroots
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-5 font-light">
              Keşfet
            </p>
            <ul className="space-y-3">
              {[
                { href: '#collection', label: 'Koleksiyon' },
                { href: '#story', label: 'Hikayemiz' },
                { href: '#blog', label: 'Blog' },
                { href: '#mailing', label: 'Bülten' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-light tracking-wider hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-5 font-light">
              Yasal
            </p>
            <ul className="space-y-3">
              {[
                { href: '/kvkk', label: 'KVKK Aydınlatma Metni' },
                { href: '/gizlilik', label: 'Gizlilik Politikası' },
                { href: '/kullanim', label: 'Kullanım Koşulları' },
                { href: '/iade', label: 'İade & Değişim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-light tracking-wider hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-light tracking-wider">
          <p>© {year} Sobroots. Tüm hakları saklıdır.</p>
          <p className="text-white/20 italic font-serif text-xs">Carry Your Roots</p>
        </div>
      </div>
    </footer>
  );
}
