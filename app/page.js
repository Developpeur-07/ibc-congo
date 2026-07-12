import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tarifs from "./components/Tarifs";
import Formation from "./components/Formation";
import APropos from "./components/APropos";
import Temoignages from "./components/Temoignages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Divider = () => <div className="divider" />;

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
      <APropos />
      <Divider />
      <Temoignages />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}