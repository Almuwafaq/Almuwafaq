"use client";

import { motion, Variants } from "framer-motion";
import { ChevronRight, Eye, Github, Play } from "lucide-react";
type ProjectPageProps = {
  containerVariants: Variants;
  itemVariants: Variants;
  hoverScale: Variants;
  tapScale: Variants;
  projects: {
    id: string;
    title: string;
    description: string;
    preview: string;
    github: string;
    status: string;
    tech: string[];
    gradient: string;
  }[];
  setSelectedProject: (project: {
    id: string;
    title: string;
    description: string;
    preview: string;
    github: string;
    status: string;
    tech: string[];
    gradient: string;
  }) => void;
};
export default function ProjectPage({
  containerVariants,
  itemVariants,
  hoverScale,
  tapScale,
  projects,
  setSelectedProject,
}: ProjectPageProps) {
  return (
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
            Discover my latest work showcasing modern web development techniques
            and innovative solutions
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
                  {/* <motion.img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    /> */}

                  <iframe
                    src={project.preview}
                    title={project.title}
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
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
  );
}
