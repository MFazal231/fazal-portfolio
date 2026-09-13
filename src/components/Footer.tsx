import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
