
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import newsAndEvents from '@/data/news.json';
import { notFound } from 'next/navigation';
import { NewsEventDetails } from '@/components/news-event-details';
import type { NewsEvent } from '@/lib/types';

export default function NewsEventPage({ params: { id } }: { params: { id: string } }) {
  const event = (newsAndEvents as NewsEvent[]).find((e) => e.id.toString() === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <NewsEventDetails event={event} />
      </main>
      <Footer />
    </div>
  );
}
