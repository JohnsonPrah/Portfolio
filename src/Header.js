import React from "react";
import {FaLinkedin } from "react-icons/fa"
import {FaTwitter } from "react-icons/fa"
import {FaGithub } from "react-icons/fa"
import CV from "./assets/j.o.p-CV.pdf"

const Header = () => {
  return(
        <div className="w-full h-[90vh] lg:h-screen lg:px-20 md:px-16 " id="header ">
          <div className="h-full flex flex-col-reverse items-center justify-center gap-12 max-w-[1150px]  mx-auto px-4 py-0 p md:pt-[8rem] md:pb-[6rem] ">

            <div className="flex flex-col justify-center items-center">
              <h1 className="mb-10 text-white font-bold text-4xl lg:text-6xl lg:font-extrabold uppercase  text-center">Hi there, I'm <span className="signame text-sky-700 ">Johnson</span>  </h1>
              <p className="text-sky-100 mb-10 md:text-sky-200 lg:text-sky-300 text-center text-sm px-10 md:text-lg">
                  A passionate Software Developer building products for
                  the web   and focused on learning new skills and technologies < br/>
                  leading to the success  of Web
                  Applications and meeting customer demands !!!
              </p>
              <div className="flex gap-3 mt-2 sm:mt-8">
                <a target="_blank" rel="noreferrer" href={CV} download className="hidden hover:shadow-xl shadow-sky-400 mr-10 font-semibold text-lg py-2 px-6 rounded-3xl bg-sky-400 text-slate-800 sm:grid items-center">Resume  </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/johnson-owusu-prah-7b9330107/"  className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaLinkedin size={30} className="p-1 text-sky-400 "/> </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Jay_Gainz" className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaTwitter size={30} className="p-1 text-sky-400  "/> </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/JohnsonPrah" className="hover:shadow-xl shadow-sky-400 hover:rotate-6 p-2 rounded-sm bg-slate-800 grid place-items-center"> <FaGithub size={30} className="p-1 text-sky-400 "/> </a>
              </div>
            </div>
            
         </div>
        </div>
  );
   
};

export default Header;
