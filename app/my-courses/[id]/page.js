import CourseCard from "@/app/components/CourseCard";
import { getUserPurchaseCourses } from "@/server-actions";

export default async function MyCoursesPage({ params }) {
  const { id } = params;
  const courses = await getUserPurchaseCourses(id);

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-28">
      <h1 className="text-3xl font-bold mb-5 text-white">My Courses</h1>
      {courses && courses.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course.course} purchased />
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-400">
          You haven&apos;t purchased any courses yet.
        </p>
      )}
    </section>
  );
}
