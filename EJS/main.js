const express = require("express");
const app = express();

const path = require("path");
const viewPath = path.join(__dirname, "views");


// Here we have to mention that EJS is our view engine
app.set("view engine","ejs");
app.set("views" , viewPath);

// Creating an object array of products
const prods = [
    {
        id : 1,
        title : "Prod 1",
    },
    {
        id : 2,
        title : "Prod 2",
    },
    {
        id : 3,
        title : "Prod 3",
    },
    {
        id : 4,
        title : "Prod 4",
    }
]

app.get("/",(req,res)=>{
    res.render("home", {title : 'HOME' , products : prods});
})
app.get("/about", (req,res)=>{
    res.render("about" , {title : "ABOUT"});
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening at port ${PORT}`);
})