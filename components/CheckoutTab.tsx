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
          <div>
            {cart.map((product: any, index: number) => (
              <CheckoutCard key={index} {...product} />
            ))}
          </div>
          <div className="bg-primary h-20 fixed right-0 left-0 bottom-0 w-full flex items-center">
            <Container>
              <div className="w-full h-full flex justify-end">
                <Button variant="secondary">
                  Next <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Container>
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
    </section>
  );
};

export default CheckoutTab;
