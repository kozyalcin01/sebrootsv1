'use client';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productSubtitle: string;
  lang: 'tr' | 'en';
};

export default function OrderModal({ isOpen, onClose, productName, productSubtitle, lang }: Props) {
  if (!isOpen) return null;

  const isTr = lang === 'tr';

  const message = isTr
    ? `Merhaba! "${productName}" (${productSubtitle}) ürünü hakkında bilgi almak ve sipariş vermek istiyorum.`
    : `Hello! I'd like to get information and place an order for "${productName}" (${productSubtitle}).`;

  const waUrl = `https://wa.me/905XXXXXXXXX?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 z-[70] bg-[#1a1a1a]/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#F1F0E8] max-w-md w-full p-10 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1a1a1a]/30 hover:text-[#1a1a1a] text-xl transition-colors font-light pb-1 px-2 leading-none"
          aria-label="Kapat"
        >
          ×
        </button>

        <p className="text-[10px] tracking-[0.3em] uppercase text-[#89A8B2] font-sans">
          {isTr ? 'Sipariş Ver' : 'Place Order'}
        </p>

        <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mt-2">
          {productName}
        </h3>
        
        <p className="text-xs text-[#1a1a1a]/40 tracking-widest uppercase font-light mt-1 font-sans">
          {productSubtitle}
        </p>

        <div className="h-px w-full bg-[#1a1a1a]/10 my-6" />

        <p className="text-sm font-light text-[#1a1a1a]/60 leading-relaxed font-sans">
          {isTr
            ? 'WhatsApp üzerinden doğrudan sipariş veya bilgi alabilirsiniz. En geç 24 saat içinde dönüş yapılır.'
            : "You can place an order or get information directly via WhatsApp. We'll respond within 24 hours."}
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full text-xs tracking-[0.25em] uppercase font-light py-4 bg-[#1a1a1a] text-[#F1F0E8] hover:bg-[#89A8B2] transition-all duration-500 text-center block font-sans"
        >
          {isTr ? "WhatsApp'ta Yaz" : 'Message on WhatsApp'}
        </a>
      </div>
    </div>
  );
}
