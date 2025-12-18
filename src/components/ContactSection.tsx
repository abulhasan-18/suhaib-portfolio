// components/ContactSection.tsx

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { profile } from "../lib/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-16 pb-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something that runs itself."
        subtitle="If you want faster approvals, cleaner processes, and dashboards that leadership actually uses—hit me up."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <div className="p-6">
            <p className="text-sm font-semibold">Quick links</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] active:scale-[0.98] transition"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-fg shadow-soft hover:border-accent transition"
                href={`mailto:${profile.email}`}
              >
                <Mail className="h-4 w-4 text-accent" />
                Email
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-fg shadow-soft hover:border-accent transition"
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              >
                <Phone className="h-4 w-4 text-accent" />
                Call
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-bg p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Optional
              </p>
              <p className="mt-2 text-sm text-muted">
                Want a contact form? Add email sending via Resend / SendGrid.
                This template keeps it simple + fast (no backend required).
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <p className="text-sm font-semibold">Details</p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Location
                </p>
                <p className="mt-1">{profile.location}</p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Email
                </p>
                <p className="mt-1">{profile.email}</p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Phone
                </p>
                <p className="mt-1">{profile.phone}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
