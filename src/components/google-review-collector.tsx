
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { GoogleIcon } from './icons/google-icon';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';
import googleReviews from '@/data/google-reviews.json';
import Link from 'next/link';

const REVIEW_URL = "https://g.page/r/Ced3xuK6pa4IEAI/review";

export function GoogleReviewCollector() {
  const { language } = useApp();
  const { rating, reviewCount } = googleReviews;

  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto text-center shadow-lg border-2 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {uiStrings.reviewCollectorTitle[language]}
            </h2>
            <p className="text-muted-foreground mb-6">
              {uiStrings.reviewCollectorDescription[language]}
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="font-bold text-lg">{rating}</span>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < Math.floor(rating) ? "fill-current" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({uiStrings.basedOnReviews[language]} {reviewCount} {uiStrings.reviews[language]})
              </span>
            </div>
            <Button size="lg" asChild>
              <Link href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
                <GoogleIcon className="mr-2 h-6 w-6" />
                {uiStrings.reviewCollectorButton[language]}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
