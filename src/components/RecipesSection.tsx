import biryani from "@/assets/recipe-biryani.jpg";
import friedRice from "@/assets/recipe-friedrice.jpg";
import kheer from "@/assets/recipe-kheer.jpg";
import pulao from "@/assets/recipe-pulao.jpg";
import zarda from "@/assets/recipe-zarda.jpg";

const recipes = [
  {
    name: "Chicken Biryani",
    img: biryani,
    desc: "Aromatic layered rice with tender chicken, saffron, and traditional spices — Pakistan's most beloved dish.",
  },
  {
    name: "Chicken Pulao",
    img: pulao,
    desc: "Fragrant one-pot rice cooked with whole spices, cardamom, and succulent chicken pieces.",
  },
  {
    name: "Rice Kheer",
    img: kheer,
    desc: "Creamy rice pudding simmered in milk, sweetened with sugar and garnished with nuts and cardamom.",
  },
  {
    name: "Egg Fried Rice",
    img: friedRice,
    desc: "Quick and flavorful wok-tossed rice with eggs, vegetables, and soy sauce — a family favorite.",
  },
  {
    name: "Zarda (Sweet Rice)",
    img: zarda,
    desc: "Festive saffron-colored sweet rice loaded with dried fruits, nuts, and aromatic spices.",
  },
];

const RecipesSection = () => (
  <section id="recipes" className="py-20 bg-transparent">
    <div className="container px-4">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-4 text-white">
        Rice Recipes
      </h2>
      <p className="font-body text-yellow-500  text-center max-w-2xl mx-auto mb-16 text-lg">
        Discover delicious recipes you can make with our premium basmati rice.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((r) => (
          <div
            key={r.name}
            className="group bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {r.name}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecipesSection;
