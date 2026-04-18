import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import WhyUs from "./WhyUs";
import ContactSection from "./ContactSection";
import Certifications from "./Certifications";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Milestones from "./Milestones";
import Awards from "./Awards";

function Homepage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Milestones />
      <Certifications />
      <ContactSection />
      <Gallery />
      <Awards />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default Homepage;
