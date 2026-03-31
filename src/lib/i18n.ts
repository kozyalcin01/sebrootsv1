import { Locale } from '@/lib/locale';

export type Dict = {
  nav: {
    collection: string;
    story: string;
    blog: string;
    newsletter: string;
    contact: string;
  };
  hero: {
    cta: string;
    est: string;
  };
  collection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    body: string;
    cta: string;
    limited: string;
    newSeason: string;
    lastItems: string;
    soldOut: string;
    viewProduct: string;
  };
  story: {
    eyebrow: string;
    heading: string[];
    stamp: string;
    quote: string;
    body: string[];
    instagram: string;
  };
  blog: {
    eyebrow: string;
    heading: string;
    read: string;
  };
  mailing: {
    eyebrow: string;
    heading: string[];
    body: string;
    placeholder: string;
    cta: string;
    loading: string;
    successTitle: string;
    successBody: string;
    legal: string;
    legalLink: string;
  };
  footer: {
    tagline: string;
    explore: string;
    legal: string;
    links: { href: string; label: string }[];
    legal_links: { href: string; label: string }[];
    copy: string;
    slogan: string;
  };
  product: {
    soldOut: string;
    addToCart: string;
    features: string;
    backToCollection: string;
  };
  blogPage: {
    eyebrow: string;
    heading: string;
    readMore: string;
  };
  storyPage: {
    eyebrow: string;
  };
  legal_pages: {
    kvkk: string;
    gizlilik: string;
    kullanim: string;
    iade: string;
  };
  contact: {
    eyebrow: string;
    heading: string[];
    infoText: string;
    email: string;
    instagram: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    loading: string;
    successTitle: string;
    successBody: string;
    errorText: string;
  };
};

const tr: Dict = {
  nav: {
    collection: 'Koleksiyon',
    story: 'Hikayemiz',
    blog: 'Blog',
    newsletter: 'Bülten',
    contact: 'İletişim',
  },
  hero: {
    cta: 'Koleksiyonu Keşfet',
    est: 'Est. 2021',
  },
  collection: {
    eyebrow: '2025 Koleksiyonu',
    heading: 'Her parçanın',
    subheading: 'bir hikayesi var.',
    body: 'Sınırlı sayıda üretilen her çanta, özenle seçilmiş malzemelerle el emeğiyle şekillenir.',
    cta: 'Tüm Koleksiyon',
    limited: 'Sınırlı',
    newSeason: 'Yeni Sezon',
    lastItems: 'Son',
    soldOut: 'Tükendi',
    viewProduct: 'İncele',
  },
  story: {
    eyebrow: 'Hikayemiz',
    heading: ['Bir babaannenin', 'dikiş makinesinin', 'sesiyle başladı.'],
    stamp: 'Sobroots — Est. 2021',
    quote: '"Kendim severek kullanmayacağım hiçbir çantayı üretmem."',
    body: [
      'Kumaşların arasında geçen çocukluk yılları, el işçiliğine duyulan saygıyı ve detaylara verilen özeni beraberinde getirdi. 2021 yılında bu tutku, kendi adını buldu: Sobroots.',
      'Köklerinden güç alan, şehirde özgürce yürüyen kadınlar için. Her çanta el emeğiyle şekillenir, özenle seçilmiş malzemelerle üretilir.',
      'Her koleksiyon sınırlı sayıda üretilir — çünkü gerçek değer, tekrar eden kalıplarda değil; özgünlüğünü koruyan seçimlerde ortaya çıkar.',
    ],
    instagram: '@sobroots',
  },
  blog: {
    eyebrow: 'Gündem',
    heading: 'Okuma listesi.',
    read: 'Oku',
  },
  mailing: {
    eyebrow: 'Bültene Katıl',
    heading: ['Yeni koleksiyonlardan', 'ilk sen haber al.'],
    body: 'Sınırlı üretim. Sadece bülten üyelerine özel ön erişim ve hikayeler. Spam yok — söz.',
    placeholder: 'e-posta adresin',
    cta: 'Kayıt Ol',
    loading: '...',
    successTitle: 'Hoş geldin.',
    successBody: 'E-posta onayını kontrol et.',
    legal: 'Kayıt olarak ',
    legalLink: 'KVKK Aydınlatma Metni',
  },
  footer: {
    tagline: 'Köklerinden güç alan, şehirde özgürce yürüyen kadınlar için el yapımı deri çantalar.',
    explore: 'Keşfet',
    legal: 'Yasal',
    links: [
      { href: '/tr/koleksiyon', label: 'Koleksiyon' },
      { href: '/tr/hikayemiz', label: 'Hikayemiz' },
      { href: '/tr/blog', label: 'Blog' },
      { href: '/tr/iletisim', label: 'İletişim' },
    ],
    legal_links: [
      { href: '/tr/kvkk', label: 'KVKK Aydınlatma Metni' },
      { href: '/tr/gizlilik', label: 'Gizlilik Politikası' },
      { href: '/tr/kullanim', label: 'Kullanım Koşulları' },
      { href: '/tr/iade', label: 'İade & Değişim' },
    ],
    copy: '© {year} Sobroots. Tüm hakları saklıdır.',
    slogan: 'Carry Your Roots',
  },
  product: {
    soldOut: 'Tükendi',
    addToCart: 'Sepete Ekle',
    features: 'Özellikler',
    backToCollection: '← Koleksiyona Dön',
  },
  blogPage: {
    eyebrow: 'Okuma Listesi',
    heading: 'Her hikaye,\nbir izdir.',
    readMore: 'Devamını Oku →',
  },
  storyPage: {
    eyebrow: 'Hakkımızda',
  },
  legal_pages: {
    kvkk: 'KVKK Aydınlatma Metni',
    gizlilik: 'Gizlilik Politikası',
    kullanim: 'Kullanım Koşulları',
    iade: 'İade & Değişim',
  },
  contact: {
    eyebrow: 'İletişim',
    heading: ['Seninle', 'konuşalım.'],
    infoText: 'Her soru, her düşünce, her sipariş talebi için buradayız. En geç 24 saat içinde dönüş yaparız.',
    email: 'hello@sobroots.com',
    instagram: '@sobroots',
    namePlaceholder: 'Ad Soyad',
    emailPlaceholder: 'E-posta',
    subjectPlaceholder: 'Konu',
    messagePlaceholder: 'Mesajın...',
    submit: 'Gönder',
    loading: '...',
    successTitle: 'Mesajın alındı.',
    successBody: 'En geç 24 saat içinde geri döneceğiz.',
    errorText: 'Gönderim başarısız. Lütfen tekrar deneyin.',
  },
};

