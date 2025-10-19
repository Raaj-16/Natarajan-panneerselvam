import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <User className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">About</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-foreground/80">
            <p>
              I'm Natarajan Panneerselvam, a software engineer passionate about building delightful user interfaces and robust systems. I bring craft, care, and pragmatism to every project I take on.
            </p>
            <p>
              My focus is modern React, TypeScript, performance, design systems, and accessible UI—delivering clean, scalable code and polished product experiences.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:bg-black/40">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between"><span className="text-foreground/60">Experience</span><span>5+ years</span></li>
              <li className="flex items-center justify-between"><span className="text-foreground/60">Location</span><span>Chennai, IN</span></li>
              <li className="flex items-center justify-between"><span className="text-foreground/60">Role</span><span>Frontend Engineer</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
