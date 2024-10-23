import request from "supertest";
import server from "../src/server.js";

async function logIn() {
  const loginData = {
    username: "user",
    password: "pass",
  };

  const res = await request(server)
    .post("/api/login")
    .send(loginData)
    .set("Content-Type", "application/json");

  const token = res.body.token;

  if (!token) {
    throw new Error("Token not found in response");
  }

  return token;
}

export default logIn;
