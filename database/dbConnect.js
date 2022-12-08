const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = process.env.MONGO_DB_URL

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected to mongo successfully!');
    })
}

module.exports = connectToMongo;