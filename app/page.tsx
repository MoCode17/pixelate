import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import Portfolio from "@/components/Sections/Portfolio";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Testimonials from "@/components/Sections/Testimonials";
import HowWeWork from "@/components/Sections/HowWeWork";
import FinalCTA from "@/components/Sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
