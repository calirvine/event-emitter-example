import http from "node:http";
import { emitter, EVENT_NAME, emitEvent } from "./shared.js";

console.log(`Registering listener for "${EVENT_NAME}" event...`);

emitter.on(EVENT_NAME, (data) => {
  console.log(`**** Received "${EVENT_NAME}" event with data: `, data);
});

const server = http.createServer((_, res) => {
  console.log("Emitting event in process");
  res.statusCode = 202;
  res.setHeader("Content-Type", "text/plain");
  res.write("Accepted");
  emitEvent({ message: "Event emitted in process", timestamp: Date.now() });
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
