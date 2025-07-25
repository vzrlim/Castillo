import React, { createContext, useContext } from 'react';
import { useCartLogic } from '../hooks/useCart';

const CartContext = createContext<ReturnType<typeof useCartLogic> | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useCartLogic();
  
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}