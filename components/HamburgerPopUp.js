import React, { useState } from "react";
import Link from "next/link";
import PopUp from "./PopUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const HamburgerPopUp = ({toggleHamMenu}) => {
  const [productPopUp, setProductPopUp] = useState()
  const toggleProductPopUp = ()=>{
     setProductPopUp(!productPopUp)
  }
  return  (
  
  <div className='modal' >
    <div onClick={toggleHamMenu} className="overlay"></div>
          <div className="modal-content ">
                      <ul  className="text-blue text-2xl text-center font-bold flex flex-col space-y-4">
                          <li onClick={toggleHamMenu} className="self-end"><FontAwesomeIcon  icon={faXmark} className="self-end h-10  text-xl" /></li>
                           <li onClick={toggleHamMenu}><Link href="/">Inicio</Link></li>
                           <li onClick={toggleHamMenu}><Link href="/about">Sobre Nosotros</Link></li>
                            <li className="dropdown-wrapper ">
                            <div onClick={toggleProductPopUp} className="dropdown-header hover:cursor-pointer border-b-2 border-b-lsky"> Productos</div>

                              <PopUp productPopUp={productPopUp} toggleHamMenu={toggleHamMenu}/>
                        </li>
                        <li onClick={toggleHamMenu}><Link href="/contact">Contactenos</Link></li>
                      </ul>
          </div>
  </div>);
};

export default HamburgerPopUp;
