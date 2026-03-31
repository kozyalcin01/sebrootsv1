import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Locale } from '@/lib/locale';
import { Dict } from '@/lib/i18n';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = {
  lang: Locale;
  dict: Dict;
  title: string;
  content: string;
};

export default function LegalPage({ lang, dict, title, content }: Props) {
  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className="bg-[#F1F0E8] min-h-screen">
        <div className="bg-[#1a1a1a] pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
              {lang === 'tr' ? 'Yasal' : 'Legal'}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-white">{title}</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <ScrollReveal>
            <div className="
              [&_h1]:font-serif [&_h1]:text-2xl [&_h1]:font-light [&_h1]:text-[#1a1a1a] [&_h1]:mt-10 [&_h1]:mb-4
              [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-[#1a1a1a] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-[#1a1a1a]/10 [&_h2]:pb-2
              [&_h3]:font-serif [&_h3]:text-base [&_h3]:font-light [&_h3]:text-[#1a1a1a] [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:text-sm [&_p]:font-light [&_p]:text-[#1a1a1a]/60 [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:pl-5 [&_ul]:mb-5 [&_li]:text-sm [&_li]:font-light [&_li]:text-[#1a1a1a]/60 [&_li]:mb-2 [&_li]:leading-relaxed
              [&_strong]:font-normal [&_strong]:text-[#1a1a1a]/80
              [&_a]:text-[#89A8B2] [&_a]:underline [&_a]:underline-offset-2
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
