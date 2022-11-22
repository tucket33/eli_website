const posts = [
    {
      id: 1,
      title: "Smashed potatoes and meetballs",
      publishDate: "2021-09-05",
      author: "Tuomo Kankaanpää",
      coverImage: "/images/meetballs-cover.jpg",
      excerpt:
        "Today we will create smashed potatoes with some delicious meetballs",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "smashed-potatoes-and-meetballs",
    },
    {
      id: 2,
      title: "Tuna salad",
      publishDate: "2021-08-25",
      author: "Tuomo Kankaanpää",
      coverImage: "/images/tuna-salad-cover.jpg",
      excerpt: "Tuna salad is easy and fast to make plus it is delicious.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "tuna-salad",
    },
    {
      id: 3,
      title: "Chicken soup",
      publishDate: "2021-08-11",
      author: "Tuomo Kankaanpää",
      coverImage: "/images/chicken-soup-cover.jpg",
      excerpt:
        "Chicken soup is one of my favourite foods. It is easy and cheap to make.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "chicken-soup",
    },
  ];
 const products = [
 {
    name : 'Valvula breakaway OPW66B 3/4 UL', 
    image : '/images/breakaway.webp',
    tags : 'Acsesorios',
    description : 'Valvula de rompimiento con sello UL opw',
    availability : 'Producto agotado'
  
},

       {
            name : 'Mangueras de 3/4 y 1 pulgada x 5mts', 
            image : '/images/hose1.jpg',
            tags : 'Acsesorios',
            description : 'Manguera acoplada con alma de acero',
            availability : 'Producto agotado'
          
        },
      
       {
            name : 'Relevo de estado solido', 
            image : '/images/relay.webp',
            tags : 'Otros productos',
            description : 'Relevo de estado solido para surtidor/dispensador Lanfeng',
            availability : 'Disponible'
          
        },
       {
            name : 'Equalizador de 3/4 o 1"', 
            image : '/images/swivel1.webp',
            tags : 'Acsesorios',
            description : '',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Dispensador de combustible LFW50D4242', 
            image : '/images/dispenser2.webp',
            tags : 'Dispensadores',
            description : 'Dispensador de combustible tipo sumergible y bomba de succion',
            availability : 'Agotado'
          
        },
       {
            name : 'Surtidor de combustible tipo succion LFW50D4242', 
            image : '/images/dispenser1.webp',
            tags : 'Dispensadores',
            description : '',
            availability : 'Disponible'
          
        },
       {
            name : 'Bomba de succion ZCB-90 ', 
            image : '/images/duallymotors.webp',
            tags : 'Otros productos',
            description : 'Tipo engranaje ',
            availability : 'Disponible'
          
        },
       {
            name : 'Filtro', 
            image : '/images/filter.webp',
            tags : 'Otros productos',
            description : 'Filtro GL-3',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Forro para pistolas', 
            image : '/images/jacket0pw.webp',
            tags : 'Acsesorios',
            description : 'Forros plasticos de color varios para pistolas de 3/4 y 1"',
            availability : 'Producto agotado'
        },
       {
            name : 'Pulser MD-212', 
            image : '/images/majig.webp',
            tags : 'Otros productos',
            description : 'Sensor de pulser para dispensador/surtidor Lanfeng',
            availability : 'Disponible'
          
        },
       {
            name : 'Motor monofasico 750W', 
            image : '/images/motor.webp',
            tags : 'Otros productos',
            description : '',
            availability : 'Producto agotado'
          
        },
       
       {
            name : 'Pistola MD-120 1" UL', 
            image : '/images/nozzleblack1.webp',
            tags : 'Acsesorios',
            description : '',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Pistola de 3/4 OPW 11BP UL', 
            image : '/images/nozzlepaper1.webp',
            tags : 'Acsesorios',
            description : 'Pistola de 3/4 pico delgado OPW 11BP UL',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Pistola 3/4 TD-11B UL', 
            image : '/images/nozzleredsimple.webp',
            tags : 'Acsesorios',
            description : 'Pistola de 3/4 pico delgado TD-11B UL',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Pistola 1" 7HB OPW UL', 
            image : '/images/nozzleyellow1.webp',
            tags : 'Acsesorios',
            description : 'Pistola 1" 7HB OPW UL',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Dispensador combustible LFW50D2242/41', 
            image : '/images/olddispenser.jpg',
            tags : 'Dispensadores',
            description : '',
            availability : 'Disponible'
          
        },
       {
            name : 'Bomba sumergible QYB-240', 
            image : '/images/sumer.webp',
            tags : 'Otros productos',
            description : 'Bomba sumergible de 1.5HP con tubo equalizable',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Capsula motor de 1.5HP tipo RedJacket', 
            image : '/images/capsule.jpg',
            tags : 'Otros productos',
            description : '',
            availability : 'Producto agotado'
          
        },
       {
            name : 'Kit de cables para bombas sumergible', 
            image : '/images/cable.jpg',
            tags : 'Otros productos',
            description : '',
            availability : 'Disponible'
          
        },
        {
            name : 'Acople para bombas sumergible', 
            image : '/images/head.webp',
            tags : 'Otros productos',
            description : '',
            availability : 'Disponible'
          
        }
      ];
  
  export function getAllPosts() {
    return posts;
  }
  
  export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map((p) => slugs.push(`/blog/${p.slug}`));
    return slugs;
  }
  
  export function getPostData(slug) {
    let post = null;
    getAllPosts().map((p) => {
      if (p.slug === slug) {
        post = p;
        return;
      }
    });
    return post;
  }