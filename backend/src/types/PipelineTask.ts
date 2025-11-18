// src/types/PipelineTask.ts
// Defines the structure for a Pipeline Task used in the dashboard

export interface PipelineTask {
  id: string; // unique identifier for the task
  name: string; // human-readable name of the task
  status: "pending" | "running" | "success" | "failed"; // current state
  triggeredBy: string; // e.g., "manual", "push", "schedule"
  createdAt: string; // ISO date string
  duration?: number; // optional execution time in milliseconds
}
