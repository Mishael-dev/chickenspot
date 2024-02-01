import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "./MenuCard";
import { MenuItem, Part } from "@/types";
import { Category } from "@/types";
import { H1 } from "./ui/Typography";
import { Suspense } from "react";

const categories = ["Barbecue", "Fried", "Pepper Chicken", "Southern Fried"];
const parts = ["Wings", "Drumsticks", "Breast", "Back", "Hip", "Leg", "Thigh"];

async function getData() {
  const res = await fetch(process.env.URL + "/api/inventory", {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  console.log(data);

  return data;
}

const Inventory = async () => {
  const inventory = await getData();

  return inventory.data.length
    ? inventory.data.map((item: MenuItem, index: number) => {
        return <MenuCard key={index} {...item} />;
      })
    : "Sorry an error occured :( \nmake sure you have active internet connection";
};

const MenuTabs = async () => {
  return (
    <section>
      <Tabs className="mt-8" defaultValue="Barbecue">
        <div className="overflow-x-scroll sm:overflow-visible pb-4 sm:pb-0">
          <TabsList className=" w-full min-w-fit sm:w-full flex justify-evenly ">
            {categories.map((category, index) => (
              <TabsTrigger value={category} key={index}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent
          value="Barbecue"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8 mt-8"
        >
          <Suspense>
            <Inventory />
          </Suspense>
        </TabsContent>
        <TabsContent
          value="Fried"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8"
        >
          <H1>Currently unavailable sorry :(</H1>
        </TabsContent>
        <TabsContent
          value="Pepper Chicken"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8"
        >
          <H1>Currently unavailable sorry :(</H1>
        </TabsContent>
        <TabsContent
          value="Southern Fried"
          className="flex flex-wrap justify-center gap-x-8 gap-y-8"
        >
          <H1>Currently unavailable sorry :(</H1>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MenuTabs;
