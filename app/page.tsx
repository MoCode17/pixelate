import HeroServicesWrapper from "@/components/sections/HeroServicesWrapper";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import HowWeWork from "@/components/sections/HowWeWork";
import FinalCTA from "@/components/sections/FinalCTA";

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
