// src/services/tasksService.ts
// In-memory service for managing PipelineTask data

import { v4 as uuidv4 } from "uuid";

import { PipelineTask } from "../types/PipelineTask";

let tasks: PipelineTask[] = [];

/**
 * Returns all tasks in memory
 */
export const getTasks = (): PipelineTask[] => tasks;

/**
 * Creates a new task and adds it to memory
 */
export const createTask = (name: string, triggeredBy: string): PipelineTask => {
  const task: PipelineTask = {
    id: uuidv4(),
    name,
    status: "pending",
    triggeredBy,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
};

/**
 * Deletes a task by id
 */
export const deleteTask = (id: string): boolean => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

/**
 * Optional: reset all tasks (for testing)
 */
export const resetTasks = (): void => {
  tasks = [];
};
