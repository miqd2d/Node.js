const express = require("express");
const app = express();

// basic middleware to create time logs on every request
const log = (req,res,next)=>{
    const currentTime = new Date().toUTCString();
    console.log(`${currentTime} -> ${req.method} to ${req.url}`);
    next(); // very important as without this the request would be stuck in the middleware
}

// using app.use to envoke the middleware on every request-response action
app.use(log);


// Defining requests
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})
app.get("/about",(req,res)=>{
    res.send("ABOUT PAGE");
})
app.get("/downloads",(req,res)=>{
    res.send("DOWNLOADS PAGE");
})


const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`Server is listening on port ${PORT}`);
})