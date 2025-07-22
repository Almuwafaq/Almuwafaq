"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function WorkTogether({}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  const tapScale = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // EmailJS configuration
  const SERVICE_ID = "service_1kao35d";
  const TEMPLATE_ID = "template_gc7p932";
  const PUBLIC_KEY = "DQUqjETRuZDHjjIiP";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "toriolataofeekolamilekan@gmail.com", // Your email
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="py-16 md:py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <motion.div
            className="w-20 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-white/70 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-4 sm:px-6 md:px-12 py-10 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    I'm always interested in hearing about new opportunities and
                    projects. Whether you have a question or just want to say
                    hi, I'll get back to you!
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4 sm:space-y-6"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: <Mail />,
                      label: "Email",
                      value: "toriolataofeekolamilekan@gmail.com",
                      href: "mailto:toriolataofeekolamilekan@gmail.com",
                    },
                    {
                      icon: <Linkedin />,
                      label: "LinkedIn",
                      value: "taofeek-toriola",
                      href: "https://www.linkedin.com/in/taofeek-toriola",
                    },
                    {
                      icon: <Phone />,
                      label: "Phone",
                      value: "+234 70 8284 0955",
                      href: "tel:+234 70 8284 0955",
                    },
                  ].map((contact, i) => (
                    <motion.a
                      key={i}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group"
                      variants={itemVariants}
                      whileHover={hoverScale}
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-sm">
                          {contact.label}
                        </div>
                        <div className="text-white font-medium text-sm sm:text-base">
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Send a Message
                </h3>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-200"
                        : "bg-red-500/20 border border-red-500/30 text-red-200"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                      whileFocus={{ scale: 1.02 }}
                      disabled={isLoading}
                    />
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                      whileFocus={{ scale: 1.02 }}
                      disabled={isLoading}
                    />
                  </div>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isLoading}
                  />
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none resize-none"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isLoading}
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    whileHover={!isLoading ? hoverScale : {}}
                    whileTap={!isLoading ? tapScale : {}}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
