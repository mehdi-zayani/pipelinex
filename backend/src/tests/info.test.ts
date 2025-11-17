// info.test.ts
// Unit test for /info endpoint of PipelineX backend
// ---------------------------------------------------

import request from "supertest";
import app from "../app";

describe("GET /info", () => {
  /**
   * Test: GET /info
   * Should return general information about the backend application.
   * Useful for frontend integration or verifying backend deployment.
   */
  it("should return backend info", async () => {
    const res = await request(app).get("/info");

    // Assert HTTP status code
    expect(res.statusCode).toBe(200);

    // Assert the 'app' field in response
    expect(res.body.app).toBe("PipelineX Backend");

    // Optional: later, you can assert version and description as well
    // expect(res.body.version).toBe("0.1.0");
    // expect(res.body.description).toBe("Minimal backend ready for frontend integration");
  });
});
