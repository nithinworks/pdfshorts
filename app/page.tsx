import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/landing/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works-section";

import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import UserSection from "@/components/home/use-cases-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <UserSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </div>
  );
}
