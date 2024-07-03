import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
 import { useAuth } from '../Context/AuthProvider';
import Logout from "./Logout"



function NavBar() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
 
  const navItem=
  (
    <>
     <Link to={"/"}><li><a>Home</a></li></Link> 
     <Link to={"/books"}><li><a>Books</a></li></Link>
      <Link to={"/contact"}><li><a>Conatct</a></li></Link>
     <Link to={"/about"}><li><a>About</a></li></Link>
     

     
    </>

  )
  const [scrolling , setscrolling]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
    if(window.scrollY>0)
      setscrolling(true);
    else{
      setscrolling(false);
    }
  }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll);  
    }
  
  },[])
  
    return (
    <div className={`max-w-screen-2xl w-full h-20 
    container mx-auto sd:min-w-full md:px-20 p-2 sd:min-h-24 fixed top-0 left-0 right-0 z-50 ${scrolling?"sticky-navbar shadow-md bg-red-200 duration-300 transition-all ease-in-out":""}`}>
        <div className="navbar text-black  w-full">
  <div className="navbar-start">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative bottom-[1rem] ">
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        
      </div >
      <ul
      
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow  text-black text-3xl">
       <div className='relative left-20 text-white'>
       {navItem}
       
       </div >
       
           </ul>
    </div>
    <div className='w-96'>
    <div className="text-2xl font-extrabold text-indigo-600  animate-bounce duration-500 relative  md:top-[1rem] cursor-pointer hover:text-3xl ">Shivam Book Shop</div>
    {
      authUser?<Logout></Logout>:
    
    <Link to={"/login"}><button className='bg-pink-500 px-3 py-2  rounded-md -my-3 hover:bg-pink-700 relative left-[13rem] bottom-[3rem] md:relative md:left-[65rem] md:-top-[18px] md:text-blue-700 sd:text-black sd: left-[11rem] sd:bottom-[5rem] sdd:-top-[50px]  text-white '>Login</button></Link>
}
    </div>

  </div>
  <div className="navend">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
   
     
 {/* {
  authUser?<Logout></Logout>:null
 } */}
      
    </ul>

    
     </div>

     <div className='relative left-5 md:-left-3'>    
      
       </div>
    </div>
  </div>
</div>
    
  )
}

export default NavBar