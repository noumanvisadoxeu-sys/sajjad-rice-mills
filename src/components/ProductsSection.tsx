import extra1121 from "@/assets/product-1121.jpg";
import brown from "@/assets/product-brown.jpg";
import sella from "@/assets/product-sella.jpg";
import steam from "@/assets/product-steam.jpg";
import superBasmati from "@/assets/product-super-basmati.jpg";

const products = [
  {
    name: "Super Basmati Rice",
    img: superBasmati,
    desc: "Premium long-grain basmati with exquisite aroma",
  },
  {
    name: "Sella Basmati Rice",
    img: sella,
    desc: "Parboiled golden grains, perfect for biryani",
  },
  {
    name: "Steam Basmati Rice",
    img: steam,
    desc: "Fluffy steamed rice for everyday perfection",
  },
  {
    name: "Brown Basmati Rice",
    img: brown,
    desc: "Whole grain goodness, rich in fiber and nutrients",
  },
  {
    name: "1121 Basmati Rice",
    img: extra1121,
    desc: "Extra-long grain, the king of basmati varieties",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-primary-dark">
    <div className="container px-4">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
        Our Products
      </h2>
      <p className="font-body text-primary-foreground/70 text-center max-w-2xl mx-auto mb-16 text-lg">
        Sajjad Rice Mills offers a diverse range of premium basmati rice
        products, carefully processed to ensure unmatched aroma, taste, and
        purity.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.name}
            className="group bg-primary/50 rounded-lg overflow-hidden hover:bg-primary/70 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                {p.name}
              </h3>
              <p className="font-body text-primary-foreground/70 text-sm">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
