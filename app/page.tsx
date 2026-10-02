import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import ForPropertyManagers from "@/components/ForPropertyManagers";
import Gallery from "@/components/Gallery";
import References from "@/components/References";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="min-h-screen">
        <Hero />
        <div id="trust">
          <TrustStrip />
        </div>
        <WhoWeServe />
        <Services />
        <HowItWorks />
        <WhyUs />
        <ForPropertyManagers />
        <Gallery />
        <References />
        <ServiceArea />
        <Contact />
        <Footer />
      </main>
      <MobileBottomBar />
    </>
  );
}
