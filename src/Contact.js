import React from "react";

const Contact = () => {
  return (
  <div className="bg-gradient-to-t from-slate-900 to-slate-800 w-full" id="contact">
    <div className="max-w-screen-lg mx-auto px-4 py-5 md:py-16 flex flex-col items-center justify-center">
      
      <h1 className="text-sky-400 text-2xl md:text-4xl mb-3 md:mb-4 text-center "> Contact</h1>
      <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-2"></div>
      <div className="h-0.5 w-20 md:w-24 bg-sky-300 rounded-sm mb-2"></div>
      <div className="h-0.5 w-5 md:w-10 bg-sky-200 rounded-sm mb-4"></div>
          

      <p className="text-white text-lg md:mb-8 mb-4 mb:text-left text-center md:text-center md:text-lg">
            Feel free to Contact me by submitting the 
            form below and I will get back to 
            you as soon as possible
      </p>
      
      
      <form action=" https://getform.io/f/f7c52701-d0f5-4aac-b0e6-f14a2494565e " method="POST" className="flex flex-col w-full md:w-1/2 lg:w-2/3">

        <input type="text" placeholder="Enter Your FullName" name="name"
          className="p-2 bg-transparent border-[1px] border-sky-400 rounded-md
          text-white focus:outline-none"
        />
        <input type="email" placeholder="Email" name="email"
            className="p-2 bg-transparent border-[1px] rounded-md
            text-white focus:outline-none my-4 border-sky-400" 
        />
        <textarea name="message" placeholder="Message" rows={6}
          className="p-2 bg-transparent border-[1px] rounded-md
          text-white focus:outline-none mb-4 resize-none border-sky-400"
        />
        <button className="border-sky-400 border-[1px] py-2 w-[12rem] text-center px-auto bg-slate-800 text-sky-400 text-xl transition duration-500 ease-in rounded-md">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
