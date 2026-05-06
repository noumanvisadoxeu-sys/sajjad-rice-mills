import processImg from "@/assets/SajjadRicePics/WhatsApp Image 2026-04-30 at 4.49.09 PM.jpeg";

const AboutSection = () => (
  <section id="about" className="py-20 section-gradient scroll-mt-24">
    <div className="container px-6 md:px-10 mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-6">
        Experience the SRM Standard
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
        Sajjad Rice Mills, located in Rahimyarkhan, has been a trusted name in
        premium basmati rice production. With a commitment to quality and a
        deep-rooted passion for excellence, we bring the authentic taste of
        Punjab's finest rice to tables across Pakistan and beyond.
      </p>

      <div className="grid md:grid-cols-2 items-center pl-0 md:pl-2">
        <div>
          <img
            src={processImg}
            alt="Rice milling process at Sajjad Rice Mills"
            className="rounded-lg shadow-xl w-full max-w-xl"
            loading="lazy"
            width={1200}
            height={750}
          />
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold text-primary mb-4">
            Our Process
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            At Sajjad Rice Mills, we follow a meticulous process from paddy
            procurement to final packaging. Our state-of-the-art milling
            facility ensures each grain is carefully cleaned, husked, polished,
            and graded to meet the highest quality standards.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            We purchase pure Basmati Paddy directly from local farmers in
            Punjab, ensuring freshness and authenticity. Every batch undergoes
            rigorous quality checks at each step of the process, guaranteeing
            premium quality rice for our valued customers.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
