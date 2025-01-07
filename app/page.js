import Container from "@/components/layout/Container";
import Navbar1 from "@/components/layout/Navbar";
import { Hero1, Hero2, Hero3, Hero4 } from "@/components/sections/hero";
import { Features1, Features2, Features3, Features4, Features5, FeaturesCarousel } from "@/components/sections/features";
import { Cards1, Cards2, CardsWithSidebar1, CardsWithSidebar2 } from "@/components/sections/cards";
import { Categories } from "@/components/sections/categories";
import { Testimonials1, Testimonials2, Testimonials3 } from "@/components/sections/testimonials";
import { Login, Register } from "@/components/sections/auth";
import { Faq1, Faq2 } from "@/components/sections/faq";
import { Contact1, Contact2 } from "@/components/sections/contact";
import { Careers1, Careers2 } from "@/components/sections/careers";
import { CTA1 } from "@/components/sections/cta";
import { Pricing1, Pricing2 } from "@/components/sections/pricing";
import { Blog1 } from "@/components/sections/blog";
import { ArticleWithSidebar } from "@/components/sections/content";
import { Team1, Team2, Team3 } from "@/components/sections/team";
import { Footer1, Footer2 } from "@/components/sections/footer";

export default function Home() {
  return (
    <Container>
      <Navbar1 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Testimonials1 />
      <Testimonials2 />
      <Testimonials3 />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Register />
      <Login />
      <Faq1 />
      <Faq2 />
      <Contact1 /> 
      <Contact2 />
      <Careers1 />
      <Careers2 />
      <CTA1 />
      <Pricing1 />
      <Pricing2 />
      <Blog1 />
      <ArticleWithSidebar />
      <FeaturesCarousel />
      <Features5 />
      <Cards1 />
      <Cards2 />
      <CardsWithSidebar1 />
      <CardsWithSidebar2 />
      <Categories />
      <Team1 />
      <Team2 />
      <Team3 />
      <Footer1 />
      <Footer2 />
    </Container>
  );
}