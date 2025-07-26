
'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useApp } from '@/hooks/use-app';
import { products } from '@/data/products';
import { uiStrings } from '@/data/products';
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star } from 'lucide-react';
import { ProductList } from '@/components/product-list';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { language, addToCart } = useApp();
  const { toast } = useToast();

  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    toast({
      title: uiStrings.addedToCart[language],
      description: `${product.name[language]} (${selectedVariant.weight})`,
    });
  };

  const handleVariantChange = (weight: string) => {
    const newVariant = product.variants.find(v => v.weight === weight);
    if (newVariant) {
      setSelectedVariant(newVariant);
    }
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name.en}
                  data-ai-hint={product.aiHint}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">{product.name[language]}</h1>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <span className="text-muted-foreground ml-2 text-sm">(5.0)</span>
                </div>
                <p className="text-muted-foreground text-lg">{product.description[language]}</p>
                <div className="flex items-center gap-4">
                  <p className="text-4xl font-bold text-foreground">
                    LKR {selectedVariant.price.toFixed(2)}
                  </p>
                  <Select onValueChange={handleVariantChange} defaultValue={selectedVariant.weight}>
                    <SelectTrigger className="w-[150px] text-base py-6 px-4">
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
                <Button onClick={handleAddToCart} size="lg" className="text-lg py-7 px-10 w-full sm:w-auto">
                  <ShoppingCart className="mr-2 h-6 w-6"/>
                  {uiStrings.addToCart[language]}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <ProductList products={relatedProducts} title="You Might Also Like" />
      </main>
      <Footer />
    </div>
  );
}
