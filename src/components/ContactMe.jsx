import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-16 px-6" id="contact">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#4cd7d0]">Contact Me</h2>
        <p className="text-xl text-gray-300 mb-8">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <form className="bg-[#1a3e66] shadow-lg rounded-xl p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cd7d0] bg-[#113454] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cd7d0] bg-[#113454] text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cd7d0] bg-[#113454] text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4cd7d0] text-[#0f2a4f] py-2 px-4 rounded-lg hover:bg-[#3cb5af] transition duration-200"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-center bg-[#1a3e66] shadow-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Mail className="text-[#4cd7d0] mr-4" />
              <a
                href="mailto:harshavardan3623@gmail.com"
                className="text-gray-300 hover:underline"
              >
                harshavardan3623@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-[#4cd7d0] mr-4" />
              <a
                href="tel:+91-9391571693"
                className="text-gray-300 hover:underline"
              >
                +91-9391571693
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Linkedin className="text-[#4cd7d0] mr-4" />
              <a
                href="https://www.linkedin.com/in/harshavardan-naidu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                Harshavardan-Naidu
              </a>
            </div>
            <div className="flex items-center">
              <Github className="text-[#4cd7d0] mr-4" />
              <a
                href="https://github.com/HARSHA-3623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                HARSHA-3623
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
