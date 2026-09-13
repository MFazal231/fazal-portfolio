import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}
    >
      <p className="text-sm font-semibold tracking-widest uppercase text-accent-dark dark:text-accent mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
