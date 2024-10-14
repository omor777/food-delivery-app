import RecommendedSection from "./RecomendedSection";

const RestaurantMainContent = () => {
  return (
    <div className="grid grid-cols-12 container gap-6 mt-7">
      <div className="col-span-8">
        <RecommendedSection />
      </div>
      <div className="h-screen bg-blue-50 col-span-4"></div>
    </div>
  );
};

export default RestaurantMainContent;
