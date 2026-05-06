import RecipesSection from "@/components/RecipesSection";
import MainLayout from "@/layout/MainLayout";

const Recipes = () => {
  return (
    <>
      <MainLayout className="bg-primary-bgcolor">
        <RecipesSection />
      </MainLayout>
    </>
  );
};

export default Recipes;
