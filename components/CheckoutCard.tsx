import Image from "next/image";
import { H3 } from "./ui/Typography";
import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import type { CartItem } from "@/types";
import { useCartStore } from "@/store";

const CheckoutCard = ({ price, part, number, id }: CartItem) => {
  const incrementItemNumber = useCartStore(
    (state: any) => state.incrementItemNumber
  );
  const decrementItemNumber = useCartStore(
    (state: any) => state.decrementItemNumber
  );

  const handleItemNumberIncrement = () => {
    incrementItemNumber(id);
  };
  const handleItemNumberDecrement = () => {
    decrementItemNumber(id);
  };
  return (
    <div className="flex">
      <Image
        height={500}
        width={500}
        src="/images/drumstick.jpg"
        alt="checkout image"
        className="w-40 h-40 rounded-md"
      />

      <div className="ml-6 flex flex-col justify-evenly">
        <H3>{part}</H3>
        <span className="text-primary font-bold">{`₦${price}`}</span>

        <div className="flex items-center gap-x-4">
          <Button variant={"outline"} onClick={handleItemNumberDecrement}>
            <Minus />
          </Button>
          <span>{`${number}`}</span>
          <Button variant={"outline"} onClick={handleItemNumberIncrement}>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
