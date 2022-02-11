/**
 id_game 1 = PC
 id_game 2 = PS4
 id_game 3 = XBOX
 */
const juegos =  [
    {"id":1,
    "category":"PS4",
    "id_game":2,
     "thumb":"https://compass-ssl.xbox.com/assets/a4/2f/a42ff3fd-cba2-4abb-a15c-4065f76cb525.jpg?n=Mortal-Kombat-11_GLP-Page-Hero-0_1083x609_02.jpg",
     "title":'Mortal Kombat 11 Ultimate',
     "description":'este juego tratasobre ',
     "normalPrice": 35.99,
     "cover_size": '50px'
    },
    {
    "id":2,
    "category":"XBOX",
    "id_game":3,
     "thumb":"https://www.nintendo.com//content/dam/noa/es_LA/games/switch/a/ark-survival-evolved-switch/ark-survival-evolved-switch-hero.jpg",
     "title":'ARK: Survival Evolved',
     "description":'Juega como un hombre o una mujer desnudo, congelándote y muriéndote de hambre en una isla misteriosa. Debes cazar, cosechar, crear objetos, cultivar, y construir refugios para sobrevivir. Usa tu habilidad y astucia para matar, domesticar, criar y cabalgar dinosaurios y otras criaturas primitivas.',
     "normalPrice": 3.99,
     "cover_size": '50px'
    },
    {
    "id":3,
    "category":"PC",
    "id_game":1,
     "thumb":"https://www.lagzero.net/wp-content/uploads/2014/06/Mortal_Kombat_X_logo.jpg",
     "title":'Mortal Kombat X',
     "description":'¿Quién es el siguiente? Disfruta de la nueva generación de la franquicia de lucha n.º 1. Mortal Kombat X reúne un aspecto cinematográfico y una mecánica de juego nunca vistos. Por primera vez, los jugadores pueden elegir múltiples variantes de cada personaje con impacto tanto en la estrategia como en el estilo de lucha.',
     "normalPrice": 25.99,
     "cover_size": '50px'
    },
    {
    "id":4,
    "category":"PC",
    "id_game":1,
    "thumb":"https://media.vandal.net/m/22777/the-forest-201852113348_17.jpg",
    "title":'The Forest',
    "normalPrice": 8.99,
    "cover_size": '50px'
    },
    {
    "id":5,
    "category":"PC",
    "id_game":1,
    "thumb":"http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6",
    "title":'Counter-Strike: Global Offensive',
    "normalPrice": 7,
    "cover_size": '50px'
    },
    {
    "id":6,
    "category":"PS4",
    "id_game":2,
    "thumb":"https://images.greenmangaming.com/00c7a0f6e00d4f2c9482122d9510a1bc/9cdc3a7ab4f24078b7d2c1ff1044715a.jpg",
    "title":'Shadow of the Tomb Raider',
    "normalPrice": 39.99,
    "cover_size": '50px'
    },
    {
      "id":7,
      "category":"XBOX",
      "id_game":3,
      "thumb":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHT3oJ5_n2wWEsYI10UbtUxcR8orePmONQg&usqp=CAU",
      "title":'Forza Moto7',
      "normalPrice": 23,
      "cover_size": '50px'
      },
      {
        "id":8,
        "category":"PS4",
        "id_game":2,
        "thumb":"https://i.ytimg.com/vi/EG5GkXU13WA/maxresdefault.jpg",
        "title":'Marvels Spider-Man',
        "normalPrice": 39.99,
        "cover_size": '50px'
        },
        {
        "id":9,
        "category":"XBOX",
        "id_game":3,
        "thumb":"https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg",
        "title":'Halo Infinite',
        "normalPrice": 19.99,
        "cover_size": '50px'
        }, 
    
  ];
  module.exports = {
    juegos,
}