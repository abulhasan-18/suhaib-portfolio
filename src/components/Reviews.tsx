"use client";

import { useState } from "react";
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

  const loopItems = [...items, ...items];

  return (
    <>
      {/* Carousel */}
      <div className="relative overflow-hidden pb-6">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopItems.map((r, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveReview(r)}
            >
              <Card className="h-[260px] w-[320px] md:w-[360px] transition-all hover:scale-[1.03] hover:shadow-lg">
                <div className="p-6 flex h-full flex-col">
                  <p className="mt-2 text-sm leading-relaxed text-fg/90 line-clamp-4">
                    “{r.quote}”
                  </p>

                  <div className="mt-auto pt-6 space-y-0.5">
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted">{r.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeReview && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReview(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
            >
              <Card className="relative max-w-2xl w-full rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Close */}
                <button
                  onClick={() => setActiveReview(null)}
                  className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-muted/10 hover:text-fg transition"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="space-y-1">
                  <p className="text-lg font-semibold leading-tight">
                    {activeReview.name}
                  </p>
                  <p className="text-sm text-muted">{activeReview.title}</p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Quote */}
                <blockquote className="relative">
                  <p className="text-base md:text-lg leading-relaxed text-fg/95 italic">
                    “{activeReview.quote}”
                  </p>
                </blockquote>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
