const express = require("express");
const router = express.Router();

// Importing controllers
const {addMultipleProducts, getInStockData, getAbovePrice, groupByCategory, projectedDataAnalysisForElectronics} = require("../Controllers/product-controller");

router.post("/addProducts", addMultipleProducts);
router.get("/matchingInStock", getInStockData);
router.get("/priceAbove", getAbovePrice);
router.get("/getCategoryStats", groupByCategory);
router.get("/electronicsData", projectedDataAnalysisForElectronics);

module.exports = router;