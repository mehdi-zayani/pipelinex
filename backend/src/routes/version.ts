import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.json({ version: "0.1.0" });
});

export default router;
