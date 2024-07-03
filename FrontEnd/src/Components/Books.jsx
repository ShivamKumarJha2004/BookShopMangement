import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import Cards from './Cards';
import axios from "axios"
function Books() {
 const [books,setbooks]=useState([]);
 useEffect(()=>{
const getbook=async()=>{
try{
const resp=await axios.get('https://shop-backend-lgxj.onrender.com/books ')
console.log(resp.data);
setbooks(resp.data);
}
catch(err){
console.log(err);
}
}
getbook(); 
 },[])
  return (
   <>
   <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '> 
 <h1 className='relative top-32 text-2xl leading-normal md:text-2xl text-black'><span className='text-5xl leading-normal
   md:text-5xl font-semibold text-pink-700'>📚 Welcome to Our Stylish Bookstore! 📚</span>
 <br />
 <br />
 <br />


<span className='text-4xl text-pink-600'>Hello there!</span> Step into a world of literary wonders at our stylish bookstore. From captivating bestsellers to timeless classics, we've curated a collection just for you. Browse to your heart's content, and if you need any recommendations, our team is here to assist. <br /><br />Happy reading!

Warm regards,<br /> 
<span className=' text-pink-700 md:text-fuchsia-700 font-bold'>Shivam Book Shop</span> 


</h1>
<div className=''>
{/* <Link to="/"><button className=" px-5 py-2  text-2xl text-white bg-slate-500 rounded-md relative top-40 left-1/3 hover:bg-slate-700 duration-200 
md:-mx-96 ">Back</button></Link> */}

</div>

    </div>
    <div className='mt-20 relative left-28 grid grid-cols-1  md:grid-cols-3  relative top-28 -mx-16  right-10 w-full sd: w-72 '>
     { books.map((items=>
     <Cards key={items.id} items={items} ></Cards>
     ))}
    </div>
    </>
  )
}

export default Books;