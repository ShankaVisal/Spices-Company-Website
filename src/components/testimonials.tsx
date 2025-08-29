
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import type { Testimonial } from '@/lib/types';
import { Quote, Star } from 'lucide-react';
import { useApp } from '@/hooks/use-app';
import { Button } from './ui/button';
import Link from 'next/link';
import { GoogleIcon } from './icons/google-icon';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const reviewUrl = "https://g.page/r/Ced3xuK6pa4IEAI/review";

export function Testimonials({ testimonials }: TestimonialsProps) {
   const { language } = useApp();
   const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        <Carousel 
          plugins={[plugin.current]}
          opts={{ loop: true }} 
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Quote className="h-10 w-10 text-primary mb-4" />
                      <p className="text-lg md:text-xl text-muted-foreground mb-4 italic">
                        &quot;{testimonial.quote[language]}&quot;
                      </p>
                      <p className="font-bold text-foreground">{testimonial.name[language]}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location[language]}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="max-w-2xl mx-auto mt-12">
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
