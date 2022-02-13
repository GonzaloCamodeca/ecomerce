import ItemList from "../ItemList/ItemList";
import customFetch from "../../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const {juegos} = require("../../utils/juegos")

const ItemListContainer = () =>{
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();
  console.log(urlParams.id_game);

  useEffect(() => {
    if (urlParams.id_game === undefined) {
         customFetch(2000, juegos)
         .then((res) => setItems(res))
         .then(() => setLoading(false))
         .catch((err) => console.log(err))
    } else {
         customFetch(2000, juegos.filter(item => item.id_game === parseInt(urlParams.id_game)))
         .then((res) => setItems(res))
         .then(() => setLoading(false))
         .catch((err) => console.log(err))               
    }
  }, [urlParams.id_game]);

  return(
  <> 
    <div className="row">
      {loading ? <img src='https://c.tenor.com/YAs3DgW0dbMAAAAC/loading-loader.gif' alt='Cargando...'></img>:
        <ItemList items={items} />}
    </div>
  </>
        );
}
export default ItemListContainer;