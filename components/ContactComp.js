import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Result = ()=>{
    return (
        <p className="border-2 border-green-300 bg-green-200 py-4 px-6">Tu mensaje ha sido enviado exitosamente. Gracias por contactarnos</p>
    )
}


const ContactComp = (props) => {
    const [result, showResult] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_API_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        showResult(true)
        setTimeout(()=>{
            showResult(false)
        },3000)
    };
  return (  
  
    <div className="w-full">
        <form action="#" method="POST" className="h-96 "   ref={form} onSubmit={sendEmail}>
            <div className=" grid  p-8  space-y-6  hex">
                <p className="text-start text-xl text-zinc-100 font-heebo">Escribenos</p>
                <input type="text" className=" text-sm text-zinc-100 focus:outline-none focus:border-b-[1] focus:border-b-white bg-transparent border-b-[1px] border-zinc-400  " required name="name"  placeholder="Nombre"/>
                


                <input type="email" className="text-sm text-zinc-100 focus:outline-none focus:border-b-[1] focus:border-b-white border-b-[1px] border-zinc-400 bg-transparent"  required name="email"  placeholder="Email"/>
                
                <textarea  type="text" className="text-sm text-zinc-100 focus:outline-none h-[110px] focus:border-b-[1] focus:border-b-white bg-transparent border-b-[1px] border-zinc-400 "  required  name="message"  placeholder="Ingresar mensaje"></textarea>
                
                <button type="submit" className="bg-blue text-white btn-pri">Enviar</button>
                <div className="row">
                    {result ? <Result/> : null }
                </div>
            </div>
            
            </form>
        </div>);
};

export default ContactComp;
          



