import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { H3, P } from "./ui/Typography";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";

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

const categories = ["Fried", "Pepper chicken", "Southern Fried"];
const parts = ["Wings", "Drumsticks", "Breast", "Back", "Hip", "Leg", "Thigh"];

const MenuCard = () => {
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
          <Badge className="absolute top-5 left-5">{`${card.availability} Remaining`}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2 items-start p-4 pb-6 ">
        <div className="flex items-center justify-between w-full">
          <H3>{card.part}</H3>
          <span className="text-2xl text-primary font-bold">{`₦${card.price}`}</span>
        </div>
        <P>{card.description}</P>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;