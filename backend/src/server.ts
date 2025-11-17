// server.ts
// Entry point for PipelineX backend server
// -------------------------------------------

import app from "./app";

// Use the PORT from environment variables or fallback to 4000
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  // Log the port and environment for clarity
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});

// Optional: handle unhandled promise rejections or uncaught exceptions here for production readiness
