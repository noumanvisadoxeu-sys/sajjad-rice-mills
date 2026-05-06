import logo from "@/assets/srm-logo.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Recipes", to: "/recipes" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sajjad Rice Mills"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="font-display text-2xl font-bold text-white tracking-wide hidden sm:block">
            SAJJAD RICE MILLS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <HashLink
              key={l.to}
              smooth
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white font-body text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              {l.label}
            </HashLink>
          ))}

          <Link
            to="/contact"
            className="ml-4 bg-cta text-white px-5 py-2 rounded-md text-md font-semibold hover:bg-cta/90 transition"
          >
            Get Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-white/80 hover:text-white font-body text-sm uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
