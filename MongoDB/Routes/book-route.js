const express = require("express");
const router = express.Router();

// Importing controllers
const {addAuthor, addBook, getBook} = require("../Controllers/book-controller");

router.post("/author",addAuthor );
router.post("/book", addBook);

router.get("/book/:id", getBook);


module.exports = router;