"use client";
import { useAuth } from "@/context/AuthContext";
import { getUserPurchaseCourses } from "@/server-actions";
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

export default function MyCoursesShowcase() {
  const { authData } = useAuth();
  console.log("🚀 ~ MyCoursesShowcase ~ authData:", authData);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await getUserPurchaseCourses(authData?._id);
      setCourses(result?.course);
    };
    fetchCourses();
  }, [authData?._id]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-5">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course.course} />
        ))}
      </div>
    </>
  );
}
