import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/data/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article>
          <header className="relative w-full h-96">
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.aiHint}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="container mx-auto px-4 md:px-6 text-center text-white">
                <p className="text-lg font-semibold tracking-widest uppercase mb-2">{post.category}</p>
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </header>

          <div className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
