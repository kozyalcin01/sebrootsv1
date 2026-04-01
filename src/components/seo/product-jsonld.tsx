type Props = {
  name: string;
  description: string;
  image: string;
  slug: string;
  lang: string;
  soldOut: boolean;
};

export default function ProductJsonLd({
  name,
  description,
  image,
  slug,
  lang,
  soldOut,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://sobroots.com${image.startsWith('/') ? image : '/' + image}`,
    "url": `https://sobroots.com/${lang}/koleksiyon/${slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Sobroots"
    },
    "offers": {
      "@type": "Offer",
      "availability": soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "priceCurrency": "TRY",
      "seller": {
        "@type": "Organization",
        "name": "Sobroots"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
