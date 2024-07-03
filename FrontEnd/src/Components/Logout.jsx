import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';
import {  useLocation, useNavigate } from 'react-router-dom';

function Logout() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/login"
 
  const [authUser,setAuthUser]=useAuth();
  const handleLogout=()=>
    {
      try{
               setAuthUser({...authUser,
               user:null})
      
      localStorage.removeItem("Users")
      toast.success("Logout SuceessFully")
      setTimeout(()=>{
        window.location.reload();
        navigate(from,{replace:true});  
      },2000)
       
    }
      catch(err)
      { setTimeout(()=>{
        toast.error("Error:"+err.message )
      },2000)
          
      }
    }
  return (
    <div>
      <button className='
      px-3 py-2 bg-blue-500 cursor-pointer text-white rounded-md relative left-[15rem] md:left-[60rem] md:-top-[1rem] bottom-[3.3rem] sd:left-[10rem] sd:bottom-[5rem] sdd:left-[12rem] sdd:bottom-[3.5rem] md:hover:bg-blue-800  ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout