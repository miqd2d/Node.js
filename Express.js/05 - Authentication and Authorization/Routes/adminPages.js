const express = require("express");
const router = express.Router();

// Importing authentication middlewares
const {userLoginCheck} = require("../Middleware/userLogin");
const {adminRoleCheck} = require("../Middleware/adminLogin")

router.get("/home", userLoginCheck, adminRoleCheck, (req,res)=>{
    return res.status(200).json({
        message : "Welcome to Admin Home page..."
    })
})

module.exports = router;