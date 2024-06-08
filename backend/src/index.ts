import server from "./server.js";
import { config } from "./config/config.js";
import http from "http";
import https from "https";
import fs from "fs";
import { consoleLogWelcomeMessage } from "./utils.js";

const PORT = config.isProduction ? config.httpsPort : config.httpPort;

consoleLogWelcomeMessage()

let serverInstance: http.Server | https.Server;

if (config.isProduction) {
  // Load SSL/TLS certificate
  const privateKey = fs.readFileSync("/path/to/your/private-key.pem", "utf8");
  const certificate = fs.readFileSync("/path/to/your/certificate.pem", "utf8");
  const ca = fs.readFileSync("/path/to/your/ca.pem", "utf8");

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
  };

  // Create HTTPS server
  serverInstance = https.createServer(credentials, server);

  serverInstance.listen(PORT, () => {
    console.log(`HTTPS Server is running on port ${PORT}`);
  });
} else {
  // Create HTTP server
  serverInstance = http.createServer(server);

  serverInstance.listen(PORT, () => {
    console.log(`HTTP Server is running on port ${PORT}`);
  });
}
