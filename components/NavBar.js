import Link from "next/link";
import React from "react";
import Image from "next/image"
import DropDownMenu from "./DropDownMenu";
import PopUp from "./PopUp";
import { useState } from "react";



const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [popUp, setPopUp] = useState(false);
  //
  const showDropDown= () =>{
      setIsActive(true)
  }
  const hideDropDown= () =>{
      setIsActive(false)
  }
  const showPopUp= () =>{
      setPopUp(true)
  }
  const hidePopUp= () =>{
      setPopUp(false)
  }

  return (
    <nav className="bg-slate-100 flex justify-between  h-[70px] z-20  top-0 items-center  w-full sticky">
      <div className="mx-4">
         <Link href="/"> <Image src="/images/Hicon.png" priority width={200} className='min-w-64' height={100} alt=""/></Link>
        </div>
        <ul className="hidden font-bold text-zinc-900 text-2xl md:flex justify-end items-center space-x-8 mr-8 w-full">
                <li> <Link href="/"> <p >Inicio</p></Link></li>
                <li onMouseEnter={showDropDown}  onMouseLeave={hideDropDown} className="big-dropdown-header  hover:border-b-dgray hover:cursor-pointer">Productos
                   
                          <DropDownMenu isActive={isActive} showDropDown={showDropDown} />
                     
                </li>
                <li><Link href="/about"> <p className=" border-b-transparent border-b-2 hover:border-b-dgray" >Sobre Nosotros</p></Link></li>
                <li> <Link href="/contact"> <p className=" border-b-transparent border-b-2 hover:border-b-dgray" >Contactonos</p></Link></li>
         </ul>

         <div className="menu-wrap fixed right-0 top-0 z-20 md:hidden">
          <input type="checkbox" onClick={hidePopUp} className="toggler right-0 top-0 z-40 absolute opacity-0 cursor-pointer w-[50px] h-[50px]"/>
                        <div className="hamburger flex-none bg-bg-slate-100 flex items-center justify-center absolute top-0 right-0 z-30 w-[60px] h-[60px] p-4 ">
                        <div className="bg-blue"></div></div>

                                  
    <div className="menu">
          <div>
            <div>
                        <ul className="text-lsky">
                          <li><Link href="/">Inicio</Link></li>
                          <li className="dropdown-wrapper " onClick={showPopUp}>
                              <div  className="dropdown-header hover:cursor-pointer border-b-2 border-b-lsky"> Productos</div>

                                <PopUp popUp={popUp} showPopUp={showPopUp}/>
                          </li>
                          <li><Link href="/about">Sobre Nosotros</Link></li>
                          <li><Link href="/contact">Contactonos</Link></li>
                        </ul>
            </div>
        </div>
    </div>
</div>
<ul className="big-dropdown-menu test tab_content absolute top-[90%] right-[20%]   space-y-6 bg-slate-100 rounded-sm py-4 drop-shadow-lg">
                                <li className="hover:bg-dgray hover:text-slate-50 px-4 "><a href="/accesories">Acsesorios</a></li>
                                <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/dispensers">Dispensadores/Surtidores</a></li>
                                <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/other-products">Otros Productos</a></li>
                              </ul>

         </nav>)
};
                           


            

export default NavBar;
