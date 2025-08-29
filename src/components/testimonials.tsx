
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            What Our Customers Say
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-12">
                Real feedback from our valued customers who love our authentic spices.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col items-start text-left">
                    <Quote className="h-10 w-10 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 flex-1">
                    &quot;{testimonial.quote[language]}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
                            {testimonial.name[language].charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-foreground">{testimonial.name[language]}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location[language]}</p>
                        </div>
                    </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16">
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
