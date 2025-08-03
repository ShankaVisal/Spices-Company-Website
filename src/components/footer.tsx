
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { TiktokIcon } from './icons/tiktok-icon';
import logo1 from '../logo.png';

export function Footer() {
    const { language } = useApp();
    return (
        <footer className="border-t bg-card">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4 md:col-span-1">
                         <div className="flex items-center gap-2">
                            <Image src={logo1} alt="Devi Products Logo" width={80} height={80} data-ai-hint="company logo" />
                            <span className="font-headline text-2xl font-bold">
                                {uiStrings.deviProducts[language]}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {uiStrings.heroSlogan[language]}
                        </p>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Spices</Link></li>
                                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Blends</Link></li>
                                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Gift Boxes</Link></li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                                <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
                                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Recipes</Link></li>
                                <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Shipping</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><TiktokIcon className="h-6 w-6" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
                    <p>{uiStrings.footerText[language]}</p>
                    <p className="mt-2">
                        Developed by <a href="https://www.taproit.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">Tapro IT</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
