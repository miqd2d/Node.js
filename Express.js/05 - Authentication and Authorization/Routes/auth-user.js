const express = require("express");
const authRouter = express.Router();

// Import the conrtoller
const {loginUser, registerUser, changePassword, getAllUsers} = require("../Controllers/auth-user-controller");

// Import the middleware for authentication to allow only the signed in users to change the password
const {userLoginCheck} = require("../Middleware/userLogin");

// Create routes
authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);
authRouter.post("/changePassword",userLoginCheck, changePassword);
authRouter.get("/allUsers",userLoginCheck, getAllUsers);


module.exports = {authRouter};
