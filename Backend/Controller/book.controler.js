import bookcoll from "../model/books.model.js";

 export const getbook=async(req,res)=>{
try{
   const books= await bookcoll.find();
   res.status(200).json(books);
}
catch(error){
console.log("Error is ",error);
res.status(500).json(error);
}

};