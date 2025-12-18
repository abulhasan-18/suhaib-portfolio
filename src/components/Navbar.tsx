"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // keep in sync with Tailwind h-14 => 56px
  const NAVBAR_OFFSET = 56;

  // Enable smooth scroll globally (in case your CSS doesn't already)
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    // allow normal behavior for external links
    if (!href.startsWith("#")) return;

    e.preventDefault();
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });

    // update URL hash without jump
    history.replaceState(null, "", href);
  };

  return (
    <nav
      className="
        sticky top-0 z-50 border-b border-border/60
        bg-bg md:bg-bg/70 md:backdrop-blur
        supports-[backdrop-filter]:md:bg-bg/60
      "
    >
      {/* Top bar */}
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 font-semibold tracking-tight leading-none"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "#");
            }}
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Mohammed Suhaib</span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={handleNavClick(n.href)}
              className="text-sm text-muted hover:text-fg transition-colors"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-[width] after:duration-200 hover:after:w-full">
                {n.label}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-border bg-bg dark:bg-neutral-900"
          >
            {/* overlay */}
            <div
              className="fixed inset-0 top-14 bg-black/50"
              onClick={() => setOpen(false)}
            />

            <div className="relative mx-auto max-w-6xl px-6 py-2">
              <ul className="py-1">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      onClick={handleNavClick(n.href)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-fg hover:bg-accent/10 transition"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
