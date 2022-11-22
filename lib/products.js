


export const products = [
    {
            id: 1,
            name: 'Valvula breakaway OPW66B 3/4 UL', 
            image: '/images/breakaway.webp',
            tags: 'Acsesorios',
            description: 'Valvula de rompimiento con sello UL opw',
            availability: 'Producto agotado'
          
       },

               {
                    id: 2,
                    name: 'Mangueras de 3/4 y 1 pulgada x 5mts', 
                    image: '/images/hose1.jpg',
                    tags: 'Acsesorios',
                    description: 'Manguera acoplada con alma de acero',
                    availability: 'Producto agotado'
                  
               },
              
               {
                    id: 3,
                    name: 'Relevo de estado solido', 
                    image: '/images/relay.webp',
                    tags: 'Otros productos',
                    description: 'Relevo de estado solido para surtidor/dispensador Lanfeng',
                    availability: 'Disponible'
                  
               },
               {
                    id: 4,
                    name: 'Equalizador de 3/4 o 1"', 
                    image: '/images/swivel1.webp',
                    tags: 'Acsesorios',
                    description: '',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 5,
                    name: 'Dispensador de combustible LFW50D4242', 
                    image: '/images/dispenser2.webp',
                    tags: 'Dispensadores',
                    description: 'Dispensador de combustible tipo sumergible y bomba de succion',
                    availability: 'Agotado'
                  
               },
               {
                    id: 6,
                    name: 'Surtidor de combustible tipo succion LFW50D4242', 
                    image: '/images/dispenser1.webp',
                    tags: 'Dispensadores',
                    description: '',
                    availability: 'Disponible'
                  
               },
               {
                    id: 7,
                    name: 'Bomba de succion ZCB-90 ', 
                    image: '/images/duallymotors.webp',
                    tags: 'Otros productos',
                    description: 'Tipo engranaje ',
                    availability: 'Disponible'
                  
               },
               {
                    id: 8,
                    name: 'Filtro', 
                    image: '/images/filter.webp',
                    tags: 'Otros productos',
                    description: 'Filtro GL-3',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 9,
                    name: 'Forro para pistolas', 
                    image: '/images/jacket0pw.webp',
                    tags: 'Acsesorios',
                    description: 'Forros plasticos de color varios para pistolas de 3/4 y 1"',
                    availability: 'Producto agotado'
               },
               {
                    id: 10,
                    name: 'Pulser MD-212', 
                    image: '/images/majig.webp',
                    tags: 'Otros productos',
                    description: 'Sensor de pulser para dispensador/surtidor Lanfeng',
                    availability: 'Disponible'
                  
               },
               {
                    id: 11,
                    name: 'Motor monofasico 750W', 
                    image: '/images/motor.webp',
                    tags: 'Otros productos',
                    description: '',
                    availability: 'Producto agotado'
                  
               },
               
               {
                    id: 12,
                    name: 'Pistola MD-120 1" UL', 
                    image: '/images/nozzleblack1.webp',
                    tags: 'Acsesorios',
                    description: '',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 13,
                    name: 'Pistola de 3/4 OPW 11BP UL', 
                    image: '/images/nozzlepaper1.webp',
                    tags: 'Acsesorios',
                    description: 'Pistola de 3/4 pico delgado OPW 11BP UL',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 14,
                    name: 'Pistola 3/4 TD-11B UL', 
                    image: '/images/nozzleredsimple.webp',
                    tags: 'Acsesorios',
                    description: 'Pistola de 3/4 pico delgado TD-11B UL',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 15,
                    name: 'Pistola 1" 7HB OPW UL', 
                    image: '/images/nozzleyellow1.webp',
                    tags: 'Acsesorios',
                    description: 'Pistola 1" 7HB OPW UL',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 16,
                    name: 'Dispensador combustible LFW50D2242/41', 
                    image: '/images/olddispenser.jpg',
                    tags: 'Dispensadores',
                    description: '',
                    availability: 'Disponible'
                  
               },
               {
                    id: 17,
                    name: 'Bomba sumergible QYB-240', 
                    image: '/images/sumer.webp',
                    tags: 'Otros productos',
                    description: 'Bomba sumergible de 1.5HP con tubo equalizable',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 18,
                    name: 'Capsula motor de 1.5HP tipo RedJacket', 
                    image: '/images/capsule.jpg',
                    tags: 'Otros productos',
                    description: '',
                    availability: 'Producto agotado'
                  
               },
               {
                    id: 19,
                    name: 'Kit de cables para bombas sumergible', 
                    image: '/images/cable.jpg',
                    tags: 'Otros productos',
                    description: '',
                    availability: 'Disponible'
                  
               },
               {
                    id: 20,
                    name: 'Acople para bombas sumergible', 
                    image: '/images/head.webp',
                    tags: 'Otros productos',
                    description: '',
                    availability: 'Disponible'
                  
               },]


               export function getAllProducts() {
                    return products;
                  }
               export function getOtrosProducts() {
                    let tags= []
                    getAllProducts().forEach(p=>{
                    if(p.tags==='Otros productos')
                     tags.push(p)
                    }) 
                    return tags;
                  }
               export function getAcsesorios() {
                    let accs= []
                    getAllProducts().forEach(p=>{
                    if(p.tags==="Acsesorios")
                     accs.push(p)
                    }) 
                    return accs;
                  }
               export function getDispensers() {
                    let disps= []
                    getAllProducts().forEach(p=>{
                    if(p.tags==='Dispensadores')
                    disps.push(p)
                    }) 
                    return disps;
                  }
                  
                  export function getAllIds() {
                    let names = [];
                    getAllProducts().map((p) => names.push(`/product/${p.name}`));
                    return names;
                  }
                  export function getProductData(name) {
                    let product = null;
                    getAllProducts().map((p) => {
                      if (p.name === name) {
                        product = p;
                        return;
                      }
                    });
                    return product;
                  }
               
                
                
                  