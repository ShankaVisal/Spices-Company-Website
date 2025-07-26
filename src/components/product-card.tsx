
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useApp } from '@/hooks/use-app';
import type { Product } from '@/lib/types';
import { uiStrings } from '@/data/products';
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, addToCart } = useApp();
  const { toast } = useToast()

  const defaultVariant = product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, defaultVariant);
    toast({
      title: uiStrings.addedToCart[language],
      description: `${product.name[language]} (${defaultVariant.weight})`,
    })
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
            <Image 
                src={product.image} 
                alt={product.name.en} 
                data-ai-hint={product.aiHint}
                fill 
                className="object-cover"
            />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="font-headline text-2xl mb-2">{product.name[language]}</CardTitle>
        <CardDescription>{product.description[language]}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-foreground">
          LKR {defaultVariant.price.toFixed(2)}
        </p>
        <Button onClick={handleAddToCart} variant="secondary">
          <ShoppingCart className="mr-2 h-4 w-4"/>
          {uiStrings.addToCart[language]}
        </Button>
      </CardFooter>
    </Card>
  );
}
