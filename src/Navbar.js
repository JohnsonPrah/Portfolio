import {FiMenu} from "react-icons/fi"
import {MdOutlineClose} from "react-icons/md"
import { useState } from "react";
import { Link } from "react-scroll"

const Navbar = () => {

  const [toggle,setToggle] = useState(false);

  const whenClicked = () => setToggle(false);


  return ( 
      <div className="w-full z-300 fixed border-b flex justify-between lg:px-20 md:px-16  items-center h-24 px-4 bg-slate-900">

        <p className="text-sky-400 text-2xl"> <span className="font-signature text-white capitalize">jo </span>hns <span className="font-signature text-white">on</span></p>

        <ul className=" text-xl md:text-2xl hidden md:flex">
            <Link to="header" smooth={true} duration={500} spy={true} className="text-white hover:-translate-y-1 ease  p-4 cursor-pointer font-signature transition-all hover:text-sky-600 duration-300 ease-in">Home </Link >
            <Link to="about" smooth={true} duration={500} spy={true} className="text-white hover:-translate-y-1 ease  p-4 cursor-pointer font-signature transition-all hover:text-sky-600 duration-300 ease-in">About</Link >
            <Link to="projects" smooth={true} duration={500} spy={true} className="text-white hover:-translate-y-1 ease  p-4 cursor-pointer font-signature transition-all hover:text-sky-600 duration-300 ease-in">Projects</Link>
            <Link to="contact" smooth={true} duration={500} spy={true} className="text-white hover:-translate-y-1 ease  p-4 cursor-pointer font-signature transition-all hover:text-sky-600 duration-300 ease-in">Contact</Link>
        </ul>
        
        <div onClick={ ()=> setToggle(prev => !prev )} className="md:hidden cursor-pointer">
          { toggle ? <MdOutlineClose size={30} className=" text-white"/> : <FiMenu size={30} className=" text-white"/> }
        </div>

        {toggle &&  
          (<ul className="h-fit w-full flex absolute left-0 top-16 right-0 flex-col justify-center items-center bg-slate-800 text-black md:hidden">
            <Link to="header" smooth={true} duration={500} spy={true} className="text-white p-4 w-full text-right font-signature cursor-pointer  text-xl md:text-2xl border-b border-white transition-all duration-500 ease-in" onClick={whenClicked}>About </Link>
            <Link to="about" smooth={true} duration={500} spy={true} className="text-white p-4 w-full text-right font-signature  cursor-pointer  text-xl md:text-2xl border-b border-white transition-all duration-500 ease-in" onClick={whenClicked}>skills</Link>
            <Link to="projects" smooth={true} duration={500} spy={true} className="text-white p-4 w-full text-right font-signature cursor-pointer  text-xl md:text-2xl border-b border-white transition-all duration-500 ease-in" onClick={whenClicked}>Projects</Link>
            <Link to="contact" smooth={true} duration={500} spy={true} className="text-white p-4 w-full text-right font-signature cursor-pointer  text-xl md:text-2xl  transition-all duration-500 ease-in" onClick={whenClicked}>Contact</Link>
        </ul>)
        }
           
      </div>);
};

export default Navbar;
