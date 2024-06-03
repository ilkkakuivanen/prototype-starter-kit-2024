import Database from "better-sqlite3";

const db = new Database("./database.db", { verbose: console.log });

/**
 * Initialise the database
 */
db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

console.log("Database setup complete");

export default db;
