import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Collection from '@/components/collection';
import Story from '@/components/story';
import Blog from '@/components/blog';
import Mailing from '@/components/mailing';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Story />
        <Blog />
        <Mailing />
      </main>
      <Footer />
    </>
  );
}
