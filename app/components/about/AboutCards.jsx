import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaBook, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import EducationCard from './EducationCard';

export default function AboutCards() {
  const educationFeatures = [
    {
      icon: FaGraduationCap,
      title: "Expert-Led Education",
      description: "Learn from industry professionals and experienced educators who bring real-world knowledge to your learning journey."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Interactive Learning",
      description: "Engage with dynamic content and participate in hands-on learning experiences that make education come alive."
    },
    {
      icon: FaUsers,
      title: "Collaborative Community",
      description: "Join a vibrant community of learners, share insights, and grow together through peer-to-peer learning."
    },
    {
      icon: FaBook,
      title: "Comprehensive Curriculum",
      description: "Access a wide range of courses designed to meet diverse learning needs and career goals."
    },
    {
      icon: FaLaptopCode,
      title: "Modern Learning Tools",
      description: "Utilize cutting-edge educational technology and resources to enhance your learning experience."
    },
    {
      icon: FaCertificate,
      title: "Recognized Certification",
      description: "Earn valuable certificates that validate your skills and knowledge in the industry."
    }
  ];

  return (
    <div className="bg-dark-deeper py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationFeatures.map((feature, index) => (
            <EducationCard
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