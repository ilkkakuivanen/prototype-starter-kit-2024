import { describe, beforeEach, it } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import server from "../src/server.js";
import logIn from "./test-login.js";

describe("/api tests suite", () => {
  let test = "now this";
  beforeEach(() => {
    test = " before each";
    console.log("oh yeah", test);
  });

  it("GET /api/users should return 200 OK and users", async () => {
    const token = await logIn();
    const response = await request(server)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);
    assert.strictEqual(response.status, 200);
  });

  it("POST /users should return 200 OK or 409 NOK", async (t) => {
    const token = await logIn();
    const newUser = {
      name: "John Doe",
      email: "john.doe@example.com",
    };

    const response = await request(server)
      .post("/api/users")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`)
      .send(newUser);

    assert.ok(
      response.status === 200 || response.status === 409,
      `Expected status to be 200 or 409 but got ${response.status}`
    );
    console.log(response.status, response.text);
  });
});
