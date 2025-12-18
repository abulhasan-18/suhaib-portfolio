// app/page.tsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CredentialsSection from "../components/CredentialsSection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CareerJourneySection from "../components/CareerJourneySection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      <AboutSection />
      <CareerJourneySection />
      <CredentialsSection />
      <ReviewsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
