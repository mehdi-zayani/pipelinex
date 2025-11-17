// info.ts
// General backend info endpoint for PipelineX
// -------------------------------------------

import { Router } from "express";

const router = Router();

/**
 * GET /info
 * Returns general information about the backend application.
 * Useful for frontend integration, monitoring, or documentation purposes.
 */
router.get("/", (_req, res) => {
  res.json({
    app: "PipelineX Backend",
    version: "0.1.0",
    description: "Minimal backend ready for frontend integration",
  });
});

export default router;
