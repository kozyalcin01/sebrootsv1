export default function Story() {
  return (
    <section id="story" className="bg-[#1a1a1a] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — decorative */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#2a2a2a] relative overflow-hidden">
              {/* Decorative silk lines */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(137,168,178,0.15) 40px, rgba(137,168,178,0.15) 41px)',
                }}
              />
              {/* Brand stamp */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center border border-[#89A8B2]/20 p-12">
                  <p className="font-serif text-6xl md:text-8xl font-light text-[#89A8B2]/30 tracking-wide italic leading-none">
                    S
                  </p>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mt-4 font-light">
                    Sobroots — Est. 2021
                  </p>
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-6 bg-[#89A8B2] p-6 max-w-[220px]">
              <p className="font-serif text-sm italic text-white leading-relaxed font-light">
                "Kendim severek kullanmayacağım hiçbir çantayı üretmem."
              </p>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-[#89A8B2] mb-6 font-light">
              Hikayemiz
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-10">
              Bir babaannenin
              <br />
              <em>dikiş makinesinin</em>
              <br />
              sesiyle başladı.
            </h2>
            <div className="space-y-5 text-white/50 font-light text-sm leading-relaxed">
              <p>
                Kumaşların arasında geçen çocukluk yılları, el işçiliğine duyulan saygıyı
                ve detaylara verilen özeni beraberinde getirdi. 2021 yılında bu tutku,
                kendi adını buldu: Sobroots.
              </p>
              <p>
                Köklerinden güç alan, şehirde özgürce yürüyen kadınlar için. Her çanta
                el emeğiyle şekillenir, özenle seçilmiş malzemelerle üretilir.
              </p>
              <p>
                Her koleksiyon sınırlı sayıda üretilir — çünkü gerçek değer, tekrar eden
                kalıplarda değil; özgünlüğünü koruyan seçimlerde ortaya çıkar.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />
              <a
                href="https://www.instagram.com/sobroots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.25em] uppercase font-light text-[#89A8B2] hover:text-white transition-colors duration-300"
              >
                @sobroots
              </a>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
