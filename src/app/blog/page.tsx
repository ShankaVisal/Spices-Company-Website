
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogSection } from '@/components/blog-section';
import blogPosts from '@/data/blog.json';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { BlogPost } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Spice & Flavor Blog',
  description: 'The official blog of Devi Products. Discover recipes, stories, and inspiration from the world of authentic Sri Lankan spices.',
  openGraph: {
    title: 'Spice & Flavor Blog | Devi Products',
    description: 'Discover recipes, stories, and inspiration from the world of authentic Sri Lankan spices.',
  }
};

export default function BlogPage() {
  const sortedPosts = [...(blogPosts as BlogPost[])].sort((a, b) => b.id - a.id);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-40 -mt-20 pt-[32rem]">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              From Our Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Stories, recipes, and inspiration from the world of spices.
            </p>
          </div>
            <Image
                src="https://i.pinimg.com/736x/9d/60/fb/9d60fbced3582280ebbfebf1e544a30b.jpg"
                alt="Blog background"
                data-ai-hint="writing desk"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>
        <BlogSection posts={sortedPosts} />
      </main>
      <Footer />
    </div>
  );
}
