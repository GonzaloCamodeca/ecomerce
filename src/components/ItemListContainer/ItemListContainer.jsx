import ItemList from "../ItemList/ItemList";
const juegos =  [
  {"id":1,
  "id_game":33,
   "thumb":"https://compass-ssl.xbox.com/assets/a4/2f/a42ff3fd-cba2-4abb-a15c-4065f76cb525.jpg?n=Mortal-Kombat-11_GLP-Page-Hero-0_1083x609_02.jpg",
   "title":'Mortal Kombat 11 Ultimate',
   "normalPrice": 35.99,
   "cover_size": '50px'
  },
  {
  "id":2,
  "id_game":22,
   "thumb":"https://www.lagzero.net/wp-content/uploads/2014/06/Mortal_Kombat_X_logo.jpg",
   "title":'Mortal Kombat X',
   "normalPrice": 25.99,
   "cover_size": '50px'
  },
  {
  "id":3,
  "id_game":22,
   "thumb":"https://www.lagzero.net/wp-content/uploads/2014/06/Mortal_Kombat_X_logo.jpg",
   "title":'Mortal Kombat X',
   "normalPrice": 25.99,
   "cover_size": '50px'
  },
  {
  "id":4,
  "id_game":22,
  "thumb":"https://www.lagzero.net/wp-content/uploads/2014/06/Mortal_Kombat_X_logo.jpg",
  "title":'Mortal Kombat X',
  "normalPrice": 25.99,
  "cover_size": '50px'
  }, 
];
const ItemListContainer = () =>{
  return(
    <>
    <ItemList juegos={juegos}/>
    </>
  )
}

export default ItemListContainer;