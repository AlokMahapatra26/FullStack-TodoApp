const mongoose = require("mongoose");

const connectDB = () => {
    try{
        mongoose.connect("mongodb://localhost:27017/todoApp")
        console.log("Database connected successfully")
    }catch(error){
        console.log("something went wrong while connecting database" , error)
    }
}

module.exports = {connectDB};