
import { ProductList } from '@/components/product-list';
import { RecipeSuggester } from '@/components/recipe-suggester';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import products from '@/data/products.json';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FeaturedProduct } from '@/components/featured-product';
import { Testimonials } from '@/components/testimonials';
import { PhotoGallery } from '@/components/photo-gallery';
import { NewsEvents } from '@/components/news-events';
import { BlogSection } from '@/components/blog-section';
import testimonials from '@/data/testimonials.json';
import galleryContent from '@/data/gallery.json';
import newsAndEvents from '@/data/news.json';
import blogPosts from '@/data/blog.json';
import Link from 'next/link';
import { CartSheet } from '@/components/cart-sheet';
import { WhyChooseUs } from '@/components/why-choose-us';
import { HeroCta } from '@/components/hero-cta';
import { GiftBanner } from '@/components/gift-banner';
import type { Product, BlogPost, NewsEvent } from '@/lib/types';
import { GoogleReviewCollector } from '@/components/google-review-collector';


export default function Home() {
  const featuredProduct = (products as Product[]).find(p => p.category === 'Spice');
  const sortedNews = [...(newsAndEvents as NewsEvent[])].sort((a, b) => b.id - a.id);
  const sortedBlogs = [...(blogPosts as BlogPost[])].sort((a, b) => b.id - a.id);

  if (!featuredProduct) {
    // Fallback in case no spice product is found
    return <div>Error: No spice products available.</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full min-h-screen flex items-center justify-center bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Welcome to Devi Products
              </h1>
              <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white">
                The authentic taste of Sri Lanka, delivered to your kitchen.
              </p>
              <div className="mt-8">
                <Button size="lg" className="font-bold" asChild>
                  <Link href="/products">Explore Spices</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://i.pinimg.com/736x/57/b1/69/57b169156c38776167938afd08259b1a.jpg"
              alt="Spices background"
              data-ai-hint="spices Sri Lanka"
              fill
              className="object-cover opacity-3 dark:opacity-1"
            />
          </div>
        </section>
        <HeroCta />
        <ProductList products={(products as Product[]).filter(p => p.category === 'Spice').slice(0, 6)} title="Our Most Popular Spices" />
        <div className="text-center -mt-8 mb-16">
            <Button asChild variant="outline">
                <Link href="/products">View All Products</Link>
            </Button>
        </div>
        <WhyChooseUs />
        <FeaturedProduct product={featuredProduct} />
        <Testimonials testimonials={testimonials} />
        <GoogleReviewCollector />
        <PhotoGallery items={galleryContent} />
        <NewsEvents events={sortedNews.slice(0, 3)} />
         <div className="text-center -mt-16 mb-16">
            <Button asChild variant="outline">
                <Link href="/news">View All News & Events</Link>
            </Button>
        </div>
        <GiftBanner />
        <BlogSection posts={sortedBlogs.slice(0, 3)} />
         <div className="text-center -mt-16 mb-24">
            <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
            </Button>
        </div>
        <RecipeSuggester products={(products as Product[]).filter(p => p.category === 'Spice')} />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
