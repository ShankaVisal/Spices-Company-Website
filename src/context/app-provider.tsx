
'use client';

import { createContext, useState, ReactNode } from 'react';
import type { CartItem, Product, ProductVariant } from '@/lib/types';

type Language = 'en' | 'si';

interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  cart: CartItem[];
  addToCart: (product: Product, variant: ProductVariant) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, variant: ProductVariant) => {
    setCart((prevCart) => {
      const cartItemId = `${product.id}-${variant.weight}`;
      const existingItem = prevCart.find((item) => item.id === product.id && item.selectedVariant.weight === variant.weight);
      
      if (existingItem) {
        return prevCart.map((item) =>
          (item.id === product.id && item.selectedVariant.weight === variant.weight) ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, selectedVariant: variant }];
    });
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    const [productId, variantWeight] = cartItemId.split('-');
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => !(item.id.toString() === productId && item.selectedVariant.weight === variantWeight));
      }
      return prevCart.map((item) =>
        (item.id.toString() === productId && item.selectedVariant.weight === variantWeight) ? { ...item, quantity } : item
      );
    });
  };
  
  const clearCart = () => {
    setCart([]);
  }

  return (
    <AppContext.Provider value={{ language, setLanguage, cart, addToCart, updateQuantity, clearCart }}>
      {children}
    </AppContext.Provider>
  );
}
