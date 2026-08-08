import AboutSection from "@/components/home/AboutSection";
import CareSection from "@/components/home/CareSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import MaintenanceSection from "@/components/home/MaintenanceSection";
import ResultsSection from "@/components/home/ResultsSection";
import ServicesSection from "@/components/home/ServicesSection";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <ServicesSection />

      <CareSection />

      <ResultsSection />

      <MaintenanceSection />

      <AboutSection />

      <ContactSection />

      <Footer />

      <BackToTop />
    </main>
  );
}