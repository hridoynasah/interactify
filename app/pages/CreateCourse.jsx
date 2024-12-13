"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCourse() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/create-course/new");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {!showForm && (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Transform Your Expertise Into Impact
          </h1>
          <p className="mb-6 text-gray-300">
            Join our platform and share your knowledge with students worldwide.
            Turn your expertise into impact and income.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Join as Instructor
          </button>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Share Your Knowledge</h3>
              <p className="text-gray-400">
                Impact thousands of students worldwide by sharing your
                expertise.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Earn Money</h3>
              <p className="text-gray-400">
                Generate passive income through course sales and student
                enrollments.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Flexible Teaching</h3>
              <p className="text-gray-400">
                Create and manage courses on your own schedule.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Growing Community</h3>
              <p className="text-gray-400">
                Join a supportive community of instructors and learners.
              </p>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md my-28">
          <h2 className="text-xl font-bold mb-4">Become an Instructor</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Full Name *</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email *</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Phone *</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Expertise</label>
              <select className="w-full p-2 rounded bg-gray-700 text-white">
                <option>Web Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Bio</label>
              <textarea
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Resume/CV</label>
              <input
                type="file"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
