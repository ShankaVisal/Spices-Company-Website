
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ImageCarouselProps {
  images: string[];
  aiHints: string[];
  alt: string;
}

export function ImageCarousel({ images, aiHints, alt }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={images[activeIndex]}
          alt={alt}
          data-ai-hint={aiHints[activeIndex]}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'overflow-hidden rounded-md border-2 transition-all',
              activeIndex === index ? 'border-primary' : 'border-transparent hover:border-primary/50'
            )}
          >
            <div className="relative aspect-square">
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                data-ai-hint={aiHints[index]}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
