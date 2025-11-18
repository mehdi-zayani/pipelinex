// tests/tasks.test.ts
// Integration tests for PipelineTask routes

import request from "supertest";
import app from "../../src/app";
import { resetTasks } from "../../src/services/tasksService";

beforeEach(() => {
  resetTasks();
});

describe("PipelineTask API", () => {
  it("GET /tasks should return empty array initially", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("POST /tasks should create a new task", async () => {
    const res = await request(app).post("/tasks").send({ name: "Build", triggeredBy: "manual" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Build");
    expect(res.body.status).toBe("pending");
  });

  it("DELETE /tasks/:id should remove a task", async () => {
    const postRes = await request(app).post("/tasks").send({ name: "Test", triggeredBy: "push" });
    const id = postRes.body.id;

    const deleteRes = await request(app).delete(`/tasks/${id}`);
    expect(deleteRes.statusCode).toBe(204);

    const getRes = await request(app).get("/tasks");
    expect(getRes.body).toEqual([]);
  });

  it("DELETE /tasks/:id should return 404 for non-existent task", async () => {
    const res = await request(app).delete("/tasks/invalid-id");
    expect(res.statusCode).toBe(404);
  });
});
