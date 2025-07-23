import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogSection } from '@/components/blog-section';
import { blogPosts } from '@/data/content';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              From Our Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Stories, recipes, and inspiration from the world of spices.
            </p>
          </div>
            <Image
                src="https://placehold.co/1920x1080.png"
                alt="Blog background"
                data-ai-hint="writing desk"
                fill
                className="object-cover object-center absolute inset-0 z-0 opacity-40"
            />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>
        <BlogSection posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}
