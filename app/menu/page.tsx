import { H1 } from "@/components/ui/Typography";
import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import MenuTabs from "@/components/MenuTabs";
import CartItemsIndicator from "@/components/ui/CartItemsIndicator";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="pb-80 relative">
      <Container>
        <H1>Menu</H1>
        <MenuTabs />
      </Container>

      <div className="bg-primary h-20 fixed bottom-0 w-full flex items-center">
        <Container>
          <div className="flex justify-between items-center">
            <CartItemsIndicator />
            <Link href="/menu/checkout">
              <Button variant={"secondary"}>
                Complete order <ShoppingCart className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page;
