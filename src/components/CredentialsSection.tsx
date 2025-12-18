import { profile } from "../lib/profile";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";

export default function CredentialsSection() {
  return (
    <section id="qualifications" className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeading
        eyebrow="Qualifications"
        title="Certifications, awards, and education."
        subtitle=""
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="p-6">
            <p className="text-sm font-semibold">Certifications</p>
            <ul className="mt-4 grid gap-2 text-sm text-fg/90">
              {profile.certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <p className="text-sm font-semibold">Awards</p>
            <ul className="mt-4 grid gap-2 text-sm text-fg/90">
              {profile.awards.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold">Languages</p>
              <ul className="mt-4 grid gap-2 text-sm text-fg/90">
                {profile.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span>{l.name}</span>
                    <span className="text-xs text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <p className="text-sm font-semibold">Education</p>
            <div className="mt-4 grid gap-4">
              {profile.education.map((e) => (
                <div
                  key={e.school}
                  className="rounded-2xl border border-border bg-bg p-4"
                >
                  <p className="text-sm font-semibold">{e.school}</p>
                  <p className="mt-1 text-sm text-fg/90">{e.degree}</p>
                  {e.dates ? (
                    <p className="mt-1 text-xs text-muted">{e.dates}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
