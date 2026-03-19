const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    title : {
        type : String,
        required : [true, "recipe title is required"],
        trim : true,
        maxLength : [100 , "recipe title cannot exceed 100 characters"], 
    },
    author : {
        type : String,
        required : [true, "recipe author is required"],
        trim : true,
    },
    ingredients : {
        type : [String],
        required : [true , "Ingredients list is mandatory to add"],
    },
    createdAt : {
            type : Date,
            default : Date.now,
        }
})

const recipeModel = model("recipe",recipeSchema);

module.exports = {recipeModel};