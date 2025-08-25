import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const pieces = Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 8 + 6;
      return {
        id: i,
        x: Math.random() * (vw - size * 2), // 👈 keep inside safe viewport
        y: -20,
        size,
        color: ["#6366F1", "#EC4899", "#FBBF24", "#10B981"][
          Math.floor(Math.random() * 4)
        ],
        delay: Math.random() * 0.5,
      };
    });
    setConfetti(pieces);
  }, []);

  return (
    <section
      className="section flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 overflow-x-hidden relative"
      style={{ maxWidth: "100vw" }} // 👈 clamp to screen
    >
      {/* Floating Confetti */}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: c.y, x: c.x, opacity: 1, rotate: 0 }}
            animate={{ y: window.innerHeight + 50, rotate: 360 }}
            transition={{
              duration: 2 + Math.random() * 2,
              ease: "easeOut",
              delay: c.delay,
            }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
              left: 0, // 👈 ensure always inside
              right: 0,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Thank You Card */}
      <motion.div
        className="card text-center w-full max-w-md p-6 sm:p-8"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          🎉 Thank You!
        </h1>
        <p className="subtle mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
          Your message has been successfully sent to{" "}
          <span className="font-medium">Sebastian Macwan</span>.  
          I’ll get back to you soon.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="btn-primary w-full sm:w-auto">
            ⬅ Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
