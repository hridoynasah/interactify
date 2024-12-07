import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutCards from '../components/About/AboutCards';
import Stats from '../components/About/Stats';

export default function About() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <AboutHero />
      <Stats />
      <AboutCards />
    </div>
  );
}