import React from "react";
import Container from "./ui/container";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ThemeButton";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import { Menu } from "lucide-react";

const navRoutes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/menu",
    label: "Menu",
  },
  {
    href: "/faq",
    label: "FAQ's",
  },
];

const Header = () => {
  return (
    <header className="py-4 backdrop-blur border-b border-slate-500/30">
      <Container>
        <div className="flex justify-between items-center ">
          <div>
            <Link href={"/"}>
              <Image
                height={700}
                width={700}
                src={"/images/logo.svg"}
                alt="chicken on a plate"
                className="w-52 shrink-0 hidden md:block"
              />
              <Image
                height={700}
                width={700}
                src={"/images/logo icon.svg"}
                alt="chicken icon"
                className="w-16 shrink-0 md:hidden"
              />
            </Link>
          </div>

          <ul className=" gap-8 hidden md:flex">
            {navRoutes.map((route) => (
              <Button key={route.href} variant={"ghost"}>
                {" "}
                <Link href={route.href}>{route.label}</Link>{" "}
              </Button>
            ))}
          </ul>

          <div className="flex items-center gap-x-4 ">
            <Button className="shrink-1">
              <Link href={"/menu"}>Order</Link>
            </Button>
            <ModeToggle />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <ul className="flex gap-8 flex-col">
                    {navRoutes.map((route) => (
                      <Button key={route.href} variant={"ghost"}>
                        {" "}
                        <Link href={route.href}>{route.label}</Link>{" "}
                      </Button>
                    ))}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
