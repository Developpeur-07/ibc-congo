import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tarifs from "./components/Tarifs";
import Formation from "./components/Formation";
import Temoignages from "./components/Temoignages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Divider = () => <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />;

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Tarifs />
      <Divider />
      <Formation />
      <Divider />
      <Temoignages />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}