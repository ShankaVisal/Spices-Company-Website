
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import type { Product } from '@/lib/types';

interface ProductDetailsProps {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { language, addToCart } = useApp();
  const { toast } = useToast();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [rating, setRating] = useState(0);

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

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
    (e.target as HTMLFormElement).reset();
    setRating(0);
  }

  const averageRating = product.reviews && product.reviews.length > 0
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 5;


  return (
    <>
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
              <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                         <Star key={i} className={i < Math.floor(averageRating) ? "fill-current" : "text-gray-300"} />
                      ))}
                  </div>
                <span className="text-muted-foreground ml-2 text-sm">({product.reviews?.length || 0} reviews)</span>
              </div>
              <p className="text-muted-foreground text-lg">{product.longDescription ? product.longDescription[language] : product.description[language]}</p>
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

      <section className="w-full pb-16 md:pb-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <Separator className="mb-12" />
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                      <h2 className="font-headline text-3xl font-bold">Customer Reviews</h2>
                      <div className="space-y-6">
                          {product.reviews && product.reviews.length > 0 ? (
                              product.reviews.map(review => (
                                  <div key={review.id}>
                                      <div className="flex items-center gap-2 mb-2">
                                          <div className="flex items-center gap-1 text-yellow-500">
                                              {[...Array(5)].map((_, i) => (
                                              <Star key={i} className={i < review.rating ? "fill-current" : "text-gray-300"} />
                                              ))}
                                          </div>
                                          <p className="font-semibold">{review.author}</p>
                                      </div>
                                      <p className="text-muted-foreground">{review.comment}</p>
                                  </div>
                              ))
                          ) : (
                              <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
                          )}
                      </div>
                  </div>
                   <div>
                      <Card>
                          <CardHeader>
                              <CardTitle className="font-headline text-2xl">Write a Review</CardTitle>
                              <CardDescription>Share your thoughts about this product.</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <form onSubmit={handleReviewSubmit} className="space-y-4">
                                  <div className="space-y-2">
                                      <Label>Rating</Label>
                                      <div className="flex items-center gap-1">
                                          {[...Array(5)].map((_, i) => (
                                              <Star 
                                                  key={i} 
                                                  className={`cursor-pointer ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                                                  onClick={() => setRating(i + 1)}
                                              />
                                          ))}
                                      </div>
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="review-comment">Comment</Label>
                                      <Textarea id="review-comment" placeholder="Your review..." required />
                                  </div>
                                  <Button type="submit" className="w-full">Submit Review</Button>
                              </form>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
