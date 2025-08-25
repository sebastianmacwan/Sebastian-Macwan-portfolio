import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 text-7xl text-blue-500/30"
      >
        <Sparkles />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 text-8xl text-purple-500/20"
      >
        <Rocket />
      </motion.div>

      <div className="container-lg grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="badge border-gray-300 dark:border-white/20 mb-4 animate-pulse">
            Fullstack Web Developer
          </p>

          <h1 className="heading mb-4 leading-snug">
            I build <span className="text-blue-600">fast</span>,{" "}
            <span className="text-purple-600">modern</span> websites for
            businesses.
          </h1>

          <p className="subtle mb-6">
            Hi, I'm <strong>Sebastian Macwan</strong> — React.js & Node.js
            developer based in Bharuch, Gujarat.
            <br />
            I help startups and local businesses go online with clean,
            responsive, and high-performance web apps.
          </p>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="btn-primary flex items-center gap-2 group"
            >
              Start a Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              See Projects
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs subtle">
            {[
              "React.js",
              "Node.js",
              "Tailwind",
              "MongoDB",
              "MySQL",
              "Render • Netlify",
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="badge border-gray-300 dark:border-white/20 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="md:justify-self-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="card shadow-xl"
          >
            <img
              alt="Developer illustration"
              className="rounded-xl w-full"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
            />
            <p className="text-sm subtle mt-4">
              Available for freelance & internship — 7th sem CSE student.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
