import { HeroSection } from "../components/HeroSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { FeaturesOverview } from "../components/FeaturesOverview";
import { AudienceSection } from "../components/AudienceSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PricingPreview } from "../components/PricingPreview";
import { CtaSection } from "../components/CtaSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesOverview />
      <AudienceSection />
      <TestimonialsSection />
      <PricingPreview />
      <CtaSection />
    </>
  );
}
