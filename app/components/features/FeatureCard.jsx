import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-dark to-dark-deeper p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-primary/10">
      <div className="text-primary text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
        <Icon className="transition-transform duration-300 hover:rotate-12" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}