import Link from "next/link";
import React from "react";
import Image from "next/image"
import DropDownMenu from "./DropDownMenu";
import PopUp from "./PopUp";
import HamburgerPopUp from './HamburgerPopUp'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);

  //
  const showDropDown= () =>{
      setIsActive(true)
  }
  const hideDropDown= () =>{
      setIsActive(false)
  }
  const toggleHamMenu = ()=>{
    setHamMenu(!hamMenu)
  }

  return (
    <nav className="bg-slate-100 flex justify-between  h-[70px] z-20  top-0 items-center  w-full sticky">
      <div className="mx-4">
         <Link href="/"> <Image src="/images/Hicon.png" priority width={200} className='min-w-64' height={100} alt=""/></Link>
        </div>
        <ul className="hidden font-bold text-zinc-900 text-2xl md:flex justify-end items-center space-x-8 mr-8 w-full">
                <li> <Link href="/"> <p >Inicio</p></Link></li>
                <li onMouseEnter={showDropDown} onMouseLeave={hideDropDown} className="big-dropdown-header  hover:border-b-dgray hover:cursor-pointer">Productos
                   
                          <DropDownMenu isActive={isActive} showDropDown={showDropDown} />
                     
                </li>
                <li><Link href="/about"> <p className=" border-b-transparent border-b-2 hover:border-b-dgray" >Sobre Nosotros</p></Link></li>
                <li> <Link href="/contact"> <p className=" border-b-transparent border-b-2 hover:border-b-dgray" >Contactenos</p></Link></li>
         </ul>

         <div className=" fixed  right-0 top-0 z-20 md:hidden">
             <FontAwesomeIcon onClick={toggleHamMenu} className="text-blue  mr-6 h-10  mt-4 hover:cursor-pointer z-90" icon={faBars} />

            {hamMenu &&  <HamburgerPopUp toggleHamMenu={toggleHamMenu}/> }

            
         </div>
                            <ul className="big-dropdown-menu test tab_content absolute top-[90%] right-[20%]   space-y-6 bg-slate-100 rounded-sm py-4 drop-shadow-lg">
                                <li className="hover:bg-dgray hover:text-slate-50 px-4 "><a href="/accesories">Acsesorios</a></li>
                                <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/dispensers">Dispensadores/Surtidores</a></li>
                                <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/other-products">Otros Productos</a></li>
                              </ul>

         </nav>)
};
                           


            

export default NavBar;
