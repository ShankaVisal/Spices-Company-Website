
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type PropType = {
  images: { src: string; aiHint: string }[];
  options?: EmblaOptionsType;
};

export function HeroSlider({ images, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <AnimatePresence initial={false}>
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].aiHint}
              data-ai-hint={images[selectedIndex].aiHint}
              fill
              className="object-cover opacity-30 dark:opacity-10"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-2 w-2 rounded-full bg-white/50 transition-all duration-300',
              index === selectedIndex ? 'w-6 bg-white' : 'hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
