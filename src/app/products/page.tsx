import { ProductList } from '@/components/product-list';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/data/products';
import { uiStrings } from '@/data/products';

export default function ProductsPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Our Spice Collection
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Explore our curated selection of premium, authentic Sri Lankan spices.
            </p>
          </div>
        </section>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
