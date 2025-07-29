
'use client';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { GalleryContent } from '@/lib/types';
import { useApp } from '@/hooks/use-app';
import { cn } from '@/lib/utils';

interface PhotoGalleryProps {
  items: GalleryContent[];
}

export function PhotoGallery({ items }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useApp();
  const [api, setApi] = useState<any>();

  const nextItem = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    api?.scrollNext();
  }, [items.length, api]);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
     api?.scrollPrev();
  };

  useEffect(() => {
    const timer = setTimeout(nextItem, 5000); // Auto-scroll every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, nextItem]);

  const currentItem = items[currentIndex];

  const onDotClick = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#181a1b' }}>
       <Image
            src="https://i.pinimg.com/736x/8f/8b/6b/8f8b6b120f28e6789b5375a03423b0ab.jpg"
            alt="Spice texture background"
            data-ai-hint="spice texture"
            fill
            className="object-cover opacity-10"
        />
      <div className="grid md:grid-cols-2 min-h-[600px] relative">
          <div className="flex flex-col justify-center p-8 md:p-16 z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-white">
              {currentItem.title[language]}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {currentItem.description[language]}
            </p>
             <div className="flex gap-4 mt-8">
                {items.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    )}
                    />
                ))}
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
                     <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent md:from-transparent"></div>
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
