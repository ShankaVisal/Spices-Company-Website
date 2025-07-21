'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/hooks/use-app';
import type { Product } from '@/lib/types';
import { uiStrings } from '@/data/products';
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, Star } from 'lucide-react';

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const { language, addToCart } = useApp();
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: uiStrings.addedToCart[language],
      description: product.name[language],
    })
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          Featured Product
        </h2>
        <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image 
                    src={product.image} 
                    alt={product.name.en}
                    data-ai-hint={product.aiHint}
                    fill 
                    className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">{product.name[language]}</h3>
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <span className="text-muted-foreground ml-2 text-sm">(5.0)</span>
                </div>
                <p className="text-muted-foreground mb-6">{product.description[language]}</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-foreground">
                    LKR {product.price.toFixed(2)}
                  </p>
                  <Button onClick={handleAddToCart} size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5"/>
                    {uiStrings.addToCart[language]}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
