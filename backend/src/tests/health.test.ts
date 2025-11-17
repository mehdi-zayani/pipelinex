// health.test.ts
// Unit test for /health endpoint of PipelineX backend
// ---------------------------------------------------

import request from "supertest";
import app from "../app";

describe("GET /health", () => {
  /**
   * Test: GET /health
   * Should return a 200 status code and a JSON object { status: "ok" }
   * This ensures the backend is running and responding correctly.
   */
  it("should return status ok", async () => {
    const res = await request(app).get("/health");

    // Assert HTTP status code
    expect(res.statusCode).toBe(200);

    // Assert response body
    expect(res.body).toEqual({ status: "ok" });
  });
});
