import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "courses" },
    card_num: {
      type: String,
      required: true,
    },
    expires: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    card_holder_name: {
      type: String,
      required: true,
    },
    billing_address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Enrollments =
  mongoose.models.enrollments ??
  mongoose.model("enrollments", enrollmentSchema);
