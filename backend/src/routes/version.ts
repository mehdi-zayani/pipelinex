// version.ts
// Version endpoint for PipelineX backend
// -------------------------------------------

import { Router } from "express";

const router = Router();

/**
 * GET /version
 * Returns the current backend version.
 * Useful for debugging, monitoring, or verifying deployment.
 */
router.get("/", (_req, res) => {
  res.json({ version: "0.1.0" });
});

export default router;
