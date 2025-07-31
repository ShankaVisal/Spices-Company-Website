
'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';


export function GiftBanner() {
    const { language } = useApp();
    return (
        <section className="relative w-full h-80 my-16">
            <Image
                src="https://i.pinimg.com/originals/2b/c7/2a/2bc72a5a56c7030c88b63443b71b80c2.jpg"
                alt="Gift boxes with spices"
                data-ai-hint="spice gift boxes"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    {uiStrings.giftBannerTitle[language]}
                </h2>
                <p className="max-w-xl mb-6">
                    {uiStrings.giftBannerDescription[language]}
                </p>
                <Button size="lg" asChild>
                    <Link href="/products#gift-boxes">{uiStrings.shopGifts[language]}</Link>
                </Button>
            </div>
        </section>
    );
}
