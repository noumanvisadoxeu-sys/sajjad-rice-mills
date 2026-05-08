import MainLayout from "@/layout/MainLayout";
import Padding from "@/layout/PaddingForSeparatePage";

import { Mail, MapPin, Phone } from "lucide-react";

import { motion } from "framer-motion";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_nzkdxs8",
        "template_vjo3hid",
        formRef.current,
        "0RmHCV80e6Sn4K5s2",
      )
      .then(() => {
        toast.success("Message sent successfully!");

        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);

        toast.error("Failed to send message.");
      });
  };

  return (
    <MainLayout className="bg-white">
      <Padding />

      <section className="py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm mb-4 font-medium">
              Contact Us
            </p>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#165a2d]">
              Let’s Discuss Your Rice Requirements
            </h1>

            <p className="text-[#807873] max-w-3xl mx-auto leading-relaxed text-lg">
              Reach out for export inquiries, wholesale pricing, bulk orders,
              and partnership opportunities.
            </p>
          </motion.div>

          {/* FORM TOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#f8f8f8] border border-[#ececec] rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#165a2d] font-display text-center">
              Send Us a Message
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                {/* NAME */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white border border-[#e5e5e5] rounded-2xl px-5 py-4 text-[#165a2d] placeholder:text-[#999] outline-none focus:border-yellow-500 transition-all duration-300"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-white border border-[#e5e5e5] rounded-2xl px-5 py-4 text-[#165a2d] placeholder:text-[#999] outline-none focus:border-yellow-500 transition-all duration-300"
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white border border-[#e5e5e5] rounded-2xl px-5 py-4 text-[#165a2d] placeholder:text-[#999] outline-none focus:border-yellow-500 transition-all duration-300"
              />

              {/* MESSAGE */}
              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-white border border-[#e5e5e5] rounded-2xl px-5 py-4 text-[#165a2d] placeholder:text-[#999] outline-none focus:border-yellow-500 transition-all duration-300 resize-none"
              />

              {/* BUTTON */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#165a2d] hover:bg-[#124924] text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* CONTACT + MAP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            {/* CONTACT INFO */}
            <div className="bg-[#165a2d] rounded-[32px] p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-10 font-display">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* PHONE */}
                <div className="flex items-start gap-5">
                  <div className="bg-yellow-500/10 p-5 rounded-2xl">
                    <Phone className="text-yellow-500" size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone Number</h4>

                    <p className="text-white/70">+92 68 5872306</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">
                  <div className="bg-yellow-500/10 p-5 rounded-2xl">
                    <Mail className="text-yellow-500" size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Email Address
                    </h4>

                    <p className="text-white/70">info@sajjadricemills.com</p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-5">
                  <div className="bg-yellow-500/10 p-5 rounded-2xl">
                    <MapPin className="text-yellow-500" size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Office Address
                    </h4>

                    <p className="text-white/70 leading-relaxed">
                      13-A Model Town, Rahim Yar Khan, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-[#ececec] h-[450px]">
              <iframe
                title="Sajjad Rice Mill Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.123!2d70.1661858!3d28.3728279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39374300137860d9%3A0x408c735a6c05d089!2sSajjad%20Rice%20Mill!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
