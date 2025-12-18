"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Badge from "./ui/Badge";
import { profile } from "@/lib/profile";
import Image from "next/image";

type LogoItem = { name: string; src: string };

export default function Hero() {
  // ✅ using your existing images inside /public/about/
  const companies: LogoItem[] = [
    { name: "JBM", src: "/about/jbm.png" },
    { name: "Haworth", src: "/about/haworth.png" },
    { name: "BYD", src: "/about/byd.png" },
    { name: "Wakefit", src: "/about/wakefit.png" },
    { name: "Sobha", src: "/about/shoba.png" },
    { name: "Dubai Holding", src: "/about/dubai_holding.png" },
  ];

  return (
    <section className="relative overflow-hidden pb-10">
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            >
              {profile.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Badge className="gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {profile.location}
              </Badge>

              <a href={`mailto:${profile.email}`} className="inline-flex">
                <Badge className="gap-2 hover:border-accent transition">
                  <Mail className="h-4 w-4 text-accent" />
                  {profile.email}
                </Badge>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex"
              >
                <Badge className="gap-2 hover:border-accent transition">
                  <Phone className="h-4 w-4 text-accent" />
                  {profile.phone}
                </Badge>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Let’s talk
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-fg shadow-soft hover:border-accent transition"
              >
                <Download className="h-4 w-4 text-accent" />
                Resume
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-fg shadow-soft hover:border-accent transition"
              >
                <Linkedin className="h-4 w-4 text-accent" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="absolute inset-0">
                <div className="absolute left-[-30%] top-[-40%] h-[200%] w-[200%] bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
                <div className="absolute -left-1/2 top-1/2 h-24 w-64 bg-accent/20 blur-3xl animate-shimmer" />
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border bg-bg shadow-soft ">
                {/* Photo */}
                <div className="p-6">
                  <div className="mx-auto w-fit rounded-full border-[5px] border-fg/20 p-1">
                    <div className="relative h-36 w-36 overflow-hidden rounded-full bg-card">
                      {/* ✅ Zoom OUT: contain + scale down */}
                      <Image
                        src="/about/profile.png"
                        alt={profile.name}
                        fill
                        priority
                        className="object-contain scale-150 p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Mini note */}
                <div className="mt-6 flex justify-center">
                  <span className="rounded-md bg-fg px-3 py-1 text-[11px] font-extrabold text-bg">
                    Companies Worked / Consulted
                  </span>
                </div>

                <LogoGrid items={companies} />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-accent/25 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoGrid({ items }: { items: LogoItem[] }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      {items.map((l) => (
        <div
          key={l.name}
          className="flex h-12 items-center justify-center rounded-lg border border-border bg-bg px-2"
          title={l.name}
        >
          <Image
            src={l.src}
            alt={l.name}
            width={120}
            height={48}
            className="h-9 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
