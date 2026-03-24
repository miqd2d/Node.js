require("dotenv").config();
const express = require("express");
const { connection } = require("./connectionDB");
const app = express();

const PORT = process.env.PORT;

// Importing middlewares
app.use(express.json());

// Importing routes
const prodRouter = require("./Routes/product-route");
app.use("/product", prodRouter);

const bookRouter = require("./Routes/book-route"); 
app.use("/book", bookRouter)


app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
  connection()
    .then(() => {
      console.log(`DB Connected successfully...`);
    })
    .catch((e) => console.log(`Error : ${e}`));
});
