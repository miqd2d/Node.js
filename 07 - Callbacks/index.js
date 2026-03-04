const fs = require("fs");

// Functions passed as arguments into another function

function detail (name , cbfunction){
    console.log(`Hello ${name}`);
    cbfunction();                           // Callback
}
function address(){
    console.log(getCurrentLocation());
}
function getCurrentLocation(){
    return `India`;
}

detail("Miqdad" , address);

// Make a callback for the readFile function of fs Module
function rfcb(err , data){
    if(err){
        console.log("Error occured : ", err.message);
        return;
    }
    console.log("Data : ", data);
}
fs.readFile("input.txt" , "utf8" , rfcb);