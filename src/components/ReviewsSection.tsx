// components/ReviewsSection.tsx

import { reviews } from "../lib/profile";
import Reviews from "./Reviews";
import SectionHeading from "./ui/SectionHeading";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionHeading
        eyebrow="Reviews"
        title="What people say when the work lands."
        subtitle=""
      />
      <Reviews items={reviews} />
    </section>
  );
}
