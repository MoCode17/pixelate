import LandingHero from "@/components/sections/landing/LandingLandingHero";
import LandingProblem from "@/components/sections/landing/LandingProblem";
import LandingSolution from "@/components/sections/landing/LandingSolution";
import LandingHowItWorks from "@/components/sections/landing/LandingHowItWorks";
import LandingTestimonials from "@/components/sections/landing/LandingTestimonials";
import LandingValue from "@/components/sections/landing/LandingValue";
import LandingPackages from "@/components/sections/landing/LandingPackages";
import LandingUrgency from "@/components/sections/landing/LandingUrgency";
import LandingFinalCTA from "@/components/sections/landing/LandingLandingFinalCTA";

export default function Landing() {
  return (
    <>
      <LandingHero />
      <LandingProblem />
      <LandingSolution />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingValue />
      <LandingPackages />
      <LandingUrgency />
      <LandingFinalCTA />
    </>
  );
}
