const express = require("express");
const app = express();

// Constant data for example
const products = [
    {
        prodID : 1,
        prodName : "White Pants"
    },
    {
        prodID : 2,
        prodName : "Denim Jacket"
    },
    {
        prodID : 3,
        prodName : "Grey Trousers"
    },
    {
        prodID : 4,
        prodName : "Black T-Shirt"
    }
];

// Routes -> Inline routing without using express Router

// Root Route
app.get("/",(req,res)=>{
    res.send("Welcome to the webpage...");
})

// Sub route
app.get("/products", (req,res)=>{
    res.json(products);
})
// Dynamic Routing using URL Parameters
app.get("/products/:id",(req,res)=>{
    const requestedProductID = parseInt(req.params.id);
    //Find in the products like
    const prodRequested = products.find((product)=>{
        return product.prodID === requestedProductID;
    })
    if(prodRequested){
        res.json(prodRequested);
    }else{
        res.status(404).send("Lol! Products does not exist...");
    }
})

app.listen(3000, ()=>{
    console.log(`App listening at PORT 3000...`)
})
