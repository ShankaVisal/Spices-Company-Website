'use client';
import React from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import type { NewsEvent } from '@/lib/types';

interface NewsEventDetailsProps {
    event: NewsEvent;
}

export function NewsEventDetails({ event }: NewsEventDetailsProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <article>
        <header className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full mb-8"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
                {event.images.map((image, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-video">
                            <Image
                                src={image}
                                alt={`${event.title} image ${index + 1}`}
                                data-ai-hint={event.aiHints[index]}
                                fill
                                className="object-cover rounded-lg"
                            />
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
            </Carousel>

            <div className="text-center">
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
        </div>
        </header>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>{event.content}</p>
                </div>
            </div>
        </section>
    </article>
  );
}
