"use client";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { H3, P } from "./ui/Typography";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import type { CartItem, MenuItem } from "@/types";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import classnames from "classnames";

const menu = [
  {
    name: "Pepper chicken",
    price: 12,
    description:
      "Chicken sauced with pepper, a little bit spicy and very delicious",
    availability: "In stock",
    items_remaining: 7,
  },
];

const card = {
  part: "Wings",
  price: 1300,
  description:
    "Chicken sauced with pepper, a little bit spicy and very delicious",
  availability: 7,
};

const parts = ["Wings", "Drumsticks", "Breast", "Back", "Hip", "Leg", "Thigh"];

const MenuCard = ({
  id,
  availability,
  category,
  part,
  price,
  description,
}: MenuItem) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  const [isInCart, setIsInCart] = useState(false);
  console.log(useCartStore().addToCart)

  const handleCartBtnClick = () => {
    if (isInCart == false) {
      setIsInCart(true);
      addToCart({
        id: id,
        part: part,
        price: price,
        description: description,
        availability: availability,
        number: 1,
      });
    } else if (isInCart == true) {
      setIsInCart(false);
      removeFromCart(id);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Card className="w-full overflow-hidden sm:max-w-80">
      <CardContent className="p-0 relative">
        <div>
          <Image
            height={1000}
            width={1000}
            alt={"menu image"}
            src={"/images/drumstick.jpg"}
            className="backdrop-contrast-75"
          />
          <Badge className="absolute top-5 left-5">{`${availability} Remaining`}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2 items-start p-4 pb-6 ">
        <div className="flex items-center justify-between w-full">
          <H3>{part}</H3>
          <span className="text-2xl text-primary font-bold">{`₦${price}`}</span>
        </div>
        <P>{description}</P>
        <>
          <Button
            className={classnames({ "w-full": true, hidden: isInCart })}
            onClick={handleCartBtnClick}
          >
            Add to cart
          </Button>

          <Button
            variant={"secondary"}
            className={classnames({ "w-full": true, hidden: !isInCart })}
            onClick={handleCartBtnClick}
          >
            Added to cart
          </Button>
        </>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
