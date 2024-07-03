import React from 'react'
import "./Middle.css"
// import img  from "./img2.jpg" 
function Middle() {
  return (
    <>
    <br />
    <br />
    <br />
    <div className='md:px-20 px-4 my-6 md:flex '>
       <div className=' w-full order-2 text-black md:order-1  md:w-1/2 '>
       <h1 className='text-4xl font-bold my-10 leading-snug	'>Welcome to <span className='text-pink-600'>Shivam Book Store</span>, where words come alive and every page holds a <span className='text-rose-500'>new adventure !!</span></h1>
      <p className='text-lg sd:text-xl'><span className='text-3xl font-bold text-fuchsia-800'>Our mission</span> to connect readers with books that resonate, spark imagination, and offer solace in every chapter. From bestsellers to rare editions, children's favorites to literary masterpieces, our diverse selection caters to every taste and interest.

</p>
<br />

<br></br>

       </div>
       
       <div className=' order-1 w-full text-black relative -mx-10 md:order-2 md:w-1/2 my-8 left-10 rounded-md sd:w-[20rem]  sd:h-[20rem]'>
       <img className='rounded-lg' src="https://plus.unsplash.com/premium_photo-1661918313549-837c855575bb?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       

    </div>
    
    </>
  )
}

export default Middle