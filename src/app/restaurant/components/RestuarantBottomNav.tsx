import { Button } from "@/components/ui/button";
import { HandCoins, Heart } from "lucide-react";
import React from "react";

const RestaurantBottomNav = () => {
  return (
    <nav className="shadow-md py-3">
      <div className="flex items-center justify-between container">
        <ul className="flex items-center gap-5 flex-wrap *:font-medium *:cursor-pointer">
          <li className="relative after:absolute after:w-full after:h-[2px] after:bg-blue-600  after:-bottom-[18px] after:left-0 after:invisible after:opacity-20 hover:after:visible hover:after:opacity-100 after:transition-all after:duration-200">
            Order Online
          </li>
          <li>Gallery</li>
          <li>Restaurant Info</li>
          <li>Book A Table</li>
          <li>Ratings & Reviews</li>
        </ul>
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2 text-sm"
          >
            <Heart className="size-4 text-red-500" />
            Mark as favorite
          </Button>
          <Button
            size="sm"
            variant="destructive"
            className="uppercase rounded text-sm flex items-center gap-2"
          >
            <HandCoins className="size-4" />
            Offers
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantBottomNav;
