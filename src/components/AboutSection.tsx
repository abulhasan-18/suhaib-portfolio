// components/AboutSection.tsx
import Image from "next/image";
import { profile } from "../lib/profile";
import { Mail, Phone, Factory, Building2, Layers3 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent" />
      <span className="text-sm leading-relaxed text-fg/90">{children}</span>
    </li>
  );
}

export default function AboutSection() {
  const industries = [
    {
      icon: <Factory className="h-4 w-4" />,
      text: "Manufacturing: Automotive & Furniture",
    },
    {
      icon: <Building2 className="h-4 w-4" />,
      text: "Construction: Glass, Aluminum Facades & Modular Pods",
    },
    {
      icon: <Layers3 className="h-4 w-4" />,
      text: "Service Sectors: Real Estate",
    },
  ];

  const previousHighlights = profile.highlights?.slice(0, 9) ?? [];

  const educationMini =
    profile.education?.map((e) => ({
      degree: e.degree.split(",")[0]?.trim() || e.degree,
      school: e.school,
    })) ?? [];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-7">
      <SectionHeading eyebrow="About" title="About" subtitle="" />
      {/* Outer frame */}
      <div className="rounded-2xl border border-border bg-card shadow-soft">
        <div className="p-6 md:p-8">
          {/* Main layout */}
          <div className="mt-6 grid gap-1 md:grid-cols-1 md:items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-fg/90">
                {profile.summary}
              </p>

              <div className="space-y-2">
                {industries.map((i) => (
                  <div key={i.text} className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent">{i.icon}</span>
                    <p className="text-sm font-semibold text-fg">{i.text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-bold text-fg">
                  <span className="text-accent">⭐</span> Key Highlights
                  (Previous Experience)
                </p>
                <ul className="grid gap-2">
                  {previousHighlights.map((h) => (
                    <Bullet key={h}>{h}</Bullet>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-accent transition"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-accent transition"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
