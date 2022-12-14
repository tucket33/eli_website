import React from "react";
import Link from "next/link";
import Image from "next/image"
import {getAllProducts} from '../../lib/products'

export const getStaticProps = () =>{
  const data = getAllProducts();
  return {
    props: {
      products: data
    }
  }
}

const Products = ({products})=> {
  return (

    <>
          
  
  <div className="flex flex-col justify-center items-start gap-4  md:grid md:grid-cols-2">
           {products.map(product=>(
              <div className=" flex items-center justify-even  p-4 mx-6 " key={product.id}>
                <Image src={product.image} className="" alt={product.name} priority width={200} height={200}/>

                <div className=" pl-4  ">
                <Link href={`/product/${product.id}`}> <p className="text-2xl font-bold font-heebo mr-2 mb-2"> {product.name} </p></Link>
                <p className="font-poppins ml-4 text-xl">{product.description}</p>
                <p className="font-poppins ml-4">{product.availability}</p>
                <Link href="#" className="max-w-40">  <p className="font-poppins ml-4 underline">{product.tags}</p></Link>
                </div>

              </div>
            )
            
            )}
    
   </div>
   </>
   );
}


export default Products