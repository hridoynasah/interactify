import React from 'react';
import FeatureHero from '../components/Features/FeatureHero';
import FeatureGrid from '../components/Features/FeatureGrid';

export default function Features() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <FeatureHero />
      <FeatureGrid />
    </div>
  );
}