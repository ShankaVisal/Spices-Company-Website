'use client';

import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';
import { Leaf, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
    const { language } = useApp();
    return (
        <footer className="border-t bg-card">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4 md:col-span-1">
                         <div className="flex items-center gap-2">
                            <Leaf className="h-8 w-8 text-primary" />
                            <span className="font-headline text-2xl font-bold">
                                {uiStrings.spiceverse[language]}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {uiStrings.heroSlogan[language]}
                        </p>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Spices</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blends</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Gift Boxes</a></li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Recipes</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">FAQs</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Shipping</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
                    <p>{uiStrings.footerText[language]}</p>
                </div>
            </div>
        </footer>
    );
}
