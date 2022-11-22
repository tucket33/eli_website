import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },4000)
    },[])

  return (
         <div className="justify-center items-center flex flex-col mx-auto">
            <h1 className="text-5xl">Oooops...</h1>
                <h2 className="text-2xl font-bold">That page can't be found</h2>
            <div className="flex"> Go back to the<Link href="/"><p className="ml-2 underline decoration-1 text-sky-500">Homepage</p></Link> </div>
        
         </div>);
};

export default NotFound;
