'use client';

import { ProductCard } from './product-card';
import type { Product } from '@/lib/types';
import { useApp } from '@/hooks/use-app';
import uiStrings from '@/data/ui-strings.json';

interface ProductListProps {
  products: Product[];
  title?: string | { en: string; si: string };
}

export function ProductList({ products, title }: ProductListProps) {
  const { language } = useApp();

  const getTitle = () => {
    if (typeof title === 'string') {
        return title;
    }
    if (typeof title === 'object' && title !== null) {
        return title[language as keyof typeof title];
    }
    return uiStrings.ourProducts[language];
  }

  return (
    <section id="products" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 md:mb-12">
          {getTitle()}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
