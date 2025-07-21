import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogSection } from '@/components/blog-section';
import { blogPosts } from '@/data/content';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              From Our Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Stories, recipes, and inspiration from the world of spices.
            </p>
          </div>
        </section>
        <BlogSection posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}
