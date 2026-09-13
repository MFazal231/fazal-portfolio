import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolio";
import Magnetic from "./Magnetic";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Sairéla", href: "#entrepreneurship" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(links[0].href);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offset = 140;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveHash(`#${current}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
          Mohammad<span className="text-gradient">.dev</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-sm font-medium transition-colors ${
                activeHash === link.href
                  ? "text-accent-dark dark:text-accent"
                  : "text-slate-600 dark:text-gray-400 hover:text-accent-dark dark:hover:text-accent"
              }`}
            >
              {link.label}
              {activeHash === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-accent-dark dark:bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
            <FiLinkedin />
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="icon-btn">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent-dark text-white text-sm font-semibold px-4 py-2 hover:bg-accent transition-colors"
            >
              <FiDownload /> Resume
            </a>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden icon-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-gray-950 border-b border-slate-200 dark:border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-slate-100 dark:border-white/5 text-slate-700 dark:text-gray-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
                <a
                  href={profile.resumeUrl}
                  download
                  className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent-dark text-white text-sm font-semibold px-4 py-2"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
