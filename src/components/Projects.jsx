import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const data = [
    {
      title: "Amazon Clone (Fullstack)",
      desc: "React + Node + PostgreSQL/Mongo. Auth, products, cart, admin. Deployed on Render.",
      link: "https://amazon-clone-frontend-seven-puce.vercel.app",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Movies Search App",
      desc: "This site is useful for searching movies.",
      link: "https://movies-search-now.netlify.app",
      image:
        "https://pbs.twimg.com/media/Gypra4CbAAA5Mgx.png:large",
    },
    {
      title: "School Management System",
      desc: "Basic frontend of school management system responsive and easy to use",
      link: "https://sms-new.netlify.app",
      image:
        "https://www.techasoft.com/blog/2020/06/1593410992.jpg",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-lg">
        {/* Heading animation */}
        <motion.h2
          className="heading text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((p, i) => (
            <motion.article
              key={i}
              className="card overflow-hidden"
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
              {/* Image with hover zoom */}
              <motion.img
                src={p.image}
                alt={p.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="subtle">{p.desc}</p>
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
