"use server";
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
