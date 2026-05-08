import ProductsSection from "@/components/ProductsSection";
import MainLayout from "@/layout/MainLayout";
import Padding from "@/layout/PaddingForSeparatePage";

const Products = () => {
  return (
    <>
      <MainLayout className="bg-primary-bgcolor">
        <Padding />
        <ProductsSection />
      </MainLayout>
    </>
  );
};

export default Products;
