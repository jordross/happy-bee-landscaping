import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import ForPropertyManagers from "@/components/ForPropertyManagers";
import HowItWorks from "@/components/HowItWorks";
import WhoWeAre from "@/components/WhoWeAre";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import MobileBottomBar from "@/components/MobileBottomBar";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen">
        <Hero />
        <div id="trust">
          <TrustStrip />
        </div>
        <Services />
        <ForPropertyManagers />
        <HowItWorks />
        <WhoWeAre />
        <Gallery />
        <Contact />
        <Footer />
      </main>
      <MobileBottomBar />
    </>
  );
}
