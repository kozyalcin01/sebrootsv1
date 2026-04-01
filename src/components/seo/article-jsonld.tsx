type Props = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  lang: string;
  date: string;
  category: string;
};

export default function ArticleJsonLd({
  title,
  excerpt,
  image,
  slug,
  lang,
  date,
  category,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt,
    "image": `https://sobroots.com${image.startsWith('/') ? image : '/' + image}`,
    "url": `https://sobroots.com/${lang}/blog/${slug}`,
    "datePublished": date,
    "articleSection": category,
    "author": {
      "@type": "Organization",
      "name": "Sobroots",
      "url": "https://sobroots.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sobroots",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sobroots.com/logo.png"
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
