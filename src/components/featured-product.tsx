
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

  const featuredDetails = product.featured;
  const displayImage = featuredDetails?.image || product.images[0];
  const displayAiHint = featuredDetails?.aiHint || product.aiHints[0];
  const displayDescription = featuredDetails?.description[language] || product.description[language];
  const displayTitle = featuredDetails?.title[language] || "Try our new Product";

  return (
    <section className="w-full py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
            <Card className="overflow-hidden shadow-xl border-2 border-primary/20 max-w-5xl mx-auto">
            <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:col-span-1">
                    <Link href={`/products/${product.slug}`}>
                        <Image 
                            //src={displayImage} 
                            src= "https://wtxtchqioofzyrzulhoz.supabase.co/storage/v1/object/public/spices/devi-cinnamon-01.webp"
                            alt={product.name.en}
                            data-ai-hint={displayAiHint}
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
                <div className="p-8 md:py-12 md:px-10 flex flex-col justify-center md:col-span-1">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h3>
                    <Link href={`/products/${product.slug}`}>
                        <p className="text-lg font-medium text-primary uppercase tracking-wider hover:underline">{product.name[language]}</p>
                    </Link>
                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                    <Star className="fill-current h-4 w-4" />
                    <Star className="fill-current h-4 w-4" />
                    <Star className="fill-current h-4 w-4" />
                    <Star className="fill-current h-4 w-4" />
                    <Star className="fill-current h-4 w-4" />
                    <span className="text-muted-foreground ml-2 text-sm">(5.0)</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{displayDescription}</p>
                    
                    {product.available ? (
                        <>
                            <div className="flex items-center gap-4 mb-4">
                                <p className="text-xl font-bold text-foreground">
                                    LKR {selectedVariant.price.toFixed(2)}
                                </p>
                                <Select onValueChange={handleVariantChange} defaultValue={selectedVariant.weight}>
                                    <SelectTrigger className="w-[120px] h-9 text-xs">
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
                            <Button onClick={handleAddToCart} size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4"/>
                            {uiStrings.addToCart[language]}
                            </Button>
                        </>
                    ) : (
                        <Button disabled size="sm">
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
