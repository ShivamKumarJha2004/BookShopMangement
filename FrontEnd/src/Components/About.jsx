// AboutPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
const About = () => {
  return (
    <>
    <NavBar></NavBar>
    <br />
    <br />
    <br />
    <br />
    <div className="bg-gray-50">
       
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-rose-500">Welcome to Shivam Book Shop</h2>
          <p className="mt-4 text-xl text-gray-500">
         <span className=' text-indigo-500'> Located in  Siswar Madhubani, Bihar, India</span>, Shivam Book Shop is dedicated to providing a vast collection of books
            at affordable prices.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-pink-500">Our Mission</h3>
          <p className="mt-2 text-gray-600 text-xl">
            At Shivam Book Shop, our mission is to make quality books accessible to everyone. We believe in the power
            of knowledge and strive to promote reading habits by offering diverse genres and titles that inspire,
            educate, and entertain.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              className="h-96 w-full object-cover lg:h-full lg:w-auto rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1657994103870-bd7fa345e3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shivam Book Shop"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl text-gray-700">
             <span className='font-bold text-2xl text-black'>At </span> Shivam Book Shop, we take pride in our extensive collection spanning various genres and subjects. From
              classics to contemporary bestsellers, we curate our shelves to cater to diverse reading preferences.
            </p>
            <p className="mt-4 text-xl text-gray-700">
              Our mission is to make quality books accessible to everyone. Whether you're a student, an avid reader, or
              simply exploring new interests, you'll find something captivating at Shivam Book Shop.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Visit Us</h3>
          <p className="mt-4 text-xl text-gray-700">
            Explore our bookstore and immerse yourself in the world of literature. We are passionate about books and
            look forward to sharing our love for reading with you.
          </p>
          <p className="mt-4 text-xl text-gray-700">
            Contact us for any inquiries or visit us at <span className='font-bold text-rose-700'>Siswar Madhubani, Bihar, India.</span> We are open every day to serve you.
          </p>
        </div>
       <div>
        <br />
        <br />
        <br />
       <h1 className='text-red-600 text-center text-3xl font-semibold'>Our Contact Info</h1>
        <div className='border-2 border-pink-700 border-dotted '>
         
          <div className='text-black relative left-16 p-2 md:text-center'>
            <ul>
              <li>Address- Siswar,Madhubani</li>
              <br />
              <li>Phone-    9110137609</li>
              <br />
              <li>Email- jha24978@gmail.com</li>
              <br />
              <li>OwnerName-RobinHood Pandey </li>
            </ul>
          </div>
        </div>
       </div>
      </div>
      <Footer></Footer>
    </div>

    </>
  );
};

export default About;
