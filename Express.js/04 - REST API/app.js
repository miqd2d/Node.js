const express = require("express");
const app = express();

// Data for sending and updating
const books = [
  { "id": 1, "title": "To Kill a Mockingbird" },
  { "id": 2, "title": "1984" },
  { "id": 3, "title": "The Great Gatsby" },
  { "id": 4, "title": "One Hundred Years of Solitude" },
  { "id": 5, "title": "Brave New World" },
  { "id": 6, "title": "The Catcher in the Rye" },
  { "id": 7, "title": "The Lord of the Rings" },
  { "id": 8, "title": "Harry Potter and the Sorcerer's Stone" },
  { "id": 9, "title": "The Hitchhiker's Guide to the Galaxy" },
  { "id": 10, "title": "Pride and Prejudice" }
]

// Use express.json Middleware to parse the incoming data from the frontend/postman
app.use(express.json());       // For parsing application/json

app.get("/",(req,res)=>{
    res.send("Welcome to the page...");
})
app.get("/books",(req,res)=>{
    res.status(200).json(books);
})
app.get("/books/:id",(req,res)=>{
    const book = books.find(book => book.id === parseInt(req.params.id));
    if(book){
        res.status(200).send({
            message : "Success",
            data : book
        });
    }else{
        res.status(404).send({
            err_message : "Book not found"
        })
    }
})

// Now using POST -> To add a book in the list
app.post("/add",(req,res)=>{
    const book = {
        id : books.length + 1,
        title : req.body.title || undefined
    }
    books.push(book);
    res.status(200).send({
        message : "Success",
        data : book
    })
})
// Now using PUT -> To update the book title using id
app.put("/update/:id",(req,res)=>{
    const updatedTitle = req.body.title;
    books.at(req.params.id).title = updatedTitle;
    res.status(200).send({
        message : "Success",
        data : books.at(req.params.id)
    })
})
// Now using DELETE -> To delete the specified ID
app.delete("/del/:id",(req,res)=>{
    // Check if that book exists
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (book){
        const bookPopped = books.splice(parseInt(req.params.id)-1,1);
        res.status(200).send({
            message : "Success",
            data : bookPopped,
        })
    }
    else{
        res.status(404).send({
            message : "Book doesn't exist..."
        })
    }
})

const port = 3000;
app.listen(port , ()=>{
    console.log(`App listening at port ${port}`);
})