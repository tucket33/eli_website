import React from "react";
import Image from "next/image";

import { products,getAllIds} from "../../lib/products";
//

export const getStaticPaths = async () =>{
    const paths = getAllIds()

    return {
        paths,
        fallback: false
    }
}
// fetch each slug from url
export const getStaticProps = async ({params}) =>{
    const product = params.id
    return {
        props: {
         product: product
        }
    }

}

export default function Details ({product}) {

    return ( 
    
                 <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2  md:items-center md:justify-items-center min-h-screen">
                  
                        <Image src={product.image} alt={product.name} className="" priority width={400} height={400}/>
                        <div className="text-center mr-10">
                            <div className="text-3xl font-bold mb-4">{product.name}</div>
                            <div className="text-3xl mb-4 text-slate-900 mt-4">{product.description}</div>
                            <div className="text-2xl" style={product.availability === "Disponible"?  {color: 'green'} : {color:'red'}}>{product.availability}</div>
                        </div>

                </div>
      )
    
  }
    
    

//   export const getStaticPaths = async () =>{
//     const paths = products.map(p=>(
//            { params: {
//                 id: p.id.toString()
//             }}
        
//         ))

//     return {
//         paths,
//         fallback: false
//     }
// }
// export const getStaticProps = async ({params}) =>{
//     const product = products.filter(p=>
//         p.id.toString() === params.id)
     
//     return {
//         props: {
//          product: product[0]
//         }
//     }

// }