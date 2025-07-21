import { motion } from "framer-motion";
export default function SkillsPage({
  containerVariants,
  itemVariants,
  hoverScale,
  tapScale,
  skills,
}) {
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
  );
}
