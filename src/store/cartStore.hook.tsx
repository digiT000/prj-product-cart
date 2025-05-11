import { create } from 'zustand/react';
import { Product } from '../interface/interface.ts';

interface CartProductProps extends Product {
  qty: number;
}

interface CartState {
  cart: CartProductProps[];
  addToCart: (product: Product) => void;
  getTotal: () => number;
  incrementCartItem: (product: Product) => void;
  decrementCartItem: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => {
      const productExist: CartProductProps | undefined = state.cart.find(
        (item: CartProductProps) => item.name === product.name
      );

      if (!productExist) {
        return {
          ...state,
          cart: [...state.cart, { ...product, qty: 1 }],
        };
      } else {
        const updatedProductCart = state.cart.map((item: CartProductProps) => {
          if (item.name === product.name) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: updatedProductCart,
        };
      }
    }),
  incrementCartItem: (product: Product) =>
    set((state) => {
      const productExist: CartProductProps | undefined = state.cart.find(
        (item: CartProductProps) => item.name === product.name
      );
      if (!productExist) {
        return {
          ...state,
        };
      }
      const updatedProductCart = state.cart.map((item: CartProductProps) => {
        if (item.name === product.name) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProductCart,
      };
    }),
  decrementCartItem: (product: Product) =>
    set((state) => {
      const productExist: CartProductProps | undefined = state.cart.find(
        (item: CartProductProps) => item.name === product.name
      );
      if (!productExist) {
        return {
          ...state,
        };
      }
      const updatedProductCart = state.cart.map((item: CartProductProps) => {
        if (item.name === product.name) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProductCart,
      };
    }),
  removeFromCart: (productName: string) =>
    set((state) => {
      const updatedProductCart = state.cart.filter(
        (item: CartProductProps) => item.name !== productName
      );
      return { ...state, cart: updatedProductCart };
    }),
  getTotal: () => {
    return get().cart.reduce((acc, value) => acc + value.qty * value.price, 0);
  },
  clearCart: () =>
    set((state) => ({
      ...state,
      cart: [],
    })),
}));
