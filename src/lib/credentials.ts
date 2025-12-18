// lib/credentials.ts
import { profile } from "./profile";

export type CredentialKind = "Certification" | "Education";

export type CredentialItem = {
  id: string;
  kind: CredentialKind;
  title: string; // cert name OR school name
  subtitle?: string; // degree, program, etc.
  dates?: string; // "2020 - 2024"
  description?: string; // optional extra info
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Normalized list (Education + Certifications together)
export const credentials: CredentialItem[] = [
  // Education -> CredentialItem
  ...profile.education.map((e, idx) => ({
    id: `edu-${idx}-${slugify(e.school)}`,
    kind: "Education" as const,
    title: e.school,
    subtitle: e.degree,
    dates: e.dates ?? "",
  })),

  // Certifications -> CredentialItem
  ...profile.certifications.map((c, idx) => ({
    id: `cert-${idx}-${slugify(c)}`,
    kind: "Certification" as const,
    title: c,
  })),
];

// Handy stats (optional use)
export const credentialStats = {
  total: credentials.length,
  education: credentials.filter((x) => x.kind === "Education").length,
  certifications: credentials.filter((x) => x.kind === "Certification").length,
};
