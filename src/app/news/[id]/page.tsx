import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { newsAndEvents } from '@/data/content';
import { notFound } from 'next/navigation';
import { Calendar } from 'lucide-react';

export default function NewsEventPage({ params }: { params: { id: string } }) {
  const event = newsAndEvents.find((e) => e.id.toString() === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {event.title}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <p className="text-lg md:text-xl">
                    {event.date}
                </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                   <p>{event.content}</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
