// echo.ts
// Echo endpoint for PipelineX backend
// -------------------------------------------

import { Router } from "express";

const router = Router();

/**
 * GET /echo
 * Returns the query parameters sent by the client.
 * Useful for testing API connectivity and request formatting.
 */
router.get("/", (req, res) => {
  res.json({ message: "Echo GET", query: req.query });
});

/**
 * POST /echo
 * Returns the request body sent by the client.
 * Useful for testing POST requests and JSON payload handling.
 */
router.post("/", (req, res) => {
  // Optional: validate req.body here for security if needed
  res.json({ message: "Echo POST", body: req.body });
});

export default router;
