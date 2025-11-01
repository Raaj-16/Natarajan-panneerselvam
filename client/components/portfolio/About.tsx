import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <User className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-3xl font-semibold tracking-wide">About</h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm Natarajan Panneerselvam, a software engineer passionate about building delightful user interfaces and robust systems. I bring craft, care, and pragmatism to every project I take on.
            </p>
            <p>
              My focus is modern React, TypeScript, performance, design systems, and accessible UI—delivering clean, scalable code and polished product experiences. With 5+ years of experience, I've worked on various projects from startups to established companies.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-gradient-to-br from-white/70 to-white/50 dark:from-black/40 dark:to-black/20 p-6 shadow-sm backdrop-blur-sm">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="text-foreground/60 font-medium">Experience</span>
                <span className="font-semibold text-foreground">5+ years</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="text-foreground/60 font-medium">Location</span>
                <span className="font-semibold text-foreground">Chennai, India</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-foreground/60 font-medium">Role</span>
                <span className="font-semibold text-foreground">Full-Stack Engineer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
