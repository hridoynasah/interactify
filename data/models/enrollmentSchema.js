import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "courses" },
    paidAmount: {
      type: Number,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expiry: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
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
