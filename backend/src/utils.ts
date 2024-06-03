import db from "./database.js";

function deleteAllUsers() {
  const stmt = db.prepare("DELETE FROM users");
  stmt.run();
  console.log("All users deleted");
}

function dropUsersTable() {
  const stmt = db.prepare("DROP TABLE IF EXISTS users");
  stmt.run();
  console.log("Users table dropped");
}

export { deleteAllUsers, dropUsersTable };
