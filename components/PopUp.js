import React from "react";
import Link from "next/link";


const PopUp = ({popUp,setPopUp}) => {
  return (
  
        <div className="border-2 border-cyan-600">

            {popUp?
                  ( <ul className="dropdown-menu  space-y-4 ">
                        <li className="transition ease-in-out delay-150 hover:text-slate-100 " ><Link href="/product/accs">Acsesorios</Link></li>
                        <li className="transition ease-in-out delay-150 hover:text-slate-100 px-2"><Link href="/product/dispensers">Dispensadores/Surtidores</Link></li>
                        <li className="transition ease-in-out delay-150 hover:text-slate-100"><Link href="/product/otros">Otros Productos</Link></li>
                    </ul>) : null}

        </div>);
};

export default PopUp;

         


