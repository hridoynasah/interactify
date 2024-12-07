import React from 'react';

export default function EducationCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-dark p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="text-primary text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}