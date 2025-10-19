import { Code2, Cpu, Database, GitBranch, Layout, Rocket, TerminalSquare, Wrench } from "lucide-react";

const SKILLS = [
  { name: "React", icon: Layout },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: TerminalSquare },
  { name: "Express", icon: Wrench },
  { name: "TailwindCSS", icon: Rocket },
  { name: "PostgreSQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Cpu },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <Wrench className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">Skills</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-lg border border-border bg-white/70 p-4 shadow-sm transition-all hover:shadow-lg dark:bg-black/40"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-accent">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-foreground/60">Proficient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
