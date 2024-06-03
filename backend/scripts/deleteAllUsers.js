import Database from 'better-sqlite3';

/** Run from the /backend */

const db = new Database('database.db', { verbose: console.log });
console.log(db, 'db');

(function deleteAllUsers() {
  const stmt = db.prepare('DELETE FROM users');
  stmt.run();
  console.log('All users deleted');
})();
