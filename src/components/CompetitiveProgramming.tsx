import { motion } from "framer-motion";
import { FiZap, FiTarget, FiCode } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const stats = [
  { icon: FiZap, value: "100+", label: "Day streak on CodeChef" },
  { icon: FiTarget, value: "Daily", label: "Problem-solving practice" },
  { icon: FiCode, value: "C++/Py", label: "Primary DSA languages" },
];

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="section-container bg-white dark:bg-gray-950 transition-colors">
      <SectionHeading
        eyebrow="Competitive Programming"
        title="Sharpening problem-solving, one streak at a time"
        subtitle="Regular practice on CodeChef to build strong data structures and algorithms fundamentals."
      />

      <div className="grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 text-center"
          >
            <s.icon className="mx-auto text-2xl text-accent-dark dark:text-accent mb-3" />
            <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</p>
            <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={profile.codechef}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-dark dark:text-accent hover:underline"
        >
          View CodeChef Profile →
        </a>
      </div>
    </section>
  );
}
