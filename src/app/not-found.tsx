'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const isTr = pathname?.startsWith('/tr');

  const eyebrow = isTr ? '404 — Sayfa Bulunamadı' : '404 — Page Not Found';
  const title = isTr ? 'Aradığın sayfa burada yok.' : "The page you're looking for isn't here.";
  const description = isTr 
    ? "Aradığınız bağlantı taşınmış, yeniden adlandırılmış veya geçici olarak kullanılamıyor olabilir." 
    : "The link you followed may be broken, or the page may have been removed.";
  const linkText = isTr ? '← Koleksiyona Dön' : '← Back to Collection';
  const linkHref = isTr ? '/tr/koleksiyon' : '/en/koleksiyon';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden">
      {/* Arka plan dekoratif rakam */}
      <div className="font-serif text-[20vw] font-light text-white/5 absolute select-none pointer-events-none">
        404
      </div>
      
      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#89A8B2] font-sans font-light">
            {eyebrow}
          </p>
          
          <h1 className="font-serif text-4xl font-light text-white">
            {title}
          </h1>
          
          <p className="text-sm text-white/40 font-light font-sans max-w-sm mx-auto mt-4 inline-block">
            {description}
          </p>
        </div>

        <Link
          href={linkHref}
          className="text-xs tracking-[0.25em] uppercase border border-[#89A8B2]/40 text-[#89A8B2] px-8 py-3 hover:bg-[#89A8B2]/10 transition-all inline-block font-sans font-light mt-4"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
