import Container from "@/components/layout/Container";
import Navbar1 from "@/components/layout/Navbar";
import Login from "@/components/sections/auth/login/Login";
import Register from "@/components/sections/auth/register/Register";
import Contact1 from "@/components/sections/contact/Contact1";
import Faq1 from "@/components/sections/faq/Faq1";
import Faq2 from "@/components/sections/faq/Faq2";
import Features1 from "@/components/sections/features/Features1";
import Features2 from "@/components/sections/features/Features2";
import Features3 from "@/components/sections/features/Features3";
import Features4 from "@/components/sections/features/Features4";
import { Hero1, Hero2, Hero3, Hero4 } from "@/components/sections/hero";
import Pricing1 from "@/components/sections/pricing/Pricing1";
import Testimonial1 from "@/components/sections/testimonials/Testimonials";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import Contact2 from "@/components/sections/contact/Contact2";
import Blog1 from "@/components/sections/blog/Blog1";
import Careers1 from "@/components/sections/careers/Careers1";
import Careers2 from "@/components/sections/careers/Careers2";
import CTA1 from "@/components/sections/cta/Cta1";
import Footer1 from "@/components/sections/footer/Footer1";
import Footer2 from "@/components/sections/footer/Footer2";

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
      <Pricing1 />
      <Register />
      <Login />
      <Faq1 />
      <Faq2 />
      <Contact1 />
      <Contact2 />
      <Blog1 />
      <Careers1 />
      <Careers2 />
      <CTA1 />
      <Footer1 />
      <Footer2 />
    </Container>
  );
}