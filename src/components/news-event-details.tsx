
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import type { NewsEvent } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ShareButtons } from './share-buttons';

interface NewsEventDetailsProps {
    event: NewsEvent;
}

export function NewsEventDetails({ event }: NewsEventDetailsProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = (api: CarouselApi) => {
        setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])


  return (
    <article>
        <header className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full mb-8 relative"
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
            <div className="embla__dots">
                {event.images.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn("embla__dot", { "embla__dot--selected": index === current })}
                    />
                ))}
            </div>
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
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-justify">
                    {event.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-6">{paragraph}</p>
                    ))}
                </div>
                <ShareButtons title={event.title} />
            </div>
        </section>
    </article>
  );
}
