"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={cn("h-10 w-10", className)} />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-soft transition",
        "hover:scale-[1.03] active:scale-[0.98]",
        className
      )}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-accent/20 blur-xl transition-opacity group-hover:opacity-100 opacity-70" />
      </span>
      {isDark ? (
        <Sun className="relative h-5 w-5 text-fg" />
      ) : (
        <Moon className="relative h-5 w-5 text-fg" />
      )}
    </button>
  );
}
