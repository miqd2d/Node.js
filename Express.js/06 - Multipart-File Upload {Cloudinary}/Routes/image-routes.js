const express = require("express");
const router = express.Router();
// Importing multiple middleware for authentication and authorization
const {userLoginCheck} = require("../../05 - Authentication and Authorization/Middleware/userLogin");
const {adminRoleCheck} = require("../../05 - Authentication and Authorization/Middleware/adminLogin");
// Mutler Middleware
const uploadMiddleware = require("../Middleware/uploadImage-middleware")
// Importing controllers
const {uploadImageController} = require("../Controllers/image-controller")


//Upload the image
router.post("/upload",userLoginCheck, adminRoleCheck, uploadMiddleware.single("image"), uploadImageController);


module.exports = router;