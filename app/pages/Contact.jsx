import React from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark-deeper">
      <ContactHero />
      <ContactForm />
    </div>
  );
}