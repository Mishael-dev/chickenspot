import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  incrementItemNumber: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId
          ? { ...item, number: Math.min(10, item.number + 1) }
          : item
      );
      return { cart: updatedCart };
    }),
  decrementItemNumber: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId
          ? { ...item, number: Math.max(1, item.number - 1) }
          : item
      );
      return { cart: updatedCart };
    }),
}));

export { useCartStore };