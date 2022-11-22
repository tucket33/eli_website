import React from "react";
import Head from 'next/head'
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({title,children}) {
  return (
    <div className="">
            <Head>
                <title>{title ? title + '- Hands Support': 'Hands Support' }</title>
                <meta name="description" content="estaciones de combustible" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
                <main >
                    {children}
                </main>
            <Footer/>

    </div>)
}
                  
              
        


          
