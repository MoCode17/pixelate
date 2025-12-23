import HeroServicesWrapper from "@/components/Sections/HeroServicesWrapper";
import Portfolio from "@/components/Sections/Portfolio";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Testimonials from "@/components/Sections/Testimonials";
import HowWeWork from "@/components/Sections/HowWeWork";
import FinalCTA from "@/components/Sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroServicesWrapper />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
