import http from "node:http";
import { emitter, EVENT_NAME, emitEvent } from "./shared.js";
import { Worker } from "node:worker_threads";

console.log(`Registering listener for "${EVENT_NAME}" event...`);

emitter.on(EVENT_NAME, (data) => {
  console.log(`**** Received "${EVENT_NAME}" event with data: `, data);
});

const server = http.createServer((req, res) => {
  if (req.url.includes("spawn-worker")) {
    console.log("Spawning worker thread...");
    const worker = new Worker("./src/worker.js");
    worker.on("message", (msg) => {
      console.log("Worker thread message: ", msg);
    });
    worker.on("exit", (code) => {
      console.log("Worker thread exited with code: ", code);
    });
  } else {
    console.log("Emitting event in main process");
    emitEvent({ message: "Event emitted in process", timestamp: Date.now() });
  }
  res.statusCode = 202;
  res.setHeader("Content-Type", "text/plain");
  res.write("Accepted");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
