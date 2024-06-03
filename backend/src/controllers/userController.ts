import { Request, Response } from "express";
import {
  getAllUsersFromDB,
  createUserInDB,
  checkIsEmailReserved,
  deleteAllUsersInDB
} from "../models/userModel.js";

function getAllUsers(req: Request, res: Response) {
  const users = getAllUsersFromDB();
  res.json(users);
}

function createUser(req: Request, res: Response) {
  const { name, email } = req.body;

  if (!checkIsEmailReserved(email)) {
    const user = createUserInDB(name, email);
    res.json(user);
  } else {
    res.status(400).send("User email already in use!");
  }
}

function deleteAllUsers(req: Request, res: Response) {
  deleteAllUsersInDB();
  res.status(200).send("Users deleted!");
}

export { getAllUsers, createUser, deleteAllUsers };
