const mongoose = require("mongoose");

const connection = () => {
  return mongoose.connect("mongodb://localhost:27017/sangamCourse");
};

module.exports = {connection};