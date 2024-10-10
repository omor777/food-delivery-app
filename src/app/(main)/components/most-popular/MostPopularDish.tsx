import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dish2 from "/public/dish2.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import SectionHeading from "@/components/section-heading/SectionHeading";
const MostPopularDish = () => {
  return (
    <>
      <SectionHeading>Most popular</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="grid grid-cols-[200px_1fr]">
            <CardHeader className="p-3 cursor-pointer">
              <Image
                className="object-cover rounded-md h-full"
                src={dish2}
                alt="dish"
              />
            </CardHeader>
            <CardContent className="p-3">
              <div className="flex flex-col gap-5">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-primary-text">
                    Egg Omelette
                  </h3>
                  <span className="text-xl font-semibold text-primary">
                    Tk 30
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Egg wishked & fried with chill & onion
                  </p>
                </div>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <ul className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <li key={s}>
                        <FaStar
                          className={`${s !== 5 ? "text-rating" : ""} size-4`}
                        />
                      </li>
                    ))}
                  </ul>

                  <Button size="icon">
                    <Plus className="size-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MostPopularDish;
