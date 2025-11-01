import { useEffect, useRef, useState } from "react";
import { Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function useTypewriter(text: string, speedMs = 85) {
  const [out, setOut] = useState("");
  const iRef = useRef(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setOut("");
    iRef.current = 0;

    const tick = () => {
      const i = iRef.current;
      if (i <= text.length) {
        setOut(text.slice(0, i));
        iRef.current = i + 1;
        timer.current = window.setTimeout(tick, speedMs);
      }
    };

    tick();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [text, speedMs]);

  return out;
}

export default function Hero() {
  const typed = useTypewriter("Natarajan", 90);

  const downloadResume = () => {
    // Create a simple resume file
    const resumeContent = `
Natarajan Panneerselvam
Frontend-focused Full-Stack Engineer

PROFESSIONAL SUMMARY
Frontend-focused full-stack engineer crafting fast, accessible, and elegant web experiences.
Experienced in modern React, TypeScript, performance optimization, design systems, and accessible UI.

EXPERIENCE
Senior Frontend Engineer | 5+ Years
- Developed and maintained scalable React applications
- Built responsive, accessible UI components
- Optimized application performance and bundle sizes
- Led technical designs for feature implementations

SKILLS
Frontend: React, TypeScript, TailwindCSS, JavaScript
Backend: Node.js, Express, PostgreSQL
Tools: Git, Docker, Vite, Webpack
Design: Design Systems, Accessibility (a11y), UI/UX

PROJECTS
E-commerce Admin Dashboard
Analytics, inventory, and order management with charts and real-time updates.

Realtime Chat App
Typing indicators, message receipts, and responsive design for all devices.

Personal Website
Fast, accessible portfolio powered by modern tooling and design system.

EDUCATION
Full Stack Development Certification
Technology Institute, 2019

LOCATION
Chennai, India
    `.trim();

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent));
    element.setAttribute("download", "Natarajan_Resume.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950" />
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.08)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
          </defs>
          <path fill="url(#grad)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-40">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs tracking-wide backdrop-blur-sm dark:bg-black/40">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio
          </span>
          <h1 className="text-5xl font-extrabold tracking-wide text-foreground md:text-6xl lg:text-7xl">
            <span className="text-foreground">Natarajan</span>
            <span className="sr-only">Natarajan</span>
          </h1>
          <div className="mt-2 text-lg text-foreground/70 md:text-xl">
            <span className="font-semibold text-foreground">Hi, I'm </span>
            <span className="font-mono">{typed}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="mt-6 max-w-2xl text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Frontend-focused full-stack engineer crafting fast, accessible, and elegant web experiences.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#projects"><Button className="rounded-full px-8">View Projects</Button></a>
            <a href="#contact"><Button variant="outline" className="rounded-full px-8">Contact</Button></a>
            <Button onClick={downloadResume} variant="outline" className="rounded-full px-8 gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
