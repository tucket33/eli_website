import React from "react";

const Footer = () => {
    const year = new Date()

  return  <footer className="flex flex-col justify-center items-center w-full bg-slate-100 bottom-0 h-8 fixed shadow-inner">
            <p className="text-center">Copyright &copy; Abstract Web Dev {year.getFullYear()}</p>
          </footer>
};

export default Footer;
