import { test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import server from "../src/server.js";

test("GET /users should return 200 OK and users", async (t) => {
  const response = await request(server).get("/api/users");
  assert.strictEqual(response.status, 200);
  console.log(response.text);
});

test("POST /users should return 200 OK or 400 NOK", async (t) => {
  const newUser = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const response = await request(server)
    .post("/api/users")
    .set("Content-Type", "application/json")
    .send(newUser);

  assert.ok(
    response.status === 200 || response.status === 409,
    `Expected status to be 200 or 409 but got ${response.status}`
  );
  console.log(response.status, response.text);
});
