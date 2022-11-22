import React from "react";
import Link from "next/link";
//
const DropDownMenu = ({isActive,showDropDown}) => {


        return (
    
                <div className="dropdown text-center hidden md:block absolute right-[430px]">

                    <div  className="dropdown-btn text-2xl font-elite text-slate-50 flex justify-center w-1/4 mx-auto ">      
        
                    {isActive ? 
                        (<ul className="z-90 absolute bg-slate-100 text-slate-900 py-4 shadow-xl rounded-md font-girl " onMouseEnter={showDropDown}>
                                <li className="hover:bg-slate-800 hover:text-white"> <Link href="/product/accs">Acesorios</Link> </li>
                                <li className="hover:bg-slate-800 hover:text-white px-2"> <Link href="/product/dispensers">Dispensadores/Surtidores</Link> </li>
                                <li className="hover:bg-slate-800 hover:text-white"> <Link href="/product/otros">Otros Productos</Link> </li>
                        </ul>) : null
                    }
                    </div>
                </div>  
     )

};
export default DropDownMenu;



                    





