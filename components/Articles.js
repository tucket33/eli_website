import React from "react";
import Image from "next/image";

const Articles = () => {
  return (

  <div className=" m-4 mx-auto">
    <div className="slide-container">
      <h2 className="text-4xl font-bold text-center border-b-4 border-blue font-play mx-auto pb-4 mb-4">Nuestros Servicios</h2>
      </div>
      <div className="  md:gap-4  little:space-y-4 little:mx-auto  md:justify-items-start">
      
        <article className=" p-2 hex md:grid grid-cols-2  justify-items-around items-center text-black  " >
          <Image src="/images/revWorker.webp" alt="electrico" className="hidden md:block md:w-3/4 md:mx-auto md:h-[80%] md:rounded-md" priority width={500} height={100}/>
           <div className=" text-left light-gradient  p-10 rounded-md md:mr-10 ">
                    <h2 className="font-bold text-3xl text-blue pb-2">Garantia y Respalda</h2>
                  
                  <p className="text-xl" >Nuestro equipo de trabajo compuesto por un grupo interdisiplinario:  Ingenieros, tecnólogos y técnicos con experiencias de mas de 10 anos trabajando en el sector de combustible.</p>
                  <p className="text-xl" >Siguiendo las recomendaciones de las mejores practica PEI garantizamos la calidad de nuestros servicios. </p>
          </div>
        </article>

        <article className="card p-6  md:grid grid-cols-2 justify-items-center items-center max-w-max  text-black rounded-md">
          <div className=" text-left light-gradient  p-4 rounded-md ">
            <h2 className="font-bold text-3xl text-blue pb-2">Experiencia</h2>
            
          <p className="text-xl">Diagnóstico de fallas frecuentes en dispensadores de combustible, bombas sumergibles, tableros eléctricos y otros elementos- Mantenimiento y apoyo en ajustes de calibración de dispensadores y/o surtidores de combustible-Inspección y mantenimiento a las instalaciones eléctricas, cuadros de mando, entre otros- entre otras actividades afines.</p>
          </div>
          <Image src="/images/compHandshake.webp" alt="servicio" className="hidden md:block md:w-3/4 md:h-[80%] md:rounded-md" priority width={500} height={100}/>
        
        </article> 
      </div>
    </div>
     
  )
};

export default Articles;
