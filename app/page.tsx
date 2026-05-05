import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import Gallery from "@/components/Gallery";
import Press from "@/components/Press";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Music />
        <Videos />
        <Gallery />
        <Press />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
