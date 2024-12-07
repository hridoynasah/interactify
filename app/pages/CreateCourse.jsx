import { ArrowLeft } from "lucide-react";

export default function CreateCourse() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-6">
        <button className="flex items-center text-blue-400 mb-6 hover:text-blue-300">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </button>

        <h2 className="text-2xl font-bold mb-6">Create New Course</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Course Thumbnail URL
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  name="thumbnailUrl"
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              >
                <option value="Development">Development</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Business">Business</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Photography">Photography</option>
                <option value="Music">Music</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Level</label>
              <select
                name="level"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="e.g., 40 hours"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Instructor First Name
              </label>
              <input
                type="text"
                name="instructorFirstName"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Instructor Last Name
              </label>
              <input
                type="text"
                name="instructorLastName"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Instructor Email
              </label>
              <input
                type="email"
                name="instructorEmail"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Promo Video URL
              </label>
              <input
                type="url"
                name="promoVideo"
                placeholder="https://..."
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
