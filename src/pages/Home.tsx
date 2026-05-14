import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import MainLayout from "@/layout/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
      </MainLayout>
    </>
  );
};

export default Home;
