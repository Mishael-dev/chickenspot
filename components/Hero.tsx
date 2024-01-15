import React from "react";
import { Lead, P } from "./ui/Typography";
import Image from "next/image";
import Container from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" border-b border-slate-500/30 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:text-7xl md:w-1/2">
            <h1 className=" text-6xl ">
              Tired of eating tofu?dont worry we got you.
            </h1>
            <div className="hidden md:block mt-10">
              <P>
                Or user friendly ui helps you order with ease and when you place
                your order you will recieve your package within 30 mins time
                right at your dorm room.
              </P>

              <Button className="w-full md:max-w-36 mt-2">
                <Link href={"/menu"}>Order Now</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              height={800}
              width={800}
              src={"/images/hero image.png"}
              alt="chicken on plate"
            />
          </div>
          <div className="block md:hidden mt-8">
            <P>
              Or user friendly ui helps you order with ease and when you place
              your order you will recieve your package within 30 mins time right
              at your dorm room.
            </P>

            <Button className="w-full md:max-w-36 mt-4">
              <Link href={"/menu"}>Order Now</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
