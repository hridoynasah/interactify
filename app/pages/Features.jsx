import FeatureGrid from "../components/features/FeatureGrid";
import FeatureHero from "../components/features/FeatureHero";

export default function Features() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <FeatureHero />
      <FeatureGrid />
    </div>
  );
}
