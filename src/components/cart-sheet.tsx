'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { useApp } from '@/hooks/use-app';
import { uiStrings } from '@/data/products';
import { WhatsAppIcon } from './icons/whatsapp-icon';
import Image from 'next/image';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Separator } from './ui/separator';

const WHATSAPP_NUMBER = '1234567890'; // Replace with a valid WhatsApp number

export function CartSheet() {
  const { language, cart, updateQuantity, clearCart } = useApp();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    const header = `Hello ${uiStrings.spiceverse[language]}! I would like to order:\n\n`;
    const orderItems = cart.map(item => `- ${item.name[language]} x ${item.quantity}`).join('\n');
    const footer = `\n\n${uiStrings.total[language]}: LKR ${totalPrice.toFixed(2)}`;
    const message = encodeURIComponent(header + orderItems + footer);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (itemCount === 0) {
    return null;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 flex items-center justify-center bg-accent hover:bg-accent/90"
            size="icon"
            aria-label={`View cart with ${itemCount} items`}
          >
            <ShoppingCart className="h-8 w-8 text-accent-foreground" />
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {itemCount}
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl">{uiStrings.cartTitle[language]}</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4">
            {cart.length > 0 ? (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name.en} width={64} height={64} className="rounded-md" />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name[language]}</p>
                      <p className="text-sm text-muted-foreground">LKR {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                         <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-10">{uiStrings.emptyCart[language]}</p>
            )}
          </div>
          {cart.length > 0 && (
            <SheetFooter className="mt-auto flex-col gap-4">
              <Separator />
              <div className="flex justify-between items-center font-bold text-lg">
                <span>{uiStrings.total[language]}</span>
                <span>LKR {totalPrice.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={handleOrder}>
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                {uiStrings.orderButton[language]}
              </Button>
               <Button variant="outline" size="sm" onClick={clearCart}>
                <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
