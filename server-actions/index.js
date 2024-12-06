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
