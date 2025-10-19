import { FolderGit2, Globe, MessageSquareText, ShoppingCart } from "lucide-react";

const PROJECTS = [
  {
    title: "E‑commerce Admin Dashboard",
    icon: ShoppingCart,
    description:
      "Analytics, inventory, and order management with charts and real‑time updates.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    title: "Realtime Chat App",
    icon: MessageSquareText,
    description:
      "Typing indicators, message receipts, and responsive design for all devices.",
    stack: ["React", "Node.js", "WebSocket"],
  },
  {
    title: "Personal Website",
    icon: Globe,
    description:
      "Fast, accessible portfolio powered by modern tooling and design system.",
    stack: ["Vite", "React", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <FolderGit2 className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ title, description, icon: Icon, stack }) => (
            <article
              key={title}
              className="group rounded-lg border border-border bg-white/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-black/40"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-accent px-2 py-1 text-xs">
                <Icon className="h-4 w-4" />
                <span>Case Study</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="mb-4 text-sm text-foreground/70">{description}</p>
              <ul className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
