import cors from "cors";
import express from "express";
import healthRoutes from "./routes/health";
import versionRoutes from "./routes/version";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/version", versionRoutes);

export default app;
