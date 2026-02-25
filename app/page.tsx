import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import SmoothParallax from "./components/SmoothParallax";
import NewAndLatest from "./components/NewAndLatest";
import DiscountPromo from "./components/DiscountPromo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#efaa27] selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <SmoothParallax />
      <NewAndLatest />
      <DiscountPromo />
      <Testimonials />
      <Footer />
    </main>
  );
}
