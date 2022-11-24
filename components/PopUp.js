import React from "react";
import Link from "next/link";


const PopUp = ({productPopUp,toggleHamMenu}) => {
  return (
  
        <div className="text-slate-800">

            {productPopUp?
                  ( <ul className="  space-y-4 ">
                        <li onClick={toggleHamMenu} className=" " ><Link href="/product/accs">Accesorios</Link></li>
                        <li onClick={toggleHamMenu} className=" px-2"><Link href="/product/dispensers">Dispensadores/Surtidores</Link></li>
                        <li onClick={toggleHamMenu} className=""><Link href="/product/otros">Otros Productos</Link></li>
                    </ul>) : null}

        </div>);
};

export default PopUp;

         


