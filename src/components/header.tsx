
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
import logo from '../logo.png';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent border-b-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Image src={logo} alt="Devi Products Logo" width={40} height={40} data-ai-hint="company logo" />
          <span className={cn(
            "font-headline text-2xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            {uiStrings.deviProducts[language]}
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
            )}>
              {link.label[language]}
            </Link>
          ))}
          <CartSheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className={cn("relative", isScrolled ? "text-foreground" : "text-white hover:text-white hover:bg-white/10")}>
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
              <Button variant="ghost" size="icon" className={cn("md:hidden", isScrolled ? "text-foreground" : "text-white hover:text-white hover:bg-white/10")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-4 text-base font-medium mt-10">
                 <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Image src="/logo.png" alt="Devi Products Logo" width={40} height={40} />
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
