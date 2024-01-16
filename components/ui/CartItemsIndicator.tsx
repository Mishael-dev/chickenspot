"use client";
import { useCartStore } from "@/store";
import { Badge } from "./badge";

const CartItemsIndicator = () => {
  const cart = useCartStore((state: any) => state.cart);
  return (
    <div className="mt-4 mb-4">
      Items in Cart{" "}
      <Badge className="bg-secondary text-black dark:text-white">
        {cart.length}
      </Badge>
    </div>
  );
};

export default CartItemsIndicator;
