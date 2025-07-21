import { ProductList } from '@/components/product-list';
import { RecipeSuggester } from '@/components/recipe-suggester';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FeaturedProduct } from '@/components/featured-product';
import { Testimonials } from '@/components/testimonials';
import { PhotoGallery } from '@/components/photo-gallery';
import { NewsEvents } from '@/components/news-events';
import { BlogSection } from '@/components/blog-section';
import { testimonials, galleryImages, newsAndEvents, blogPosts } from '@/data/content';
import Link from 'next/link';
import { CartSheet } from '@/components/cart-sheet';


export default function Home() {
  const featuredProduct = products[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Welcome to Spiceverse
              </h1>
              <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                The authentic taste of Sri Lanka, delivered to your kitchen.
              </p>
              <div className="mt-8">
                <Button size="lg" className="font-bold" asChild>
                  <Link href="/products">Explore Spices</Link>
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
        <ProductList products={products.slice(0, 6)} title="Our Most Popular Spices" />
        <div className="text-center -mt-8 mb-16">
            <Button asChild variant="outline">
                <Link href="/products">View All Products</Link>
            </Button>
        </div>
        <FeaturedProduct product={featuredProduct} />
        <Testimonials testimonials={testimonials} />
        <PhotoGallery images={galleryImages} />
        <NewsEvents events={newsAndEvents.slice(0, 3)} />
         <div className="text-center -mt-16 mb-16">
            <Button asChild variant="outline">
                <Link href="/news">View All News & Events</Link>
            </Button>
        </div>
        <BlogSection posts={blogPosts.slice(0, 3)} />
         <div className="text-center -mt-16 mb-24">
            <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
            </Button>
        </div>
        <RecipeSuggester products={products} />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
