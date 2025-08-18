
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import newsAndEvents from '@/data/news.json';
import { notFound } from 'next/navigation';
import { NewsEventDetails } from '@/components/news-event-details';
import type { NewsEvent } from '@/lib/types';
import { use, useEffect, useState } from 'react';
import { JsonLd } from '@/components/json-ld';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deviproducts.com';

export default function NewsEventPage({ params }: { params: { id: string } }) {
  const { id } = use(params);
  const event = (newsAndEvents as NewsEvent[]).find((e) => e.id.toString() === id);

  const [newsArticleSchema, setNewsArticleSchema] = useState<object | null>(null);

  useEffect(() => {
    if (event) {
      setNewsArticleSchema({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": event.title,
        "image": event.images,
        "datePublished": new Date(event.date).toISOString(),
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
        "description": event.description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteUrl}/news/${event.id}`
        }
      });
    }
  }, [event]);


  if (!event) {
    notFound();
  }

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
      "name": "News & Events",
      "item": `${siteUrl}/news`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": event.title
    }]
  };

  return (
    <div className="flex min-h-screen flex-col">
      {newsArticleSchema && <JsonLd data={newsArticleSchema} />}
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-1">
        <NewsEventDetails event={event} />
      </main>
      <Footer />
    </div>
  );
}
