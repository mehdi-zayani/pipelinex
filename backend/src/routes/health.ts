// health.ts
// Health check endpoint for PipelineX backend
// -------------------------------------------

import { Router } from "express";

const router = Router();

/**
 * GET /health
 * Returns a simple status object to indicate the backend is running.
 * Useful for uptime monitoring or readiness probes.
 */
router.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

export default router;
