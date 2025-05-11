import { create } from 'zustand/react';
import { dummyProduct } from '../data/data.ts';
import { Product } from '../interface/interface.ts';

interface ProductState {
  products: Product[];
  initialToCart: (name: string) => void;
  removeProduct: (name: string) => void;
  initProduct: () => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: dummyProduct,
  initialToCart: (name: string) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.name === name ? { ...product, inCart: true } : product
      ),
    })),
  removeProduct: (name: string) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.name === name ? { ...product, inCart: false } : product
      ),
    })),
  initProduct: () => set((state) => ({ ...state, products: dummyProduct })),
}));
