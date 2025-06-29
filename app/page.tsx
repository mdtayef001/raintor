import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header className="bg-[url(/hero.png)]">
        <Navbar />
        <Hero />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
