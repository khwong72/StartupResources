import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import BlogSection from "@/components/BlogSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <CaseStudiesSection />
      <BlogSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
