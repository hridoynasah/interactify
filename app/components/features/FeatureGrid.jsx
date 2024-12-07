import React from 'react';
import { FaVideo, FaUserGraduate, FaChalkboardTeacher, FaBookReader, FaLaptopCode, FaBrain, FaUsers, FaCertificate } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

export default function FeatureGrid() {
  const features = [
    {
      icon: FaVideo,
      title: "Live Online Classes",
      description: "Attend interactive live sessions with expert instructors in real-time."
    },
    {
      icon: FaUserGraduate,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with flexible course schedules and deadlines."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of teaching experience."
    },
    {
      icon: FaBookReader,
      title: "Rich Course Content",
      description: "Access comprehensive study materials, videos, and practice tests."
    },
    {
      icon: FaLaptopCode,
      title: "Hands-on Projects",
      description: "Apply your knowledge through practical projects and assignments."
    },
    {
      icon: FaBrain,
      title: "Adaptive Learning",
      description: "Personalized learning paths based on your progress and goals."
    },
    {
      icon: FaUsers,
      title: "Study Groups",
      description: "Collaborate with peers in virtual study groups and discussions."
    },
    {
      icon: FaCertificate,
      title: "Certifications",
      description: "Earn industry-recognized certificates upon course completion."
    }
  ];

  return (
    <div className="bg-dark-deeper py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}