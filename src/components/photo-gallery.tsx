'use client';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { GalleryContent } from '@/lib/types';
import { useApp } from '@/hooks/use-app';

interface PhotoGalleryProps {
  items: GalleryContent[];
}

export function PhotoGallery({ items }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useApp();

  const nextItem = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  
  useEffect(() => {
    const timer = setTimeout(nextItem, 5000); // Auto-scroll every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, nextItem]);

  const currentItem = items[currentIndex];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              {currentItem.title[language]}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {currentItem.description[language]}
            </p>
             <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevItem}>
                    <ArrowLeft />
                </Button>
                 <Button variant="outline" size="icon" onClick={nextItem}>
                    <ArrowRight />
                </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <AnimatePresence>
                <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title.en}
                      data-ai-hint={currentItem.aiHint}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimal Framer Motion components to avoid adding a new dependency
const AnimatePresence: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const motion = {
  div: React.forwardRef<HTMLDivElement, {
    children: React.ReactNode;
    key: any;
    initial?: object;
    animate?: object;
    exit?: object;
    transition?: object;
    className?: string;
  }>(({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )),
};
motion.div.displayName = 'motion.div';
