
import React, { useState } from 'react';
import SignUp from './SignUp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin =async () => {
    // Example: Implement your login logic here
    console.log(`Logging in with Email: ${email} and Password: ${password}`);
    // Example: You might want to send login request to backend here
    // For demonstration, we'll just log the credentials
    const userinfo={
      Email:email,
      Password:password

    }
   await axios.post("https://shop-backend-lgxj.onrender.com/user/login",userinfo)
    .then((res)=>{
      console.log(JSON.stringify(res.data));
       if(res.data)
         {
          toast.success("Login SuccessFully")
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
        
  

    }).catch((err)=>{
      if(err.response)
      console.log(err);
      toast.error("Error "+err.response.data.message);
    })
    setTimeout(()=>{
      window.location.reload();
    },2000)
     
  };
  

  const handleSignUp = () => {
    // Example: Navigate to sign up page or handle redirection logic
    return <SignUp></SignUp>
    // Replace with your navigation logic (e.g., history.push('/signup') if using react-router)
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-white"
                placeholder="Email address"
              />
            </div>
            <br />
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white" 
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                >
                  {showPassword ? 
                   
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    
                   : 
                   <i class="fa-solid fa-eye"></i> 

                  }
                </button>
              </div>
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="mt-3 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to={"/signup"}><button
              
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
            >
              Sign up
            </button></Link>
          </p>
        </div>
      </div>
     <Link to={"/"}> <button
      
      className="flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 p-2 shadow-md transition duration-300 ease-in-out focus:outline-none text-3xl text-black
       relative top-[15rem] right-[14rem]"
     >
       <i class="fa-solid fa-arrow-left"></i>
    </button></Link>
    

    </div>
    
    <Footer></Footer>
        </>
  );
};

export default Log;
