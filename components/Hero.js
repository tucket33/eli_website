import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {

  return (
    <div>
      {/* <DropDownMenu/> */}
      
    <div className="flex flex-col md:grid md:grid-cols-5 ">
         
         <div className="gasup col-span-2 bg-bottom hidden md:block bg-cover bg-[url('/images/ulto.webp')]" ></div> 
          {/* <!-- CHILD 2--> */}
            <div className="hex col-span-3 relative p-6">
              
                    {/* <!-- NESTED CHILD 1--> */}
                  <div className="test  tab_content w-[200px] text-left left-[25%] absolute z-70" >
                          <ul className="big-dropdown-menu   space-y-2 bg-slate-100 rounded-sm py-4 drop-shadow-lg">
                              <li className="hover:bg-dgray hover:text-slate-50 px-4 "><a href="/accesories">Acsesorios</a></li>
                              <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/dispensers">Dispensadores/Surtidores</a></li>
                              <li className="hover:bg-dgray hover:text-slate-50 px-4"><a href="/other-products">Otros Productos</a></li>
                            </ul>
                    </div>
                      {/* <!-- NESTED CHILD 2--> */}
                      <div className="light-gradient text-left rounded-md p-6  md:m-6 ">
                          <ul className="text-sm text-left ">
                                <div>
                                        <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-2 "> Soluciones integrales para su negocio</h2>
                                        <h3 className="text-xl  font-bold text-sky-600  leading-tight mb-2 font-poppins">Distribuimos technologia de calidad, dispensadores de combustible, 
                                          accesorios con sello UL, sistemas POS, control de inventario y 
                                          technologia con fuentes de energia renovables.</h3>
                                  </div>
                          </ul>
                      </div>
                           {/* <!-- NESTED CHILD 3--> */}
                                      
          <div className="light-gradient rounded-lg p-4 font-poppins bg-zinc-200 my-2 md:m-6">
                  <ul className="grid grid-cols-3 justify-items-center">

                  <li>   
                  
                         <Link href="https://twitter.com/handssupportsas?s=20&t=QOmTUvbfvvheZOXPVhVXsg" target="_blank"><FontAwesomeIcon className="w-10" icon={faTwitter} /></Link> </li>
                    <li><Link href="https://facebook.com/handssupportsas" target="_blank">       <FontAwesomeIcon className="w-10" icon={faFacebook} /></Link></li>
                    <li><Link href="https://instagram.com/handssupportsas?igshid=YmMyMTA2M2Y=" target="_blank"> <FontAwesomeIcon className="w-10" icon={faInstagram} /></Link></li>
                  </ul>
            <div className="flex flex-col-reverse  md:grid md:grid-cols-2 space-y-2 items-center justify-center">
            
                  <div className=""><Image src="/images/q.webp" priority width={300} height={100} alt="qr code"/></div>

                  
                        <div className="flex flex-col md:flex-cols-2">
                          <li className="my-2 text-left list-none leading-5 text-2xl font-bold ml-6 text-slate-900">Marcas que representamos: </li>
                                  <Image src="/images/lanFeng.webp" priority width={300} height={100} className=" ml-4 mb-4" alt="lanfeng"/>
                                  <Image src="/images/fafnir.webp" priority width={300} height={100} className=" ml-4 mb-4" alt="fafnir"/>
                        </div>
                </div>
        </div>

                     







     

             

             
               
               
                   
        
      </div>
    </div>
  </div>
      
      

  );
};

export default Hero;
