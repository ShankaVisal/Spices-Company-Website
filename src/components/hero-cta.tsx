
'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { CheckIcon } from './icons/check-icon';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';

const benefits = [
    { text: { en: 'Rich in Antioxidants', si: 'ප්‍රතිඔක්සිකාරක වලින් පොහොසත්' } },
    { text: { en: 'Boosts Metabolism', si: 'පරිවෘත්තීය ක්‍රියාවලිය වැඩි දියුණු කරයි' } },
    { text: { en: 'Enhances Flavor', si: 'රසය වැඩි දියුණු කරයි' } },
    { text: { en: 'Supports Digestion', si: 'ජීර්ණයට සහය වේ' } }
];

export function HeroCta() {
    const { language } = useApp();
    return (
        <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold">
                            {uiStrings.heroCtaTitle[language]}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                           {uiStrings.heroCtaDescription[language]}
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <span className="font-semibold">{benefit.text[language]}</span>
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                            <Link href="/about">{uiStrings.discoverMore[language]}</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden ">
                             <Image 
                                src="https://wtxtchqioofzyrzulhoz.supabase.co/storage/v1/object/public/spices/devi-products-04.png"
                                alt="Assortment of healthy spices"
                                data-ai-hint="spices assortment"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-16 -left-12 bg-lime-950 text-white p-8 rounded-lg shadow-lg w-72">
                            <h3 className="text-2xl font-bold mb-4">{uiStrings.naturalHealthy[language]}</h3>
                             <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                                <Link href="/products">{uiStrings.viewProducts[language]}</Link>
                            </Button>
                        </div>
                         <div className="absolute -bottom-12 -right-12 h-48 w-48 hidden md:block">
                             <Image 
                                src="https://wtxtchqioofzyrzulhoz.supabase.co/storage/v1/object/public/symbols/100-natural.png"
                                alt="100% natural"
                                data-ai-hint="100 percent natural symbol"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
