
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import blogPosts from '@/data/blog.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { use } from 'react';
import type { BlogPost } from '@/lib/types';
import { JsonLd } from '@/components/json-ld';

// Although this is a client component, we can't use generateMetadata.
// We'll have to manage the title and meta tags manually.
// This is a limitation of using client components for dynamic pages.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deviproducts.com';


export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = (blogPosts as BlogPost[]).find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Devi Products"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devi Products",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "description": post.content.substring(0, 160) + '...',
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/${post.id}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteUrl}`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": `${siteUrl}/blog`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": post.title
    }]
  };


  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={blogPostSchema} />
      <JsonLd data={breadcrumbSchema} />
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
