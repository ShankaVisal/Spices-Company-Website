import { ProductList } from '@/components/product-list';
import { RecipeSuggester } from '@/components/recipe-suggester';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartSheet } from '@/components/cart-sheet';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative z-10">
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Welcome to Spiceverse
              </h1>
              <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                The authentic taste of Sri Lanka, delivered to your kitchen.
              </p>
              <div className="mt-8">
                <Button size="lg" className="font-bold">
                  Explore Spices
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/1200x600.png"
              alt="Spices background"
              data-ai-hint="spices Sri Lanka"
              fill
              className="object-cover opacity-10 dark:opacity-5"
            />
          </div>
        </section>
        <ProductList products={products} />
        <RecipeSuggester products={products} />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
