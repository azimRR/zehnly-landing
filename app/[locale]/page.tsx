import { HeroSection } from "@/components/HeroSection";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import { FeatureSection } from "@/components/FeatureSection";
import SpeakingPractice from "@/components/SpeakingPractice";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <Stats />
      {/* <HowItWorks /> */}
      {/* <FeatureSection /> */}
      <SpeakingPractice />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
