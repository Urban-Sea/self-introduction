import About from "./components/About";
import Activities from "./components/Activities";
import AuroraBackground from "./components/AuroraBackground";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Products from "./components/Products";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <main className="relative">
        <Hero />
        <About />
        <Interests />
        <Experience />
        <Activities />
        <Skills />
        <Products />
        <Footer />
      </main>
    </>
  );
}
