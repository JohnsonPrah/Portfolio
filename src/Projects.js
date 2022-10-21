import React from "react";
import data from "./projectsData";
import Item from "./Item";

const Projects = () => {


  return (
    <div className="w-full " id="projects">
    <div className="max-w-screen-lg mx-auto px-4 py-12 flex flex-col items-center justify-center">
    
    <h1 className="text-sky-400 text-2xl md:text-4xl mb-3 md:mb-4 text-center">
      PROJECTS
    </h1>
    <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-2"></div>      <div className="h-0.5 w-20 md:w-24 bg-sky-300 rounded-sm mb-2"></div>
    <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-4"></div>
          
    
    <p className=" text-left md:text-center text-sky-100 mb-6 md:text-lg">
       Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
    </p>
    <div>
        {data.map(({title,github,live,id,description,display}) =>(
          <Item title={title} key={id} github={github} live={live} description={description} display={display} />
        ))}
     </div>

  </div>
  
    </div> 
  );
};

export default Projects;
