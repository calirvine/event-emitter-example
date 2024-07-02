# EventEmitter demo

Event emitter is not useless! But it's also not useful in the ways you might want to use it. This is a quick demo to show
how it _can_ be used, and how it doesn't work if you need events to work across processes (i.e if you have multiple pods
running the same app, or running tasks in async processes)

## Instructions

1. Clone the repo!
2. `npm i`
3. `npm run start` to start the main process
4. Send a request to `http://localhost:3000` to emit an event to the emitter on the main process. It works!
5. Run `npm run emit` in another terminal to see the event get emitted in another process. It doesn't get heard in the listener (sad)

`emitter.js` contains the emit from a separate process.
`shared.js` contains the event name and the `emit` function.
`listener.js` is our main process server.
