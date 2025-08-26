
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NewsEvents } from '@/components/news-events';
import newsAndEvents from '@/data/news.json';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { NewsEvent } from '@/lib/types';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay up-to-date with the latest news, events, and announcements from Devi Products, your source for authentic Sri Lankan spices.',
  openGraph: {
    title: 'News & Events | Devi Products',
    description: 'Stay up-to-date with the latest happenings at Devi Products.',
  }
};


export default function NewsPage() {
  const sortedEvents = [...(newsAndEvents as NewsEvent[])].sort((a, b) => b.id - a.id);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              News & Events
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Stay up-to-date with the latest happenings at Devi Products.
            </p>
          </div>
           <Image
              src="https://i.pinimg.com/736x/db/23/e7/db23e75acaa20b0147dc4a9b32238faf.jpg"
              alt="News background"
              data-ai-hint="newspaper"
              fill
              className="object-cover object-center absolute inset-0 z-0 opacity-100"
            />
             <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>
        <NewsEvents events={sortedEvents} />
      </main>
      <Footer />
    </div>
  );
}
