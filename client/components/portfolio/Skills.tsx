import { Wrench } from "lucide-react";

const SKILLS = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 88 },
  { name: "TailwindCSS", level: 92 },
  { name: "PostgreSQL", level: 80 },
  { name: "Git & DevOps", level: 85 },
  { name: "UI/UX Design", level: 82 },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm font-semibold text-foreground/70">{level}%</span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-foreground/10">
        <style>{`
          @keyframes fillBar {
            from {
              width: 0%;
            }
            to {
              width: ${level}%;
            }
          }
          @keyframes shimmer {
            0%, 100% {
              box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.6);
            }
          }
          .skill-bar-${delay} {
            animation: fillBar 1.2s ease-out ${delay}s forwards;
          }
          .skill-bar-${delay}::before {
            animation: shimmer 2s ease-in-out ${delay + 0.8}s infinite;
          }
        `}</style>
        <div
          className={`skill-bar-${delay} relative h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg before:absolute before:inset-0 before:rounded-full`}
          style={{
            width: 0,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <Wrench className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-3xl font-semibold tracking-wide">Skills</h2>
        </div>

        <div className="space-y-8">
          {SKILLS.map(({ name, level }, index) => (
            <SkillBar key={name} name={name} level={level} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
