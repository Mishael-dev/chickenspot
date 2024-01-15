import React from "react";
import Container from "./ui/container";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ThemeButton";

const navRoutes = [
  {
    href: "/home",
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
            <Image
              height={700}
              width={700}
              src={"/images/logo.svg"}
              alt="chicken on a plate"
              className="w-52"
            />
          </div>

          <ul className="flex gap-8">
            {navRoutes.map((route) => (
              <Button variant={"ghost"}>
                {" "}
                <Link href={route.href}>{route.label}</Link>{" "}
              </Button>
            ))}
          </ul>

          <div className="flex items-center gap-x-4 ">
            <Button>
              <Link href={"/menu"}>Order Now</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
