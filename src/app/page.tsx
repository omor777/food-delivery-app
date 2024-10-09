import DiscoverCarousel from "@/components/food-category/discover-carousel/DiscoverCarousel";
import FoodCategory from "@/components/food-category/FoodCategory";

export default function Home() {
  return (
    <div className="bg-muted min-h-screen">
      <div className="container">
        <div className="pt-6">
          <FoodCategory />
        </div>
        <div className="pt-6">
          <DiscoverCarousel />
        </div>
      </div>
    </div>
  );
}
