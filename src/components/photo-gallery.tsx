'use client';
import Image from 'next/image';

interface PhotoGalleryProps {
  images: { src: string; alt: string; hint: string; }[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image 
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
