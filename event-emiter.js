const EventEmitter = require("events");  // Use "events" instead of "node:events"

const myEmitter = new EventEmitter();

// Listener
myEmitter.on('birthday', () => {
    console.log(`HAPPY BIRTHDAY TO YOU`);
});

myEmitter.on('birthday', (gift) => {
    console.log(`I will send a ${gift}`);
});

myEmitter.emit('birthday', 'bike');
