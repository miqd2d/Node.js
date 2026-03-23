require("dotenv").config();
const mongoose = require('mongoose');


const DBURI = process.env.DBURI;

const connect = async()=>{
    return mongoose.connect(`${DBURI}`)
}

module.exports = {connect};