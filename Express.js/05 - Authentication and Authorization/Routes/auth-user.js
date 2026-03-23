const express = require("express");
const authRouter = express.Router();

// Import the conrtoller
const {loginUser, registerUser} = require("../Controllers/auth-user-controller");

// Create routes
authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);


module.exports = {authRouter};
