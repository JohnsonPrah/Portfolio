import React from "react";
import {BsDownload} from "react-icons/bs"
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import reactImage from "./images/react.png";
import nextjs from "./images/nextjs.png";
import sql from "./images/sqls.jpg";
import github from "./images/github.png";
import tailwind from "./images/tailwind.png";


const About = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: sql,
      title: "Sql",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];


  return (
     <div id="about" className="w-full bg-gradient-to-l from-slate-900 to-slate-800 lg:py-10">
     <div className=" max-w-[1150px] mx-auto px-4 py-6 flex flex-col items-center justify-center">
          <h1 className="text-sky-400 text-2xl md:text-4xl mb-3 md:mb-4 text-center">ABOUT ME</h1>
          <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-2"></div>
          <div className="h-0.5 w-20 md:w-24 bg-sky-300 rounded-sm mb-2"></div>
          <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-4"></div>
          
          
          <div className="grid mt-1 md:mt-8 lg:mt-10 md:grid-cols-2 mb-5 gap-5">
            <div>
              <div className="mb-5 border-b border-seccol pb-5 md:pb-3 ">
               <h2 className="text-sky-200 text-2xl md:text-4xl mb-3 md:mb-4 text-center">Who am I?</h2>  
               <p className="text-white mb-4 text-base md:text-lg">
                  I am a passionate Software Developer, using web technologies to
                  build amazing products and focusing on solving problems using the
                  power of technology. Checkout some of my works in the projects
                  section.
                </p>
                <p className="text-white text-base md:text-lg">
                  I am open and would love to hear from you ,whether it's a
                  <span>job</span> opportunity, project requiring my skills or just
                  even a chat. Feel free to <span>contact</span> me !!
                </p>
              </div>

              <div className=" ">
                <p className="text-white mb-1 text-base md:text-lg"> <span className="text-blue-200 mr-2">Name</span> : Owusu Prah Johnson</p>
                <p className="text-white mb-1 text-base md:text-lg"> <span className="text-blue-200 mr-3 ">Email</span> : owusuprahjohnson@yahoo.com</p>
                <p className="text-white mb-1 text-base md:text-lg"> <span className="text-blue-200 mr-4 ">From</span> : Accra-Ghana</p>
              </div>
            </div>

            <div className="">
                <h2 className="text-sky-200 text-2xl md:text-4xl mb-3 md:mb-4 text-center">Technologies</h2>
                <div  className="flex flex-wrap gap-6 p-2 md:p-5 items-center justify-center md:grid md:grid-cols-3">
                  {techs.map(tech => (
                    <div key={tech.id} className={`w-[7rem] h-[8rem]  cursor-pointer grid place-items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style} `}>
                      <img src={tech.src} alt={tech.id} className="w-16 h-full"  />
                      <p className="mt-4 text-white">{tech.title}</p>
                    </div>
                  ))}
              </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default About;
