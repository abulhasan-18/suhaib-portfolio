import Card from "./ui/Card";

export default function Timeline({
  items,
}: {
  items: {
    company: string;
    role: string;
    location: string;
    start: string;
    end: string;
    bullets: string[];
  }[];
}) {
  return (
    <div className="grid gap-6">
      {items.map((it) => (
        <Card key={`${it.company}-${it.role}`}>
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {it.role}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {it.company} • {it.location}
                </p>
              </div>
              <div className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-fg">
                {it.start} — {it.end}
              </div>
            </div>
            <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-fg/90">
              {it.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
}
