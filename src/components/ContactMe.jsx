import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_5w0xord',
      'template_9n5c731',
      formData,
      '1kTcw0zHqh_wK5y_w'
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <section className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-20 px-6 font-poppins" id="contact">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4cd7d0] font-playfair">Contact Me</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Let's connect! Whether you're a working professional, open-source contributor, or just someone looking to collaborate or share insights—I'm always up for learning and building together.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <form ref={formRef} className="bg-[#1a3e66] shadow-xl rounded-xl p-6 text-left" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-1" htmlFor="name">
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
              <label className="block text-gray-300 text-sm font-semibold mb-1" htmlFor="email">
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
              <label className="block text-gray-300 text-sm font-semibold mb-1" htmlFor="message">
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
              className="w-full bg-[#4cd7d0] text-[#0f2a4f] py-2 px-4 rounded-lg font-semibold hover:bg-[#3cb5af] transition duration-200"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-center bg-[#1a3e66] shadow-xl rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Mail className="text-[#4cd7d0] mr-4" />
              <a
                href="mailto:harshavardan3623@outlook.com"
                className="text-gray-300 hover:underline"
              >
                harshavardan3623@outlook.com
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
