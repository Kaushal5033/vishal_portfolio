import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Stats from "@/components/portfolio/Stats";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Gallery from "@/components/portfolio/Gallery";
import Testimonials from "@/components/portfolio/Testimonials";
import Motivation from "@/components/portfolio/Motivation";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div id="top" className="grain">
      <Nav />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Gallery />
      <Testimonials />
      <Motivation />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
