const adminRoleCheck = (req,res,next) =>{
    // Get the role from the req.UserInfo 
    const {role} = req.UserInfo;
    if(role != "admin"){
        return res.status(400).json({
            message : "Unauthorized access..."
        })
    }
    next();
}

module.exports = {adminRoleCheck};