import { profile } from "../lib/profile";
import Timeline from "./Timeline";
import SectionHeading from "./ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeading
        eyebrow="Experience"
        title="Roles that shipped real change."
        subtitle="A quick timeline of impact across governance, transformation, and operational excellence."
      />
      <Timeline items={profile.experience} />
    </section>
  );
}
