require("dotenv").config();
const express = require("express");
const app = express();

const { connect } = require("./Connections/connectionDB");

PORT = process.env.PORT || 3001;

// Using middleware to parse the incoming json
app.use(express.json());

// Adding routes
const {authRouter} = require("./Routes/auth-user");
app.use("/api/auth" , authRouter);

const normalRouter = require("./Routes/normalPages");
app.use("/app", normalRouter);

const adminRouter = require("./Routes/adminPages");
app.use("/admin", adminRouter);


app.listen(PORT, () => {
  console.log(`App listening at port -> ${PORT}`);

  connect()
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((e) => console.log("Error occurred...",e));
});
