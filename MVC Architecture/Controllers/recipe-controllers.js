// Import the recipe model
const {recipeModel} = require("../Models/recipe");

// To get all the recipes
const getAllRecipe = async(req,res) => {
    try{
        const allRecipe = await recipeModel.find({});
        if(allRecipe?.length > 0){
            res.status(200).send({
                success : true,
                message : "Sucessfully fetching all the recipes",
                data : allRecipe,
            })
        }else {
            res.status(500).send({
                success : false,
                message : "No recipes exists..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

// To get a single recipe
const getSingleRecipe = async(req,res) => {
    try{
        const recipeID = req.params.id;
        const singleRecipe = await recipeModel.findById(recipeID);
        if(singleRecipe){
            res.status(200).send({
                success : true,
                message : "Sucessfully fetching the recipe",
                data : singleRecipe,
            })
        }else {
            res.status(500).send({
                success : false,
                message : "No recipe exists..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

// To add a recipe
const addRecipe = async(req,res) => {
    try{
        const recipeData = req.body;
        const newRecipe = await recipeModel.create(recipeData);

        if(newRecipe){
            res.status(200).send({
                success : true,
                message : "Sucessfully added the recipe",
                data : newRecipe,
            })
        }else {
            res.status(400).send({
                success : false,
                message : "Wrong data entered..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

// To add a recipe
const addMultipleRecipe = async(req,res) => {
    try{
        const recipeData = req.body;
        const newRecipe = await recipeModel.create(recipeData);

        if(newRecipe){
            res.status(200).send({
                success : true,
                message : "Sucessfully added all the recipes",
                data : newRecipe,
            })
        }else {
            res.status(400).send({
                success : false,
                message : "Wrong data entered..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

// To update a recipe
const updateRecipe = async(req,res) => {
    try{
        const recipeID = req.params.id;
        const updatedRecipeData = req.body;

        const updatedRecipe =await recipeModel.findByIdAndUpdate(recipeID , updatedRecipeData , {new : true});

        if(updatedRecipe){
            res.status(200).send({
                success : true,
                message : "Sucessfully updated the recipe",
                data : updatedRecipe,
            })
        }else {
            res.status(400).send({
                success : false,
                message : "Wrong data entered..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

// To delete a recipe
const deleteRecipe = async(req,res) => {
    try{
        const recipeID = req.params.id;
        const deletedRecipe = await recipeModel.findByIdAndDelete(recipeID);

        if(deletedRecipe){
            res.status(200).send({
                success : true,
                message : "Sucessfully deleted the recipe",
                data : deletedRecipe,
            })
        }else {
            res.status(400).send({
                success : false,
                message : "Wrong id entered..."
            })
        }
    }catch(e){
        res.status(500).send({
            success : false,
            message : "Something went wrong..."
        })
    } 
}

module.exports = {getAllRecipe,getSingleRecipe,addRecipe,addMultipleRecipe,updateRecipe,deleteRecipe};