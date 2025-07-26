
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useApp } from '@/hooks/use-app';
import type { Product, ProductVariant } from '@/lib/types';
import { uiStrings } from '@/data/products';
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, addToCart } = useApp();
  const { toast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    toast({
      title: uiStrings.addedToCart[language],
      description: `${product.name[language]} (${selectedVariant.weight})`,
    })
  };

  const handleVariantChange = (weight: string) => {
    const newVariant = product.variants.find(v => v.weight === weight);
    if (newVariant) {
      setSelectedVariant(newVariant);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`}>
            <div className="aspect-square relative">
                <Image 
                    src={product.image} 
                    alt={product.name.en} 
                    data-ai-hint={product.aiHint}
                    fill 
                    className="object-cover"
                />
            </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Link href={`/products/${product.slug}`}>
            <CardTitle className="font-headline text-2xl mb-2 hover:text-primary transition-colors">{product.name[language]}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">{product.description[language]}</CardDescription>
         <Button variant="link" asChild className="p-0 h-auto mt-2">
            <Link href={`/products/${product.slug}`}>
                See More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
        </Button>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
        <div className="flex justify-between items-center w-full">
            <p className="text-xl font-bold text-foreground">
            LKR {selectedVariant.price.toFixed(2)}
            </p>
            <Select onValueChange={handleVariantChange} defaultValue={selectedVariant.weight}>
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select weight" />
                </SelectTrigger>
                <SelectContent>
                    {product.variants.map(variant => (
                    <SelectItem key={variant.weight} value={variant.weight}>
                        {variant.weight}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4"/>
          {uiStrings.addToCart[language]}
        </Button>
      </CardFooter>
    </Card>
  );
}
