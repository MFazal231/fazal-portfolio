import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";
import CountUp from "./CountUp";
import Magnetic from "./Magnetic";

const stats = [
  { target: 100, suffix: "+", label: "Day CodeChef streak" },
  { target: 3, suffix: "", label: "Real-world projects shipped" },
  { target: 120, suffix: "+", label: "Orders fulfilled at Sairéla" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-28 overflow-hidden bg-white dark:bg-gray-950 transition-colors"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-30 dark:opacity-40"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[380px] w-[380px] rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest uppercase text-accent-dark dark:text-accent mb-4"
        >
          Hi, I'm {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl text-slate-900 dark:text-white"
        >
          Building <span className="text-gradient">full-stack software</span> and a brand, one project at a time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-gray-400"
        >
          {profile.tagline} Currently a B.Tech student at {profile.college}, graduating {profile.graduation}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent-dark text-white font-semibold px-6 py-3 hover:bg-accent transition-colors"
            >
              View My Work <FiArrowRight />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 font-semibold px-6 py-3 text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <FiDownload /> Download Resume
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                <CountUp target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-sm text-slate-500 dark:text-gray-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
