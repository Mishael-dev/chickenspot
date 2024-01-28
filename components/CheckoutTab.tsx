"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import CheckoutCard from "./CheckoutCard";
import { useCartStore } from "@/store";
import { H2 } from "./ui/Typography";
import { Input } from "./ui/input";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { LocationForm } from "./forms/LocationForm";
import { Badge } from "./ui/badge";
import { CartItem } from "@/types";
import { table } from "console";
import { useState } from "react";

const tabList = ["Verify Order", "Location", "Payment"];

const halls = [
  "Winslow",
  "Emerald",
  "Topaz",
  "Samual Adeleke",
  "Nelson Mandela",
  "Gideon Troopers",
];

const CheckoutTab = () => {
  const cart = useCartStore((state: any) => state.cart);

  function getTotalPrice() {
    let totalPrice = 0;

    if (cart.length > 0)
      cart.forEach((item: CartItem) => {
        let itemPrice = item.number * item.price;
        totalPrice += itemPrice;
      });

    return totalPrice;
  }

  return (
    <section>
      <Tabs defaultValue="Verify Order" className="w-full mt-8">
        <TabsList className="w-full flex justify-evenly">
          {tabList.map((tab, index) => (
            <TabsTrigger key={index} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value="Verify Order"
          className="flex flex-col gap-y-4 pt-8"
        >
          <H2>Audit your package</H2>
          <span>You can not order above 10 pieces</span>
          <div className="flex pl-4 gap-4 flex-col ">
            {cart.map((product: any, index: number) => (
              <CheckoutCard key={index} {...product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Location" className="mb-12">
          <H2>Where should we meet you?</H2>
          <LocationForm />
        </TabsContent>
        <TabsContent value="Payment">
          <H2>Make Payment to complete order</H2>
        </TabsContent>
      </Tabs>
      <div className="bg-primary h-20 flex fixed right-0 left-0 bottom-0 w-full items-center  ">
        <Container>
          <div className="w-full h-full flex justify-between">
            <span>
              Total :{" "}
              <Badge variant={"secondary"} className="p-2">
                {getTotalPrice()}
              </Badge>
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CheckoutTab;
