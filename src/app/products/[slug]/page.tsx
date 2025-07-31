
import { notFound } from 'next/navigation';
import products from '@/data/products.json';
import { ProductDetails } from '@/components/product-details';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductList } from '@/components/product-list';
import type { Product } from '@/lib/types';

export default function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product = (products as Product[]).find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (products as Product[]).filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetails product={product} />
        <ProductList products={relatedProducts} title="You Might Also Like" />
      </main>
      <Footer />
    </div>
  );
}
