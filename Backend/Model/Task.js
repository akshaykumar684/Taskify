import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Task = model("Task", taskSchema);
