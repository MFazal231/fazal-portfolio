import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="timeline" className="section-container bg-slate-50 dark:bg-gray-900/40 transition-colors">
      <SectionHeading
        eyebrow="Learning Journey"
        title="How I got here"
        subtitle="A timeline of milestones in my growth as a developer and founder."
      />

      <div ref={containerRef} className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent-dark dark:bg-accent md:-translate-x-1/2"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-10"
        >
          {timeline.map((entry, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={entry.title}
                variants={item}
                className={`relative flex items-start md:items-center gap-6 pl-12 md:pl-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <span className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 h-3 w-3 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-accent-dark dark:bg-accent ring-4 ring-slate-50 dark:ring-gray-900" />

                <div className={`md:w-1/2 ${isEven ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="inline-block rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 max-w-md">
                    <p className="text-xs font-bold uppercase tracking-wide text-accent-dark dark:text-accent mb-1">
                      {entry.year}
                    </p>
                    <h3 className="font-bold text-slate-900 dark:text-white">{entry.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">{entry.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
