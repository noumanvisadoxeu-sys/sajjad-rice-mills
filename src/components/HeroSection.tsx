const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 pt-20 md:pt-32"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero_section_video_new.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 container text-center px-4">
      <h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-6">
        Exporting Premium Basmati Rice Worldwide
      </h1>
      <p
        className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        style={{
          animationDelay: "0.2s",
          opacity: 100,
          animation: "fade-in-up 0.8s ease-out 0.2s forwards",
        }}
      >
        Supplying premium basmati rice to trusted distributors across the USA,
        UK, Europe & global markets.
      </p>
      <a
        href="#about"
        className="inline-block border-2 border-primary-foreground/70 text-primary-foreground px-10 py-3 font-body text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all"
        style={{
          animationDelay: "0.6s",
          opacity: 0,
          animation: "fade-in-up 0.8s ease-out 0.4s forwards",
        }}
      >
        Discover
      </a>
    </div>
  </section>
);

export default HeroSection;
