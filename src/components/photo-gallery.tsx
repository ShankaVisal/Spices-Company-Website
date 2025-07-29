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
    <section className="w-full bg-black relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col justify-center p-8 md:p-16 z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-white">
              {currentItem.title[language]}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {currentItem.description[language]}
            </p>
             <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevItem} className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
                    <ArrowLeft />
                </Button>
                 <Button variant="outline" size="icon" onClick={nextItem} className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
                    <ArrowRight />
                </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-full">
            <AnimatePresence>
                <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title.en}
                      data-ai-hint={currentItem.aiHint}
                      fill
                      className="object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent md:from-transparent"></div>
                </motion.div>
            </AnimatePresence>
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
