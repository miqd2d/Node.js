const { Schema, default: mongoose, model } = require("mongoose");

const imageSchema = new Schema({
    url : {
        type : String,
        required : true,
    },
    publicID : {
        type : String,
        required : true,
    },
    uploadedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
}, {timestamps : true})

// Create the model
const Image = model("Image", imageSchema);

// Export the model
module.exports = {Image};