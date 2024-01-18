import { create } from "zustand";

// type cartItem = {
//   id: Number;
//   part: String;
//   price: Number;
// };

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item: any) =>
    set((state: any) => ({ cart: [...state.cart, item] })),
  removeFromCart: (productId: any) =>
    set((state: any) => ({
      cart: state.cart.filter((item: any) => item.id !== productId),
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
