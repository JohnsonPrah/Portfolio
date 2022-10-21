import React from "react";
import jay from "./images/jay.jpg"
import jayg from "./images/jayg.jpg"
import {FaLinkedin } from "react-icons/fa"
import {FaTwitter } from "react-icons/fa"
import {FaGithub } from "react-icons/fa"
import CV from "./assets/jopCV.pdf"

const Header = () => {
  return(
        <div className="w-full px-4 h-screen lg:px-20 md:px-16 " id="header ">
          <div className="w-full h-full flex flex-col-reverse items-center justify-center md:grid md:grid-cols-2 gap-12 max-w-screen-lg  mx-auto px-4 py-0 md:py-[6rem] ">

            <div className="flex flex-col justify-center items-center">
              <h1 className="mb-6 text-white text-xl md:text-3xl lg:text-4xl uppercase font-medium text-center">Hi there, I'm <span className="font-signature text-sky-700 ">Johnson</span>  </h1>
              <p className="text-sky-100 md:text-sky-200 lg:text-sky-300 text-center md:text-lg">
                  A passionate Software Developer building products for
                  the web   and focused on learning new skills and technologies < br/>
                  leading to the success  of Web
                  Applications and meeting customer demands !!!
              </p>
              <div className="flex gap-3 mt-8">
                <a href={CV} target="_blank" className="hover:shadow-xl shadow-sky-400  mr-10 font-semibold text-lg py-2 px-6 rounded-3xl bg-sky-400 text-slate-800 grid items-center">Resume  </a>
                <a href="https://www.linkedin.com/in/johnson-owusu-prah-7b9330107/" target="_blank" className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaLinkedin size={30} className="p-1 text-sky-400 "/> </a>
                <a href="https://twitter.com/Jay_Gainz" target="_blank" className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaTwitter size={30} className="p-1 text-sky-400  "/> </a>
                <a href="https://github.com/JohnsonPrah" target="_blank" className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaGithub size={30} className="p-1 text-sky-400 "/> </a>
              </div>
            </div>

            <img src={jayg} alt="jay" className=" h-[15rem] w-[15rem] rounded-full  mx-auto object-cover"/>
          
            
         </div>
        </div>
  );
   
};

export default Header;
