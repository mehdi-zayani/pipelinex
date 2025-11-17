// echo.test.ts
// Unit tests for /echo endpoint of PipelineX backend
// ---------------------------------------------------

import request from "supertest";
import app from "../app";

describe("GET /echo", () => {
  /**
   * Test: GET /echo
   * Should return the query parameters sent by the client.
   * Useful for testing API connectivity and request formatting.
   */
  it("should return query params", async () => {
    const res = await request(app).get("/echo").query({ test: "123" });

    // Assert HTTP status code
    expect(res.statusCode).toBe(200);

    // Assert query object in response
    expect(res.body.query).toEqual({ test: "123" });
  });
});

describe("POST /echo", () => {
  /**
   * Test: POST /echo
   * Should return the request body sent by the client.
   * Useful for testing POST requests and JSON payload handling.
   */
  it("should return posted body", async () => {
    const res = await request(app).post("/echo").send({ foo: "bar" });

    // Assert HTTP status code
    expect(res.statusCode).toBe(200);

    // Assert body object in response
    expect(res.body.body).toEqual({ foo: "bar" });
  });
});
