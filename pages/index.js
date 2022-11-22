import Articles from '../components/Articles'
import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
        <div>
            <Head>
               {/* <script  src="https://kit.fontawesome.com/5456266473.js" crossorigin="anonymous"></script> */}
               <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="bombas, dispensadores, surtidores, mangueras,equalizadores,nozzles"/>
                <meta name="description" content="productos para estaciones de servicio"/>
              <title>Hands Support | Home</title>
            </Head>
          <Hero />
          <Articles/>

          
        </div>

 
  )
}
