
//Import Section
const express=require("express")
const app=express.Router()
const {response_allBooks,response_Books_ID,response_Books_Update,response_Books_Delete}=require("../controllers/response_functions")
const {request}=require("../controllers/request_functions")





app.route("/book").get(response_allBooks).post(request)
app.route("/book/:ID").get(response_Books_ID).put(response_Books_Update).delete(response_Books_Delete)

//Export Section
module.exports=app