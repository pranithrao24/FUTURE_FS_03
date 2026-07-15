import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import Reservation from "@/components/Reservation";
import ScrollTop from "@/components/ScrollTop";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#111111] text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </main>
  );
}