import { getCourses } from "@/server-actions";
import CourseCard from "../components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Explore Our Courses
          </h1>
          <div className="grid md:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
