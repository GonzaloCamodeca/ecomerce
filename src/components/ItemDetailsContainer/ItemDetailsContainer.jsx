import ItemDetails from "../ItemDetails/ItemDetails"
import customFetch from "../../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import juegos from "../../utils/juegos"

const ItemDetailContainer = () =>{
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();
  console.log(urlParams.id);

  useEffect(() => {
          customFetch(2000, juegos.find(item => item.id === parseInt(urlParams.id)))
         .then((res) => setItems(res))
         .then(() => setLoading(false))
         .catch((error) => console.log(error))
    }, [urlParams.id]);

  return(
  <> 
    <div className="row" style={{width:"100%"}}>
      {loading ? <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif' alt='Cargando...'></img>:
        <ItemDetails items={items} />}
    </div>
  </>
        );
}
export default ItemDetailContainer;