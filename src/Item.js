import React from "react";

const Item = ({title,github,live,id,description,display}) => {
  return (
    <div className=" grid md:grid-cols-2 gap-10">
         <img src={require(`./images/${display}`)} alt={title}/>
         <div className="md:flex md:flex-col justify-center">
            <h2 className="mb-6 text-center text-white text-2xl md:text-3xl md:text-left">{title}</h2>
            <p className="mb-4 text-white md:text-lg text-center md:text-left">
                {description}   
            </p>
            <div className="flex justify-center items-center md:justify-start md:items-center mb-4">
            <a href={github} target="_blank" className="py-3 px-12 mr-4 bg-slate-800 text-sky-400 text-xl hover:bg-sky-400 hover:text-slate-800 transition duration-500 ease-in rounded-md">Githud</a>
            <a href={live}  target="_blank" className="py-3 px-16 mr-4 bg-slate-800 text-sky-400 text-xl hover:bg-sky-400 hover:text-slate-800 transition duration-500 ease-in rounded-md">Live</a>
            </div>
         </div>
  
    </div>
  );
};

export default Item;
