const jwt = require("jsonwebtoken");

const userLoginCheck = (req,res,next)=>{
    const bearerToken = req.headers["authorization"];
    
    // If no token is generated that means the user is not logged in 
    if(!bearerToken){
        return res.status(400).json({
            message : "Log in to continue..."
        })
    }

    // Now validate the token to check if it's valid or not
    const token = bearerToken && bearerToken.split(" ")[1];

    try{
        const validToken = jwt.verify(token, process.env.JWTSECRET);
        req.UserInfo = {
            userID : validToken.userID,
            username : validToken.userName,
            role : validToken.role,
        }
        next();
    }
    catch(err){
        return res.status(404).json({
            message : "Token expired... Please login again to continue..."
        })
    }
}

module.exports = {userLoginCheck};