"use client";

import { motion, Variants } from "framer-motion";
type AboutPageProps = {
  containerVariants: Variants;
  itemVariants: Variants;
};

export default function AboutPage({
  containerVariants,
  itemVariants,
}: AboutPageProps) {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-6 sm:px-8 md:px-12 py-10 sm:py-12"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed space-y-6">
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
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 sm:mt-12"
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
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
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
                  <div className="text-white/60 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
