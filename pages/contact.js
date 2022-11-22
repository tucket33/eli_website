import React from "react";
import Head from 'next/head'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ContactComp from "../components/ContactComp";


const contact = () => {
  return( <div>
             <Head>
               <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="bombas, dispensadores, surtidores, mangueras,equalizadores,nozzles"/>
                <meta name="description" content="productos para estaciones de servicio"/>
              <title>Hands Support | Contact</title>
            </Head>

           

            <div className="max-w-[970px] mx-auto min-h-screen flex flex-col md:grid md:grid-cols-2 md:content-center md:justify-content-center ">
               <ContactComp/>
                
                <div className="flex flex-col h-[405px] justify-start md:justify-center items-center  p-4 space-y-4 light-gradient  border-[1px] border-zinc-200 rounded-r-md">
                  <div className="text-center flex flex-col items-start pl-2">
                    <h2 className="font-bold text-xl font-heebo">Informacion de Contacto</h2>
                  </div>
                      <ul className=" font-bold text-xl text-center">
                        <li><i className="px-4  fa-solid fa-location-dot"></i> Direccion: Calle 10 #14-60 Local 25, Cali, Colombia</li>
                        <li><i className="px-4 fa-solid fa-phone"></i>Telefono: +57 317-654-5128</li>
                        <li><i className="px-4 fa-solid fa-paper-plane"></i>Email: handsupport@gmail.com</li>
                      </ul>
                      <ul className="flex  justify-around w-full items-start ">
                    
                  
                            <li> <Link href="https://twitter.com/handssupportsas?s=20&t=QOmTUvbfvvheZOXPVhVXsg" target="_blank"><FontAwesomeIcon className="w-10" icon={faTwitter} /></Link> </li>
                            <li><Link href="https://facebook.com/handssupportsas" target="_blank">       <FontAwesomeIcon className="w-10" icon={faFacebook} /></Link></li>
                            <li><Link href="https://instagram.com/handssupportsas?igshid=YmMyMTA2M2Y=" target="_blank"> <FontAwesomeIcon className="w-10" icon={faInstagram} /></Link></li>
                      </ul>
                </div>
          
        </div>

          

    </div>);
};

export default contact;
