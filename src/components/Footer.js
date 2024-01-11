import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.png";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-black flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
                 <a style={{color:"white !important"}} href="/">
                  <h3 color="white !important ">Madhan &#169; 2024</h3>
                </a>
           
          </div>
        </div>
       
          
          
      </nav>
    </div>
  );
}
export default Footer;