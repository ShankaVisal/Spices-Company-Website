
import { notFound } from 'next/navigation';
import products from '@/data/products.json';
import { ProductDetails } from '@/components/product-details';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductList } from '@/components/product-list';
import type { Product } from '@/lib/types';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deviproducts.com';

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const product = (products as Product[]).find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found'
    };
  }
  
  const title = `${product.name.en} (${product.name.si}) | Devi Products`;
  const description = `Discover high-quality ${product.name.en} (${product.name.si}). ${product.description.en}`;

  return {
    title: title,
    description: description,
    keywords: ['Devi Products', 'Sri Lankan Spices', product.name.en, product.name.si],
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name.en,
        },
      ],
    },
    alternates: {
      canonical: `/products/${slug}`,
    }
  };
}

export default function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product = (products as Product[]).find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (products as Product[]).filter(p => p.id !== product.id).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name.en} (${product.name.si})`,
    "image": product.images,
    "description": product.longDescription ? product.longDescription.en : product.description.en,
    "sku": `${product.id}-${product.slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Devi Products"
    },
    ...(product.reviews && product.reviews.length > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length).toFixed(1),
        "reviewCount": product.reviews.length
      },
      "review": product.reviews.map(review => ({
        "@type": "Review",
        "author": {"@type": "Person", "name": review.author},
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5"
        },
        "reviewBody": review.comment
      }))
    }),
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "LKR",
      "lowPrice": Math.min(...product.variants.map(v => v.price)),
      "highPrice": Math.max(...product.variants.map(v => v.price)),
      "offerCount": product.variants.length,
      "offers": product.variants.map(variant => ({
        "@type": "Offer",
        "price": variant.price.toFixed(2),
        "priceCurrency": "LKR",
        "availability": product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "sku": `${product.id}-${product.slug}-${variant.weight}`,
        "name": `${product.name.en} - ${variant.weight}`
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteUrl}`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": `${siteUrl}/products`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": product.name.en
    }]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-1">
        <ProductDetails product={product} />
        <ProductList products={relatedProducts} title="You Might Also Like" />
      </main>
      <Footer />
    </div>
  );
}
