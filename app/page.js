import Container from "@/components/layout/Container";
import Navbar1 from "@/components/layout/Navbar";
import { Hero1, Hero2, Hero3, Hero4 } from "@/components/sections/hero";

export default function Home() {
  return (
    <Container>
      <Navbar1 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </Container>
  );
}