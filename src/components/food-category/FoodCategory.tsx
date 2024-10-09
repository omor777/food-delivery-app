"use client";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import breakfast from "/public/Breakfast.png";
import burger from "/public/Burger.png";
import coffee from "/public/Coffee.png";
import coloCan from "/public/ColaCan.png";
import fries from "/public/Fries.png";
import salad from "/public/Salad.png";
import sandwich from "/public/Sandwich.png";
import steak from "/public/Steak.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

const foodCategories = [
  { name: "Breakfast", image: breakfast },
  { name: "Burger", image: burger },
  { name: "Coffee", image: coffee },
  { name: "ColoCan", image: coloCan },
  { name: "Fries", image: fries },
  { name: "Salad", image: salad },
  { name: "Sandwich", image: sandwich },
  { name: "Steak", image: steak },
];

const FoodCategory = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-3">
          {foodCategories.map((category, index) => (
            <CarouselItem
              className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              key={index}
            >
              <Card className="cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-6 gap-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={50}
                    height={50}
                  />
                  <span className="text-muted-foreground text-xs">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 hidden sm:flex hover:bg-primary hover:text-white" />
        <CarouselNext className="-right-4 hidden sm:flex hover:text-white hover:bg-primary" />
      </Carousel>
    </div>
  );
};

export default FoodCategory;
