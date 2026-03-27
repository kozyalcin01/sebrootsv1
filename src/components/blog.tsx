import Image from 'next/image';

const posts = [
  {
    id: 1,
    category: 'Stil',
    title: 'Bir çantanın ömrü nasıl uzar?',
    excerpt:
      'Deri bakımı, doğru depolama ve günlük kullanım alışkanlıkları hakkında bilmeniz gerekenler.',
    date: 'Mart 2025',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80',
    readTime: '4 dk',
  },
  {
    id: 2,
    category: 'Üretim',
    title: 'El işçiliğinin geri dönüşü',
    excerpt:
      'Hızlı modanın gölgesinde, el emeğine verilen değer neden artıyor? Üretici perspektifinden bir bakış.',
    date: 'Şubat 2025',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    readTime: '6 dk',
  },
  {
    id: 3,
    category: 'Kadın & Şehir',
    title: 'Taşıdıklarımız bizi anlatır',
    excerpt:
      'Sobroots kadınlarıyla konuştuk. Her biri, çantasını seçerken neye dikkat ediyor?',
    date: 'Ocak 2025',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    readTime: '5 dk',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#E5E1DA] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
            Gündem
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
            Okuma listesi.
          </h2>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-[#B3C8CF]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Index */}
                <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm">
                  <span className="font-serif text-white text-xs font-light">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#89A8B2] font-light">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#1a1a1a]/20" />
                <span className="text-[10px] text-[#1a1a1a]/40 font-light">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-light text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#89A8B2] transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-[#1a1a1a]/50 leading-relaxed font-light">
                {post.excerpt}
              </p>

              {/* Date + link */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-[#1a1a1a]/30 tracking-wider uppercase font-light">
                  {post.date}
                </span>
                <span className="text-xs text-[#89A8B2] tracking-widest uppercase font-light group-hover:tracking-[0.3em] transition-all duration-300">
                  Oku →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
