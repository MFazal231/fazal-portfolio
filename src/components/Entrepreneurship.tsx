import { motion } from "framer-motion";
import { FiShoppingBag, FiInstagram, FiBarChart2, FiPackage } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const pillars = [
  { icon: FiShoppingBag, title: "Shopify Store Setup", desc: "Built and ran the full storefront, catalog, and checkout experience end-to-end." },
  { icon: FiInstagram, title: "Social Media Marketing", desc: "Grew brand presence organically across Instagram and Facebook." },
  { icon: FiBarChart2, title: "Meta Advertising", desc: "Planned and ran paid ad campaigns on Facebook and Instagram to drive acquisition." },
  { icon: FiPackage, title: "Product & Operations", desc: "Delivered 120+ customer orders in 2–3 months, from listing to fulfillment." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Entrepreneurship() {
  return (
    <section
      id="entrepreneurship"
      className="section-container bg-gradient-to-br from-accent-dark/10 via-slate-50 to-white dark:from-accent/10 dark:via-gray-900 dark:to-gray-950 transition-colors"
    >
      <SectionHeading
        eyebrow="Entrepreneurship"
        title="Founder of Sairéla"
        subtitle="A women's apparel and jewelry brand I built and ran from mid-2024 to 2025 — now closed — my hands-on classroom in product, marketing, and operations."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {pillars.map((p) => (
          <motion.div key={p.title} variants={item}>
            <TiltCard className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
              <p.icon className="text-2xl text-accent-dark dark:text-accent mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">{p.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
