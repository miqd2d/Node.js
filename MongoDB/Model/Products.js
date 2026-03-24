const { Schema, default: mongoose } = require("mongoose");

const productSchema = Schema({
    name : String,
    category : String,
    price : Number,
    inStock : Boolean,
    tags : [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = {Product};