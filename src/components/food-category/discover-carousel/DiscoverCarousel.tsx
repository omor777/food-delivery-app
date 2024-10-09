"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "/public/pro1.jpg";
import img2 from "/public/pro2.jpg";
import img3 from "/public/pro3.jpg";
import img4 from "/public/pro4.jpg";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const carousels = [
  {
    id: 1,
    img: img1,
  },

  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },

  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img1,
  },
  {
    id: 6,
    img: img2,
  },
];

const DiscoverCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent className="-ml-3">
        {carousels.map((carousel) => (
          <CarouselItem
            className="pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-pointer "
            key={carousel.id}
          >
            <Image
              className="object-cover rounded-lg w-full"
              src={carousel.img}
              alt="offer"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 hidden sm:flex hover:bg-primary hover:text-white" />
      <CarouselNext className="-right-4 hidden sm:flex hover:text-white hover:bg-primary" />
    </Carousel>
  );
};

export default DiscoverCarousel;
