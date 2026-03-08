// How to create an express server

const express = require('express');

const app = express();  // This creates an express app that you can use to start the backend server

app.get("/" , (req,res)=>{
    res.send("Hello World!");
});

const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`Server running on PORT ${PORT}`);
})



