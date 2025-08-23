import express from "express";
import { Task } from "../Model/Task.js";

export const router = express.Router();

// get all task also filter task if status and priority are present
router.get("/", async (req, res) => {
  const { status, priority } = req.query;

  const filter = {
    ...(status ? { status } : {}),
    ...(priority ? { priority } : {}),
  };

  const tasks = await Task.find(filter);

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

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

router.get("/fetch/:taskId", async (req, res) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task) {
    return res
      .status(404)
      .send({ msg: `There is no task found with id: ${taskId}` });
  }

  res.json(task);
});
