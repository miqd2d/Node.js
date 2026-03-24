const {Product} = require("../Model/Products");

const addMultipleProducts = async(req,res) =>{
    try{
        const data = req.body.data;

        if(!data){
            return res.status(404).json({
                message : "No data found..."
            })
        }

        const dataAdded = await Product.insertMany(data);

        if(dataAdded){
            return res.status(201).json({
                success : true,
                message : `Inserted ${dataAdded.length} Products...`
            })
        }else {
            return res.status(501).json({
            message : "Something went wrong..."
            })
        }

    }catch(e){
        return res.status(500).json({
            message : "Something went wrong..."
        })
    }
}

// Understanding the aggregate function in MongoDB

// Stage 1 : Matching to get specific Data
const getInStockData = async(req,res) =>{
    // Get all the products in stock
    const data = await Product.aggregate([
        {
            $match : {
                inStock : true
            }
        }
    ])

    return res.status(200).json({
        success : true,
        count : data.length,
        data : data
    })
}

const getAbovePrice = async(req,res) =>{
    // Get the price given by user
    const priceAbove = parseInt(req.query.priceAbove) || 0;

    // Get all the products in stock
    const data = await Product.aggregate([
        {
            $match : {
                price : {
                    $gte : priceAbove
                }
            }
        }
    ])

    return res.status(200).json({
        success : true,
        count : data.length,
        data : data
    })
}

// Using commong aggregate function to get the data in different ways

// Stage 2 : Group by on the data
const groupByCategory = async(req,res)=>{
    // Get the category by the user  // By default electronics
    const data = await Product.aggregate([
        {
            $group : {
                _id : `$category`,
                avgPrice : {
                    $avg : `$price`
                },
                count : {
                    $sum : 1
                }
            }
        }
    ])

    return res.status(200).json({
        success : true,
        data : data
    })
    
}

// Stage 3 : Projecting the data in the required format
const projectedDataAnalysisForElectronics = async(req,res)=>{
    // Get the category by the user  // By default electronics
    const data = await Product.aggregate([
        {
            $match : {
                category : "Electronics"
            }
        },
        {
            $group : {
                _id : `$category`,
                avgPrice : {
                    $avg : `$price`
                },
                maxProductPrice : {
                    $max : "$price"
                },
                minProductPrice : {
                    $min : "$price"
                },
                count : {
                    $sum : 1
                }
            }
        },
        {
            $project : {
                _id : 0,
                avgPrice : 1,
                maxProductPrice : 1,
                minProductPrice : 1,
                count : 1,
                priceRange : {
                    $subtract : ["$maxProductPrice" , "$minProductPrice"]
                }
            }
        }
    ])

    return res.status(200).json({
        success : true,
        data : data
    })
    
}

module.exports = {addMultipleProducts, getInStockData, getAbovePrice, groupByCategory, projectedDataAnalysisForElectronics};