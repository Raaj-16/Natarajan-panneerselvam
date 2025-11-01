import { useState } from "react";
import {
  FolderGit2,
  Globe,
  MessageSquareText,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "E‑commerce Admin Dashboard",
    icon: ShoppingCart,
    description:
      "Analytics, inventory, and order management with charts and real‑time updates. Built with modern React patterns and TypeScript for type safety.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Realtime Chat App",
    icon: MessageSquareText,
    description:
      "Typing indicators, message receipts, and responsive design for all devices. Features real-time communication with WebSocket integration.",
    stack: ["React", "Node.js", "WebSocket"],
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Personal Website",
    icon: Globe,
    description:
      "Fast, accessible portfolio powered by modern tooling and design system. Optimized for performance and user experience.",
    stack: ["Vite", "React", "Tailwind"],
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    link: "#",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    // Navigate to project details
    console.log(`Viewing project ${projectId}`);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <FolderGit2 className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-3xl font-semibold tracking-wide">Projects</h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map(
            ({ id, title, description, icon: Icon, stack, thumbnail }) => (
              <article
                key={id}
                onClick={() => handleProjectClick(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-white/70 shadow-sm transition-all hover:shadow-lg dark:bg-black/40"
              >
                <div className="flex flex-col md:flex-row md:gap-6">
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full md:h-64 md:w-64 flex-shrink-0 overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-5 md:py-6 md:pr-6">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-accent px-2 py-1 text-xs">
                        <Icon className="h-4 w-4" />
                        <span>Case Study</span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="mb-4 text-sm text-foreground/70 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <ul className="flex flex-wrap gap-2">
                        {stack.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`transition-transform duration-300 ${hoveredId === id ? "translate-x-1" : ""}`}
                      >
                        <ArrowUpRight className="h-5 w-5 text-foreground/60 group-hover:text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
