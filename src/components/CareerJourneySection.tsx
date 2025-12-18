"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg">
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

          <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr]">
            {/* image LEFT */}
            <div className="rounded-2xl border border-border bg-bg p-4">
              <div className="relative h-64 overflow-hidden rounded-xl border border-border bg-card">
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
            <div className="rounded-2xl border border-border bg-bg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Description
              </p>
              <div className="mt-3 max-h-[54vh] overflow-y-auto pr-2">
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, left: 0 });

  // ✅ DESCENDING order (latest first)
  const items = useMemo(() => {
    return [...careerJourney].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.id.localeCompare(a.id);
    });
  }, []);

  // sizing
  const ITEM_W = 320;
  const GAP = 72;
  const PAD_RIGHT = 36;

  // ✅ SAME SIZE GUARANTEE
  const cardW = 260; // both top + bottom card width
  const thumbH = 150; // top image card height
  const infoH = 132; // bottom text card height (fixed)

  const contentW = items.length * ITEM_W + (items.length - 1) * GAP + PAD_RIGHT;

  // scrollbar meta
  const [meta, setMeta] = useState({
    left: 0,
    max: 0,
    view: 0,
    content: 0,
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const view = el.clientWidth;
      const content = el.scrollWidth;
      const max = Math.max(0, content - view);
      setMeta({
        left: el.scrollLeft,
        max,
        view,
        content,
      });
    };

    update();

    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [items.length]);

  const progress = meta.max <= 0 ? 0 : meta.left / meta.max;
  const handleRatio =
    meta.content <= 0 ? 0.2 : Math.max(0.14, meta.view / meta.content);
  const handleLeftPct = (1 - handleRatio) * progress * 100;

  const scrollToProgress = (p: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.min(1, Math.max(0, p));
    el.scrollLeft = clamped * meta.max;
  };

  const onTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();

    const trackW = rect.width;
    const handleW = trackW * handleRatio;

    const clickX = e.clientX - rect.left;
    const usable = Math.max(1, trackW - handleW);
    const p = (clickX - handleW / 2) / usable;

    scrollToProgress(p);
  };

  const onHandleDown = (clientX: number) => {
    dragStartRef.current = { x: clientX, left: meta.left };

    const onMove = (ev: MouseEvent) => {
      const track = trackRef.current;
      const el = scrollerRef.current;
      if (!track || !el) return;

      const trackW = track.clientWidth;
      const handleW = trackW * handleRatio;
      const usable = Math.max(1, trackW - handleW);

      const dx = ev.clientX - dragStartRef.current.x;
      const dp = dx / usable;
      const newLeft = dragStartRef.current.left + dp * meta.max;

      el.scrollLeft = Math.min(meta.max, Math.max(0, newLeft));
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onHandleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onHandleDown(e.clientX);
  };

  const onHandleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const x = e.touches[0]?.clientX ?? 0;
    dragStartRef.current = { x, left: meta.left };

    const onMove = (ev: TouchEvent) => {
      const track = trackRef.current;
      const el = scrollerRef.current;
      if (!track || !el) return;

      const trackW = track.clientWidth;
      const handleW = trackW * handleRatio;
      const usable = Math.max(1, trackW - handleW);

      const cx = ev.touches[0]?.clientX ?? dragStartRef.current.x;
      const dx = cx - dragStartRef.current.x;
      const dp = dx / usable;
      const newLeft = dragStartRef.current.left + dp * meta.max;

      el.scrollLeft = Math.min(meta.max, Math.max(0, newLeft));
    };

    const onEnd = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
    };

    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeading
        eyebrow="Accomplished Projects"
        title="Accomplished Projects"
        subtitle=""
      />

      <Card>
        <div className="relative p-7 md:p-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent" />

          <div
            ref={scrollerRef}
            className={cn("relative overflow-x-auto scroll-smooth", "pb-10")}
          >
            <div
              className="relative"
              style={
                {
                  width: contentW,
                  ["--rail-y" as any]: "260px",
                  ["--card-w" as any]: `${cardW}px`,
                  ["--thumb-h" as any]: `${thumbH}px`,
                  ["--info-h" as any]: `${infoH}px`,
                } as React.CSSProperties
              }
            >
              <div className="absolute left-0 right-0 top-[var(--rail-y)] h-[2px] bg-border" />

              <div className="flex gap-[72px]">
                {items.map((it) => (
                  <div
                    key={it.id}
                    className="relative shrink-0"
                    style={{ width: ITEM_W, height: 450 }}
                  >
                    {/* TOP IMAGE CARD (fixed size) */}
                    <button
                      onClick={() => setSelected(it)}
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2",
                        "top-[calc(var(--rail-y)-var(--thumb-h)-44px)]",
                        "group relative",
                        "h-[var(--thumb-h)] w-[var(--card-w)]",
                        "rounded-3xl border border-border bg-card p-3 shadow-soft",
                        "transition hover:shadow-soft hover:border-accent hover:-translate-y-[2px]"
                      )}
                      aria-label={`Open details for ${it.title}`}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-bg">
                        <Image
                          src={it.image}
                          alt={it.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.05]"
                          sizes="260px"
                        />
                      </div>
                    </button>

                    {/* DOT */}
                    <div className="absolute left-1/2 top-[var(--rail-y)] z-10 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-3.5 w-3.5 rounded-full bg-accent ring-[6px] ring-bg" />
                    </div>

                    {/* BOTTOM INFO CARD (fixed size) */}
                    <button
                      onClick={() => setSelected(it)}
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2",
                        "top-[calc(var(--rail-y)+18px)]",
                        "w-[var(--card-w)] h-[var(--info-h)]",
                        "rounded-3xl border border-border bg-bg px-5 py-4 shadow-soft",
                        "transition hover:border-accent hover:shadow-soft",
                        "flex flex-col text-left"
                      )}
                    >
                      <p className="text-[11px] font-extrabold tracking-wide text-muted">
                        {it.year}
                      </p>

                      {/* reserve space so ALL cards same height */}
                      <p className="mt-1 text-sm font-extrabold text-fg line-clamp-2 min-h-[44px]">
                        {it.title}
                      </p>

                      {/* stick CTA to bottom always */}
                      <div className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold text-accent">
                        Click for more details
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </div>
                    </button>
                  </div>
                ))}
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
