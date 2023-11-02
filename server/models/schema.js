
//Import Section
//using the curly bracket method 

const { Schema, model } = require("mongoose")



//Mongoose Schema
const userschema = Schema({
    BookTitle: { type: String, required: true },
    Author: { type: String, required: false },
    publication_date: { type: Date, required: false },
    Language: { type: String, required: true },
    Copies: { type: Number, required: true },
    Location: { type: String, required: true },

}, { timestamps: true })


// Mongoose User Models
const usermodel = model("BOOKS", userschema)


//Export Section
module.exports = usermodel





//dot operation method
//const mongoose=require("mongoose")
// const userschema=new mongoose.Schema.({
// })
// const usermodel=mongoose.model("books",userschema)