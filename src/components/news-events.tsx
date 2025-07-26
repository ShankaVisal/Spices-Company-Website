'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { NewsEvent } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

interface NewsEventsProps {
  events: NewsEvent[];
}

export function NewsEvents({ events }: NewsEventsProps) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          News & Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <Link href={`/news/${event.id}`}>
                  <div className="aspect-video relative">
                    <Image 
                      src={event.images[0]} 
                      alt={event.title}
                      data-ai-hint={event.aiHints[0]} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                <CardTitle className="font-headline text-xl mb-3 flex-1">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-4">{event.description}</CardDescription>
                <Button variant="secondary" className="mt-auto self-start" asChild>
                  <Link href={`/news/${event.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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
