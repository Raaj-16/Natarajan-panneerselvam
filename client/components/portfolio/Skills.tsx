import { Wrench } from "lucide-react";

const SKILLS = [
  { name: "React", level: 95 },
  { name: "JavaScript (ES6+)", level: 93 },
  { name: "TypeScript", level: 90 },
  { name: "Angular", level: 85 },
  { name: "Vue.js", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "HTML5 & CSS3", level: 94 },
  { name: "Node.js", level: 88 },
  { name: "Java & Spring Boot", level: 82 },
  { name: "GraphQL", level: 80 },
  { name: "RESTful APIs", level: 92 },
  { name: "Git & GitHub", level: 90 },
  { name: "Jenkins & CI/CD", level: 80 },
  { name: "Responsive Design", level: 95 },
  { name: "UI/UX Implementation", level: 88 },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const delay = index * 0.15;
  const delayClass = `delay-${index}`;

  return (
    <div className="space-y-2">
      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
            opacity: 0;
          }
          to {
            width: ${level}%;
            opacity: 1;
          }
        }
        @keyframes sparkle {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }
        .skill-${index} {
          animation: slideIn 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards;
          opacity: 0;
        }
        .skill-${index}::before {
          content: '';
          animation: sparkle 3s ease-in-out ${delay + 0.8}s infinite;
        }
      `}</style>
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm font-semibold text-foreground/70">{level}%</span>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner">
        <div
          className={`skill-${index} relative h-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-md transition-shadow hover:shadow-lg before:absolute before:inset-0 before:rounded-full`}
          style={{
            width: 0,
            boxShadow: `0 0 20px rgba(99, 102, 241, 0.6), inset 0 0 12px rgba(255, 255, 255, 0.3)`,
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
            <SkillBar key={name} name={name} level={level} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
