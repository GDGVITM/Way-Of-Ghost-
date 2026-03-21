import http from "http";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { createSocketServer } from "./socket/index.js";

const server = http.createServer(app);
createSocketServer(server);

server.listen(env.PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${env.PORT}`);
});