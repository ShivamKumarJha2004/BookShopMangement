import React from 'react'
import Homee from './Components/Home/Home'
import Book from './Components/Books/Book';
import { Route, Routes,createBrowserRouter,RouterProvider,Navigate } from "react-router-dom";
import SignUp from './Components/SignUp';
import Contact from './Components/Contact';
import Log from './Components/Log';
import About from './Components/About';
import {Toaster} from "react-hot-toast";
  import { useAuth } from './Context/AuthProvider';
function App() {
// const [authUser,setAuthUser]=useAuth();
    // // const route=createBrowserRouter([
    // //   {
    // //     path:"/",
    // //     element:<Homee></Homee>
    // //   },
    // //   {
    // //     path:"/books",
    // //     element:<Book></Book>
        
    // //   },
    // //   {
    // //      path:"/signup",
    // //      element:<SignUp></SignUp>
    // //   },
    // //   {
    // //     path:"/contact",
    // //     element:<Contact></Contact>
    // //   },
    // //   {
    // //     path:"/login",
    // //     element:<Log></Log>
    // //   },
    // //   {
    // //     path:"/about",
    // //     element:<About></About>

    // //   }


    
    // //  ])
    // //  return(
    // // <div className="appname">
    // // <RouterProvider router={route}>
    
    // // </RouterProvider>
    // // <Toaster></Toaster>
    // </div>
    //  )
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
   
    return (
      <>
        <div className=" dark:text-white">
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route
              path="/books"
              element={authUser?<Book />:<Navigate to={"/signup"}></Navigate>}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Log />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={< About/>} />
          </Routes>
          <Toaster />
        </div>
      </>
    );
  }
  
    
  
  
  
    
export default App