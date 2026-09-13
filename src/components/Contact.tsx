import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import { profile } from "../data/portfolio";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (message.length < 10) nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    // No backend is wired up yet — this simulates a submit so the form is demo-ready.
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-950 transition-colors">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Open to internships, freelance work, and collaboration. Reach out below or via email."
      />

      <div className="grid md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-accent-dark dark:hover:border-accent transition-colors"
          >
            <FiMail className="text-accent-dark dark:text-accent text-xl" />
            <span className="text-sm text-slate-700 dark:text-gray-300">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-accent-dark dark:hover:border-accent transition-colors"
          >
            <FiPhone className="text-accent-dark dark:text-accent text-xl" />
            <span className="text-sm text-slate-700 dark:text-gray-300">{profile.phone}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-accent-dark dark:hover:border-accent transition-colors"
          >
            <FiGithub className="text-accent-dark dark:text-accent text-xl" />
            <span className="text-sm text-slate-700 dark:text-gray-300">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 p-4 hover:border-accent-dark dark:hover:border-accent transition-colors"
          >
            <FiLinkedin className="text-accent-dark dark:text-accent text-xl" />
            <span className="text-sm text-slate-700 dark:text-gray-300">LinkedIn</span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about the opportunity or project..."
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-dark dark:focus:ring-accent resize-none"
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <Magnetic>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-accent-dark text-white font-semibold px-6 py-3 hover:bg-accent transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : <>Send Message <FiSend /></>}
            </button>
          </Magnetic>

          {status === "sent" && (
            <p className="text-sm font-medium text-green-500">✓ Thanks! Your message has been sent.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
