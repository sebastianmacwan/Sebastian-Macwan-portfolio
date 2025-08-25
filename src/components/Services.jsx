import React from "react";
import { motion } from "framer-motion";
import { Code, MonitorSmartphone, Server } from "./icons";

export default function Services() {
  const items = [
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-blue-500" />,
      title: "Frontend Development",
      desc: "Responsive UI with React.js, Tailwind & Bootstrap.",
    },
    {
      icon: <Server className="w-10 h-10 text-purple-500" />,
      title: "Backend APIs",
      desc: "Node.js REST APIs with MongoDB/MySQL. Auth, CRUD & integrations.",
    },
    {
      icon: <Code className="w-10 h-10 text-green-500" />,
      title: "Fullstack Projects",
      desc: "From idea to deploy on Render, Netlify & Vercel.",
    },
  ];

  return (
    <section
      id="services"
      className="section bg-gray-100/60 dark:bg-gray-800/40"
    >
      <div className="container-lg">
        {/* Heading animation */}
        <motion.h2
          className="heading text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.article
              key={i}
              className="card p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: -1,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
              }}
            >
              {/* Icon hover effect */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-4"
              >
                {s.icon}
              </motion.div>

              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="subtle">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
