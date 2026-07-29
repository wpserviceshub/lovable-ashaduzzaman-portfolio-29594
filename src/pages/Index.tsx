import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");

    if (!sectionId) {
      return;
    }

    const attemptScroll = (attempt = 0) => {
      const element = document.getElementById(sectionId);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }

      if (attempt < 4) {
        window.setTimeout(() => attemptScroll(attempt + 1), 100);
      }
    };

    attemptScroll();
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
