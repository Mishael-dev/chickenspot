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
  incrementItemNumber: (productId: any) =>
    set((state: any) => ({
      cart: state.cart.map((item: any) => {
        if (item.id == productId) {
          return [...state.cart];
        }
      }),
    })),
  decrementItemNumber: (productId: any) =>
    set((state: any) => ({
      cart: state.cart.map((item: any) => {
        if (item.id == productId) {
          return [...state.cart, item.number--];
        }
      }),
    })),
}));

export { useCartStore };
