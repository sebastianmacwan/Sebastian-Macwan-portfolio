import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      navigate("/thank-you"); // ✅ go to ThankYou component
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section bg-gray-100/60 dark:bg-gray-800/40"
    >
      <div className="container-lg">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="heading mb-4">Let’s build something great</h2>
            <p className="subtle mb-6">
              Tell me about your website idea or what you need help with. I
              usually reply within 24 hours.
            </p>
            <ul className="space-y-2 text-sm subtle">
              <li>📍 Bharuch, Gujarat, India</li>
              <li>🕒 Available for freelance & internship</li>
              <li>💬 Preferred: English, Hindi, Gujarati</li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field */}
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            {/* Fields */}
            <motion.div
              className="grid gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
              ))}

              {/* Message */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:shadow-md"
                ></textarea>
              </motion.div>

              {/* Submit button */}
              <motion.button
                className="btn-primary"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
