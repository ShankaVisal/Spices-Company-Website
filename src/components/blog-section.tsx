'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import Link from 'next/link';

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          From Our Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    data-ai-hint={post.aiHint} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                <h3 className="font-headline text-xl font-bold mb-3 flex-1">{post.title}</h3>
                <Button variant="secondary" className="mt-auto self-start" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read Post <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
