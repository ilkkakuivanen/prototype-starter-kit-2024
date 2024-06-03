import Database from "better-sqlite3";

const db = new Database("database.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )
`
).run();

function getAllUsersFromDB() {
  const stmt = db.prepare("SELECT * FROM users");
  return stmt.all();
}

function createUserInDB(name: string, email: string) {
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  const info = stmt.run(name, email);
  return { id: info.lastInsertRowid, name, email };
}

function checkIsEmailReserved(email: string) {
  const checkEmailStmt = db.prepare(
    "SELECT COUNT(*) AS count FROM users WHERE email = ?"
  );
  const result = checkEmailStmt.get(email) as { count: number };

  if (result.count === 0) {
    console.log("Email is not in use.");
    return false;
  } else {
    console.log(
      "Email already exists in the database. Insert operation skipped."
    );
    return true;
  }
}

function deleteAllUsersInDB() {
  const stmt = db.prepare("DELETE FROM users");
  stmt.run();
  console.log("All users deleted");
}

export {
  getAllUsersFromDB,
  createUserInDB,
  checkIsEmailReserved,
  deleteAllUsersInDB,
};
