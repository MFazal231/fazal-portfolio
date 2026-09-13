import { motion } from "framer-motion";
import { FiCode, FiTarget, FiTrendingUp } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { interests, languages } from "../data/portfolio";

const traits = [
  {
    icon: FiCode,
    title: "Builder at heart",
    desc: "I learn best by shipping practical applications, not just reading theory.",
  },
  {
    icon: FiTarget,
    title: "Consistent & disciplined",
    desc: "100+ day CodeChef streak — small, steady effort compounds into real skill.",
  },
  {
    icon: FiTrendingUp,
    title: "Builder & founder",
    desc: "Running Sairéla taught me product, marketing, and operations alongside code.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-950 transition-colors">
      <SectionHeading
        eyebrow="About Me"
        title="A student building real things, not just following a syllabus."
        subtitle="Full-stack development, game development, and entrepreneurship — I like turning ideas into working software and products."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mb-14"
      >
        {traits.map((t) => (
          <motion.div key={t.title} variants={item}>
            <TiltCard className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
              <t.icon className="text-2xl text-accent-dark dark:text-accent mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">{t.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Areas of Interest</h3>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="text-sm font-medium px-4 py-2 rounded-full bg-accent-dark/10 text-accent-dark dark:bg-accent/10 dark:text-accent border border-accent-dark/20 dark:border-accent/20"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="text-sm font-medium px-4 py-2 rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-gray-300"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
