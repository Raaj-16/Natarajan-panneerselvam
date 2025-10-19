import { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
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
  const banner = useMemo(() => "/public/placeholder.svg".replace("/public", "/"), []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={banner}
          alt="Abstract banner"
          className="h-full w-full object-cover opacity-10 dark:opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/60 dark:to-black/60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs tracking-wide backdrop-blur-sm dark:bg-black/40">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio
          </span>
          <h1 className="text-5xl font-extrabold tracking-wide text-foreground md:text-7xl lg:text-8xl">
            <span className="text-foreground">Natarajan</span>
            <span className="sr-only">Natarajan</span>
          </h1>
          <div className="mt-2 text-lg text-foreground/70 md:text-xl">
            <span className="font-semibold text-foreground">Hi, I'm </span>
            <span className="font-mono">{typed}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
            Frontend-focused full-stack engineer crafting fast, accessible, and elegant web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects"><Button className="rounded-full px-6">View Projects</Button></a>
            <a href="#contact"><Button variant="outline" className="rounded-full px-6">Contact</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
