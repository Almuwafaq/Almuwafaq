"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Github,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  X,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import AboutPage from "./about/page";
import HeroSection from "./hero/page";
import SkillsPage from "./skills/page";
import ProjectPage from "./project/page";
import Footer from "./footer/page";
import WorkTogether from "./workTogether/page";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // You can use yRange for parallax effects if needed
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Navigation function
  const navigateToSection = (sectionIndex) => {
    setActiveSection(sectionIndex);

    const refs = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];
    const targetRef = refs[sectionIndex];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Optional: Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, index: 0 },
        { ref: aboutRef, index: 1 },
        { ref: skillsRef, index: 2 },
        { ref: projectsRef, index: 3 },
        { ref: contactRef, index: 4 },
      ];

      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.index);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      preview: "https://gywde.com/",
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
      preview: "https://www.smartapproaches.org/",
      features: [
        "Video Streaming",
        "Progress Tracking",
        "Certification",
        "Course Creation",
      ],
      github: "https://github.com/SmartApproaches/SAWL-FRONTEND-.git",
      demo: "https://www.smartapproaches.org/",
    },
    {
      id: 3,
      title: "Dating Mobile App - Intwit",
      description:
        "React Native dating platform with AI matching algorithms, real-time messaging, and location-based discovery",
      tech: ["React Native", "RTK Query", "WebSocket", "Expo", "Firebase"],
      status: "In Development",
      gradient: "from-pink-400 via-red-500 to-yellow-500",
      preview: "https://new-swaap.vercel.app/",
      features: [
        "AI Matching",
        "Real-time Messaging",
        "Location Discovery",
        "Social Features",
      ],
      github: "https://github.com/Almuwafaq/new_swaap.git",
      demo: "https://new-swaap.vercel.app/",
    },
    {
      id: 4,
      title: "Staff Management System",
      description:
        "Comprehensive mobile app for staff attendance with geolocation validation, shift scheduling, and reporting",
      tech: ["React Native", "Geolocation API", "Redux", "REST API", "Charts"],
      status: "Completed",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      preview: "https://new-swaap.vercel.app/",
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
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 transform transition-transform duration-300 hover:scale-105">
                    <iframe
                      src={project.preview}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
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
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Live</span>
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
            className="text-3xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigateToSection(0)}
          >
            TT
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", index: 0 },
              { name: "About", index: 1 },
              { name: "Skills", index: 2 },
              { name: "Projects", index: 3 },
              { name: "Contact", index: 4 },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => navigateToSection(item.index)}
                className={`relative px-4 py-2 transition-all duration-300 group ${
                  activeSection === item.index
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection
          setActiveSection={navigateToSection}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          hoverScale={hoverScale}
          tapScale={tapScale}
        />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutPage
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <SkillsPage
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          hoverScale={hoverScale}
          tapScale={tapScale}
          skills={skills}
        />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectPage
          hoverScale={hoverScale}
          tapScale={tapScale}
          projects={projects}
          setSelectedProject={setSelectedProject}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>

      {/* Contact/Work Together Section */}
      <div ref={contactRef}>
        <WorkTogether
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          hoverScale={hoverScale}
          tapScale={tapScale}
        />
      </div>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
