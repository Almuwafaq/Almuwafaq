"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

// Define props interface for the component
interface HeroSectionProps {
  setActiveSection: (section: number) => void;
}

// This should be a regular component, not a page component
export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const handleResumeDownload = () => {
    const resumeUrl = "/resume/Taofeek-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Taofeek-Toriola-Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Option 2: If you want to open it in a new tab instead
    // window.open(resumeUrl, '_blank');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99], // Using cubic bezier array instead of string
      },
    },
  };

  const floatingVariants: Variants = {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="text-center z-10 max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-black mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          <Typewriter
            words={["TAOFEEK"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={10000}
          />
        </motion.h1>

        <motion.h2
          className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          <Typewriter
            words={["TORIOLA"]}
            loop={true}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={50000}
          />
        </motion.h2>

        <motion.div
          className="text-2xl md:text-3xl mb-8 text-white/80 font-light"
          variants={itemVariants}
        >
          Frontend Developer & React Specialist
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-12 text-white/70 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting exceptional digital experiences with modern web technologies.
          Specialized in React, Next.js, and React Native development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setActiveSection(3)} // Navigate to Projects section (index 3)
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl font-semibold text-white border border-white/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View My Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            onClick={handleResumeDownload}
            className="group px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)",
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <span className="flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: <Github />,
              href: "https://github.com/Almuwafaq",
              color: "hover:text-purple-400",
            },
            {
              icon: <Linkedin />,
              href: "https://www.linkedin.com/in/taofeek-toriola",
              color: "hover:text-blue-400",
            },
            {
              icon: <Mail />,
              href: "mailto:toriolataofeekolamilekan@gmail.com",
              color: "hover:text-cyan-400",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group ${social.color}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <div className="w-6 h-6">{social.icon}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
