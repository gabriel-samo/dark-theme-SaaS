import { Hero } from "@/components/Hero";
import { FAQs } from "@/components/FAQs";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { LogoTicker } from "@/components/LogoTicker";
import { CallToAction } from "@/components/CallToAction";
import { ProductShowcase } from "@/components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
