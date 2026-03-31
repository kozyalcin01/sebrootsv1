'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/lib/locale';

type Props = {
  currentLang: Locale;
};

const langMap: Record<Locale, Locale> = { tr: 'en', en: 'tr' };
const labelMap: Record<Locale, string> = { tr: 'EN', en: 'TR' };

export function LangSwitcher({ currentLang }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = langMap[currentLang];

  const handleSwitch = () => {
    // Replace /{currentLang} prefix with /{switchTo}
    const newPath = pathname.replace(`/${currentLang}`, `/${switchTo}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className="text-[10px] tracking-[0.25em] uppercase font-light text-white/50 hover:text-white transition-colors duration-300 tabular-nums"
      aria-label={`Switch to ${switchTo === 'tr' ? 'Turkish' : 'English'}`}
    >
      {labelMap[currentLang]}
    </button>
  );
}
