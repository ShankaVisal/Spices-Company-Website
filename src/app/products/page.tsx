import { ProductList } from '@/components/product-list';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/data/products';
import { uiStrings } from '@/data/products';
import Image from 'next/image';

export default function ProductsPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              Our Spice Collection
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Explore our curated selection of premium, authentic Sri Lankan spices.
            </p>
          </div>
            <Image
                src="https://picfiles.alphacoders.com/376/thumb-1920-376496.jpg"
                alt="Products background"
                data-ai-hint="spice market"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
