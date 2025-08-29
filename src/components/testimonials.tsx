
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Testimonial } from '@/lib/types';
import { Quote, Star } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { GoogleIcon } from './icons/google-icon';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const reviewUrl = "https://g.page/r/Ced3xuK6pa4IEAI/review";

export function Testimonials({ testimonials }: TestimonialsProps) {
  const { language } = useApp();
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  React.useEffect(() => {
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


  return (
    <section className="w-full py-8 md:py-12 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            {uiStrings.whatOurCustomersSay[language]}
            </h2>
            <p className="text-muted-foreground">
                Real feedback from our valued customers who love our authentic spices.
            </p>
        </div>
        
        <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto relative"
            >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="flex flex-col h-full">
                            <CardContent className="p-6 flex-1 flex flex-col items-start text-left">
                                <Quote className="h-10 w-10 text-primary mb-4" />
                                <p className="text-muted-foreground mb-6 flex-1">
                                &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <div className="embla__dots">
                {testimonials.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn("embla__dot !bg-primary/50", { "!bg-primary": index === current })}
                    />
                ))}
            </div>
        </Carousel>


        <div className="max-w-lg mx-auto mt-16">
          <Card>
            <CardHeader className="items-center text-center">
              <CardTitle className="font-headline text-2xl">Share Your Experience</CardTitle>
              <CardDescription>Your feedback helps us grow. Please consider leaving a review on Google.</CardDescription>
               <div className="flex items-center gap-1 text-yellow-500 pt-2">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild size="lg">
                    <Link href={reviewUrl} target="_blank">
                        <GoogleIcon className="mr-2 h-5 w-5" />
                        Leave a Google Review
                    </Link>
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

