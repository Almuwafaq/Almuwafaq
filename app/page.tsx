"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { Github, X, Eye, Sparkles, Menu } from "lucide-react";
import AboutPage from "./components/about/AboutSection";
import HeroSection from "./components/hero/HeroSection";
import SkillsPage from "./components/skills/SkillsSection";
import ProjectPage from "./components/project/ProjectSection";
import Footer from "./components/footer/FooterSection";
import WorkTogether from "./components/workTogether/WorkSection";

import { Project, ProjectModalProps, MotionScale } from "./types";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // You can use yRange for parallax effects if needed
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Navigation function with proper typing
  const navigateToSection = (sectionIndex: number): void => {
    setActiveSection(sectionIndex);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation

    const refs = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];
    const targetRef = refs[sectionIndex];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Type adapter for ProjectPage component
  const handleProjectSelection = (project: {
    id: string;
    title: string;
    description: string;
    preview: string;
    github: string;
    status: string;
    tech: string[];
    gradient: string;
  }) => {
    // Find the full project from our projects array
    const fullProject = projects.find((p) => p.id === project.id);
    setSelectedProject(fullProject || null);
  };

  const projects: Project[] = [
    {
      id: "1", // Changed from number to string
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
      id: "2", // Changed from number to string
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
      id: "3", // Changed from number to string
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
      id: "4", // Changed from number to string
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
      id: "5", // Changed from number to string
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
      id: "6", // Changed from number to string
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

  // Optional: Update active section based on scroll position
  useEffect(() => {
    const handleScroll = (): void => {
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier easing
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
        ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier easing
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

  const hoverScale: MotionScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  const tapScale: MotionScale = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  // Mobile menu variants
  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants: Variants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  // Floating Orbs Component
  const FloatingOrbs: React.FC = () => (
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

  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="flex-1 pr-4">
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-medium`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.status}
                  </motion.div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 flex-shrink-0"
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <motion.div
                  className="space-y-4 sm:space-y-6 order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 transform transition-transform duration-300 hover:scale-105">
                    <iframe
                      src={project.preview}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Key Features
                    </h4>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {project?.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                          variants={itemVariants}
                          whileHover={hoverScale}
                        >
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-white/80 text-xs sm:text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                      About This Project
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-white/90"
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

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
                    <motion.button
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View Live</span>
                    </motion.button>
                    <motion.button
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium border border-white/20 text-sm sm:text-base"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
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

  const navigationItems = [
    { name: "Home", index: 0 },
    { name: "About", index: 1 },
    { name: "Skills", index: 2 },
    { name: "Projects", index: 3 },
    { name: "Contact", index: 4 },
  ];

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
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigateToSection(0)}
          >
            Muwafaq
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
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

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl border-l border-white/20 z-40 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <motion.div
                    className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Menu
                  </motion.div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => navigateToSection(item.index)}
                        className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 relative group ${
                          activeSection === item.index
                            ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                        whileHover={hoverScale}
                        whileTap={tapScale}
                      >
                        <span className="text-lg font-medium">{item.name}</span>
                        {activeSection === item.index && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-r-full"
                            layoutId="activeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <motion.div
                    className="text-center text-white/40 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    © 2025 Muwafaq Portfolio
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection setActiveSection={navigateToSection} />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutPage />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <SkillsPage />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectPage
          hoverScale={hoverScale}
          tapScale={tapScale}
          projects={projects}
          itemVariants={itemVariants}
          containerVariants={containerVariants}
          setSelectedProject={handleProjectSelection}
        />
      </div>

      {/* Contact/Work Together Section */}
      <div ref={contactRef}>
        <WorkTogether />
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
