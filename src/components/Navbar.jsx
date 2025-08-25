import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/60 dark:border-white/10 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg whitespace-nowrap">
          Sebastian<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm whitespace-nowrap">
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link
                to="/contact"
                className="btn-primary text-sm"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
