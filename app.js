// console.log("Hello world of Node js");

// const tuts = require('./tutorial');
// console.log(tuts.sum(5,1));
// console.log(tuts.PI);
// console.log (new tuts.SomeNodeObj());

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', ()=>{
    console.log('tutorial event has occured');
});