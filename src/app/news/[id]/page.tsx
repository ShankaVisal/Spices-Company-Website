'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { newsAndEvents } from '@/data/content';
import { notFound } from 'next/navigation';
import { NewsEventDetails } from '@/components/news-event-details';

export default function NewsEventPage({ params }: { params: { id: string } }) {
  const event = newsAndEvents.find((e) => e.id.toString() === params.id);

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
