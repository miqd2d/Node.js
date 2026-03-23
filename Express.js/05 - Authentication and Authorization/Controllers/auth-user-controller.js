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

module.exports = {registerUser, loginUser};