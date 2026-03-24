const express = require("express");
const app = express();
require("dotenv").config();

// Import connection to database
const {
  connect,
} = require("../05 - Authentication and Authorization/Connections/connectionDB");

const PORT = process.env.PORT || 3002;


// Importing all routes
// Using middleware to parse the incoming json
app.use(express.json());

// Adding routes
const {authRouter} = require("../05 - Authentication and Authorization/Routes/auth-user");
app.use("/api/auth" , authRouter);

const normalRouter = require("../05 - Authentication and Authorization/Routes/normalPages");
app.use("/app", normalRouter);

const adminRouter = require("../05 - Authentication and Authorization/Routes/adminPages");
app.use("/admin", adminRouter);

const imageRouter = require("./Routes/image-routes");
app.use("/image", imageRouter);



app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
  connect()
    .then(() => {
      console.log("Database connected successfully...");
    })
    .catch((err) => console.log("Error occured", err));
});
