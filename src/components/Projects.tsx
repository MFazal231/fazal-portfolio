import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects } from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-950 transition-colors">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Full-stack apps I've designed, built, and shipped end-to-end."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item} className="h-full">
            <TiltCard
              className={`group h-full rounded-2xl border p-6 flex flex-col transition-shadow ${
                project.highlight
                  ? "border-accent-dark/30 dark:border-accent/30 bg-accent-dark/5 dark:bg-accent/5"
                  : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5"
              } hover:shadow-lg hover:shadow-accent-dark/10`}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-semibold">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 dark:text-gray-300 hover:text-accent-dark dark:hover:text-accent transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 dark:text-gray-300 hover:text-accent-dark dark:hover:text-accent transition-colors"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
