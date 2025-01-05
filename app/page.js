import Container from "@/components/layout/Container";
import Navbar1 from "@/components/layout/Navbar";
import Features1 from "@/components/sections/features/Features1";
import Features2 from "@/components/sections/features/Features2";
import Features3 from "@/components/sections/features/Features3";
import Features4 from "@/components/sections/features/Features4";
import { Hero1, Hero2, Hero3, Hero4 } from "@/components/sections/hero";
import Testimonial1 from "@/components/sections/testimonials/Testimonials";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";

export default function Home() {
  return (
    <Container>
      <Navbar1 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Testimonial1 />
      <Testimonials2 />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
    </Container>
  );
}