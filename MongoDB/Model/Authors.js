const { Schema, default: mongoose} = require("mongoose");

const authorSchema = new Schema({
    name : String,
    bio : String
})

const Author = mongoose.model("Author", authorSchema);

module.exports = {Author};