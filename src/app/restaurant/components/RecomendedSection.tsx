"use client";
import SectionHeading from "@/components/section-heading/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import Autoplay from "embla-carousel-autoplay";
import { Plus, Search } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const dishes = [
  {
    id: 1,
    name: "Soups",
    items: 2,
  },
  {
    id: 2,
    name: "Salads",
    items: 3,
  },
  {
    id: 3,
    name: "Pasta",
    items: 1,
  },
  {
    id: 4,
    name: "Burgers",
    items: 4,
  },
  {
    id: 5,
    name: "Pizzas",
    items: 5,
  },
  {
    id: 6,
    name: "Deserts",
    items: 1,
  },
  {
    id: 7,
    name: "Desserts",
    items: 2,
  },
];

const RecommendedSection = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <div>
      <Card className="rounded">
        <CardContent className="p-5">
          <SectionHeading className="text-2xl  pb-4">
            Recommended
          </SectionHeading>
          <form>
            <div className="relative">
              <span className="absolute top-2.5 right-2 cursor-pointer text-muted-foreground">
                <Search className="size-5" />
              </span>
              <Input type="text" placeholder="Search for dishes" className="" />
            </div>
          </form>

          <div className="mt-5">
            <SectionHeading className="text-xl pb-3">
              Most Popular
            </SectionHeading>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <CarouselItem key={i} className="sm:basis-1/3 lg:basis-1/4">
                    <Card className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          className="object-cover "
                          src="/dish1.png"
                          alt="dish image"
                          width={200}
                          height={100}
                        />
                      </CardHeader>
                      <CardContent className="p-3 pt-2 items-center flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-primary-text ">
                          Soup
                        </h3>
                        <Badge variant="outline">
                          <span className="text-xs text-gray-400">
                            {i + 1} items
                          </span>
                        </Badge>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden sm:flex hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-4 hidden sm:flex hover:text-white hover:bg-primary" />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendedSection;
