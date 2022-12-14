import React from "react";
import Link from "next/link";
import Image from "next/image"
import {getDispensers} from '../../lib/products'

export const getStaticProps = () =>{
    const data = getDispensers()
  return {
    props: {
      products: data
    }
  }
}

const Products = ({products})=> {
  return (

    <>
          
  
  <div className="flex flex-col justify-center items-start gap-4 my-6 md:grid md:grid-cols-2">
           {products.map(product=>(
              <div className=" flex flex-col md:flex-none items-center justify-even  p-4 mx-6 " key={product.id}>
                <Image src={product.image} className="" alt={product.name} priority width={200} height={200}/>

                <div className=" pl-4  ">
                <Link href={`/product/${product.id}`}> <p className="text-2xl font-bold font-heebo mr-2 mb-2"> {product.name} </p></Link>
                <p className="font-poppins ml-4 text-xl">{product.description}</p>
                <p className="text-xl font-poppins ml-4" style={product.availability === "Disponible"?  {color: 'green'} : {color:'red'}}>{product.availability}</p>

                </div>

              </div>
            )
            
            )}
    
   </div>
   </>
   );
}


export default Products