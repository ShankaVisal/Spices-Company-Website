import { MetadataRoute } from 'next';
import products from '@/data/products.json';
import blogPosts from '@/data/blog.json';
import newsAndEvents from '@/data/news.json';
import type { Product, BlogPost, NewsEvent } from '@/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '/', lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0 },
    { url: '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: '/gallery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: '/news', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: '/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: '/faq', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const productPages = (products as Product[]).map((product) => ({
    url: `/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly', 
    priority: 0.9
  }));

  const blogPages = (blogPosts as BlogPost[]).map((post) => ({
    url: `/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', 
    priority: 0.6
  }));

  const newsPages = (newsAndEvents as NewsEvent[]).map((event) => ({
    url: `/news/${event.id}`,
    lastModified: new Date(event.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticPages, ...productPages, ...blogPages, ...newsPages];
}
