import { Request, Response } from "express";
import {
  getAllUsersFromDB,
  createUserInDB,
  checkIsEmailReserved,
  deleteAllUsersInDB,
} from "../models/userModel.js";
import { ERR_409, SUCCESS_200 } from "../config/responses.js";

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
    res.status(409).send(ERR_409.EMAIL_IN_USE);
  }
}

function deleteAllUsers(req: Request, res: Response) {
  deleteAllUsersInDB();
  res.status(200).send(SUCCESS_200.USER_DELETED);
}

export { getAllUsers, createUser, deleteAllUsers };
