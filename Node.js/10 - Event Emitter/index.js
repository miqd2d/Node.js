// Event Emitter is the core class of JavaScript

// emit is used to trigger and event.
// on is used to listen for the trigger and has a callback function that is executed.
const eventEmitter = require("events");
const myEventEmitter = new eventEmitter;

let answer = 10;
let target = 10;

// Create listeners for the emitter -> Need to be defined before the .emit calls 
myEventEmitter.on("Success", (name)=>{
    console.log("Target hit!")
    console.log(`Well done ${name}`);
})
myEventEmitter.on("Failure", ()=>{
    console.log("Target missed!")
})

// If the answer matches the target a success event is created 
if(answer == target){
    myEventEmitter.emit("Success", "Miqdad Ali");
}
// If the answer does not match the target a failure event is created
else {
    myEventEmitter.emit("Failure");
}



