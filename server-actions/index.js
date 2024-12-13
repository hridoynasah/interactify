"use server";
import { Courses } from "@/data/models/coursesSchema";
import { Enrollments } from "@/data/models/enrollmentSchema";
import { Users } from "@/data/models/usersSchema";
import connectMongodb from "@/services/ConnectMongoose";

export const registerUser = async (data) => {
  try {
    await connectMongodb();
    const existingUser = await Users.findOne({ email: data.email });

    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    const newUser = await Users.create(data);
    return { success: true, user: JSON.parse(JSON.stringify(newUser)) };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message || "An error occurred." };
  }
};

export const userLogin = async (data) => {
  try {
    await connectMongodb();
    const existingUser = await Users.findOne({ email: data.email });

    if (!existingUser) {
      return {
        success: false,
        error: "No account found with this email. Please register first.",
      };
    }

    const isPasswordValid = existingUser.password === data.password;

    if (!isPasswordValid) {
      return {
        success: false,
        error: "Invalid password. Please try again.",
      };
    }

    return {
      success: true,
      user: JSON.parse(JSON.stringify(existingUser)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred. Please try again.",
    };
  }
};

export const getCourses = async () => {
  try {
    await connectMongodb();
    const result = await Courses.find({}).lean();
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

export const getCourseById = async (id) => {
  try {
    await connectMongodb();
    const result = await Courses.findById(id);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

export const makePayment = async (data, userId) => {
  try {
    await connectMongodb();
    const result = await Enrollments.create(data);

    if (result) {
      await Users.findByIdAndUpdate(userId, {
        $push: { purchased_courses: result._id },
      });

      return { success: true, data: JSON.parse(JSON.stringify(result)) };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUserPurchaseCourses = async (userId) => {
  try {
    await connectMongodb();
    const result = await Users.findById(userId).populate({
      path: "purchased_courses",
      model: "enrollments",
      populate: {
        path: "course",
        model: "courses",
      },
    });

    return JSON.parse(JSON.stringify(result?.purchased_courses));
  } catch (error) {
    console.error("Error fetching user purchase courses:", error);
    return null;
  }
};
