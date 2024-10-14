import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import ProceduresSection from "../procedures-section/ProceduresSection";
import ValuesSection from "../values-section/ValuesSection";
import ContactSection from "../contact-section/ContactSection";
import Footer from "../footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProceduresSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
export default LandingPage;
