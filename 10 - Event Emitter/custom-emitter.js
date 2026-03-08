// Using the EventEmitter class to create a custom emitter
const EventEmitter = require('events');

class myEventClass extends EventEmitter{
    constructor(){
        super();
        this.count = 0;
    }

    calling(){
        this.count++;
        this.emit("caller",this.count);     // Event triggered by class and not by the user.
    }                                       // Adds Abstraction to the event
    
}

const myEventObj = new myEventClass;
myEventObj.on("caller",(count)=>{
    console.log(`${count} times called...`);
});

myEventObj.calling();
myEventObj.calling();
myEventObj.calling();
myEventObj.calling();