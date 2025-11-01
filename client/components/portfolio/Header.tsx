import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Wrench, FolderGit2, Mail, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route/hash change
    setOpen(false);
  }, [location.pathname, location.hash]);

  const downloadResume = () => {
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

  const NavLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
    >
      <Icon className="h-4 w-4 text-foreground/60 group-hover:text-foreground" />
      <span>{label}</span>
    </a>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-sm bg-white/70 dark:bg-black/40 border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <div className="h-7 w-7 rounded-md bg-foreground" />
          <span className="text-foreground">NP</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#home" icon={Home} label="Home" />
          <NavLink href="#about" icon={User} label="About" />
          <NavLink href="#skills" icon={Wrench} label="Skills" />
          <NavLink href="#projects" icon={FolderGit2} label="Projects" />
          <NavLink href="#contact" icon={Mail} label="Contact" />
          <button
            onClick={downloadResume}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
            aria-label="Download resume"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="space-y-1 border-t border-border px-6 pb-6 pt-3">
          <a onClick={() => setOpen(false)} href="#home" className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60">Home</a>
          <a onClick={() => setOpen(false)} href="#about" className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60">Contact</a>
          <button
            onClick={downloadResume}
            className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-foreground/80 hover:bg-accent/60 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}
