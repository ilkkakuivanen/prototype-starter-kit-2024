import { test, describe, beforeEach, it } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import server from "../src/server.js";

describe("My Test Suite", () => {
  let value;

  beforeEach(() => {
    // Code to run before each test
    value = 0;
  });

  it("should start with a value of 0", () => {
    assert.strictEqual(value, 0);
  });

  it("should increment value by 1", () => {
    value += 1;
    assert.strictEqual(value, 1);
  });

  it("should reset value before each test", () => {
    assert.strictEqual(value, 0);
  });
});

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
