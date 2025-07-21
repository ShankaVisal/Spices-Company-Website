'use client';

import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';

export function Footer() {
    const { language } = useApp();
    return (
        <footer className="border-t py-6 md:py-8 w-full">
            <div className="container flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                    {uiStrings.footerText[language]}
                </p>
            </div>
        </footer>
    );
}
