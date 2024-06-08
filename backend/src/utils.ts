import db from "./database.js";
import { config } from "./config/config.js";

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

function consoleLogWelcomeMessage() {
  console.log(
    `\n
**************************************************

Hi! Welcome to Prototype Starter Kit 2024 edition!

**************************************************

Application is running with the following configurations:

  ${config.isProduction ? "httpsPort" : "httpPort (unsecure)"}: ${
      config.isProduction ? config.httpsPort : config.httpPort
    },
  isAuthOn (user auth): ${config.isAuthOn},
  isProduction: ${config.isProduction},
  dbUri: ${config.dbUri},
  secretKey: ${
    config.secretKey.length !== 0 ? "configured" : "is not configured properly"
  },
`
  );
}

export { deleteAllUsers, dropUsersTable, consoleLogWelcomeMessage };
