
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LanguageToggle } from '@/components/language-toggle';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart-sheet';

const navLinks = [
  { href: '/about', label: { en: 'About Us', si: 'අප ගැන' } },
  { href: '/products', label: { en: 'Products', si: 'නිෂ්පාදන' } },
  { href: '/gallery', label: { en: 'Gallery', si: 'ගැලරිය' } },
  { href: '/blog', label: { en: 'Blog', si: 'බ්ලොග්' } },
  { href: '/news', label: { en: 'News & Events', si: 'පුවත් සහ සිදුවීම්' } },
  { href: '/contact', label: { en: 'Contact', si: 'සම්බන්ධ වන්න' } },
  { href: '/faq', label: { en: 'FAQ', si: 'නිතර අසන ප්‍රශ්න' } },
];

export function Header() {
  const { language, cart } = useApp();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Image src="https://placehold.co/40x40.png" alt="Devi Products Logo" width={40} height={40} data-ai-hint="company logo" />
          <span className="font-headline text-2xl font-bold">
            {uiStrings.deviProducts[language]}
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label[language]}
            </Link>
          ))}
          <CartSheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">View Cart</span>
                    {itemCount > 0 && (
                         <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
          </CartSheet>
        </nav>
        <div className="flex items-center gap-2 ml-4">
          <LanguageToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-4 text-base font-medium mt-10">
                 <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Image src="https://placehold.co/40x40.png" alt="Devi Products Logo" width={40} height={40} />
                    <span className="font-headline text-2xl font-bold">{uiStrings.deviProducts[language]}</span>
                  </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label[language]}
                  </Link>
                ))}
                  <CartSheet>
                    <SheetTrigger asChild>
                        <a className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                            Cart
                            {itemCount > 0 && (
                                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                    {itemCount}
                                </span>
                            )}
                        </a>
                    </SheetTrigger>
                </CartSheet>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
