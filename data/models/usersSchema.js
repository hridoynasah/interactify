import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    purchased_courses: [{ type: Schema.Types.ObjectId, ref: "enrollments" }],
  },
  {
    timestamps: true,
  }
);

export const Users =
  mongoose.models.users ?? mongoose.model("users", userSchema);
