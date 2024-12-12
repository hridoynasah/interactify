import { StarIcon, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white/10 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm">
      <Image
        width={300}
        height={300}
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-400">{course.category}</span>
          <span className="text-sm text-gray-400">{course.language}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {course.title}
        </h3>
        <p className="text-gray-400 mb-4">by {course.instructor}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-white">{course.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="ml-1 text-gray-400">
              {course.students} students
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${course.price}</span>
          <div className="space-x-2">
            <Link
              href={course.link}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
