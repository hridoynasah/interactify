import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 pt-28">
      {/* Dashboard Content */}
      <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Dashboard Cards */}
        <div className="col-span-12 grid grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow text-white flex items-center">
            <div className="bg-purple-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Create Course</h3>
              <p className="text-sm text-gray-400">
                Design and publish your own course
              </p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow text-white flex items-center">
            <div className="bg-purple-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Create Quiz</h3>
              <p className="text-sm text-gray-400">
                Create engaging quizzes for your students
              </p>
            </div>
          </div>
        </div>

        {/* Instruction Cards */}
        <div className="col-span-6 bg-gray-800 p-6 rounded-lg shadow text-white">
          <h3 className="text-lg font-semibold mb-4">How to Create a Course</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Plan your course content and structure</li>
            <li>Prepare high-quality video materials</li>
            <li>Create engaging assignments</li>
            <li>Set up course pricing</li>
            <li>Submit for review</li>
          </ul>
        </div>
        <div className="col-span-6 bg-gray-800 p-6 rounded-lg shadow text-white">
          <h3 className="text-lg font-semibold mb-4">How to Create a Quiz</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Choose your quiz category</li>
            <li>Add multiple-choice questions</li>
            <li>Set correct answers</li>
            <li>Define time limits</li>
            <li>Preview and publish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
