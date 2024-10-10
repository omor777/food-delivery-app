"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

import dish1 from "/public//dish1.png";
import { Button } from "../ui/button";
import { Check, Heart, Plus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import SectionHeading from "../section-heading/SectionHeading";

const TrendingDisses = () => {
  const [s, setS] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <>
      <SectionHeading>Trending this week</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-0 relative">
              <Image className="w-full object-cover" src={dish1} alt="dish" />
              <span
                onClick={() => setS((prev) => !prev)}
                className={`absolute  p-2 rounded-full cursor-pointer right-3 top-1 transition-colors ${
                  !s ? "bg-zinc-100 hover:bg-zinc-200" : "bg-success "
                }`}
              >
                <Heart
                  className={`${s ? "text-white transition-colors" : ""}`}
                />
              </span>
            </CardHeader>
            <CardContent className="mt-3">
              <div className="flex items-end justify-between">
                <div className="grid gap-2">
                  <ul className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <li key={s}>
                        <FaStar
                          className={`${s !== 5 ? "text-rating" : ""} size-5`}
                        />
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold text-black/80">
                    Cheese burger
                  </h3>
                  <span className="text-3xl font-extrabold text-primary">
                    Tk 160
                  </span>
                </div>
                <Button
                  onClick={() => setCart((prev) => !prev)}
                  size="icon"
                  variant={cart ? "success" : "default"}
                >
                  {cart ? (
                    <Check className="size-6" />
                  ) : (
                    <Plus className="size-6" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TrendingDisses;
