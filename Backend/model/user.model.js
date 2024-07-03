import mongoose from "mongoose";
const userSchema=mongoose.Schema({
Fullname :{
    type:String,
    required:true
},
Email:{
 type:String,
 required:true,
 unique:true
},
Password:
{
  type:String,
  required:true
},

})
export default mongoose.model('usercoll',userSchema)