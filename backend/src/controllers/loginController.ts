import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Replace with your actual secret key

export function login(req: Request, res: Response): void {
  const { username, password } = req.body;

  // Validate the user's credentials (this is just a placeholder)
  if (username === "user" && password === "pass") {
    const token = jwt.sign({ username: username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
