"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  ArrowRight,
  Phone,
  X,
  ChevronRight,
  Play,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const skills = [
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

  const projects = [
    {
      id: 1,
      title: "Service Marketplace Platform",
      description:
        "Full-stack marketplace connecting consumers with vendors, featuring real-time chat, admin dashboard, and payment integration",
      tech: ["React", "Node.js", "Socket.io", "Redux", "PostgreSQL"],
      status: "Live",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      preview:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      features: [
        "Real-time Chat",
        "Payment Integration",
        "Admin Dashboard",
        "Vendor Management",
      ],
      github: "https://github.com/SmartApproaches/GYWD-Frontend.git",
      demo: "https://gywde.com/",
    },
    {
      id: 2,
      title: "E-Learning Platform",
      description:
        "Comprehensive learning management system with course creation, video streaming, progress tracking, and certification",
      tech: ["Next.js", "React", "API Integration", "Redux", "AWS"],
      status: "Live",
      gradient: "from-green-400 via-blue-500 to-purple-600",
      preview:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      features: [
        "Video Streaming",
        "Progress Tracking",
        "Certification",
        "Course Creation",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Dating Mobile App - Intwit",
      description:
        "React Native dating platform with AI matching algorithms, real-time messaging, and location-based discovery",
      tech: ["React Native", "RTK Query", "WebSocket", "Expo", "Firebase"],
      status: "In Development",
      gradient: "from-pink-400 via-red-500 to-yellow-500",
      preview:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      features: [
        "AI Matching",
        "Real-time Messaging",
        "Location Discovery",
        "Social Features",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Staff Management System",
      description:
        "Comprehensive mobile app for staff attendance with geolocation validation, shift scheduling, and reporting",
      tech: ["React Native", "Geolocation API", "Redux", "REST API", "Charts"],
      status: "Completed",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      preview:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      features: [
        "Geolocation Tracking",
        "Shift Scheduling",
        "Reporting",
        "Analytics",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Z-Coop SaaS Platform",
      description:
        "Cooperative management platform with member management, financial tracking, and reporting dashboard",
      tech: ["React", "Redux", "JavaScript", "CSS3", "Chart.js"],
      status: "Completed",
      gradient: "from-emerald-400 via-teal-500 to-blue-600",
      preview:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Member Management",
        "Financial Tracking",
        "Report Dashboard",
        "Analytics",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description:
        "Modern chat application with file sharing, emoji reactions, and group conversations",
      tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      status: "Live",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      preview:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      features: [
        "File Sharing",
        "Emoji Reactions",
        "Group Chat",
        "Real-time Updates",
      ],
      github: "#",
      demo: "#",
    },
  ];

  // Animation variants
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

  // Floating Orbs Component
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 30}px`,
            height: `${10 + Math.random() * 30}px`,
            background: `linear-gradient(45deg, ${
              [
                "#8B5CF6",
                "#06B6D4",
                "#10B981",
                "#F59E0B",
                "#EF4444",
                "#EC4899",
              ][Math.floor(Math.random() * 6)]
            }, ${
              [
                "#3B82F6",
                "#8B5CF6",
                "#06B6D4",
                "#10B981",
                "#F59E0B",
                "#EF4444",
              ][Math.floor(Math.random() * 6)]
            })`,
          }}
          variants={floatingVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </div>
  );

  // Project Modal Component
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <motion.h3
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.status}
                  </motion.div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10">
                    <motion.img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">
                      Key Features
                    </h4>
                    <motion.div
                      className="grid grid-cols-2 gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                          variants={itemVariants}
                          whileHover={hoverScale}
                        >
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span className="text-white/80 text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      About This Project
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-white/90"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          whileHover={hoverScale}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <motion.button
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-medium"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      <Eye className="w-5 h-5" />
                      <span onClick={() => window.open(project.demo, "_blank")}>
                        View Live
                      </span>
                    </motion.button>
                    <motion.button
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium border border-white/20"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white min-h-screen relative overflow-x-hidden">
      <FloatingOrbs />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform-gpu z-50"
        style={{ scaleX: pathLength, originX: 0 }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-2xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-3xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            TT
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => setActiveSection(index)}
                className={`relative px-4 py-2 transition-all duration-300 group ${
                  activeSection === index
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-all duration-300"
              whileHover={hoverScale}
            >
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/90">
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl font-black mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            TAOFEEK
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            TORIOLA
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
            Crafting exceptional digital experiences with modern web
            technologies. Specialized in React, Next.js, and React Native
            development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setActiveSection(2)}
              className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl font-semibold text-white border border-white/20"
              whileHover={{
                ...hoverScale,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={tapScale}
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
              className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20"
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Github />, href: "#", color: "hover:text-purple-400" },
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
                className={`p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group ${social.color}`}
                variants={itemVariants}
                whileHover={{ ...hoverScale, rotate: 5 }}
                whileTap={tapScale}
              >
                <div className="w-6 h-6">{social.icon}</div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
              whileHover={{
                ...hoverScale,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl text-white/80 leading-relaxed space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I'm a passionate Frontend Developer with extensive experience
                  building scalable web and mobile applications. I specialize in
                  the React ecosystem and have successfully delivered innovative
                  projects that solve real-world problems.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  My expertise spans across modern web technologies, focusing on
                  creating exceptional user experiences with clean, maintainable
                  code and cutting-edge solutions.
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-6 mt-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    number: "15+",
                    label: "Projects Completed",
                    color: "text-purple-400",
                  },
                  {
                    number: "3+",
                    label: "Years Experience",
                    color: "text-blue-400",
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    color: "text-cyan-400",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={hoverScale}
                  >
                    <motion.div
                      className={`text-4xl font-bold ${stat.color} mb-2`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.7 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  ...hoverScale,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {skill.level}%
                    </div>
                    <div className="text-white/60 text-sm">Proficiency</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Discover my latest work showcasing modern web development
              techniques and innovative solutions
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <motion.img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    <div className="absolute top-4 right-4">
                      <motion.div
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {project.status}
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                    >
                      <motion.div
                        className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-4"
                        whileHover={hoverScale}
                        whileTap={tapScale}
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/70 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80"
                          whileHover={hoverScale}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </motion.div>

                    <motion.div
                      className="flex space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <motion.button
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-3 rounded-xl font-medium"
                        whileHover={hoverScale}
                        whileTap={tapScale}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                        whileHover={hoverScale}
                        whileTap={tapScale}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl font-semibold text-white border border-white/20 hover:shadow-2xl hover:shadow-purple-500/25"
              whileHover={{
                ...hoverScale,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={tapScale}
            >
              <span className="flex items-center space-x-2">
                <span>View All Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next
              project
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Get In Touch
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      I'm always interested in hearing about new opportunities
                      and projects. Whether you have a question or just want to
                      say hi, I'll get back to you!
                    </p>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
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
                        value: "+234 XXX XXX XXXX",
                        href: "tel:+234XXXXXXXXX",
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
                          <div className="text-white font-medium">
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
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.input
                        type="text"
                        placeholder="Your Name"
                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <motion.input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:bg-white/20 focus:border-purple-400 transition-all duration-300 outline-none resize-none"
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-4 rounded-xl font-semibold"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
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
              { icon: <Github />, href: "#" },
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
