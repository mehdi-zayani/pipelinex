// app.ts
// Main Express app configuration for PipelineX backend
// -------------------------------------------

import cors from "cors";
import express from "express";
import echoRoute from "./routes/echo";
import healthRoute from "./routes/health";
import infoRoute from "./routes/info";
import versionRoute from "./routes/version";

const app = express();

// ---------------------------
// Middleware
// ---------------------------

// Enable JSON body parsing
app.use(express.json());

// Configure CORS
// For now, allow all origins (good for dev),
// but in production you should restrict to your frontend domain
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // replace "*" with frontend URL in prod
    methods: ["GET", "POST"], // limit to only used HTTP methods
  })
);

// ---------------------------
// Routes
// ---------------------------

// Health check endpoint
app.use("/health", healthRoute);

// Application version info endpoint
app.use("/version", versionRoute);

// Echo endpoint for testing API communication
app.use("/echo", echoRoute);

// General backend info endpoint
app.use("/info", infoRoute);

// ---------------------------
// Export the app for server and tests
// ---------------------------
export default app;
