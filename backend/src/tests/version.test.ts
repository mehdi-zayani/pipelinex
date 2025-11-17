import request from "supertest";
import app from "../app";

describe("GET /version", () => {
  it("should return version 0.1.0", async () => {
    const res = await request(app).get("/version");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version: "0.1.0" });
  });
});
