import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-container bg-slate-50 dark:bg-gray-900/40 transition-colors">
      <SectionHeading eyebrow="Education" title="Academic Background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="flex items-start gap-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 max-w-xl"
      >
        <div className="shrink-0 h-12 w-12 rounded-xl bg-accent-dark/10 dark:bg-accent/10 flex items-center justify-center">
          <FiBookOpen className="text-xl text-accent-dark dark:text-accent" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">{education.degree}</h3>
          <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">{education.college}</p>
          <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">
            {education.graduation} &middot; {education.location}
          </p>
          <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">{education.cgpa}</p>
        </div>
      </motion.div>
    </section>
  );
}
