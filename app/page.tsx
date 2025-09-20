import Nav from "@/components/UI/Nav";
import Hero from "@/components/Sections/Hero";
import Problem from "@/components/Sections/Problem";
import Solution from "@/components/Sections/Solution";
import HowItWorks from "@/components/Sections/HowItWorks";
import Testimonials from "@/components/Sections/Testimonials";
import Value from "@/components/Sections/Value";
import Packages from "@/components/Sections/Packages";
import Urgency from "@/components/Sections/Urgency";
import FinalCTA from "@/components/Sections/FinalCTA";
import Footer from "@/components/UI/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <Value />
      <Packages />
      <Urgency />
      <FinalCTA />
      <Footer />
    </div>
  );
}
