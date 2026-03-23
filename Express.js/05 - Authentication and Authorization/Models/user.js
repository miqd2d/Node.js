const {Schema, default: mongoose} = require("mongoose");

// Create a new schema
const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        maxLength : [100, "User name cannot exceed 100 characters"],
    },
    password : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
        trim : true,
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
})

// Create the model for it
const User = mongoose.model("User",userSchema);

module.exports = {User};