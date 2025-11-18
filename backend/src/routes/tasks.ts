// src/routes/tasks.ts
// CRUD routes for PipelineTask management

import { Router } from "express";
import { createTask, deleteTask, getTasks } from "../services/tasksService";

const router = Router();

/**
 * GET /tasks
 * Returns all tasks
 */
router.get("/", (_req, res) => {
  res.json(getTasks());
});

/**
 * POST /tasks
 * Create a new task
 * Body: { name: string, triggeredBy: string }
 */
router.post("/", (req, res) => {
  const { name, triggeredBy } = req.body;
  if (!name || !triggeredBy) {
    return res.status(400).json({ error: "Missing name or triggeredBy" });
  }

  const task = createTask(name, triggeredBy);
  res.status(201).json(task);
});

/**
 * DELETE /tasks/:id
 * Delete a task by its ID
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const success = deleteTask(id);
  if (!success) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
});

export default router;
