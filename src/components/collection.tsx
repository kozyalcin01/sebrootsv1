import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Toprak',
    subtitle: 'Deri Omuz Çantası',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    tag: 'Sınırlı — 12 Adet',
    soldOut: false,
  },
  {
    id: 2,
    name: 'Kıl',
    subtitle: 'Mini Tote Çanta',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80',
    tag: 'Yeni Sezon',
    soldOut: false,
  },
  {
    id: 3,
    name: 'Köy',
    subtitle: 'Kapaklı Çapraz Çanta',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    tag: 'Son 3 Adet',
    soldOut: false,
  },
  {
    id: 4,
    name: 'Taş',
    subtitle: 'Clutch',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    tag: 'Tükendi',
    soldOut: true,
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-[#F1F0E8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-4 font-light">
              2025 Koleksiyonu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
              Her parçanın
              <br />
              <em>bir hikayesi var.</em>
            </h2>
          </div>
          <p className="text-sm font-light text-[#1a1a1a]/50 max-w-xs leading-relaxed">
            Sınırlı sayıda üretilen her çanta,
            özenle seçilmiş malzemelerle el emeğiyle şekillenir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-[#E5E1DA] aspect-[3/4] mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    product.soldOut ? 'opacity-50 grayscale' : ''
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase font-light px-3 py-1.5 ${
                      product.soldOut
                        ? 'bg-[#1a1a1a]/70 text-white/50'
                        : 'bg-[#89A8B2]/90 text-white'
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="px-1">
                <h3 className="font-serif text-xl font-light text-[#1a1a1a] tracking-wide">
                  {product.name}
                </h3>
                <p className="text-xs text-[#1a1a1a]/50 tracking-widest uppercase font-light mt-1">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="text-xs tracking-[0.25em] uppercase font-light px-10 py-4 border border-[#1a1a1a]/30 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F1F0E8] transition-all duration-500">
            Tüm Koleksiyon
          </button>
        </div>
      </div>
    </section>
  );
}
