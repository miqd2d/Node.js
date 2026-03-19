const express = require("express");
const recipeRouter = express.Router();

// Import the controllers
const {getAllRecipe, getSingleRecipe, addRecipe,addMultipleRecipe, deleteRecipe, updateRecipe} = require("../Controllers/recipe-controllers");

// Create all the possible routes for the 
recipeRouter.get("/get", getAllRecipe);
recipeRouter.get("/get/:id", getSingleRecipe);
recipeRouter.post("/add", addRecipe);
recipeRouter.post("/addMultiple", addMultipleRecipe);
recipeRouter.put("/update/:id", updateRecipe);
recipeRouter.delete("/delete/:id", deleteRecipe);

module.exports = {recipeRouter};