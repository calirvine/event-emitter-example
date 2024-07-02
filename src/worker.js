import { emitEvent } from "./shared.js";
import { workerData, parentPort } from "node:worker_threads";

const data = {
  message: "Event emitted in worker thread!",
  timestamp: Date.now(),
};
console.log("Emitting event in worker thread...", data);
emitEvent(data);

parentPort.postMessage("Completed async thread");
