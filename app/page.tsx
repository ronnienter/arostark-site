import FAQ from "@/components/faq";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
// import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Testimonial /> */}
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}