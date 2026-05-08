import { motion } from "framer-motion";

import extra1121 from "@/assets/product-1121.jpg";
import brown from "@/assets/product-brown.jpg";
import sella from "@/assets/product-sella.jpg";
import steam from "@/assets/product-steam.jpg";
import superBasmati from "@/assets/product-super-basmati.jpg";

/* ADD YOUR OTHER IMAGES */
import img6 from "@/assets/img-pk-386.png";
import img11 from "@/assets/product-chef-basmati.png";
import img8 from "@/assets/product-golden-sella-rice.png";
import img7 from "@/assets/product-irri-6.png";
import img10 from "@/assets/product-oraganic-basmati.png";
import img9 from "@/assets/product-white-rice.png";

const products = [
  {
    name: "Super Basmati Rice",
    img: superBasmati,
    desc: "Premium long-grain basmati with exquisite aroma",
    tag: "Best Seller",
  },
  {
    name: "Sella Basmati Rice",
    img: sella,
    desc: "Parboiled golden grains, perfect for biryani",
    tag: "Export Grade",
  },
  {
    name: "Steam Basmati Rice",
    img: steam,
    desc: "Fluffy steamed rice for everyday perfection",
    tag: "Premium",
  },
  {
    name: "Brown Basmati Rice",
    img: brown,
    desc: "Whole grain goodness rich in nutrients",
    tag: "Healthy Choice",
  },
  {
    name: "1121 Basmati Rice",
    img: extra1121,
    desc: "Extra-long grain, king of basmati varieties",
    tag: "Top Quality",
  },

  /* ADD REMAINING PRODUCTS */
  {
    name: "PK-386 Rice",
    img: img6,
    desc: "Soft texture ideal for daily meals",
    tag: "Popular",
  },
  {
    name: "IRRI-6 Rice",
    img: img7,
    desc: "Economical rice with consistent quality",
    tag: "Economy",
  },
  {
    name: "Golden Sella Rice",
    img: img8,
    desc: "Golden processed grains with rich texture",
    tag: "Export",
  },
  {
    name: "White Rice",
    img: img9,
    desc: "Naturally aromatic premium white rice",
    tag: "Pure",
  },
  {
    name: "Organic Basmati Rice",
    img: img10,
    desc: "Naturally cultivated healthy rice variety",
    tag: "Organic",
  },
  {
    name: "Chef Special Rice",
    img: img11,
    desc: "Premium rice crafted for restaurants",
    tag: "Chef Choice",
  },
];

const ProductsSection = () => (
  <section
    id="products"
    className="py-24 bg-[#165a2d] overflow-hidden scroll-mt-24"
  >
    <div className="container px-6 md:px-10 mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="uppercase tracking-[0.3em] text-yellow-500 text-sm mb-4 font-medium">
          Our Products
        </p>

        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Premium Rice Collection
        </h2>

        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
          Sajjad Rice Mills offers a diverse range of carefully processed
          premium rice varieties known for aroma, purity, texture, and
          exceptional cooking quality.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, index) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-[#165a2d] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                {p.tag}
              </div>

              <img
                src={p.img}
                alt={p.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-[#165a2d] mb-3">
                {p.name}
              </h3>

              <p className="text-[#807873] leading-relaxed text-sm">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
