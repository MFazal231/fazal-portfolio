import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { skills } from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-slate-50 dark:bg-gray-900/40 transition-colors">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        subtitle="Languages and tools I use to design, build, and ship software."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div key={category} variants={item}>
            <TiltCard className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
