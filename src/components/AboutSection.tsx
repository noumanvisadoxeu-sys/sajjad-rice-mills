import processImg from "@/assets/SajjadRicePics/WhatsApp Image 2026-04-30 at 4.49.09 PM.jpeg";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Trusted Farmers" },
  { value: "100%", label: "Premium Quality" },
  { value: "Worldwide", label: "Export Vision" },
];

const processSteps = [
  "Premium Paddy Procurement",
  "Advanced Cleaning & Husking",
  "Precision Polishing",
  "Quality Grading & Testing",
  "Secure Packaging & Distribution",
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
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
          About Sajjad Rice Mills
        </p>

        <h2
          className="font-display text-4xl md:text-6xl font-bold mb-6"
          style={{ color: "#165a2d" }}
        >
          Experience the SRM Standard
        </h2>

        <p
          className="max-w-3xl mx-auto leading-relaxed text-lg"
          style={{ color: "#807873" }}
        >
          Sajjad Rice Mills has become a trusted name in premium Basmati rice
          production by combining traditional agricultural values with modern
          milling excellence.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[#165a2d]/10 blur-3xl rounded-full" />

          <img
            src={processImg}
            alt="Rice milling process at Sajjad Rice Mills"
            className="relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-display text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#165a2d" }}
          >
            Our Process
          </h3>

          <p
            className="leading-relaxed mb-8 text-lg"
            style={{ color: "#807873" }}
          >
            From paddy procurement to final packaging, every grain passes
            through a carefully monitored process designed to preserve aroma,
            texture, and purity.
          </p>

          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[#f8f8f8] border border-[#eaeaea] rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-[#165a2d] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="font-medium" style={{ color: "#165a2d" }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#fafafa] border border-[#ececec] rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <h4
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "#165a2d" }}
            >
              {stat.value}
            </h4>

            <p
              className="text-sm uppercase tracking-wider"
              style={{ color: "#807873" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
