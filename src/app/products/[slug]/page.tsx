import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { ProductDetails } from '@/components/product-details';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductList } from '@/components/product-list';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

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
