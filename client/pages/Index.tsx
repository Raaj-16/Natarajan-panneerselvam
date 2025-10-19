import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf8f3] to-white dark:from-black dark:to-[#0a0a0a]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-border py-8 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} Natarajan Panneerselvam. All rights reserved.
      </footer>
    </main>
  );
}
