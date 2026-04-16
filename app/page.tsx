import About from "./components/About";
import AuroraBackground from "./components/AuroraBackground";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <main className="relative">
        <Hero />
        <About />
        <Interests />
        <Career />
        <Products />
        <Footer />
      </main>
    </>
  );
}
