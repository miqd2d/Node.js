// Required Modules/Libraries
require("dotenv").config();
const { connection } = require("./Connections/connectionDB");
const express = require("express");
const app = express();

// Constants
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());


// Server Starting
app.listen(PORT,()=>{
    console.log(`Server is now listening at PORT ${PORT}...`);
})

// Connection to database
connection()
.then(() => {
    console.log(`Conneciton Successful...`);
    // Importing and using routes
    const {recipeRouter} = require("./Routes/recipe-routes");
    app.use("/api/recipe",recipeRouter);
  })
  .catch((e) => {
    console.log(`Error -> ${e}`);
  });