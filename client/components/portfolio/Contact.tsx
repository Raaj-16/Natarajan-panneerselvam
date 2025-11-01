import { useState } from "react";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACTS = [
  {
    label: "Email",
    value: "Natarajan.jai.1607@gmail.com",
    icon: Mail,
    action: "mailto",
  },
  { label: "Phone", value: "+91 7338767673", icon: Phone, action: "tel" },
  { label: "Location", value: "Chennai, India", icon: MapPin, action: "maps" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/natarajan-p-66a9b3226/",
  },
  { name: "GitHub", icon: Github, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleContactClick = (action: string, value: string) => {
    if (action === "mailto") {
      window.location.href = `mailto:${value}`;
      toast.success("Opening email client...");
    } else if (action === "tel") {
      window.location.href = `tel:${value}`;
      toast.success("Opening phone dialer...");
    } else if (action === "maps") {
      window.open(
        `https://maps.google.com/?q=${encodeURIComponent(value)}`,
        "_blank",
      );
      toast.success("Opening Google Maps...");
    }
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
            <Send className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-3xl font-semibold tracking-wide">Contact</h2>
        </div>

        <div className="space-y-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h3>
            {CONTACTS.map(({ label, value, icon: Icon, action }) => (
              <div
                key={label}
                className="group rounded-lg border border-border bg-white/70 p-5 shadow-sm transition-all hover:shadow-lg dark:bg-black/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="grid h-10 w-10 place-items-center rounded-md bg-accent flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-foreground block">
                        {label}
                      </span>
                      <button
                        onClick={() => handleContactClick(action, value)}
                        className="text-left text-foreground/80 transition-colors hover:text-foreground font-medium text-sm mt-1 hover:underline"
                        title={`Click to ${action === "mailto" ? "send email" : action === "tel" ? "call" : "open maps"}`}
                      >
                        {value}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(value)}
                    className="ml-2 p-2 rounded-md hover:bg-foreground/10 transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4 text-foreground/60 hover:text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect on Social
            </h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-white/70 text-foreground/80 transition-all hover:bg-foreground hover:text-background dark:bg-black/40"
                  title={`Visit ${name}`}
                  aria-label={`Visit ${name} profile`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-foreground placeholder-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-foreground/30 dark:bg-black/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-foreground placeholder-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-foreground/30 dark:bg-black/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-foreground placeholder-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-foreground/30 resize-none dark:bg-black/20"
                />
              </div>
              <Button type="submit" className="w-full rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
