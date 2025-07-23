"use client";
import { motion, Variants } from "framer-motion";
import { Code, Database, Globe, Layers, Smartphone, Zap } from "lucide-react";
import { Skill } from "../../types";

const skills: Skill[] = [
  {
    name: "React.js",
    level: 95,
    icon: <Code />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Next.js",
    level: 90,
    icon: <Globe />,
    color: "from-purple-400 to-pink-400",
  },
  {
    name: "React Native",
    level: 85,
    icon: <Smartphone />,
    color: "from-green-400 to-blue-400",
  },
  {
    name: "Redux",
    level: 88,
    icon: <Database />,
    color: "from-yellow-400 to-orange-400",
  },
  {
    name: "Node.js",
    level: 80,
    icon: <Zap />,
    color: "from-red-400 to-pink-400",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: <Layers />,
    color: "from-indigo-400 to-purple-400",
  },
];

export default function SkillsPage() {
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
    transition: { type: "spring" as const, stiffness: 300, damping: 10 },
  };

  const tapScale = {
    scale: 0.95,
    transition: { type: "spring" as const, stiffness: 300, damping: 10 },
  };

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Technical Skills
          </h2>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                ...hoverScale,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={tapScale}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div
                  className={`p-2.5 sm:p-3 bg-gradient-to-r ${skill.color} rounded-lg sm:rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{skill.icon}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {skill.level}%
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Proficiency
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {skill.name}
              </h3>

              <div className="w-full bg-white/10 rounded-full h-2.5 sm:h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>

              {/* Optional: Add skill description for larger screens */}
              <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <p className="text-white/70 text-sm leading-relaxed">
                  {skill.level >= 90 &&
                    "Expert level proficiency with advanced techniques"}
                  {skill.level >= 80 &&
                    skill.level < 90 &&
                    "Strong proficiency with solid understanding"}
                  {skill.level < 80 &&
                    "Good working knowledge and growing expertise"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a responsive CTA section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Continuously learning and adapting to new technologies to deliver
            cutting-edge solutions and exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
