"use client";

import React from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "./MenuCard";
import type { Menu } from "@/types";
import { Part } from "@/types";
import { Category } from "@/types";

const categories = ["Fried", "Pepper Chicken", "Southern Fried"];
const parts = ["Wings", "Drumsticks", "Breast", "Back", "Hip", "Leg", "Thigh"];

const card = {
  id: 1,
  part: "Wings",
  price: 1300,
  description:
    "Chicken sauced with pepper, a little bit spicy and very delicious",
  availability: 7,
};

const menu: Menu = {
  fried: [
    {
      id: 1,
      part: Part.Wings,
      category: Category.Fried,
      price: 1300,
      description: "Crispy fried chicken wings with a kick of pepper spice",
      availability: 7,
    },
    {
      id: 2,
      part: Part.Drumsticks,
      category: Category.Fried,
      price: 1100,
      description: "Golden-fried drumsticks seasoned with garlic and parmesan",
      availability: 10,
    },
    {
      id: 3,
      part: Part.Breast,
      category: Category.Fried,
      price: 1500,
      description:
        "Fried chicken breast with a honey mustard glaze, absolutely delicious",
      availability: 5,
    },
    {
      id: 4,
      part: Part.Back,
      category: Category.Fried,
      price: 1200,
      description:
        "Fried chicken back infused with zesty lemon herbs, a refreshing choice",
      availability: 8,
    },
    {
      id: 5,
      part: Part.Hip,
      category: Category.Fried,
      price: 1400,
      description:
        "Crispy fried chicken hip marinated in a savory soy ginger blend",
      availability: 6,
    },
    {
      id: 6,
      part: Part.Leg,
      category: Category.Fried,
      price: 1250,
      description: "Classic fried chicken leg with a delicious teriyaki glaze",
      availability: 9,
    },
    {
      id: 7,
      part: Part.Thigh,
      category: Category.Fried,
      price: 1350,
      description: "Fried chicken thigh with the perfect BBQ ranch flavor",
      availability: 7,
    },
  ],
  "pepper chicken": [
    {
      id: 1,
      part: Part.Wings,
      category: Category.PepperChicken,
      price: 1300,
      description:
        "Pepper chicken wings sauced with a little bit of spice, absolutely delicious",
      availability: 7,
    },
    {
      id: 2,
      part: Part.Drumsticks,
      category: Category.PepperChicken,
      price: 1100,
      description:
        "Pepper chicken drumsticks with a hint of spice and garlic parmesan goodness",
      availability: 10,
    },
    {
      id: 3,
      part: Part.Breast,
      category: Category.PepperChicken,
      price: 1500,
      description:
        "Tender pepper chicken breast sauced with a perfect blend of spices",
      availability: 5,
    },
    {
      id: 4,
      part: Part.Back,
      category: Category.PepperChicken,
      price: 1200,
      description:
        "Pepper chicken back infused with zesty lemon herbs, a delightful choice",
      availability: 8,
    },
    {
      id: 5,
      part: Part.Hip,
      category: Category.PepperChicken,
      price: 1400,
      description:
        "Juicy pepper chicken hip marinated in a savory soy ginger blend",
      availability: 6,
    },
    {
      id: 6,
      part: Part.Leg,
      category: Category.PepperChicken,
      price: 1250,
      description: "Crispy pepper chicken leg with a delicious teriyaki glaze",
      availability: 9,
    },
    {
      id: 7,
      part: Part.Thigh,
      category: Category.PepperChicken,
      price: 1350,
      description: "Pepper chicken thigh with a burst of BBQ ranch flavor",
      availability: 7,
    },
  ],
  "southern fried": [
    {
      id: 1,
      part: Part.Wings,
      category: Category.SouthernFried,
      price: 1300,
      description:
        "Southern fried chicken wings with a touch of classic Southern spices",
      availability: 7,
    },
    {
      id: 2,
      part: Part.Drumsticks,
      category: Category.SouthernFried,
      price: 1100,
      description:
        "Golden-fried drumsticks seasoned with the traditional Southern flair",
      availability: 10,
    },
    {
      id: 3,
      part: Part.Breast,
      category: Category.SouthernFried,
      price: 1500,
      description:
        "Crispy Southern fried chicken breast with a secret blend of spices",
      availability: 5,
    },
    {
      id: 4,
      part: Part.Back,
      category: Category.SouthernFried,
      price: 1200,
      description:
        "Southern fried chicken back with a burst of classic Southern flavors",
      availability: 8,
    },
    {
      id: 5,
      part: Part.Hip,
      category: Category.SouthernFried,
      price: 1400,
      description:
        "Tender Southern fried chicken hip with a hint of Southern goodness",
      availability: 6,
    },
    {
      id: 6,
      part: Part.Leg,
      category: Category.SouthernFried,
      price: 1250,
      description:
        "Classic Southern fried chicken leg with a mouthwatering taste",
      availability: 9,
    },
    {
      id: 7,
      part: Part.Thigh,
      category: Category.SouthernFried,
      price: 1350,
      description:
        "Southern fried chicken thigh with the perfect Southern crunch",
      availability: 7,
    },
  ],
};

const MenuTabs = () => {
  return (
    <section>
      <Tabs className="" defaultValue="Fried">
        <div className="overflow-x-scroll sm:overflow-visible pb-4 sm:pb-0">
          <TabsList className=" w-full min-w-fit sm:w-full flex justify-evenly ">
            {categories.map((category) => (
              <TabsTrigger value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent
          value="Fried"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8 mt-8"
        >
          {menu["fried"].map((product, index) => (
            <MenuCard {...product} key={index} />
          ))}
        </TabsContent>
        <TabsContent
          value="Pepper Chicken"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8 mt-8"
        >
          {menu["pepper chicken"].map((product, index) => (
            <MenuCard {...product} key={index} />
          ))}
        </TabsContent>
        <TabsContent
          value="Southern Fried"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8 "
        >
          {menu["southern fried"].map((product, index) => (
            <MenuCard {...product} key={index} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MenuTabs;
