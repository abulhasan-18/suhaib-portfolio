"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./ui/Card";
import { X } from "lucide-react";

type Review = {
  name: string;
  title: string;
  quote: string;
};

export default function Reviews({ items }: { items: Review[] }) {
  const [activeReview, setActiveReview] = useState<Review | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  const getIndex = (offset: number) =>
    (currentIndex + offset + items.length) % items.length;

  const center = items[getIndex(0)];
  const left = items[getIndex(-1)];
  const right = items[getIndex(1)];

  // smoother + more premium feeling
  const transition = {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1] as const, // smoother "easeOutExpo-ish"
  };

  return (
    <>
      {/* 3-card carousel */}
      <div className="relative flex items-center justify-center gap-4 py-6">
        {/* Left card */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={left.name + left.title + "left"}
            className="w-[260px] md:w-[280px] cursor-pointer"
            initial={{ opacity: 0, x: -60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 0.9 }}
            exit={{ opacity: 0, x: 60, scale: 0.85 }}
            transition={transition}
            onClick={() => setActiveReview(left)}
          >
            <Card className="h-[220px] overflow-hidden">
              <div className="p-4 flex h-full flex-col blur-sm scale-95">
                <p className="mt-2 text-sm leading-relaxed text-fg/80 line-clamp-3">
                  “{left.quote}”
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-sm font-semibold">{left.name}</p>
                  <p className="text-xs text-muted">{left.title}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Center card (BIGGER + smoother transition property added) */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={center.name + center.title + "center"}
            className="w-[360px] md:w-[440px] lg:w-[520px] cursor-pointer z-10"
            initial={{ opacity: 0, y: 34, scale: 0.94 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition, // 👈 add transition directly to center animation (extra smooth)
            }}
            exit={{ opacity: 0, y: -34, scale: 0.94 }}
            transition={transition}
            onClick={() => setActiveReview(center)}
          >
            <Card className="h-[320px] md:h-[360px] shadow-2xl">
              <div className="p-7 md:p-8 flex h-full flex-col">
                <p className="mt-2 text-base md:text-[15px] leading-relaxed text-fg/90 line-clamp-6">
                  “{center.quote}”
                </p>
                <div className="mt-auto pt-7">
                  <p className="text-base font-semibold">{center.name}</p>
                  <p className="text-sm text-muted">{center.title}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Right card */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={right.name + right.title + "right"}
            className="w-[260px] md:w-[280px] cursor-pointer"
            initial={{ opacity: 0, x: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 0.9 }}
            exit={{ opacity: 0, x: -60, scale: 0.85 }}
            transition={transition}
            onClick={() => setActiveReview(right)}
          >
            <Card className="h-[220px] overflow-hidden">
              <div className="p-4 flex h-full flex-col blur-sm scale-95">
                <p className="mt-2 text-sm leading-relaxed text-fg/80 line-clamp-3">
                  “{right.quote}”
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-sm font-semibold">{right.name}</p>
                  <p className="text-xs text-muted">{right.title}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeReview && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition }}
              exit={{ opacity: 0, transition }}
              onClick={() => setActiveReview(null)}
            />

            {/* Modal Card */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, transition }}
              exit={{ opacity: 0, scale: 0.96, transition }}
            >
              <Card className="relative max-w-2xl w-full p-6 md:p-8">
                <p className="font-semibold">{activeReview.name}</p>
                <p className="text-sm text-muted">{activeReview.title}</p>
                <div className="pt-4 pb-4 border-t" />
                <button
                  onClick={() => setActiveReview(null)}
                  className="absolute right-4 top-4 text-muted hover:text-fg"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-fg italic">
                    “{activeReview.quote}”
                  </p>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
