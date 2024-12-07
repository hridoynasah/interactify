import AboutCards from "../components/about/AboutCards";
import AboutHero from "../components/about/AboutHero";
import Stats from "../components/about/Stats";

export default function About() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <AboutHero />
      <Stats />
      <AboutCards />
    </div>
  );
}
