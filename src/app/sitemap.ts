import { MetadataRoute } from 'next';
import products from '@/data/products.json';
import blogPosts from '@/data/blog.json';
import newsAndEvents from '@/data/news.json';
import type { Product, BlogPost, NewsEvent } from '@/lib/types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deviproducts.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/faq`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const productPages = (products as Product[]).map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly', 
    priority: 0.9
  }));

  const blogPages = (blogPosts as BlogPost[]).map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', 
    priority: 0.6
  }));

  const newsPages = (newsAndEvents as NewsEvent[]).map((event) => ({
    url: `${siteUrl}/news/${event.id}`,
    lastModified: new Date(event.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticPages, ...productPages, ...blogPages, ...newsPages];
}
