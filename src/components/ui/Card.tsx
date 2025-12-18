import { cn } from "../../lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-accent/10 blur-2xl" />
        <div className="absolute -right-1/4 bottom-0 h-full w-1/2 bg-accent/5 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
