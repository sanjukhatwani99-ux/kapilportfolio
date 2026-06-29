import Hero from "../components/Hero";
import About from "../components/About";
import Photography from "../components/Photography";
import Videos from "../components/Videos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Photography />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
