
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useApp } from '@/hooks/use-app';
import type { Product, ProductVariant } from '@/lib/types';
import uiStrings from '@/data/ui-strings.json';
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
                    src={product.images[0]} 
                    alt={product.name.en} 
                    data-ai-hint={product.aiHints[0]}
                    fill 
                    className="object-cover"
                />
                 {!product.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg bg-red-600 px-4 py-2 rounded-md">Out of Stock</span>
                    </div>
                )}
            </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Link href={`/products/${product.slug}`}>
            <CardTitle className="font-headline text-xl mb-1 hover:text-primary transition-colors">{product.name[language]}</CardTitle>
        </Link>
        <CardDescription className="text-sm line-clamp-2">{product.description[language]}</CardDescription>
         <Button variant="link" asChild className="p-0 h-auto mt-1 text-sm">
            <Link href={`/products/${product.slug}`}>
                See More <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
        </Button>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
        {product.available ? (
            <>
                <div className="flex justify-between items-center w-full">
                    <p className="text-lg font-bold text-foreground">
                    LKR {selectedVariant.price.toFixed(2)}
                    </p>
                    <Select onValueChange={handleVariantChange} defaultValue={selectedVariant.weight}>
                        <SelectTrigger className="w-[100px] h-9 text-xs">
                            <SelectValue placeholder="Select weight" />
                        </SelectTrigger>
                        <SelectContent>
                            {product.variants.map(variant => (
                            <SelectItem key={variant.weight} value={variant.weight} className="text-xs">
                                {variant.weight}
                            </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={handleAddToCart} className="w-full h-9">
                <ShoppingCart className="mr-2 h-4 w-4"/>
                {uiStrings.addToCart[language]}
                </Button>
            </>
        ) : (
             <Button disabled className="w-full h-9">
                {uiStrings.outOfStock[language]}
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
