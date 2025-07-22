"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="py-12 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          className="text-white/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          © 2024 Taofeek Toriola. All rights reserved.
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { icon: <Github />, href: "https://github.com/Almuwafaq" },
            {
              icon: <Linkedin />,
              href: "https://www.linkedin.com/in/taofeek-toriola",
            },
            {
              icon: <Mail />,
              href: "mailto:toriolataofeekolamilekan@gmail.com",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
