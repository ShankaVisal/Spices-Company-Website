'use client';

import { LanguageToggle } from '@/components/language-toggle';
import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';
import { Leaf } from 'lucide-react';

export function Header() {
  const { language } = useApp();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold">
            {uiStrings.spiceverse[language]}
          </span>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
}
