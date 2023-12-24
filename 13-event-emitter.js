const EventEmitter = require('events');

const customerEmitter = new EventEmitter();

customerEmitter.on('response', (name, id)=> {
    console.log(`data recieved user ${name} with id: ${id}`);
})
customerEmitter.on('response', ()=> {
    console.log(`some other data recieved `);
})

customerEmitter.emit('response', 'john', 34);