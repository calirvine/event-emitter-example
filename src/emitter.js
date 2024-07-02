import { emitEvent, EVENT_NAME } from "./shared.js";

const data = {
  message: "Event emitted out of process!",
  timestamp: Date.now(),
};
console.log(`Emitting "${EVENT_NAME}" event out of process...`, data);
emitEvent(data);
