"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import CheckoutCard from "./CheckoutCard";
import { useCartStore } from "@/store";
import { H2 } from "./ui/Typography";

const tabList = ["Verify Order", "Location", "Payment"];

const CheckoutTab = () => {
  const cart = useCartStore((state: any) => state.cart);
  return (
    <section>
      <Tabs defaultValue="Verify Order" className="w-full mt-8">
        <TabsList className="w-full flex justify-evenly">
          {tabList.map((tab) => (
            <TabsTrigger value={tab}>{tab}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Verify Order" className="flex flex-col gap-y-4">
          <H2>Audit your package</H2>
          {cart.map((product: any, index: number) => (
            <CheckoutCard key={index} {...product} />
          ))}
        </TabsContent>
        <TabsContent value="Location" className="mb-12">
          <H2>Where should we meet you?</H2>
        </TabsContent>
        <TabsContent value="Payment">
          <H2>Make Payment to complete order</H2>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CheckoutTab;
