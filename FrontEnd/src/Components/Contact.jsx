// ContactUsPage.js

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import toast from 'react-hot-toast';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3993b591-413b-4c56-8758-98132ee41e23");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Message sent Successfully");
      setTimeout(()=>{
      window.location.reload();
      },2000)
    }
  }
  return (
<>
<NavBar></NavBar>

<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
<br />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0  md:top-20 shadow rounded-3xl sm:p-10 sd:top-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                ?
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Contact Us</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Have questions? We're here to help.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 bg-white sm:text-lg sm:leading-7">
              <form onSubmit={onSubmit}>
                <div className="relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    name="contact-form-name"
                    className="peer w-full h-10  bg-white  border-[2px] rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-2 pr-12 text-black sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="contact-form-email"
                    name="contact-form-email"
                    className="peer w-full  bg-white h-10 border-[2px] rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-2 pr-12  text-black sm:text-sm mt-4"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="contact-form-message"
                    name="contact-form-message"
                    rows="4"
                    className="peer w-full border-gray-300  border-[2px] bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-2 pr-12  text-black sm:text-sm mt-4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
                </form>
              </div>
              
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                
               
              </div>
              
            </div>
          </div>
         
        </div>
        
      </div>
      
    </div>
    <Footer></Footer>
    </>
  );
};

export default Contact;
