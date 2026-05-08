import logo from "@/assets/srm-logo.png";
import { Mail, Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const links = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Recipes", to: "/recipes" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer id="contact" className=" text-primary-foreground bg-green-800">
    <div className="container px-4 py-10 md:py-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="SRM"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-xl font-bold">
              SAJJAD RICE MILLS
            </span>
          </div>
          <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
            Delivering the finest basmati grains nurtured by the rich soils of
            Punjab, Pakistan. Quality you can trust, taste you will love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <HashLink
                  smooth
                  to={l.to}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {l.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 font-body text-sm ">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <a
                href="tel:0685872306"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                068 5872306
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <a
                href="mailto:sajjadricemills411@gmail.com"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                sajjadricemills411@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3"></li>
          </ul>
        </div>
      </div>

      {/* Map embed */}
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-light/20">
      <div className="container px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Sajjad Rice Mills. All rights reserved.
        </p>
        <p className="font-body text-xs text-primary-foreground/50">
          Powered by{" "}
          <span className="text-accent font-semibold">TriTech Solutions</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
