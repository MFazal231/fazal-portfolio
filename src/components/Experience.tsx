import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-slate-50 dark:bg-gray-900/40 transition-colors">
      <SectionHeading eyebrow="Experience" title="Where I've applied what I've learned" />

      <div className="relative border-l border-slate-200 dark:border-white/10 ml-3">
        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent-dark dark:bg-accent ring-4 ring-white dark:ring-gray-900" />
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark dark:text-accent mb-1">
              {item.period}
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-gray-500 mb-3">{item.org}</p>
            <ul className="space-y-1.5">
              {item.points.map((point) => (
                <li key={point} className="text-sm text-slate-600 dark:text-gray-400 flex gap-2">
                  <span className="text-accent-dark dark:text-accent">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
