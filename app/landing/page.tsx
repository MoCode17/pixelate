import LandingHero from "@/components/Sections/landing/LandingLandingHero";
import LandingProblem from "@/components/Sections/landing/LandingProblem";
import LandingSolution from "@/components/Sections/landing/LandingSolution";
import LandingHowItWorks from "@/components/Sections/landing/LandingHowItWorks";
import LandingTestimonials from "@/components/Sections/landing/LandingTestimonials";
import LandingValue from "@/components/Sections/landing/LandingValue";
import LandingPackages from "@/components/Sections/landing/LandingPackages";
import LandingUrgency from "@/components/Sections/landing/LandingUrgency";
import LandingFinalCTA from "@/components/Sections/landing/LandingLandingFinalCTA";

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
