import React from 'react';

export default function Stats() {
  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "1000+", label: "Courses" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}