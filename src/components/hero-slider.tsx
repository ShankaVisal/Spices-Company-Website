
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type PropType = {
  images: { src: string; aiHint: string }[];
};

export function HeroSlider({ images }: PropType) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    setSelectedIndex(index);
  };
  
  const nextSlide = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [selectedIndex, nextSlide]);


  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
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
              className="object-cover"
              priority
            />
             <div className="absolute inset-0 bg-black/50" />
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
