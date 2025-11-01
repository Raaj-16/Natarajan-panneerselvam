import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-25 to-white dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-border py-12 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} Natarajan Panneerselvam. All rights
        reserved.
      </footer>
    </main>
  );
}
