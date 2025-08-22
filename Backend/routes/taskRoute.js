import express from "express";
import { Task } from "../Model/Task.js";

export const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description, dueDate, priority, status, createdBy } = req.body;

  const task = new Task({
    title,
    description,
    dueDate,
    priority,
    status,
    createdBy,
  });

  const data = await task.save();

  res.json({
    msg: "task created successfully",
    data,
  });
});

// export default router;
