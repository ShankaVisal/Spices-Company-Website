
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import galleryContent from '@/data/gallery.json';
import Image from 'next/image';
import { useApp } from '@/hooks/use-app';
import type { GalleryContent } from '@/lib/types';
import Head from 'next/head';

export default function GalleryPage() {
  const { language } = useApp();
  const title = 'Our Spice Stories Gallery';
  const description = 'A visual journey into the heart of Devi Products. Explore our gallery of authentic Sri Lankan spices, from harvest to your home.';

  return (
    <>
    <Head>
        <title>{`${title} | Devi Products`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Devi Products`} />
        <meta property="og:description" content={description} />
    </Head>
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-40 -mt-20 pt-64">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
              Our Spice Stories
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              A closer look at the heart of our collection.
            </p>
          </div>
          <Image
              src="https://images6.alphacoders.com/128/thumb-1920-1288022.jpg"
              alt="Gallery background"
              data-ai-hint="photo album"
              fill
              className="object-cover object-center absolute inset-0 z-0 opacity-100"
          />
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-12 md:gap-20">
              {(galleryContent as GalleryContent[]).map((item, index) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div
                    className={`relative aspect-square rounded-xl overflow-hidden shadow-lg ${
                      index % 2 === 1 ? 'md:order-last' : ''
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title.en}
                      data-ai-hint={item.aiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                      {item.title[language]}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
