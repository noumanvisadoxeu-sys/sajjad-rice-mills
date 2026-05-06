import MainLayout from "@/layout/MainLayout";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout className="bg-primary-bgcolor">
      <section className="py-20 px-6 md:px-10 bg-primary-bgcolor text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white max-w-2xl mx-auto">
              Reach out for product inquiries, export details, or bulk orders.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

              <ul className="space-y-5 text-yellow-500 mb-8">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-accent" />
                  <span>068 5872306</span>
                </li>

                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-accent" />
                  <span>info@sajjadricemills.com</span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-accent" />
                  <span>13-A Model Town, Rahimyarkhan, Punjab, Pakistan</span>
                </li>
              </ul>

              {/* CTA */}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                className="inline-block text-cta font-semibold hover:underline"
              >
                View on Google Maps →
              </a>
            </div>

            {/* RIGHT SIDE (MAP) */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Sajjad Rice Mill Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.123!2d70.1661858!3d28.3728279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39374300137860d9%3A0x408c735a6c05d089!2sSajjad%20Rice%20Mill!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
