import Image from "next/image";
import coverImg from "/public/cover.jpg";
import { Building2, Clock9, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import RestaurantBottomNav from "../components/RestuarantBottomNav";

const Restaurant = () => {
  return (
    <div>
      <div className="bg-gray-300 h-[450px]">
        <div className="w-full h-full container">
          <div
            className="bg-restaurant-cover bg-center bg-cover bg-no-repeat h-full relative  
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-b
            before:from-black/30
            before:to-black/30
            before:opacity-75

            flex items-end
            "
          >
            <div className="relative z-10 bg-black/30 px-4 md:px-10 lg:px-20 w-full py-6 flex items-center justify-between">
              <div className="text-white">
                <div className="flex items-center gap-4 flex-wrap">
                  <Image
                    src={"/restaurant_logo.jpg"}
                    alt="logo"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-100">
                      Spice Hut Restaurant
                    </h2>
                    <ul className="mt-3 flex  flex-col gap-2">
                      <li className="flex items-center gap-1 font-medium">
                        <MapPin className="size-4" />
                        <span className="text-xs uppercase">
                          2036 2nd ave, new york, ny 10029
                        </span>
                        <Badge
                          className="rounded  py-1 uppercase tracking-[2px] ml-3"
                          variant="success"
                        >
                          Open
                        </Badge>
                      </li>
                      <li className="flex items-center gap-1 font-medium">
                        <Building2 className="size-4" />
                        <span className="text-xs capitalize">
                          North India, Chinese, Fast Food, South Indian
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <div className="h-14 bg-success px-5 max-w-max rounded text-white flex items-center gap-2 ml-auto ">
                  <Clock9 className="size-5" />
                  25-30 min
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <Badge className="rounded-sm gap-1 items-center">
                      <FaStar />
                      4.1
                    </Badge>
                    <span className="text-white font-semibold inline-block ml-2">
                      23 Ratings
                    </span>
                  </div>
                  <p className="text-white flex items-center gap-1.5 font-medium">
                    <MessageCircle className="size-5" />
                    <span>91 Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RestaurantBottomNav />
      </div>
    </div>
  );
};

export default Restaurant;
