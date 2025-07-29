import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { CheckIcon } from './icons/check-icon';

const benefits = [
    { text: 'Rich in Antioxidants' },
    { text: 'Boosts Metabolism' },
    { text: 'Enhances Flavor' },
    { text: 'Supports Digestion' }
];

export function HeroCta() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold">
                            Providing premium spices for health and culinary excellence.
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We offer a range of spices that are packed with flavor and nutrients, supporting your wellness and elevating your cooking.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <span className="font-semibold">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                            <Link href="/about">Discover More &raquo;</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden">
                             <Image 
                                src="https://i.pinimg.com/736x/c9/4b/da/c94bda75cef60951ab6e6c14ae815cba.jpg"
                                alt="Assortment of healthy spices"
                                data-ai-hint="spices assortment"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-12 -left-12 bg-black text-white p-8 rounded-lg shadow-lg w-72">
                            <h3 className="text-2xl font-bold mb-4">100% Natural, 100% Healthy Spices!</h3>
                             <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                                <Link href="/products">View Products</Link>
                            </Button>
                        </div>
                         <div className="absolute -bottom-12 -right-12 h-32 w-32 hidden md:block">
                             <Image 
                                src="https://i.pinimg.com/736x/72/27/4b/72274b514bf5cd7b7b7ce6504f4b42da.jpg"
                                alt="Cinnamon sticks"
                                data-ai-hint="cinnamon sticks"
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
