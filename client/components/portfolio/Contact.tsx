import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACTS = [
  { label: "Email", value: "natarajan@portfolio.dev", icon: Mail },
  { label: "Phone", value: "+91 98765 43210", icon: Phone },
  { label: "Location", value: "Chennai, India", icon: MapPin },
];

export default function Contact() {
  const [revealed, setRevealed] = useState(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <Send className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">Contact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CONTACTS.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group rounded-lg border border-border bg-white/70 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-black/40"
            >
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
              <button
                onClick={() => copy(value)}
                className="text-left text-foreground/80 transition-colors hover:text-foreground"
                title="Click to copy"
              >
                {revealed ? value : value.replace(/.(?=.{4,}$)/g, "•")}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button onClick={() => setRevealed((v) => !v)} className="rounded-full">
            {revealed ? "Hide details" : "Reveal details"}
          </Button>
        </div>
      </div>
    </section>
  );
}
