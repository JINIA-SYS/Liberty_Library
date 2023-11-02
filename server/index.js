const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()

//MONGO DATABASE SECTION
const {mongodbconnect}=require("./models/mongodb.js")
mongodbconnect(process.env.MONGODB_URL)


//MIDDLEWARE SECTIONS:
app.use(express.json({urlencoded:true}))
//CORS for all routes
app.use(cors())
// app.use(cors({
//     origin:`http://localhost:${process.env.PORT}`,
//     methods:['GET','POST','PUT','DELETE','PATCH','HEAD'],
//     allowedHeaders:['Content-Type'],
// }))


//ROUTES SECTION 
const staticroute=require("./routes/static_routes.js")
app.use("/",staticroute)




//SERVER PORT SECTION: 
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Port running at :${PORT}`)})