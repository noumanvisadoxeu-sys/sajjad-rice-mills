import logo from "@/assets/srm-logo.png";

import { Mail, Phone } from "lucide-react";

import { HashLink } from "react-router-hash-link";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Recipes", to: "/recipes" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d3b1e] border-t border-white/5 text-white">
      {/* MAIN FOOTER */}
      <div className="container px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Sajjad Rice Mills"
                className="h-12 w-12 rounded-full object-cover"
              />

              <span className="font-display text-2xl font-bold">
                SAJJAD RICE MILLS
              </span>
            </div>

            <p className="text-white/70 leading-relaxed max-w-md">
              Delivering premium basmati rice from the fertile lands of Punjab,
              Pakistan with exceptional quality, aroma, and global export
              standards.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display text-xl font-bold mb-5">Quick Links</h4>

            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <HashLink
                    smooth
                    to={l.to}
                    className="text-white/70 hover:text-[#d4a017] transition-colors duration-300"
                  >
                    {l.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-xl font-bold mb-5">Contact Us</h4>

            <ul className="space-y-4">
              {/* PHONE */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[#d4a017]" />

                <a
                  href="tel:0685872306"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  068 5872306
                </a>
              </li>

              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[#d4a017]" />

                <a
                  href="mailto:sajjadricemills411@gmail.com"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  sajjadricemills411@gmail.com
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">
              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#d4a017] text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF size={16} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#d4a017] text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#d4a017] text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter size={16} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#d4a017] text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTiktok size={16} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#d4a017] text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="container px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Sajjad Rice Mills. All rights reserved.
          </p>

          <p className="text-sm text-white/50">
            Powered by{" "}
            <span className="text-[#d4a017] font-semibold">
              TriTech Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
