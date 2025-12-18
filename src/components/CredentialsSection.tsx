"use client";

import { useMemo, useState } from "react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

import { BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import {
  CredentialKind,
  CredentialItem,
  credentials,
  credentialStats,
} from "@/lib/credentials";

type Filter = "All" | CredentialKind;

function IconForKind({ kind }: { kind: CredentialKind }) {
  return kind === "Education" ? (
    <GraduationCap className="h-4 w-4" />
  ) : (
    <BadgeCheck className="h-4 w-4" />
  );
}

function CredentialCard({ item }: { item: CredentialItem }) {
  const isEdu = item.kind === "Education";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-bg shadow-soft",
        "transition hover:-translate-y-[2px] hover:border-accent hover:shadow-soft"
      )}
    >
      {/* tiny glow */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition group-hover:opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.35),transparent_60%)]" />

      <div className="relative p-5">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card">
            <span className={cn("text-accent")}>
              <IconForKind kind={item.kind} />
            </span>
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {item.kind}
              </p>
              {item.dates ? (
                <p className="text-xs text-muted">{item.dates}</p>
              ) : null}
            </div>

            <p
              className={cn(
                "mt-1 text-sm font-extrabold text-fg",
                "line-clamp-2 min-h-[44px]" // keeps sizes consistent even if title wraps
              )}
            >
              {item.title}
            </p>

            {item.subtitle ? (
              <p className="mt-1 text-sm text-fg/80 line-clamp-2">
                {item.subtitle}
              </p>
            ) : (
              // keep spacing consistent even when subtitle missing
              <div className="mt-1 h-[20px]" />
            )}

            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-accent">
              <span className="inline-flex h-5 items-center rounded-full border border-border bg-card px-2">
                {isEdu ? "Academic" : "Professional"}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CredentialsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return credentials;
    return credentials.filter((c) => c.kind === filter);
  }, [filter]);

  const pills: { key: Filter; label: string; count: number }[] = [
    { key: "All", label: "All", count: credentialStats.total },
    { key: "Education", label: "Education", count: credentialStats.education },
    {
      key: "Certification",
      label: "Certifications",
      count: credentialStats.certifications,
    },
  ];

  return (
    <section id="qualifications" className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeading
        eyebrow="Qualifications"
        title="Credentials & Achievements"
        subtitle="Education + Certifications, packed into one clean hub."
      />

      <Card>
        <div className="p-6 md:p-8">
          {/* header row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            {/* mini summary */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg">
                <Sparkles className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-fg">
                  Credential Vault
                </p>
                <p className="text-sm text-fg/80">
                  {credentialStats.education} Education •{" "}
                  {credentialStats.certifications} Certifications
                </p>
              </div>
            </div>

            {/* filter pills */}
            <div className="flex flex-wrap gap-2">
              {pills.map((p) => {
                const active = filter === p.key;
                return (
                  <button
                    key={p.key}
                    onClick={() => setFilter(p.key)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition",
                      active
                        ? "border-accent bg-accent/10 text-fg"
                        : "border-border bg-bg text-muted hover:border-accent"
                    )}
                  >
                    {p.label}
                    <span
                      className={cn(
                        "inline-flex min-w-[28px] items-center justify-center rounded-full px-2 py-0.5 text-[11px]",
                        active ? "bg-accent text-white" : "bg-card text-fg"
                      )}
                    >
                      {p.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {filtered.map((item) => (
              <CredentialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
