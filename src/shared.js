import { EventEmitter } from "node:events";

export const emitter = new EventEmitter();

export const EVENT_NAME = "shared-event-emit";

export function emitEvent(data) {
  emitter.emit(EVENT_NAME, data);
}
