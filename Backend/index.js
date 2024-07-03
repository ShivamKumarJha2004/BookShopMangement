import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookroute from "./route/book.route.js";
import userroute from "./route/user.route.js"
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT||900;
const mongodburl=process.env.MongodbURL;
try{
mongoose.connect(mongodburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
console.log("Connected to MonogoDB");
}
catch(error)
{
 console.log("Error is ",error);
}
app.use("/books",bookroute);
app.use("/user",userroute);

//deploy

app.listen(PORT,()=>{
    console.log(`Server is starting on ${PORT}` );
});