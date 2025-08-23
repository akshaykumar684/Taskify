import express from "express";
import { Task } from "../Model/Task.js";
import { validateTaskUpdateField } from "../utils/Task/taskValidation.js";
import { authMiddleWare as auth } from "../middlewares/index.js";
export const router = express.Router();

router.get("/:taskId", async (req, res) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task) {
    return res
      .status(404)
      .send({ msg: `There is no task found with id: ${taskId}` });
  }

  res.json(task);
});

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

router.post("/create", auth, async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  const loggedInUserId = req.loggedInUser.id;
  const task = new Task({
    title,
    description,
    dueDate,
    priority,
    status,
    createdBy: loggedInUserId,
  });

  const data = await task.save();

  res.json({
    msg: "task created successfully",
    data,
  });
});

router.put("/:taskId", auth, async (req, res) => {
  if (!validateTaskUpdateField(req.body)) {
    return res.status(400).send({
      message:
        "Invalid Input, only title,description,dueDate,priority or status is allowed",
    });
  }

  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task) {
    return res.status(404).send({
      msg: `There is no task found with is: ${taskId}`,
    });
  }

  Object.entries(req.body).forEach(([key, value]) => (task[key] = value));

  const updatedTask = await task.save();

  res.status(200).json({
    success: true,
    data: updatedTask,
  });
});

router.delete("/:taskId", auth, async (req, res) => {
  const { taskId } = req.params;

  const deletedTask = await Task.findByIdAndDelete(taskId);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask,
  });
});
