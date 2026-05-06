import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
