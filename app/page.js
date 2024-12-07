
import Hero from "./components/Hero";
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <Hero />
      <About />
      <Features />
      <Contact />
    </div>
  );
}
