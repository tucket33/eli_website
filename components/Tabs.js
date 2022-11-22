import React from "react";
import { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (<div className="mt-10">
                        <div className="operations_container  ">
                            <div className="tab_container text-xl  px-10 flex flex-col md:flex-row space-y-4  mx-auto md:space-x-8 justify-center ">
                                    <button onClick={()=>toggleTab(1)} className={toggleState===1 ? " tab tab_1  btn-pri mt-[16px] tab--active": "tab tab_1 btn-pri mt-[16px]"} data-tab="1">Mision</button>
                                    <button onClick={()=>toggleTab(2)} className={toggleState===2 ? " tab tab_2  btn-pri mt-[16px] tab--active": "tab tab_2 btn-pri mt-[16px]"} data-tab="2">Vision</button>
                                    <button onClick={()=>toggleTab(3)} className={toggleState===3 ? " tab tab_3  btn-pri mt-[16px] tab--active": "tab tab_3 btn-pri mt-[16px]"} data-tab="3">Politica de Calidad</button>
                            </div>
                        
                        </div>


               <div className="content_container flex flex-col w-[70%] items-center justify-center mx-auto ">
                      <div className={toggleState===1 ? "tab_content tab_content--1 tab_content--active -z-10":  "tab_content tab_content--1" }>

                      <div className=" md:gap-4 sm:space-y-4 justify-center md:justify-items-center content-center md:grid md:grid-cols-gtc " >
                                        <div className=" border-b-2 border-slate-200 md:place-self-end mx-auto ">
                                                <h1 className="font-bold text-2xl">MISION</h1>
                                                <p className="text-xl font-heebo">
                                                Facilitamos a nuestros clientes en Colombia la adquisición de productos importados de calidad como dispensadores de combustible y sus accesorios y sistemas de control de inventario para la industria del combustible, así como apoyo en el proceso de compra internacional de equipos y herramientas para diferentes negocios especializados, además de brindar servicios de asistencia y asesoría profesional de calidad.
                                                </p>
                                        </div>
                                       
                       </div>               
                       </div>
                      <div className={toggleState===2 ? "tab_content tab_content--2 tab_content--active -z-10":  "tab_content tab_content--2 -z-10" }>
                          <div className=" md:gap-4 sm:space-y-4 justify-center md:justify-items-center content-center grid md:grid-cols-gtc" >
              
                              <div className=" border-b-2 border-slate-200 md:place-self-end mx-auto">
                                  <h1 className="font-bold text-2xl">VISION</h1>
                                      <p className=" text-xl font-heebo" >
                                      Al 2025 Ser una de las empresas más reconocidas por los clientes y competidores de la industria del combustible en Colombia en la comercialización de productos especializados como dispensadores de combustible y sus accesorios, sistemas de control de inventario y control de ventas en el país.
                                      </p>
                              </div>
          
                          </div>
                       </div>
              <div className={toggleState===3 ? "tab_content tab_content--3 tab_content--active -z-10":  "tab_content tab_content--3 -z-10" }>
              <div className=" md:gap-4 sm:space-y-4 justify-center md:justify-items-center content-center grid md:grid-cols-gtc" >

                            <div className=" border-b-2 border-slate-200 md:place-self-end mx-auto">
                              <h1 className="font-bold text-2xl">POLITICA DE CALIDAD</h1>
                              <p className=" text-xl font-heebo">
                                    Estamos enfocados en la búsqueda constante de la satisfacción de las expectativas de nuestros clientes con los productos y servicios que ofrecemos, por tanto nuestro equipo de trabajo se esfuerza cada día en desarrollar un trabajo de calidad con lealtad y respeto.

                                    Además, que nos caracterizamos por cultivar excelentes relaciones con nuestros clientes y proveedores, que se evidencian en el apoyo mutuo y una comunicación abierta, eso nos compromete a responder de manera amable y profesional todas las necesidades expresadas por ellos.

                                    El personal conoce, comprende y aplica la política de calidad. 
                              </p>
                            </div>
                        </div>
                      </div>
                    </div>


         </div>);
};

export default Tabs;
