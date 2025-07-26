'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface PhotoGalleryProps {
  images: { src: string; alt: string; hint: string; }[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
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
    <section className="w-full py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          Gallery
        </h2>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                       <div className="relative aspect-video md:aspect-square">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          data-ai-hint={image.hint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <div className="embla__dots">
                {images.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn("embla__dot", { "embla__dot--selected": index === current })}
                    />
                ))}
            </div>
        </Carousel>
      </div>
    </section>
  );
}
