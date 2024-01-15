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
}));

export { useCartStore };
