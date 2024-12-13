import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 pt-28">
      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Page Header */}
        <header className="mb-6">
          <h2 className="text-3xl font-bold">Welcome to the Community Forum</h2>
          <p className="text-gray-400 mt-2">
            Engage with the community, share knowledge, and get your questions
            answered.
          </p>
        </header>

        {/* Forum Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Discussion Categories */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="hover:text-white">General Discussion</li>
                <li className="hover:text-white">Technical Help</li>
                <li className="hover:text-white">Announcements</li>
                <li className="hover:text-white">Off-topic</li>
              </ul>
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Discussions</h3>
              <ul className="space-y-6">
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-bold text-lg">
                    How to optimize React apps for performance?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Posted by <span className="text-blue-500">@tarek_zia</span>{" "}
                    - 2 hours ago
                  </p>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-bold text-lg">
                    What is the difference between Tailwind CSS and Bootstrap?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Posted by{" "}
                    <span className="text-blue-500">@bongo_bondhu</span> - 5
                    hours ago
                  </p>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-bold text-lg">
                    Tips for managing state in large-scale React applications
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Posted by{" "}
                    <span className="text-blue-500">@sheikh_hasina</span> - 1
                    day ago
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
