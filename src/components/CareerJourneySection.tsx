"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { CalendarDays, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { careerJourney, type CareerJourneyItem } from "@/lib/careerJourney";
import { cn } from "@/lib/utils";

function DetailsModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: CareerJourneyItem | null;
}) {
  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2">
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg">
                <CalendarDays className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-sm font-semibold text-fg">{item.title}</p>
                <p className="text-xs text-muted">{item.year}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg hover:border-accent transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-5 p-5 md:grid-cols-[1fr_1.2fr]">
            {/* image LEFT */}
            <div className="rounded-2xl border border-border bg-bg p-3">
              <div className="relative h-56 overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
              </div>
            </div>

            {/* description RIGHT (scrollable) */}
            <div className="rounded-2xl border border-border bg-bg p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Description
              </p>
              <div className="mt-3 max-h-[52vh] overflow-y-auto pr-2">
                <p className="text-sm leading-relaxed text-fg/90">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function CareerJourneySection() {
  const [selected, setSelected] = useState<CareerJourneyItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // ✅ DESCENDING order (latest first)
  const items = useMemo(() => {
    return [...careerJourney].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year; // ✅ desc year
      return b.id.localeCompare(a.id); // ✅ desc within year
    });
  }, []);

  // sizing
  const CARD_W = 320;
  const GAP = 24; // gap-6
  const PAD_RIGHT = 24; // pr-6
  const contentW = items.length * CARD_W + (items.length - 1) * GAP + PAD_RIGHT;

  return (
    <section id="career-journey" className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeading
        eyebrow="Accomplishmed Projects"
        title="Accomplished Projects"
        subtitle=""
      />

      <Card>
        <div className="relative p-6 md:p-8">
          {/* horizontal scroller */}
          <div
            ref={scrollerRef}
            className={cn(
              "relative overflow-x-auto scroll-smooth no-scrollbar"
            )}
          >
            {/* scrolling content container */}
            <div className="relative py-6 pr-6" style={{ width: contentW }}>
              {/* rail spans FULL scroll width */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-border" />

              {/* cards */}
              <div className="flex gap-6">
                {items.map((it, idx) => {
                  const isTop = idx % 2 === 0;

                  return (
                    <div
                      key={it.id}
                      className="relative shrink-0 snap-start"
                      style={{ width: CARD_W, height: 260 }}
                    >
                      {/* dot + year */}
                      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
                        <div className="mt-2 flex justify-center">
                          <span className="rounded-full border border-border bg-bg px-3 py-1 text-[11px] font-bold text-muted shadow-soft">
                            {it.year}
                          </span>
                        </div>
                      </div>

                      {/* stem */}
                      <div
                        className={cn(
                          "absolute left-1/2 top-1/2 w-px -translate-x-1/2 bg-border",
                          isTop ? "h-[78px] -translate-y-[78px]" : "h-[78px]"
                        )}
                      />

                      {/* card (TITLE ONLY) */}
                      <button
                        onClick={() => setSelected(it)}
                        className={cn(
                          "absolute left-0 right-0 mx-auto w-full",
                          isTop ? "top-0" : "bottom-0",
                          "rounded-2xl border border-border bg-bg px-4 py-4 text-left shadow-soft transition",
                          "hover:border-accent hover:shadow-soft hover:scale-[1.01] active:scale-[0.99]"
                        )}
                      >
                        <p className="text-sm font-extrabold text-fg line-clamp-2">
                          {it.title}
                        </p>

                        <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-accent">
                          Click for more details
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <DetailsModal
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
