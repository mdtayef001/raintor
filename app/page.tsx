import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header className="bg-[url(/hero.png)] bg-no-repeat bg-cover bg-center font-display">
        <Navbar />
        <Hero />
      </header>
      <main className="font-display"></main>
      <footer className="font-display">
        <Footer />
      </footer>
    </>
  );
}
