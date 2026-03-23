const express = require("express");
const router = express.Router();

// Adding the middleware to check if the user is logged in or not
const {userLoginCheck} = require("../Middleware/userLogin");

router.get("/home", userLoginCheck, (req,res)=>{
    res.status(200).json({
        message : "Welcome to the home page...",
        User : req.UserInfo
    })
})

module.exports = router;