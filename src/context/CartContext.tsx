import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { PRODUCTS } from '../data';
import type { CartItem, Product } from '../types';

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'aqua-blue-cart';
const PRODUCT_IDS = new Set(PRODUCTS.map((product) => product.id));

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const storedItems: CartItem[] = JSON.parse(stored);
      return storedItems.filter((item) => PRODUCT_IDS.has(item.productId));
    } catch {
      return [];
    }
  });
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = useCallback((product: Product, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id);
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          size: product.size,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        count,
        isCartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
