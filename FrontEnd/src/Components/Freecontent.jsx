import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Cards from './Cards';
import axios from 'axios';
function Freecontent() {
  
  
  const [book,setbook]=useState([]);

  useEffect(()=>{
    
    const bookdata=async()=>{
      try{
      const res= await axios.get('https://shop-backend-lgxj.onrender.com/books');
     
      const fd=res.data.filter((data)=>data.categories==="Free")
     setbook(fd);
    }
  
  catch(err)
  {
    console.log(err);
  }
}
    bookdata();

  },[])
      return (
   <>
   <div className='max-w-full'>
           <h1 className='text-2xl font-bold text-black mx-4 md:mx-16 text-green-500'>Free Books Offered</h1>
           <br />
           <p className=' md:px-6 mx-5 md: W-full mx-10  text-black'>When we talk about "freebooks offered," it typically refers to websites or platforms where books are available for free, either to read online or download. These platforms legally provide access to books without any cost to the user. Here are some common scenarios where "freebooks offered" might apply:

</p>
  
    <br />
    <div className='relative bottom-20 max-h-full'>  
        <div className=" relative left-28 grid grid-cols-1  md:grid-cols-3  relative top-28   right-10 w-full sd:w-[80%] sd:-left-[-29px]  ">
     
        {book.map((items)=>(
        <Cards items={items}></Cards>
        
        ))}
     
    </div>
    </div>

    </div>
    </>
  )
}

export default Freecontent