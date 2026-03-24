const { Author } = require("../Model/Authors");
const { Book } = require("../Model/Books");

// Posting author
const addAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    if (!newAuthor) {
      return res.status(404).json({
        success: false,
        message: "Failed to add...",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Author Added",
      data: newAuthor,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};
// Posting Book
const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    if (!newBook) {
      return res.status(404).json({
        success: false,
        message: "Failed to add...",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Book Added",
      data: newBook,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// getting book
const getBook = async (req, res) => {
  try {
    const fetchedBook = await Book.findById(req.params.id).populate("author");
    if (!fetchedBook) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch...No book exists",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Book Found",
      data: fetchedBook,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = {addAuthor,addBook, getBook};