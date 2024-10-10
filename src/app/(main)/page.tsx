import DiscoverCarousel from "@/components/food-category/discover-carousel/DiscoverCarousel";
import FoodCategory from "@/components/food-category/FoodCategory";
import TrendingDisses from "@/components/trending-dishes/TrendingDisses";
import MostPopularDish from "./components/most-popular/MostPopularDish";

export default function Home() {
  return (
    <div className="bg-muted min-h-screen pb-10">
      <div className="container">
        <div className="py-6">
          <FoodCategory />
        </div>
        <div>
          <DiscoverCarousel />
        </div>
        <div className="py-10">
          <TrendingDisses />
        </div>
        <div>
          <MostPopularDish />
        </div>
      </div>
    </div>
  );
}
