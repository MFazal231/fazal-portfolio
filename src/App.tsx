import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Entrepreneurship from "./components/Entrepreneurship";
import Education from "./components/Education";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CompetitiveProgramming />
        <Entrepreneurship />
        <Education />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
