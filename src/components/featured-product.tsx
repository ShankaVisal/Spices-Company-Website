
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/hooks/use-app';
import type { Product, ProductVariant } from '@/lib/types';
import uiStrings from '@/data/ui-strings.json';
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
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
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:min-h-[500px]">
                <Link href={`/products/${product.slug}`}>
                    <Image 
                        src={product.images[0]} 
                        alt={product.name.en}
                        data-ai-hint={product.aiHints[0]}
                        fill 
                        className="object-cover"
                    />
                </Link>
                 {!product.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl bg-red-600 px-6 py-3 rounded-md">Out of Stock</span>
                    </div>
                )}
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6 hover:text-primary transition-colors">{product.name[language]}</h3>
                </Link>
                <div className="flex items-center gap-1 text-yellow-500 mb-6">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <span className="text-muted-foreground ml-2 text-sm">(5.0)</span>
                </div>
                <p className="text-muted-foreground text-lg mb-8">{product.description[language]}</p>
                
                {product.available ? (
                    <>
                        <div className="flex items-center gap-4 mb-8">
                            <p className="text-4xl font-bold text-foreground">
                                LKR {selectedVariant.price.toFixed(2)}
                            </p>
                            <Select onValueChange={handleVariantChange} defaultValue={selectedVariant.weight}>
                                <SelectTrigger className="w-[150px] text-lg py-7 px-4">
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
                        <Button onClick={handleAddToCart} size="lg" className="text-lg py-7 px-10">
                        <ShoppingCart className="mr-2 h-6 w-6"/>
                        {uiStrings.addToCart[language]}
                        </Button>
                    </>
                ) : (
                    <Button disabled size="lg" className="text-lg py-7 px-10">
                        Out of Stock
                    </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
