import { cn } from "../../lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow ? (
        <p className="text-xl font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 h-px w-24 bg-accent/70" />
    </div>
  );
}
