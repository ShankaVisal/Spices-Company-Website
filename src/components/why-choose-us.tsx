
'use client';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';

const statsData = [
    { value: '30+', labelKey: 'spiceVarieties' },
    { value: '100%', labelKey: 'freshGuaranteed' },
    { value: '50+', labelKey: 'partnerFarms' },
    { value: '1000+', labelKey: 'happyCustomers' }
];

export function WhyChooseUs() {
    const { language } = useApp();
    
    const stats = statsData.map(stat => ({
        value: stat.value,
        label: (uiStrings as any)[stat.labelKey][language]
    }));

    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40">
            <Image
                src="https://i.pinimg.com/736x/6c/9f/0d/6c9f0dc7d1062c6af6fda60f07c38bf8.jpg"
                alt="Sri Lankan spices"
                data-ai-hint="spices background"
                fill
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative container mx-auto px-4 md:px-6 text-white">
                <div className="max-w-3xl">
                    <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary-foreground border-primary/40">{uiStrings.whyChooseUs[language]}</Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">
                        {uiStrings.whyChooseUsTitle[language]}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12">
                        {uiStrings.whyChooseUsDescription[language]}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-primary/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                                <p className="text-sm md:text-base font-medium text-primary-foreground/90 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
