import { motion } from "framer-motion";

import biryani from "@/assets/recipe-biryani.jpg";
import friedRice from "@/assets/recipe-friedrice.jpg";
import kheer from "@/assets/recipe-kheer.jpg";
import pulao from "@/assets/recipe-pulao.jpg";
import zarda from "@/assets/recipe-zarda.jpg";

/* ADD NEW IMAGES */
import beefBiryani from "@/assets/recipe-beef-biryani.png";
import kabuliPulao from "@/assets/recipe-kabuli-pulao.png";
import sindhiBiryani from "@/assets/recipe-sindhi-biryani.png";
import vegFriedRice from "@/assets/recipe-veg-fried-rice.png";
import yakhniPulao from "@/assets/recipe-yakhni-pulao.png";

const recipes = [
  {
    name: "Chicken Biryani",
    img: biryani,
    desc: "Aromatic layered rice with tender chicken, saffron, and rich traditional spices.",
    tag: "Popular",
  },
  {
    name: "Chicken Pulao",
    img: pulao,
    desc: "Fragrant one-pot rice cooked with cardamom and succulent chicken pieces.",
    tag: "Classic",
  },
  {
    name: "Rice Kheer",
    img: kheer,
    desc: "Creamy rice pudding simmered in milk and garnished with nuts and cardamom.",
    tag: "Dessert",
  },
  {
    name: "Egg Fried Rice",
    img: friedRice,
    desc: "Flavorful wok-tossed rice with eggs, vegetables, and soy sauce.",
    tag: "Quick Meal",
  },
  {
    name: "Zarda",
    img: zarda,
    desc: "Festive sweet rice loaded with dried fruits and aromatic spices.",
    tag: "Sweet Dish",
  },
  {
    name: "Beef Biryani",
    img: beefBiryani,
    desc: "Rich and spicy beef biryani layered with aromatic basmati rice.",
    tag: "Spicy",
  },
  {
    name: "Vegetable Fried Rice",
    img: vegFriedRice,
    desc: "Healthy fried rice packed with colorful vegetables and flavor.",
    tag: "Healthy",
  },
  {
    name: "Sindhi Biryani",
    img: sindhiBiryani,
    desc: "Traditional Sindhi-style biryani with bold spices and potatoes.",
    tag: "Traditional",
  },
  {
    name: "Kabuli Pulao",
    img: kabuliPulao,
    desc: "Afghan-inspired rice dish with raisins, carrots, and tender meat.",
    tag: "Premium",
  },
  {
    name: "Chicken Yakhni Pulao",
    img: yakhniPulao,
    desc: "Delicate pulao cooked in flavorful chicken broth and spices.",
    tag: "Chef Choice",
  },
];

const RecipesSection = () => (
  <section
    id="recipes"
    className="py-24 bg-[#f8f7f4] overflow-hidden scroll-mt-24"
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
        <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm mb-4 font-medium">
          Rice Recipes
        </p>

        <h2 className="font-display text-4xl md:text-6xl font-bold text-[#165a2d] mb-6">
          Inspired Rice Creations
        </h2>

        <p className="max-w-3xl mx-auto leading-relaxed text-lg text-[#807873]">
          Discover authentic and flavorful dishes prepared with our premium
          basmati rice varieties, crafted for unforgettable dining experiences.
        </p>
      </motion.div>

      {/* Recipes Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((r, index) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-[#165a2d] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                {r.tag}
              </div>

              <img
                src={r.img}
                alt={r.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-[#165a2d] mb-3">
                {r.name}
              </h3>

              <p className="text-[#807873] leading-relaxed text-sm">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RecipesSection;
