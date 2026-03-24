// Import the Model
const {User} = require("../Models/user");
const {generateHashedPassword, checkPassword} = require("../Utilities/hashedPassword");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res)=>{
    try{
        // Get the information
        const {username, password, email, role} = req.body;
        // First check if username does not already exist in the database
        const userExists = await User.findOne({ username });
        if (!userExists){
            // Generate the hashed password
            const hashedPassword = await generateHashedPassword(password);
    
            // Add the user in the db
            const newUser = await User.create({username : username, password : hashedPassword, email : email, role : role});
    
            if(newUser){
                res.status(200).send({
                    success : true,
                    message : "New user added in the database",
                })
            }else {
                res.status(400).send({
                    success : false,
                    message : "Error adding new user...",
                })
            }
            
        }else{
            res.status(400).send({
                success : false,
                message : "User already exists...",
            })
        }
    }catch(e){
        res.status(400).send({
                success : false,
                message : `User already exists...`,
            })
    }
}

const loginUser = async(req,res)=>{
    try{     
        // Get the information
        const {username, password} = req.body;
    
        // Check if the user exists
        const user = await User.findOne({username});

        if(!user){
            return res.status(400).json({
                success : false,
                message : "Invalid Credentials (User doesn't exists)"
            })
        }

        // If user exists check is the password is valid 
        const correctPassword = await checkPassword(password, user.password);

        if(!correctPassword){
            return res.status(400).json({
                success : false,
                message : "Invalid Credentials (password)"
            })
        }

        // Now generate a JWT token and send it back 
        const accessToken = jwt.sign({
            userID : user._id,
            userName : user.username,
            role : user.role,
        }, process.env.JWTSECRET , {
            expiresIn : "30m"
        })

        return res.status(201).json({
            success : true,
            message : "User logged in successfully...",
            accessToken
        })

    }
    catch(e){
        return res.status(500).json({
            message : "Something went wrong..."
        })
    }

}

const changePassword = async(req,res) =>{
    // Get the current user
    const user = req.UserInfo.userID;

    // Check if the user exists or not
    const userExists = await User.findById(user);

    if(!userExists){
        return res.status(400).json({
            success : false,
            message : "User does not exists..."
        })
    }

    // Check if the old password is correct
    const {oldPassword , newPassword} = req.body;

    const passwordMatch = await checkPassword(oldPassword, userExists.password);

    if(!passwordMatch){
        return res.status(401).json({
            success : false,
            message : "Invalid Password...",
        })
    }

    // Change the password
    const newHashedPassword = await generateHashedPassword(newPassword);

    userExists.password = newHashedPassword;
    userExists.save();

    return res.status(201).json({
        success : true,
        message : "Password changed successfully..."
    })

}

const getAllUsers = async(req,res)=>{
    // Getting the queries for pages and limits and any sort filter
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const sortBy = req.query.sortBy || 'role'
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1
    // Caluculating how much data to skip to get the appropriate data for that page
    const skip = (page-1) * limit;

    // Calcluate the total data
    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers/limit);

    // Creating a sort Object
    sortObj = {};
    sortObj[sortBy] = sortOrder;

    const data = await User.find().sort(sortObj).skip(skip).limit(limit);
    return res.status(200).json({
        success : true,
        message : {
            totalUsers : totalUsers,
            totalPages : totalPages,
            currentPage : page,
        },
        data : data
    })
}



module.exports = {registerUser, loginUser, changePassword, getAllUsers};