const en: Dict = {
  nav: {
    collection: 'Collection',
    story: 'Our Story',
    blog: 'Blog',
    newsletter: 'Newsletter',
    contact: 'Contact',
  },
  hero: {
    cta: 'Explore the Collection',
    est: 'Est. 2021',
  },
  collection: {
    eyebrow: '2025 Collection',
    heading: 'Every piece',
    subheading: 'has a story.',
    body: 'Each bag — produced in limited numbers — is shaped by hand with carefully selected materials.',
    cta: 'View All',
    limited: 'Limited',
    newSeason: 'New Season',
    lastItems: 'Last',
    soldOut: 'Sold Out',
    viewProduct: 'View',
  },
  story: {
    eyebrow: 'Our Story',
    heading: ['It began with the sound', 'of a grandmother\'s', 'sewing machine.'],
    stamp: 'Sobroots — Est. 2021',
    quote: '"I would never make a bag I wouldn\'t proudly carry myself."',
    body: [
      'Childhood years spent among fabrics brought a deep respect for craftsmanship and an eye for detail. In 2021, that passion found its name: Sobroots.',
      'For women who draw strength from their roots and walk freely through the city. Every bag is shaped by hand, made with carefully chosen materials.',
      'Each collection is produced in limited numbers — because real value lies not in repetition, but in choices that preserve their authenticity.',
    ],
    instagram: '@sobroots',
  },
  blog: {
    eyebrow: 'Journal',
    heading: 'Reading list.',
    read: 'Read',
  },
  mailing: {
    eyebrow: 'Join the Newsletter',
    heading: ['Be the first to know', 'about new collections.'],
    body: 'Limited production. Exclusive early access and stories for subscribers only. No spam — promise.',
    placeholder: 'your email address',
    cta: 'Subscribe',
    loading: '...',
    successTitle: 'Welcome.',
    successBody: 'Check your email for confirmation.',
    legal: 'By subscribing you confirm you have read our ',
    legalLink: 'Privacy Policy',
  },
  footer: {
    tagline: 'Handmade leather bags for women who draw strength from their roots.',
    explore: 'Explore',
    legal: 'Legal',
    links: [
      { href: '/en/koleksiyon', label: 'Collection' },
      { href: '/en/hikayemiz', label: 'Our Story' },
      { href: '/en/blog', label: 'Blog' },
      { href: '/en/iletisim', label: 'Contact' },
    ],
    legal_links: [
      { href: '/en/gizlilik', label: 'Privacy Policy' },
      { href: '/en/kullanim', label: 'Terms of Use' },
      { href: '/en/iade', label: 'Returns & Exchanges' },
    ],
    copy: '© {year} Sobroots. All rights reserved.',
    slogan: 'Carry Your Roots',
  },
  product: {
    soldOut: 'Sold Out',
    addToCart: 'Add to Cart',
    features: 'Features',
    backToCollection: '← Back to Collection',
  },
  blogPage: {
    eyebrow: 'Journal',
    heading: 'Every story\nis a trace.',
    readMore: 'Read More →',
  },
  storyPage: {
    eyebrow: 'About Us',
  },
  legal_pages: {
    kvkk: 'GDPR Notice',
    gizlilik: 'Privacy Policy',
    kullanim: 'Terms of Use',
    iade: 'Returns & Exchanges',
  },
  contact: {
    eyebrow: 'Contact',
    heading: ["Let's", 'talk.'],
    infoText: "We're here for every question, thought, and order request. We'll get back to you within 24 hours.",
    email: 'hello@sobroots.com',
    instagram: '@sobroots',
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message...',
    submit: 'Send',
    loading: '...',
    successTitle: 'Message received.',
    successBody: "We'll get back to you within 24 hours.",
    errorText: 'Failed to send. Please try again.',
  },
};

const dicts: Record<Locale, Dict> = { tr, en };

export function getDict(lang: Locale): Dict {
  return dicts[lang] ?? dicts.tr;
}

export function isValidLocale(lang: string): lang is Locale {
  return lang === 'tr' || lang === 'en';
}
