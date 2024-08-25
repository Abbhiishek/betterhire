import FrequentlyAskedQuestionSection from "@/components/LandingPage/FrequentlyAskedQuestionSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
import ToolSection from "@/components/LandingPage/ToolSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedVideoSection /> */}
      {/* <FeatureSection /> */}
      <ToolSection />
      {/* <PricingSection /> */}
      {/* <TrustedSection /> */}
      <TestimonialSection />
      {/* <CTA /> */}
      <FrequentlyAskedQuestionSection />
    </>
  );
}
