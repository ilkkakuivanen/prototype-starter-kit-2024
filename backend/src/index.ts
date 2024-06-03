import server from "./server.js";
import { config } from "./config/config.js";

const PORT = config.httpPort || 3000;

// Hello!
const message: string = "Hi! Welcome to Prototype Starter Kit 2024 edition!";
console.log(message);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Testing database
// (function testDb() {
//   const emailToCheck = "john.doe@example.com";
//   const nameToInsert = "John";

//   // Check if the email already exists
//   const checkEmail = db.prepare(
//     "SELECT COUNT(*) AS count FROM users WHERE email = ?"
//   );
//   const result = checkEmail.get(emailToCheck) as { count: number };

//   if (result.count === 0) {
//     // Insert if email does not exist
//     const insert = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
//     const info = insert.run(nameToInsert, emailToCheck);
//     console.log(`Inserted user with ID: ${info.lastInsertRowid}`);
//   } else {
//     console.log(
//       "Email already exists in the database. Insert operation skipped."
//     );
//   }

//   // Query
//   const select = db.prepare("SELECT * FROM users");
//   const users = select.all();
//   console.log("Users:", users);
// })();