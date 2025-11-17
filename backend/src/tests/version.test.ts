// version.test.ts
// Unit test for /version endpoint of PipelineX backend
// ---------------------------------------------------

import request from "supertest";
import app from "../app";

describe("GET /version", () => {
  /**
   * Test: GET /version
   * Should return a 200 status code and the current backend version.
   * Ensures the version endpoint works correctly for debugging or monitoring.
   */
  it("should return version 0.1.0", async () => {
    const res = await request(app).get("/version");

    // Assert HTTP status code
    expect(res.statusCode).toBe(200);

    // Assert response body
    expect(res.body).toEqual({ version: "0.1.0" });
  });
});
