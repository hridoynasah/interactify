import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
